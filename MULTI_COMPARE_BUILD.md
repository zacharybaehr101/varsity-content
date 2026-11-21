# Multi-school compare (2026-11-20)

Built in the local clone at `~/workspace/varsity-content-build`
(repo `zacharybaehr101/varsity-content`, main at `4e50d17`, the PR #7 merge).
**Not pushed yet — draft PR to follow. Nothing on the live site changed.**

Zachary's prompt: he loves the inline compare but Illinois vs Houston
looked near-identical, and he wants more than two schools — "perhaps
that's in a paid tier?" Built as approved: 2 schools free, up to 4 with
Scout, up to 8 with Agency.

## What changed

### 1. `src/pages/SchoolDetail.jsx` — compare is now multi-school
- `compareId` (single) → `compareIds` (array, max 7 added schools =
  8 columns total incl. the current school). Pickers reset on navigation.
- One picker row per chosen school (select + ✕ remove button) plus an
  empty "Add another school…" picker while under the max. Picker options
  exclude the current school and already-chosen schools.
- Tier gate: added slot 0 (2nd column) is free; slots 1–2 (3rd, 4th
  columns) unlock with Scout; slots 3–6 (5th–8th) unlock with Agency.
  A locked column shows the school name with a Scout/Agency tag and a
  single row-spanned cell: padlock SVG icon, "Locked", "Compare up to 4
  schools with Scout" / "Compare up to 8 schools with Agency", and an
  "Unlock Scout — $39/mo" / "Unlock Agency — $129/mo" button linking to
  /pricing. No scrambled or blurred data, per Zachary's locked-field rule.
  Like the rest of the paywall, the lock is a prompt, not entitlement
  enforcement (there is no auth); a paid user sees the same prompt today.
- Rows grew from 7 to 11: the four new rows are the fields that actually
  vary across schools — Has Tickets CTA, Mobile Sticky Tickets, Photo
  Galleries, Video Highlights — so even a two-school compare shows real
  differences (Nebraska vs Houston: Photo Galleries Yes vs No).
- Section copy: title "Put this school next to others"; note line states
  the tiers ("2 schools free · up to 4 with Scout · up to 8 with Agency").

### 2. `src/pages/SchoolDetail.module.css` — compare styles
- `.comparePickers` / `.comparePickerRow` / `.compareRemove` (picker rows),
  `.compareWrap` (horizontal scroll for wide matrices), 150px min-width
  on school columns, `.compareTierTag` badge, `.compareLockCell` /
  `.compareLockIcon` / `.compareLockTitle` / `.compareLockText` /
  `.compareUnlockBtn` (brand-red button, same style as the export button).

### 3. `src/pages/Pricing.jsx` — pricing copy now matches the feature
The pricing page already promised a tiered comparison tool, but its
limits didn't match the build (Free ✕, Scout "2–3 schools", Agency
"6+ schools"). Updated to the shipped limits:
- Free features: added "2-school comparison"; locked: "School comparison
  tool" → "3+ school comparison".
- Scout features: "2–3 school comparison tool" → "Up to 4-school
  comparison"; locked: "6+ school matrix comparison" → "5–8 school
  comparison".
- Agency features: "Full 6+ school comparison matrix" → "Up to 8-school
  comparison matrix".
- Comparison table row "School comparison tool": Free ✕ → "2 schools",
  Scout "2–3 schools" → "Up to 4", Agency "6+ schools" → "Up to 8".

### 4. `scripts/test-school-page.mjs` — 19 new checks (188 → 207)
- Wiring fragments: `compareIds`, `MAX_COMPARE`, `tierForSlot`,
  `compareRowsFor`, `compareOptions`, `rowSpan`, `compareLockCell`,
  `compareUnlockBtn`, "Add another school".
- The four new rows are asserted inside the `compareRowsFor` block
  specifically (the sidebar shares those labels, so a plain `includes`
  would prove nothing); row count is asserted as 11.
- Tier gates asserted by source text; lock copy asserted ("Compare up to
  4 schools with Scout", "Compare up to 8 schools with Agency"); lock
  links to /pricing; no blur/scramble anywhere on the page.

## Verification
- Tests: school-page 207/207, my-ideas 23/23, news 45/45 (incl. the
  news-categories hide), mobile-nav 30/30, ideas suite exit 0.
- `npm run build` passes (569 kB JS; >500 kB chunk warning pre-existing).
- Headless Chromium screenshots (Playwright chromium-1255, via a raw-CDP
  script at /tmp/shot.mjs — no playwright package installed):
  - Desktop 1280px, /school/1 with 5 picks (Houston free, Illinois +
    Ohio State Scout-locked, Alabama + Michigan Agency-locked): 7 columns,
    12 rows, lock cells render with icon + copy + red unlock buttons;
    table scrolls horizontally inside the card.
  - Mobile 390px, /school/1 with 1 pick: pickers stack full-width,
    table scrolls horizontally, new rows differentiate (Photo Galleries
    Yes vs No).

## Diff note (read before pushing)
`SchoolDetail.jsx` vs origin/main contains one hunk from open draft
PR #8 in addition to the compare work: the steal-it conditional render
("render the Steal-it row only when stealIt is non-empty"). It is the
identical change in both PRs, so it merges cleanly whichever PR lands
first — but the PR body should say so.
