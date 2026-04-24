# Versioning Convention

Every commit in this repo MUST include a version prefix.

**Format:** `v{major}.{minor}.{patch} -- {type}: {description}`
- Types: `feat`, `fix`, `chore`, `docs`, `refactor`
- Increment patch by 1 on every commit; ask the user to confirm the version before committing
- No emojis, no co-author trailers, no AI attribution

**Stability rule:** test versions have a non-zero last digit (e.g. `v0.1.47`). Production-ready releases end in zero (`v0.1.50`). Git tags (`git tag v0.1.50 && git push origin v0.1.50`) only on production versions.

**Branch policy:** work happens on `migration-v1` or feature branches off it. `main` and `production` require a PR; `production` auto-deploys to Firebase Hosting. Never push to `main` or `production` without explicit approval and a production version number.

**Examples:**
- `v0.1.47 -- feat: port schedule page to Next.js with Firestore`
- `v0.1.48 -- fix: correct order field on 18 legacy OC docs`
- `v0.1.50 -- chore: bump to production release` (tagged)
