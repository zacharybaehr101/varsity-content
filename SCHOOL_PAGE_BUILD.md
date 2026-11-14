# Strong school page — build note

Built 2026-11-14 in the local clone `~/workspace/varsity-content-build`, branch `main`,
uncommitted working-tree changes (same pattern as the idea-search, My Ideas and
News builds). NOT pushed, no PR. Stacks on the idea-search + My Ideas + News work
already in the tree.

## What it is

The school detail page rebuilt so each school stands on its own, per Zachary's
direction (2026-11-14): differences between schools are expected, not the story.
The story is a strong page per school; comparison is a tool the user drives,
not a verdict. No scores, no rankings, no headline lists.

## What changed

### Data — restore extended (`scripts/restore-idea-fields.mjs`)
9 more Sheet fields restored verbatim, matched by School_Name. Re-run verified:
141/141 matched, 7 Sheet rows skipped (same 7 as before), 35 keys per record.
- `heroAssetType` (Hero_Asset_Type), `hasScoreboard` (Has_Live_Scoreboard),
  `scoreboardPosition` (Scoreboard_Position), `genderBalance`
  (Gender_Representation_Balance), `lazyLoading`
  (Lazy_Loading_Issues_Detected, verbatim "Yes"/"No"), `hasGalleries`
  (Has_Photo_Galleries), `captureDate` (Capture_Timestamp, date part),
  `screenshotFile` (Screenshot_File_Name), `headlineTone` (Headline_Tone).
- Real values now: genderBalance has 3 variants (Balanced 112, Balanced
  Representation 19, Equitable Split 10); heroAssetType 26 distinct (Image 112);
  scoreboardPosition Top 102; galleries 69 Yes / 72 No (141 on site).
- Still uniform in the Sheet itself, now honestly so: hasScoreboard true for
  all 141, lazyLoading "No" for all 141. The page shows the Sheet's values,
  not code defaults.
- Mobile sticky, re-checked on the 141: No for 14 (MIAA 6 on site + Sun 8),
  Yes for 127. Sheet-wide it is 20 No — the other 6 are the MIAA schools
  missing from the site.

### New lib — `src/lib/schoolPage.js`
- `themeFor(narrative)`: groups the 102 distinct Hero_Text_Narrative values
  into the 8 themes from the 148-school content analysis (Ticket push,
  Honors/academics, Celebration/title, Coach/staff, Schedule release,
  Game action, Event/ceremony, Recruiting/roster, Identity/brand,
  School news). Order matters: ticket and honours checks run first.
- `emphasisFor(school)`: theme + a plain-English line + verbatim evidence
  (hero copy, headline, category, tone, narrative).
- `pillarSignals(school)`: the four pillars as June 3 capture facts only —
  tickets (CTA, weight, mobile sticky), sport hub (streaming, scoreboard,
  video), roster (recruiting, galleries, gender balance), giving (NIL, merch).
  Each pillar carries a one-line note derived from its own facts.
- `ideasFromSchool(school)`: 1–2 ideas per school via the existing
  `ideaFromEvidence` (hero copy, top headline), deduped by ideaKey.

### New data — `src/data/liveNotes.js`
Live notes for exactly 3 schools (Ohio State 13, Fort Hays 65, Mount Marty 112),
from the live audits of Nov 14, 2026. Each has media (audio/video/photos/social),
all four pillars, and a steal line. Everything traces to
`varsity-pillar-minor-sport-audits-2026-11-14.md` and
`varsity-audit-2026-11-14.md`. No other school has live notes; the page says
so rather than inventing any.

### Page — `src/pages/SchoolDetail.jsx` (+ CSS)
New order, top to bottom:
1. Header + "Homepage captured 2026-06-03" line.
2. **In their own words** — hero copy as a big quote, top headline, narrative
   + tone chips, "This homepage emphasizes: {theme}" with its line.
3. Editorial blocks, unchanged (What We Love / Strengths / Areas, with Save
   and Add-gap-to-checklist).
4. **Media & social** — Sheet facts (video, galleries, streaming, hero asset)
   + live notes (audio/video/photos/social) where they exist, labelled
   "Live notes · audited 2026-11-14".
5. **The four pillars** — 4 cards with capture facts + live notes where they
   exist, plus a "Steal this" line for live-audited schools. Schools without
   live notes get one honest line: a full live pillar audit hasn't been run yet.
6. **Ideas from this school** — derived idea cards with Save buttons, linking
   on to /ideas.
7. Screenshot box — caption now shows the real screenshot file name; a note
   says the image itself is still a placeholder until real screenshots are
   added to the site.
8. **Compare** — inline picker (all 140 other schools, alphabetical) with a
   side-by-side table: hero copy, headline, emphasis, ticket weight,
   streaming, nav count, CMS. No verdict, no ranking.
9. Sidebar Data Fields — now 19 rows, every value from the record. The six
   hardcoded values are gone: Hero Asset, Has Live Scoreboard, Scoreboard
   Position, Gender Representation, Mobile Sticky Tickets, Lazy Loading
   Issues all read `school.*`.
- Also fixed a pre-existing gap: `.headerActions` had no CSS rule; added one.
- Compare picker and gap-added state reset when navigating between schools.

## Verification
- `node scripts/test-school-page.mjs` — **98 passed, 0 failed.** Covers the
  restored fields, the mobile-sticky conference fingerprint (14 No / 127 Yes
  on the 141), themeFor proven cases, emphasis/pillars/ideas validity for all
  141, live-notes coverage (exactly 3, all fields present, ids exist), and
  that SchoolDetail.jsx contains none of the six hardcoded audit literals.
- Existing suites still pass: test-ideas, test-my-ideas (23 passed),
  test-news (31 passed).
- `npm run build` passes (Vite, 546 kB / 146 kB gzip — up from 492 kB with
  News, expected: more data + code).
- CSS-class check: all 82 classes used by the page resolve in the stylesheet.
- NOT verified in a rendered browser (same standing caveat as the earlier
  builds): no agent has clicked through /school/13 or /school/1 in a live
  browser yet. Build + unit checks are the verification so far.

## Deliberately not done
- No push / PR. No merge. Nothing deployed; live site unchanged.
- No real screenshots — the Sheet names the files
  (e.g. `nebraska-huskers_huskers-com.png`) but the files aren't in the repo.
  The page shows the file name and says the image is a placeholder.
- No full /compare page. The inline compare on the school page is the
  comparison hook for now; a dedicated /compare (Homepage UX default, locked
  fields as clean lock icon) is still a separate next step.
- No live notes beyond the 3 audited schools. Adding a school means a live
  audit first, then one entry in liveNotes.js — never inferred from the Sheet.
- No June-vs-today diff on the page. Per Zachary's direction, differences
  are expected and the diff is not the product; the page shows the capture
  as it stood, with its date stated plainly.
