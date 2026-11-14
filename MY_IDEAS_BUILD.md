# My Ideas + checklist — build note

Built 2026-11-14 in the local clone at `~/workspace/varsity-content-build`
(repo `zacharybaehr101/varsity-content`, main, HEAD `7286d6aa`, 2026-06-04,
on top of the idea-search UI from `IDEA_SEARCH_BUILD.md`).
**Not pushed. Not deployed. Nothing on the live site changed.**

## What changed

### 1. Single source of truth — `src/lib/myIdeas.js` (new)
All saved-idea and checklist reads/writes go through this module, used by
`Ideas.jsx`, `MyIdeas.jsx`, `SchoolDetail.jsx`, and `Navbar.jsx`.
- Keys: `vc-my-ideas` (saved ideas), `vc-checklist` (checklist items).
  The Ideas page's old `vc-my-ideas` key is unchanged, so existing saves
  carry over.
- Saved idea record: `{ schoolId, ideaKey, angle, evidence, sourceField,
  stealIt, effort, schoolName, division, conference, savedAt,
  status: 'saved' | 'doing' | 'done', notes: '' }`.
- Checklist item record: `{ id, label, source: 'starter' | 'idea' | 'gap' |
  'custom', schoolId, ideaKey, kit: 'tickets' | 'track' | null,
  done: false, createdAt, doneAt }`.
- Helpers: `loadSaved` / `saveSaved` / `toggleSave` / `updateSavedIdea` /
  `removeSavedIdea`, `loadChecklist` / `saveChecklist` /
  `addChecklistItem` / `toggleChecklistItem` / `removeChecklistItem` /
  `clearDone`, `addKit`, `ideaToChecklistItems` / `addIdeaToChecklist`,
  `savedCount` / `checklistProgress`. Saves dispatch a
  `vc-my-ideas-changed` / `vc-checklist-changed` CustomEvent so the
  Navbar badge and the Ideas page stay in sync without a page reload.
- **Persistence is localStorage only.** No auth, no backend, no account.
  Saved ideas and checklist items live in this browser; cross-device /
  team sync is a later Scout/Agency feature, not built here. The My Ideas
  page says so in plain text.

### 2. Legacy-save migration
Saves made by the idea-search build are minimal
`{ schoolId, ideaKey, savedAt }`. On load, `migrateSaved` re-derives each
one via a new `getIdeaByKey(schoolId, ideaKey, list)` in
`src/lib/ideas.js` (which re-derives the angle with `deriveAngle` and
picks the first quotable field containing the angle's keywords as
evidence). If a save cannot be resolved — school gone, key unknown — the
card is kept and labelled "Saved idea — details unavailable" with a link
to the school page; it is never dropped silently. Verified by test (see
below): Indiana's legacy save migrates to the full Floating-ticket-pane
record; a save for school 999 stays, flagged unresolved.

### 3. New page — `src/pages/MyIdeas.jsx` + `MyIdeas.module.css` (new)
Route `/my-ideas` added in `src/App.jsx`.
- Header + progress summary: X saved ideas, Y of Z checklist items done.
- Saved ideas: each card shows angle, school + division/conference,
  evidence quote + source field, Steal it, effort, a status selector
  (Saved / Doing / Done), a notes textarea (saved on change), and
  buttons "Add to checklist", "View school", Remove. Empty state links
  to `/ideas`.
- Checklist: checkboxes, done items struck through, add-custom-item
  input, "Add starter kit" buttons for the two proof kits, "Clear done".
  Items linked to a school/idea show that attribution.
- Starter kits, verbatim from `varsity-idea-search-proof.md`:
  *Student ticket push* (6 items: hero for 48h Notre Dame/Miami;
  floating/pinned pane Indiana; bundle with gameday Baylor; brand the
  ticketing-provider block Staten Island; mobile ticket CTA check
  Rutgers; one grid Ohio State) and *Track feature story kit* (5 items:
  pick angle; lead with athlete name + event + number, Dickinson 800m
  three-peat; pair action shots with academic honors, WVU Tech; hero
  status for non-revenue sports in postseason, Iowa; facility as the
  visual, Dickinson/Oregon). Adding a kit twice skips exact duplicates
  by label.
- Idea → checklist: `ideaToChecklistItems` turns one saved idea into
  1–3 concrete steps from its angle — e.g. Indiana's floating pane →
  "Add a floating / pinned ticket pane beside the hero" + mobile check;
  Notre Dame's hero announcement → "Pick the one ticket story for the
  hero for 48 hours"; Dickinson's record chase → "Lead with the
  athlete's name + the specific event + the number" + facility visual.
  Adding the same idea twice adds nothing new.

### 4. Refactored — `src/pages/Ideas.jsx`
Now uses `myIdeas.js` `toggleSave` (same `vc-my-ideas` key, same UI), so
saves from search now carry the full snapshot instead of the minimal
`{schoolId, ideaKey, savedAt}`. Added a "X saved ideas — View My Ideas →"
link under the example chips, and a listener so the count refreshes when
saves change on another page.

### 5. Navbar — `src/components/Navbar.jsx` + `Navbar.module.css`
"My Ideas" link with a count badge of saved ideas (hidden when zero),
kept in sync via the change event and route changes.

### 6. Weave into school pages — `src/pages/SchoolDetail.jsx` + CSS
Under each editorial block (What We Love / Strengths / Areas of
Opportunity) a "Save this as an idea" button saves an idea derived from
that block's own text (angle via `deriveAngle`, via a new
`ideaFromEvidence` helper in `src/lib/ideas.js`). The Areas of
Opportunity block also gets "Add this gap to my checklist" — a
source-`gap` checklist item, e.g. Fort Hays State's sticky-tickets No
becomes a checklist item. The 16-field audit display and the
paywall/export card are untouched.

## Verification

`node scripts/test-my-ideas.mjs` — **23 passed, 0 failed**, including:
- toggleSave round-trip with a full snapshot (Indiana, Floating ticket pane)
- ticket kit adds 6, adding it again adds 0; track kit adds 5, again adds 0
- Indiana idea → 2 checklist steps; Dickinson idea → lead-with-name/number step
- addIdeaToChecklist twice adds nothing the second time
- legacy minimal save migrates to the full record; unresolvable save is
  kept and flagged unresolved
- checklist toggle / progress / clear-done

`node scripts/test-ideas.mjs` — still passes (idea search unaffected).
`npm run build` — **passes** (Vite 8, 45 modules, JS 476 kB / 131 kB gzip).

**Not verified in a live browser:** no click-through of `/my-ideas`,
the Navbar badge, the school-page save buttons, or localStorage
persistence across reloads. That needs a parent-agent browser check
before Zachary reviews it.

## Deliberately NOT done
- No auth / backend / sync — localStorage only, stated in the UI.
- No email / Weekly Playbook, no compare, no /about / /methodology /
  /contact / /submit, no newsletter, no Resend, no /api.
- The 16 vs 26 fields / 12 vs 10 conferences counts fix — deferred,
  untouched.
- No scores, grades, or rankings invented.
- No push to GitHub, no Vercel deploy. Vercel project access is still
  blocked (403, team scope "zjb") and was not touched.

## To review / push (run these yourself — not run during this build)
```bash
cd ~/workspace/varsity-content-build
git status
git diff src/App.jsx src/pages/Ideas.jsx src/pages/SchoolDetail.jsx src/components/Navbar.jsx
npm run build
node scripts/test-my-ideas.mjs
git checkout -b my-ideas-checklist
git add src scripts IDEA_SEARCH_BUILD.md MY_IDEAS_BUILD.md
git commit -m "Add My Ideas + checklist: localStorage saved ideas, starter kits, school-page save buttons"
git push -u origin my-ideas-checklist
```
Then open a pull request on GitHub for review before merging to main.
