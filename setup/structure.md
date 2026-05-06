# COMSNETS Website (Next.js) -- File Structure

## Top-Level Config

| File | Role |
|------|------|
| `next.config.ts` | Next.js configuration |
| `package.json` | Dependencies and scripts |
| `tsconfig.json` | TypeScript config |
| `eslint.config.mjs` | ESLint 9 flat config |
| `postcss.config.mjs` | PostCSS (Tailwind v4 plugin) |
| `firebase.json` | Firebase Hosting config |
| `firestore.rules` | Firestore security rules |
| `.firebaserc` | Firebase project alias (`comsnets-website`) |
| `.env.production` | Public Firebase web config vars (committed) |
| `AGENTS.md` | Next.js version warning for AI agents |

## GitHub Actions

| File | Trigger |
|------|---------|
| `.github/workflows/firebase-hosting-merge.yml` | Push to `production` branch -- builds + deploys to live |
| `.github/workflows/firebase-hosting-pull-request.yml` | Any PR -- builds + deploys preview channel |

---

## src/app/ -- Routes

Each folder is a route. All contain `page.tsx` unless noted.

### Core / Layout

| Path | Description |
|------|-------------|
| `layout.tsx` | Root layout (html/body wrapper, Navbar, Footer) |
| `page.tsx` | Homepage |
| `globals.css` | Global stylesheet |
| `favicon.ico` | Site favicon |

### Conference Pages (alphabetical)

| Route | Page |
|-------|------|
| `accepted_papers/` | Accepted papers (Firestore-backed) |
| `accepted_proposals/` | Accepted proposals |
| `accepted_social_networking_workshop/` | Accepted social networking workshop papers |
| `accepted_travel_grants/` | Accepted travel grants |
| `accommodation/` | Hotel recommendations |
| `ADVnet/` | ADVnet workshop |
| `AIoT/` | AIoT workshop |
| `awards/` | Awards page |
| `banquet_speaker/` | Banquet speaker |
| `banquet_venue/` | Banquet venue |
| `blockchain_workshop/` | Blockchain workshop |
| `brochure/` | Conference brochure |
| `broucher/` | Typo alias for brochure |
| `call_for_papers/` | Main CFP (fully built, reference design) |
| `call_for_participation/` | Call for participation |
| `call_for_volunteers/` | Call for volunteers |
| `call_for_workshop_proposal/` | Call for workshop proposals |
| `camera_ready/` | Camera-ready instructions |
| `closing_ceremony/` | Closing ceremony |
| `comsjob/` | COMSJOB job board |
| `comsnets_app/` | Conference app info |
| `comsnets_student_travel_grant/` | Student travel grant |
| `comsnets5krun/` | 5K run event |
| `conference_summary/` | Conference summary |
| `conference_venue/` | Venue info |
| `contact/` | Contact page (has `contact-styles.css`) |
| `CPS-Panel/` | CPS panel |
| `cybersecurity_and_privacy_workshop/` | Cybersecurity workshop |
| `Decarbx/` | Decarbx workshop |
| `demos_exhibits/` | Demos and exhibits CFP |
| `eis/` | EIS page |
| `Entrepreneurship_Talk/` | Entrepreneurship talk |
| `fellowships_and_awards/` | Fellowships and awards |
| `frequently_asked_questions/` | FAQ |
| `graduate_forum/` | Graduate Forum CFP (v0.1.20) |
| `history/` | Conference history |
| `hotel_scam_advisory/` | Hotel scam advisory |
| `how_to_attend/` | How to attend |
| `iart/` | IART page |
| `ignite_beta/` | Ignite beta |
| `ignite_big_talk/` | Ignite big talk |
| `ignite_ceo_talk/` | Ignite CEO talk |
| `ignite_founder_talk/` | Ignite founder talk |
| `ignite_inovation/` | Ignite innovation |
| `ignite_legal/` | Ignite legal |
| `ignite_panel/` | Ignite panel |
| `ignite_startup_talk/` | Ignite startup talk |
| `ignite-poster/` | Ignite poster |
| `IIGW/` | IIGW page |
| `imobile/` | iMobile workshop |
| `important_dates/` | Important dates |
| `industry_insights_keynotes/` | Industry insights keynotes |
| `international_travel_awards/` | International travel awards |
| `invited_speakers/` | Invited speakers |
| `ioelab/` | IoE Lab |
| `its_workshop/` | ITS workshop |
| `keynote_speakers/` | Keynote speakers (has `speaker-styles.css`) |
| `lastmiles_workshop/` | Last Miles workshop |
| `lifetime_achievement/` | Lifetime achievement award |
| `live/` | Live stream |
| `lrn_backup/` | LRN backup |
| `Media/` | Media page |
| `mediacoverage/` | Media coverage |
| `mentoring_sessions/` | Mentoring sessions |
| `mentoring_sessions_schedule/` | Mentoring sessions schedule |
| `message_from_chairs/` | Message from chairs |
| `minds_workshop/` | MINDS workshop |
| `mobile_india/` | Mobile India |
| `netHealth_workshop/` | NetHealth workshop |
| `Nexus-Panel/` | Nexus panel |
| `organizing_committee/` | OC page (has `oc-styles.css`, Firestore-backed) |
| `outstanding_contribution_award/` | Outstanding contribution award |
| `panel_discussions/` | Panel discussions |
| `papers/` | Papers page |
| `participant_travel_grants/` | Participant travel grants |
| `photos/` | Photos gallery |
| `physical_participation_guidelines/` | Physical participation guidelines |
| `plenary_debate/` | Plenary debate |
| `poster_session/` | Poster session |
| `previous_comsnets/` | Previous editions |
| `privacy_policy/` | Privacy policy |
| `publications/` | Publications |
| `QCom-P/` | QCom-P workshop |
| `registration/` | Registration |
| `registration_fee_details/` | Fee details |
| `registration_helper/` | Registration helper |
| `research_cafe/` | Research cafe |
| `schedule/` | Schedule |
| `social_networking_workshop/` | Social networking workshop |
| `sponsored_events/` | Sponsored events (Firestore-backed) |
| `sponsors/` | Sponsors |
| `sponsorship_opportunities/` | Sponsorship opportunities |
| `springer_book/` | Springer book |
| `standards-driven_research/` | Standards-driven research |
| `submission_guidelines/` | Submission guidelines |
| `submit_copyright/` | Submit copyright |
| `subscribe/` | Newsletter subscribe |
| `SysAI/` | SysAI workshop |
| `TASIR_workshop/` | TASIR workshop |
| `technical_program/` | Technical program |
| `technical_program_2/` | Technical program (alternate) |
| `technical_program_committee/` | TPC |
| `technical_program_orig/` | Technical program (original) |
| `test_of_time_award/` | Test of time award |
| `transportation_workshop/` | Transportation workshop |
| `travel_grants/` | Travel grants |
| `trees_14/` | Trees 14 |
| `TTDF/` | TTDF page |
| `tutorial/` | Tutorial |
| `tutorials/` | Tutorials |
| `tutorials_reg/` | Tutorial registration |
| `undergraduate_forum/` | Undergraduate forum |
| `video_messages/` | Video messages |
| `virtual_attendee_instructions/` | Virtual attendee instructions |
| `visa/` | Visa info |
| `visiting_bangalore/` | Visiting Bangalore |
| `volunteers/` | Volunteers |
| `waci_workshop/` | WACI workshop |
| `women_in_engineering/` | Women in engineering |
| `workshops/` | Workshops listing |

### Admin Section

| Path | Description |
|------|-------------|
| `admin/layout.tsx` | Admin layout wrapper |
| `admin/page.tsx` | Admin dashboard |
| `admin/login/page.tsx` | Admin login |
| `admin/oc/page.tsx` | OC data editor |
| `admin/speakers/page.tsx` | Speakers data editor |
| `admin/sponsored-events/page.tsx` | Sponsored events editor |

---

## src/components/

| File | Role |
|------|------|
| `AboutSection.tsx` | Homepage about section |
| `CTAStrip.tsx` | Call-to-action strip |
| `Footer.tsx` | Site footer |
| `Hero.tsx` | Homepage hero banner |
| `InfoCard.tsx` | Reusable info card |
| `Memories.tsx` | Past conference photos section |
| `Navbar.tsx` | Site navigation bar |
| `OCMemberCard.tsx` | Organizing committee member card |
| `OCSection.tsx` | OC section grouping |
| `PagePlaceholder.tsx` | TBA placeholder for unported pages |
| `PhotosGrid.tsx` | Photo grid layout |
| `Sidebar.tsx` | Page sidebar |
| `VenueCard.tsx` | Venue info card |

### src/components/admin/

| File | Role |
|------|------|
| `EventEditor.tsx` | Sponsored events CRUD |
| `ImageUpload.tsx` | Image upload to Firebase Storage |
| `OCSectionEditor.tsx` | OC section CRUD |
| `SpeakerEditor.tsx` | Speaker CRUD |

---

## src/lib/

| File | Role |
|------|------|
| `firebase.ts` | Firebase client SDK init (reads `NEXT_PUBLIC_*` env vars) |

---

## Static Assets

| Path | Contents |
|------|----------|
| `public/assets/images/Committee_2027/` | Chair/committee photos: `Debasree.jpg`, `Tanya.jpg`, `Shashikant.jpg` |

---

## Changelog

| Version | Date | Change |
|---------|------|--------|
| v0.1.22 | 2026-05-05 | Tanya + Shashikant photos, Firestore OC update via Admin SDK |
| v0.1.21 | 2026-05-05 | Debasree Das photo, CSS overflow fix for circular avatars |
| v0.1.20 | 2026-05-05 | Graduate Forum CFP page (`src/app/graduate_forum/page.tsx`) |
