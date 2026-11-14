# Missing-7 build — add the 7 Sheet rows not on the site (2026-11-14)

## What this does

The site had 141 schools; the Sheet has 148. The 7 missing rows are now
records 142–148 in `src/data/schools.js`, so the site is 148 schools,
MIAA is complete (12 of 12), and the SEC is complete (16 of 16).

| id | School | Conf | Div |
|----|--------|------|-----|
| 142 | Missouri Southern Lions | MIAA | Division II |
| 143 | Newman Jets | MIAA | Division II |
| 144 | Rogers State Hillcats | MIAA | Division II |
| 145 | Central Missouri Mules | MIAA | Division II |
| 146 | Washburn Ichabods | MIAA | Division II |
| 147 | Central Oklahoma Bronchos | MIAA | Division II |
| 148 | Alabama Crimson Tide | SEC | Division I |

Ids follow Sheet order. Alabama is last by Sheet position, not by
priority — the audit recommended Alabama first, but the restore is one
atomic operation, so Sheet order is the reproducible rule.

## How the records were built

`scripts/restore-idea-fields.mjs` no longer skips Sheet rows that have
no `schools.js` entry. It now creates them, in Sheet order, with the
next free ids. A new record is built entirely from its Sheet row:

- The 15 base keys come from Sheet columns: `url` is the bare domain
  (protocol stripped), `div` is normalized by stripping a leading
  "NCAA " (Sheet says "NCAA Division II", the site says "Division II"),
  `navCount` is parsed as an integer, `hasNIL` / `hasTickets` /
  `hasLiveStream` are Yes/No → boolean.
- The 20 restored fields come from the same columns as the match path
  (same `enrich()` function, refactored out of the match loop).
- Re-running the script is idempotent: second run reported 148 matched,
  0 created.

The one judgment call: `love` / `strengths` / `areas` for a new record
are the **verbatim Sheet texts** (same value as the `*Full` keys). The
original 141 records carry hand-written summaries in those keys and the
full Sheet text in `loveFull` / `strengthsFull` / `areasFull`, but no
summary exists for the 7, and inventing one would not be verbatim. The
Sheet texts for the 7 are short single sentences (112–134 chars), so
the detail page shows the full editorial sentence where the 141 show a
summary. Documented here and in the script header so it can be revisited.

## Live notes for the 7

`src/data/liveNotes.js` gains entries 142–148 from the Nov 14
homepage audits
(`~/workspace/user/files/varsity-missing-7-audit-2026-11-14.md`).
These are **homepage-only** audits — the roster and giving pages were
not visited — so those two pillar lines say so plainly instead of
inventing findings. Media (audio/video/photos/social) and tickets and
sport-hub lines are all traced to the audit. The 3 fully audited
schools (13, 65, 112) are unchanged. Live notes now cover 10 schools.

## Counts updated (141 → 148)

The homepage stats, the "See all 141 schools" index link, the footer
"141 Schools" stat, and the Pricing page's "141+" lines now say 148.
These are data-derived counts that changed because the data changed —
they are not the deferred 26-fields / 10-conferences question. The
"26 Data Fields" stat, the "26 Tracked Fields" feature line, and the
Pricing FAQ's "26 data fields" claim are **untouched**; that decision
is still deferred.

## News feed

The 7 new schools classify as: feature 2 (Rogers State academic
honours, Washburn conference title), preview 1 (Central Oklahoma —
its hero copy "Broncho Football Prepares for Opener" beats the
headline staff addition, the same best-candidate behaviour as Baylor),
game 1 (Missouri Southern sweep), unclear 3 (Alabama "Secures
Top-Seed Berth", Central Missouri "Shines At National Preview Meet",
Newman "Soar Past Opponent"). New counts: feature 85, announcement
22, preview 11, game 25, unclear 5 (total 148). The classifier was
**not** retuned — the unclear bucket saying "needs a human look" is
the honest output for all three, and adding a "soar past" game rule
is a possible future tweak, not part of this change. Seven new
per-school checks were added to `test-news.mjs` documenting each one.

## Verification

- Restore run: Sheet rows 148, matched 141, created 7, 0 skipped.
  Second run: 148 matched, 0 created (idempotent).
- All 7 records: 35 keys, no missing/empty fields; spot values match
  the Sheet (div, conf, url, navCount, mobileSticky, galleries,
  captureDate, screenshot file). Original 141 records JSON-identical
  to main (only the UDC line gained a trailing comma).
- Sticky tickets now 20 No / 128 Yes (was 14/127) — all 20 No schools
  are on the site. Galleries 75 Yes / 73 No (was 69/72). MIAA 12,
  SEC 16. Conferences still 12.
- Idea search: ticket top 8 still contains all 8 proven results
  (41 results, was 40); track proven missing list unchanged
  (Clemson #9, IU Kokomo #12, Arkansas #19 — same ranks as before).
- `node scripts/test-ideas.mjs` — top-8 checks hold (print-only suite).
- `node scripts/test-my-ideas.mjs` — 23 passed, 0 failed.
- `node scripts/test-news.mjs` — 38 passed, 0 failed.
- `node scripts/test-school-page.mjs` — 184 passed, 0 failed.
- `node scripts/test-mobile-nav.mjs` — 30 passed, 0 failed.
- `npm run build` passes (Vite, JS 570 kB).

## Deliberately not done

- No real screenshots — the 7 pages show the screenshot file name and
  the placeholder image, like the other 141.
- No full pillar audits (tickets/sport/roster/giving pages) for the 7 —
  their live notes are homepage-only. A pillar run would deepen them.
- No change to the paywall, /compare, or the 26-field/10-conference
  marketing copy (still deferred).
- The "Radio/TV Information" one-click check for Alabama's SECN+/ESPN+
  field was not done in the audit; the Sheet value stands.
