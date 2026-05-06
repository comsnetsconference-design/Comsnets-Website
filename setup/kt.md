# COMSNETS 2027 Website (Next.js) -- Knowledge Transfer

## What is this?

Next.js migration of the COMSNETS 2027 PHP conference website.

- **Repo:** `github.com/comsnetsconference-design/Comsnets-Website`
- **Firebase project:** `comsnets-website`
- **Live URLs:** `https://comsnets-website.web.app` / `https://comsnets-website.firebaseapp.com`
- **Source PHP site (production):** `https://www.comsnets.org`
- **PHP source code:** `/Users/jc/Desktop/Projects/Comsnets/comsnets2027/` (separate repo, see `comsnets_share/kt.md`)

---

## Tech Stack

| Package | Version |
|---------|---------|
| next | 16.2.1 |
| react / react-dom | 19.2.4 |
| firebase | ^12.11.0 |
| firebase-admin | ^13.7.0 |
| tailwindcss | ^4 |
| typescript | ^5 |
| eslint | ^9 |
| lucide-react | ^0.577.0 |

---

## Local Dev Quickstart

```bash
npm run dev          # starts on http://localhost:3000
npm run build        # production build (same as CI)
npm run lint         # eslint (Next 16 dropped `next lint`, script is just "eslint")
npx tsc --noEmit    # typecheck without emitting
```

Requires `.env.local` with Firebase public web config vars (`NEXT_PUBLIC_FIREBASE_*`). These are non-secret client keys. See `.env.production` (committed) for the values.

---

## Credentials & Secrets

**Stop hunting. Everything credential-related is here.**

| What | Location | In repo? |
|------|----------|----------|
| Firebase Admin SDK service account key | `.secrets/comsnets-website-firebase-adminsdk-service-account-key.json` (also `.secrets/serviceAccountKey.json`) | No -- `.secrets/` gitignored |
| Firebase public web config | `.env.production` and `.env.local` (same values) | `.env.production` yes; `.env.local` no |
| GitHub Actions deploy secret | `FIREBASE_SERVICE_ACCOUNT_COMSNETS_WEBSITE` in GitHub repo secrets | N/A (not on disk) |
| Firebase project ID | `comsnets-website` (in `.firebaserc`) | Yes |
| gh CLI auth | Authenticated as `justchugh` | N/A |
| PHP site FTP creds | See `comsnets_share/kt.md` "FTP Server Access" section -- two accounts, `webchair@comsnets.org` is prod | N/A |

The Admin SDK key is needed for any programmatic Firestore edits (see "Updating Firestore Programmatically" below).

---

## Updating Firestore Programmatically

Some Next.js pages are Firestore-driven (not hardcoded). Editing these requires writing to Firestore directly -- a code commit alone won't change the data.

**Known Firestore-backed pages:**
- `/organizing_committee` -- reads `organizing_committee` collection (25 docs, each = one OC section)
- `/accepted_papers` -- reads `accepted_papers` collection
- `/sponsored_events` -- reads from Firestore (see `firestore.rules`)
- Others possible -- grep `collection(db,` in `src/` to find all

**OC data shape (canonical example):**
Each doc in `organizing_committee` has: `title` (string), `order` (number, ascending), `members` (array). Each member: `{name, image, affiliation, link, email}`.

**Admin SDK one-liner pattern:**
```js
// Save as /tmp/update_X.js, run with: node /tmp/update_X.js
const admin = require('/Users/jc/Desktop/Projects/Comsnets/comsnets_website/node_modules/firebase-admin');
const fs = require('fs');
const KEY = '/Users/jc/Desktop/Projects/Comsnets/comsnets_website/.secrets/comsnets-website-firebase-adminsdk-service-account-key.json';
admin.initializeApp({ credential: admin.credential.cert(JSON.parse(fs.readFileSync(KEY, 'utf8'))) });
const db = admin.firestore();
// query collection -> find doc -> read members[] -> mutate -> doc.ref.update({members: updated})
```

Always read the doc first to confirm the data shape before writing. The admin panel (`/admin/oc/`) also exists for manual edits.

---

## IMPORTANT: Next.js version warning

From `AGENTS.md`:

> This is NOT the Next.js you know. This version has breaking changes -- APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

Next 16.2.1 is very recent. Check the bundled docs before assuming patterns from Next 13/14/15 still apply.

---

## Branch / Deploy Flow

Three-branch pipeline:

```
migration-v1 (dev) --> main (staging) --> production (live deploy)
```

- PRs from `migration-v1` to `main`: feature PRs, title format `v0.1.X -- {type}: {description}`.
- PRs from `main` to `production`: deploy PRs, title format `Deploy v0.1.X to production: {summary}`.
- Push to `production` branch triggers `.github/workflows/firebase-hosting-merge.yml` which runs `npm ci && npm run build` then `FirebaseExtended/action-hosting-deploy@v0` with `channelId: live`. Also deploys Firestore rules.
- Any PR triggers `.github/workflows/firebase-hosting-pull-request.yml` which builds and creates a preview channel.
- Past release examples: PRs #5+#6 (v0.1.16), PRs #7+#8 (v0.1.20).

---

## Versioning

Format: `v{major}.{minor}.{patch}` in commit messages.

- Last digit `0` = production release. Gets a git tag pushed (`git tag v0.1.20 && git push origin --tags`).
- Last digit non-0 = test commit, no tag.
- Increment by 1 from latest commit message.
- Production version skips over test slots (e.g. after v0.1.16 prod, test commits went to v0.1.17-ish territory, next prod jumped to v0.1.20).
- Latest: `v0.1.22` (commit `d3a5482`).

---

## Secrets / Config

| What | Where | In repo? |
|------|-------|----------|
| Firebase public web config | `.env.production`, also hardcoded in workflow YMLs | Yes |
| Firebase admin service-account key | `.secrets/` folder locally | No (`.gitignore`) |
| GitHub Actions deploy secret | `FIREBASE_SERVICE_ACCOUNT_COMSNETS_WEBSITE` in repo settings | N/A |
| Local dev env | `.env.local` | No (`.gitignore`) |

---

## PR Convention

- Feature PR (migration-v1 -> main): `v0.1.X -- {type}: {description}`
- Production PR (main -> production): `Deploy v0.1.X to production: {summary}`
- Author: `justchugh`

---

## Recent Changes

### v0.1.20 (2026-05-05) -- Graduate Forum CFP

- Added `src/app/graduate_forum/page.tsx` (35 -> 316 lines). Full CFP page with 7 topic cards, Best Paper Award callout, 4+1+1 page limit, dates table, co-chair cards.
- Structural pattern mirrors `src/app/call_for_papers/page.tsx`.
- CSS tweak: removed `max-width: 1100px; margin: 0 auto` from `.cfp-page` for layout alignment.
- Open items: real co-chair photos (placeholder avatars), date verification, Submission Link + TPC still TBA.
- Deployed via PR #7 (migration-v1 -> main) + PR #8 (main -> production). GitHub Actions run `25357321814` succeeded.

### v0.1.21 (2026-05-05) -- Debasree Das chair photo

- Added real photo for Debasree Das (Graduate Forum Co-Chair) replacing fa-user-circle placeholder.
- File changed: `src/app/graduate_forum/page.tsx`.
- Photo committed: `public/assets/images/Committee_2027/Debasree.jpg`.
- CSS fix: `overflow: hidden` on `.cfp-chair-card .chair-photo` + `img { object-fit: cover }` to fill circular avatar frame.
- Note: `next.config.ts` has a redirect rule for `/assets/images/*` -> `https://www.comsnets.org/assets/images/*`, so Committee photos can be served from either the local `public/` copy or the PHP prod server.
- Deployed via PR #9 (migration-v1 -> main) + PR #10 (main -> production). GitHub Actions run `25412578688` succeeded.

### v0.1.22 (2026-05-05) -- Tanya + Shashikant photos + Firestore OC update

- Added photos: `Committee_2027/Tanya.jpg` (256x256), `Committee_2027/Shashikant.jpg` (340x400) in `public/assets/images/Committee_2027/`.
- Next.js files edited: `graduate_forum/page.tsx` (Tanya), `minds_workshop/page.tsx` (Shashikant).
- CRITICAL discovery: `/organizing_committee` is Firestore-driven, not hardcoded. Updated Shashikant's image in Firestore doc `minds_workshop_co_chairs` (collection `organizing_committee`) using Firebase Admin SDK script. See "Updating Firestore Programmatically" section above for the pattern.
- Image redirect quirk: `next.config.ts` `/assets/images/*` redirect means committed photos in `public/` are also available at the comsnets.org URL. Firestore member `image` fields can use either path.
- Deployed via PR #11 (migration-v1 -> main) + PR #12 (main -> production). GitHub Actions run `25413469000` succeeded.
