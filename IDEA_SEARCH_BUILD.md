# Idea Search — build note

Built 2026-11-14 in the local clone at `~/workspace/varsity-content-build`
(repo `zacharybaehr101/varsity-content`, main, HEAD `7286d6aa`, 2026-06-04).
**Not pushed. Not deployed. Nothing on the live site changed.**

## What changed

### 1. Data restoration — the missing Sheet fields are back in the data file
- `scripts/restore-idea-fields.mjs` (new, kept in the repo, re-runnable):
  `node scripts/restore-idea-fields.mjs [/path/to/sheet.csv]`
  Reads the Sheet CSV export, matches by `School_Name` only (never row order),
  and enriches `src/data/schools.js`.
- `src/data/schools.js` (modified — every one of the 141 records gained 11 fields;
  the original 15 keys are untouched, so existing pages render exactly as before):
  `heroCopy`, `headline`, `headlineCategory`, `ticketWeight`, `mobileSticky`,
  `hasVideo`, `hasMerch`, `hasRecruiting`, `loveFull`, `strengthsFull`, `areasFull`
  — all taken verbatim from the Sheet. Division/conference labels were NOT taken
  from the Sheet (it mixes "Division I" / "NCAA Division I" and
  "Centennial Conference" / "Centennial"); the `schools.js` values win.
- Match counts (script output): **141 of 141 schools matched, 0 unmatched in code,
  7 Sheet rows skipped** (not added to the index, as instructed):
  Missouri Southern Lions, Newman Jets, Rogers State Hillcats,
  Central Missouri Mules, Washburn Ichabods, Central Oklahoma Bronchos,
  Alabama Crimson Tide. Sheet total: 148 rows.
- All 141 schools now have `heroCopy` and `headline`; each record has 26 keys.

### 2. Idea engine — `src/lib/ideas.js` (new)
Pure client-side search, no network, no scores/grades/rankings of schools.
- Takes a natural-language query + optional division/conference filters.
- Weights hero copy and headlines highest, then What We Love / Strengths,
  then the hero narrative. The Yes/No fields (tickets, streaming, NIL) never
  rank on their own — they barely vary, per the proof.
- Intent/synonym map for the proven queries (ticket sales, track & field)
  plus NIL, streaming/video, recruiting, and a generic keyword fallback.
- Angle labels derived from the evidence text only (e.g. "Floating ticket pane",
  "Hero as announcement", "Record chase", "Coach as story",
  "Small-school All-American", "Freshman breakthrough", "Team title",
  "Cautionary: ticket widget crowds out news"). "Steal it" lines are fixed
  templates per angle, not invented claims. Effort hints (Low/Medium/High)
  appear only for the five schools the proof gives one for.
- Each result carries: school id/name, division, conference, CMS, URL,
  evidence quote + its source field, capture date 2026-06-03, link to `/school/:id`.
- `scripts/test-ideas.mjs` (new) re-runs the verification searches from the
  command line: `node scripts/test-ideas.mjs`.

### 3. UI — `src/pages/Ideas.jsx` + `src/pages/Ideas.module.css` (new)
Route `/ideas` added in `src/App.jsx`; "Get Ideas" link added in the Navbar.
- Big prompt ("What do you need ideas for?"), example chips for the two proven
  searches plus NIL, streaming & video, and recruiting — all three extra chips
  were verified to return real results before being added (NIL 6, streaming 39,
  recruiting 28 results).
- Division + conference filters, result count, idea cards with evidence quote,
  school attribution, "Steal it", effort where the proof gives one, and a Save
  button. Page shows the first 12 results with a "Show all N ideas" toggle.
- Note on the page: "Ideas from June 2026 captures — patterns hold, specific
  on-sale dates may be stale."
- Save button stores `{schoolId, ideaKey, savedAt}` in localStorage under
  `vc-my-ideas` and toggles to "✓ Saved". This is UI-only scaffolding for the
  next My Ideas phase — there is no My Ideas page or checklist UI yet.

### 4. Homepage weave — `src/pages/Home.jsx` + `Home.module.css` (modified)
The hero CTAs area is now an idea-search prompt box (input + "Get ideas →")
that navigates to `/ideas?q=...`, with "Explore the Index" kept as a link
and a "Try: student ticket sales" shortcut. No homepage redesign.

## Verification

`npm install && npm run build` — **passes** (Vite 8, 42 modules, built in ~1s).
`node scripts/test-ideas.mjs` — results below, exact top-8 order.

### "I need ideas on student ticket sales" — 40 results, top 8
1. Indiana Hoosiers — Floating ticket pane — Medium
2. Arizona State Sun Devils — Cautionary: ticket widget crowds out news
3. Notre Dame Fighting Irish — Hero as announcement — Low
4. Miami Hurricanes — Hero as announcement
5. Baylor Bears — Bundle tickets with gameday — Low
6. Ohio State Buckeyes — One grid: results + tickets + media — High
7. College of Staten Island Dolphins — Branded ticketing block — Low
8. Rutgers Scarlet Knights — Mobile check — ticket ribbon

**All 8 proven ticket results are in the top 8, in this order.**

### "Give me feature story ideas for track and field" — 48 results, top 8
1. UDC Firebirds — Coach as story
2. Mount Marty Lancers — Small-school All-American
3. Cincinnati Bearcats — Coach as story
4. IU East Red Wolves — Track feature story
5. WVU Tech Golden Bears — Freshman breakthrough
6. Dickinson Red Devils — Record chase
7. Ole Miss Rebels — Record chase
8. Whitworth Pirates — Track feature story

Remaining proven track schools, by rank: Clemson Tigers #9, Indiana University
Kokomo Cougars #12, Arkansas Razorbacks #19. They are in the results and
visible via the page's "Show all" toggle, but the engine ranks them below the
top 8 on the evidence alone — Arkansas's hero copy is a generic brand line
("Never Yield: Arkansas Athletics") and only its headline category says Track
& Field, so it scores lower than schools whose hero/headline actually says
track. No school names are hardcoded in the engine; forcing those three into
the top 8 would require that.

### NAIA-filtered track search — 18 results, top 8
Mount Marty Lancers, IU East Red Wolves, WVU Tech Golden Bears, Midway Eagles,
Indiana University Kokomo Cougars, SMWC Pomeroys, Concordia Bulldogs,
Florida Memorial Lions.
**All 4 proven NAIA schools are in the top 8** (Mount Marty, IU Kokomo,
WVU Tech, Concordia).

## Deliberately NOT done
- My Ideas page and the idea checklist (next phase; only the localStorage
  Save scaffolding exists).
- /compare, /about, /methodology, /contact, /submit, newsletter, Resend, /api.
- The 16 vs 26 fields / 12 vs 10 conferences counts fix (deferred by Zachary).
  The hardcoded "141+ / 10 / 26" stats on the homepage are untouched.
- No scores, grades, or rankings invented. No social evaluations added.
- No push to GitHub, no Vercel deploy. Vercel project access is still blocked
  (403, team scope "zjb") and was not touched.

## To review / push (run these yourself — not run during this build)
```bash
cd ~/workspace/varsity-content-build
git status
git diff src/App.jsx src/pages/Home.jsx src/components/Navbar.jsx
git diff src/data/schools.js | head -n 40   # every record gained 11 fields
npm run build
git checkout -b idea-search
git add src scripts IDEA_SEARCH_BUILD.md
git commit -m "Add idea search: restore Sheet hero/headline fields, /ideas page, homepage prompt"
git push -u origin idea-search
```
Then open a pull request on GitHub for review before merging to main.
