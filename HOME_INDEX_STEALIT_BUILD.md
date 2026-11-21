# Homepage featured row, index without conferences, steal-it fix — 2026-11-20

Two requests from Zachary on 2026-11-20, built together because they touch
the same pages: (1) homepage featured audits shorter and in a left-to-right
row, not one column up and down; (2) remove conferences from the index.
Plus the fix for his follow-up: the "Steal it: Copy the layout, not the
copy — adapt what they did to your school." line repeating on nearly every
idea card on the site.

## What changed

1. **Featured audits are now a 3-column row of short cards.** New
   `compact` prop on `SchoolCard` (`src/components/SchoolCard.jsx` +
   `.cardCompact` in `SchoolCard.module.css`): a short vertical card with
   the school name, division / conference / CMS badges, What We Love
   only, and a Full Analysis link — no right info panel, no Areas of
   Opportunity. `Home.jsx` passes `compact` to the 3 featured cards and
   `Home.module.css` `.cardList` is now a 3-column grid (`repeat(3, 1fr)`,
   12px gap); at ≤768px it collapses to 1 column. Verified by headless
   screenshots: 3 across at 1280px, stacked at 390px.
2. **Conferences removed from the index.** `Index.jsx` rewritten without
   them: the conferences list, the `conf` state and URL-param sync,
   conference filtering, conference matching in search, and the "All
   Conferences" dropdown are all gone. Search placeholder is now "Search
   schools...". The toolbar keeps All Divisions and All CMS. Verified in
   the rendered index: no conference control anywhere.
3. **The generic "Steal it" line is gone.** In `src/lib/ideas.js` the
   `STEAL_IT` entries for 'Ticket idea' and 'From the audit' were the
   identical generic line, and 'From the audit' is `deriveAngle`'s
   default — so most ideas carried it. Both entries are removed; those
   angles now carry `stealIt: ''`. The 13 distinct per-angle lines are
   untouched. `Ideas.jsx` and `SchoolDetail.jsx` now render the Steal-it
   row only when `stealIt` is non-empty (My Ideas already did). Verified:
   across all 148 school pages, 157 ideas now carry no Steal-it row, 35
   carry a distinct per-angle line, and the generic line appears 0 times
   in the rendered DOM of /ideas, /school/1 and /my-ideas.
4. **Test updated.** `scripts/test-school-page.mjs` no longer requires
   every idea to have a stealIt; it now fails if any idea carries the
   generic line.

## Known loose end (flagged to Zachary, not fixed here)

The homepage "Conferences in the Index" cards still link to
`/index?conf=...`. The `conf` parameter is now ignored, so those links
land on the unfiltered index. Zachary to say whether that section should
change too (remove it, or repoint the cards).

## Second commit — remove the homepage conference section + footer Conferences column (2026-11-20, evening)

Zachary asked for the "home page fix" (the loose end above), then
redirected to sweeps; the fix was done after the sweeps were filed.

- `Home.jsx`: `CONF_HIGHLIGHTS` array and the whole CONFERENCE GRID
  section ("Conferences in the Index", 6 conference cards + "+ More")
  removed. The homepage now goes hero → stats → About → Featured
  Audits → pricing teaser.
- `Home.module.css`: the `/* CONFERENCES */` block removed
  (`.confGrid`, `.confCard`, `.confCardMore`, `.confName`, `.confCount`,
  `.confDiv`).
- `Footer.jsx`: the Conferences column removed (Big Ten / ACC / SEC /
  Big 12 links, all `/index?conf=...`). The footer keeps Product and
  Coverage (division) columns; the division links still work because
  the index still honors the `div` param.
- Deliberately untouched: the "10 Conferences" stats (homepage stats
  strip and footer bottom bar) — that is the deferred counts-copy issue
  (26 fields / 10 conferences), not this fix.
- Verified: rendered homepage DOM contains 0 "Conferences in the Index"
  and 0 `/index?conf` links; footer col heads are only Product and
  Coverage; featured row still 3-across at 1280px; build passes (566 kB
  JS); tests school-page 188/188, my-ideas 23/23, news 38/38,
  mobile-nav 30/30, ideas suite exit 0. Remote-vs-local diff for the
  three files is pure deletions of exactly the conference content above.

## Verification

- Tests: school-page 188/188, my-ideas 23/23, news 38/38, mobile-nav
  30/30, ideas suite exit 0 with 0 failures.
- `npm run build` passes (569 kB JS; the >500 kB chunk warning is
  pre-existing).
- Headless-Chromium screenshots (Playwright binary — the meta-chromium
  binary refuses to start here: "Hatch WebGL domain policy is required"):
  homepage desktop 1280px (3-across featured row), homepage mobile 390px
  (1-column stack), index desktop (no conference filter).
- Each changed file was diffed against origin/main (4e50d17, the PR #7
  merge): every diff is exactly the change described above, nothing else.

## Files in this PR (9)

- src/components/SchoolCard.jsx, src/components/SchoolCard.module.css
- src/pages/Home.jsx, src/pages/Home.module.css
- src/pages/Index.jsx
- src/lib/ideas.js, src/pages/Ideas.jsx, src/pages/SchoolDetail.jsx
- scripts/test-school-page.mjs
