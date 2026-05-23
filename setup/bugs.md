# COMSNETS webapp — bug list

Captured 2026-05-23 during read-only audit on branch `navbar-flash-and-dropdown-fix`. Status `OPEN` unless noted.

---

## High severity

### B1. Firestore `settings/navbar` permissions block public reads
- **Status:** OPEN
- **Where:** `firestore.rules`
- **Symptom:** Every page load logs `FirebaseError: Missing or insufficient permissions` in the browser console when `getNavbarConfig()` runs. Public (unauthenticated) visitors never see the customised navbar — they only see the SSR `DEFAULT_NAVBAR` fallback. Admins (logged in) see the Firestore version because the default rule `auth != null` lets them read.
- **Impact:** The whole `/admin/navbar` editor is effectively decorative for end users. Anything edited via the admin UI is invisible to the public.
- **Root cause:** `firestore.rules` has no rule matching `/settings/{document}`. It falls through to `match /{document=**} { allow read, write: if request.auth != null; }`.
- **Fix:** Add a public-read rule for the `settings` collection (admin-only write):
  ```
  match /settings/{document=**} {
    allow read: if true;
    allow write: if request.auth != null;
  }
  ```
- **Effort:** 4 lines added to `firestore.rules`. Single deploy.

### B2. Broken hotel / venue / visa images (relative `src="assets/..."`)
- **Status:** OPEN
- **Where:**
  - `src/app/accommodation/page.tsx` (~12 image tags)
  - `src/app/conference_venue/page.tsx` (1 image tag, line 14)
  - `src/app/visa/page.tsx` (2 image tags, lines 20 and 29)
- **Symptom:** On `/accommodation` every hotel photo is broken (Chancery suite, Chancery living room, Chancery ithaca, Grand Pavilion 1/2/3, Octave). On `/conference_venue` the Chancery Pavilion photo is missing. On `/visa` both PDF download icons are missing.
- **Root cause:** Image src uses relative path `src="assets/..."` (no leading slash). The browser resolves it relative to the current URL, so on `/accommodation` it fetches `/accommodation/assets/...` → 404. Even with a leading slash, `/assets/img/` would also 404 because `next.config.ts` only rewrites `/assets/images/...` to `https://www.comsnets.org/assets/images/...`, not `/assets/img/...`.
- **Fix:** Two parts:
  1. In all three files, change every `src="assets/..."` to `src="/assets/..."` (add leading slash).
  2. In `accommodation/page.tsx`, change `src="assets/img/placeholder.jpg"` to `src="/assets/images/placeholder.jpg"` (use the `/images/` path that has a rewrite rule).
- **Effort:** ~12 leading slashes + 1 path correction. Single commit.

---

## Low severity

### B3. Apple touch icon 404 on every page
- **Status:** OPEN
- **Where:** `public/` (file missing)
- **Symptom:** Every page logs `GET /apple-touch-icon.png 404` and `GET /apple-touch-icon-precomposed.png 404`. iOS users who "Add to Home Screen" get a generic browser icon instead of the COMSNETS logo.
- **Fix:** Add a 180×180 PNG at `public/apple-touch-icon.png` (iOS auto-picks it; the `precomposed` variant is no longer required by modern iOS). Can re-use the existing `public/assets/images/comsnets_header.png` cropped to a square.
- **Effort:** Drop one PNG into `public/`.

### B4. Two `http://` (non-https) links to comsnets-association.org
- **Status:** OPEN
- **Where:**
  - `src/components/Hero.tsx` — "COMSNETS Association" link
  - `src/components/Footer.tsx` — "COMSNETS Association" link
- **Symptom:** Triggers mixed-content warnings on the https-served webapp. Some browsers may block the link or downgrade trust indicators.
- **Fix:** Change `http://www.comsnets-association.org/` to `https://www.comsnets-association.org/` in both files.
- **Effort:** 2-character change × 2 files.

### B5. Accommodation page accessibility — 23 images without `alt`
- **Status:** OPEN
- **Where:** `src/app/accommodation/page.tsx`
- **Symptom:** Screen readers cannot describe the hotel photos. Lighthouse accessibility score is degraded. Will block WCAG AA compliance.
- **Fix:** Add a descriptive `alt` attribute to each `<img>`. Even a generic `alt="Hotel suite at Chancery Pavilion"` is better than nothing.
- **Effort:** 23 alt attributes. ~10 minutes.

---

## Already-fixed in current branch (uncommitted, do not re-report)

### B6. ~~Two dropdowns showing simultaneously on hover~~
- **Status:** FIXED in `src/components/Navbar.tsx` (uncommitted on branch `navbar-flash-and-dropdown-fix`)
- **Symptom:** Hovering CONFERENCE while ABOUT was pinned (clicked-open) rendered both dropdowns at once.
- **Fix applied:** Added `onMouseEnter` handler that clears `openDropdown` when entering a different dropdown `<li>`. Now only one dropdown ever renders.

### B7. ~~Homepage navbar flashed wrong order before Firestore loaded~~
- **Status:** FIXED in `src/lib/navbarService.ts` (uncommitted, same branch)
- **Fix applied:** Rebuilt `DEFAULT_NAVBAR` to mirror current Firestore content (Home / About / Conference / Workshops / Calls / Sponsors / Attending / Photos / Keynotes / Archive). SSR first-paint now matches what client fetches.

### B8. ~~Desktop dropdown closed too fast when crossing 8px gap~~
- **Status:** FIXED in `src/app/globals.css` (uncommitted, same branch)
- **Fix applied:** Changed `.dropdown-menu` `margin-top: 8px` to `margin-top: 0`. Gap eliminated; CSS `:hover` no longer breaks during cursor traversal.

### B9. ~~Archive dropdown lost its years (regression from Ojaswa's customizable-navbar refactor)~~
- **Status:** FIXED in `src/components/Navbar.tsx` and `src/lib/navbarService.ts` (uncommitted, same branch)
- **Fix applied:** Added `isArchive` branch in `renderMenuItem` that generates the 2026 + 2021..2009 year list dynamically; added `isArchive?: boolean` to `MenuItem` interface.

### B10. ~~"Planatery Debate" typo in Firestore~~
- **Status:** FIXED in Firestore `settings/navbar` doc (already applied, not in git)
- **Fix applied:** Renamed to "Planetary Debate".

### B11. ~~Active dropdown item rendered Bootstrap default bright blue `#2196f3`~~
- **Status:** FIXED in `src/app/globals.css` (uncommitted, same branch)
- **Fix applied:** Override `.dropdown-menu > .active > a` background to `var(--nav-bg, #0a1628)` so the active state matches the navbar.

---

## Deferred (separately flagged in compact / audit, not yet acted on)

### D1. Container/wrapper standardisation — 107 "cornered" pages
- All 107 use legacy `col-md-9 page-content well-white` wrapper that lacks centering, padding, rounded corners, and shadow. Visual fix is one CSS block in `globals.css` (~30 lines). Tracked in `/Users/jc/.claude/plans/i-like-how-http-localhost-3000-demos-exh-transient-garden.md`.

### D2. `firestore.rules` global write rule too permissive
- `match /{document=**} { allow read, write: if request.auth != null; }` lets ANY signed-in Firebase Auth user write any non-public collection. With open signup enabled, anyone who registers can vandalise OC, sponsors, etc. Needs an admin allowlist (Firestore `admins` doc or custom claim).

### D3. Hardcoded credentials in PHP / shell repos (`comsnets2027/`)
- Mailchimp API key, reCAPTCHA server secret, InfinityFree FTP password, weak `define('PASSWORD','password')` gate, plaintext subscriber list. Listed in earlier full audit (separate task).

### D4. `SecureKeys.zip` in git history
- Contains Firebase Admin SDK private key. Rotate the service account and purge via `git filter-repo`. Highest-severity item from the secrets audit.

### D5. Oversized OC images
- `tanya.webp` is 3.4 MB. ~6 other OC photos in the 250 KB – 1 MB range. Compress to ~50 KB webp at 256px.

### D6. Duplicate / typo routes
- `/brochure` + `/broucher`, `/technical_program` + `/technical_program_2` + `/technical_program_orig`, `/lrn_backup`. Pure cleanup.

### D7. 5 TBA placeholder pages
- `/sponsors`, `/comsnets_app`, `/panel_discussions`, `/call_for_workshop_proposal`, `/banquet_speaker`. Content task (not engineering).

### D8. `navbar_config` sessionStorage cache hides admin edits
- `Navbar.tsx:40-48` reads from sessionStorage before Firestore. If an admin edits in `/admin/navbar`, their own tab keeps showing the stale cached version until they close it. Minor foot-gun; not a bug per se.
