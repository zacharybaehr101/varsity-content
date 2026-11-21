# ASUN capture-only proof — build note (2026-11-20)

Proof of the capture-only listing shape, for Zachary's "one conference as
proof first" pick: the ASUN's 8 schools (ids 149–156) join the site from
the Nov 20 live sweep only — no Sheet row, no full editorial audit yet.
If he likes the shape, the same pattern rolls to the other 278 D-I
schools not yet listed (286 total; site goes 148 → 434).

## What a capture-only record carries

Source: `~/workspace/user/files/varsity-asun-sweep-2026-11-20.md`
(8/8 captured live Fri Nov 20, 2026, all Sidearm).

Per record (schools.js): id, name (team name), conf ASUN, div Division I,
cms Sidearm Sports, url, hero (narrative mapped so themeFor lands on the
right emphasis theme), heroCopy + headline (verbatim from the sweep),
headlineCategory (sport, only where the sweep states it — Queens is ""),
streaming ("ESPN+" where named, "None named" where no provider appears),
hasNIL (true only where a link exists, even menu-only: FGCU, Stetson,
North Florida), hasTickets (true all 8 — header link/button at 7, menu
button + promos at West Florida), hasLiveStream (true only where a live
video link was observed: Bellarmine, FGCU, Jacksonville, West Florida),
hasVideo / hasGalleries (observed presence, incl. stale), captureDate
2026-11-20, captureOnly: true.

Deliberately NOT in the records: navCount, heroAssetType, hasScoreboard,
scoreboardPosition, genderBalance, lazyLoading, hasMerch, hasRecruiting,
screenshotFile, headlineTone — the sweep didn't record them, so they are
omitted (undefined) and the page renders '—' rather than inventing a value.
love / strengths / areas (+ Full) are empty strings; the page renders a
pending line instead of empty blocks.

## Rendering (captureOnly)

- SchoolDetail: header capture line reads "Live capture 2026-11-20 ·
  homepage only — full audit coming". The three editorial blocks show
  "Full audit coming — this page shows the live capture from 2026-11-20."
  with no save lightbulb and no checklist button (there is no gap text to
  add). Ideas from this school still render — they derive from the verbatim
  hero copy / headline, so they are traced to the capture, and their
  captureDate is now the school's own date (see below).
- Sidebar / compare / pillars: unknown fields render '—' (navCount,
  scoreboard, merch, recruiting, hero asset, ticket weight, mobile sticky).
  pillarSignals no longer claims the standard high-contrast ticket button
  when no weight was recorded, and no longer claims player pages carry the
  visuals when no galleries were observed on a capture-only page.
- SchoolCard (index + featured): love/areas show the pending line for
  capture-only schools; the nav badge hides when navCount is unknown.
- liveNotes.js: 8 new entries (149–156) in the missing-7 homepage-only
  shape — media (audio/video/photos/social) and pillars, with roster and
  giving lines saying plainly those pages were not visited. audited:
  CAPTURE_ONLY_DATE ('2026-11-20'). Steals are the sweep's own stealable
  findings (FGCU By The Numbers strip, Stetson Tickets/Donate/Shop bar,
  West Florida D-I transition story, etc.).

## Counts — audited vs listed, kept honest

- Home stats strip and hero still say 148 Schools Audited (audited count
  is now computed: schools without captureOnly). "See all N schools" is
  now the listed count (156).
- Index header: "Independent UX audits of 148 collegiate athletics
  websites — 156 schools listed."
- Footer stat: "148 Schools Audited". Pricing directory line: "Full school
  directory (156 schools)"; Pricing FAQ audit count stays 148 (dynamic).
- News feed: one item per school, so the feed is 156 items; feature 86
  (was 85 — FGCU's By The Numbers strip classifies feature), announcement
  24, preview 11, game 27, unclear 8. The 8 ASUN items classify as
  feature 1, announcement 2, game 2, unclear 3 (see test-news.mjs).
- ideaFromEvidence / getIdeaByKey / searchIdeas and buildNewsFeed now use
  `school.captureDate || CAPTURE_DATE` instead of the June constant, so
  ASUN ideas and news items carry 2026-11-20. The 148 audited schools are
  unaffected (their captureDate is 2026-06-03).

## Tests

- school-page: 315 passed, 0 failed (was 207 — liveNotes loop now covers
  18 schools; new capture-only checks: count 8, all ASUN/D-I/Sidearm,
  editorial empty, heroCopy+headline present, ids 149–156; theme spot
  checks for FGCU/Jacksonville/North Florida; FGCU ideas carry 2026-11-20).
  Sheet-only field checks are scoped to the 148 audited schools.
- news: 45 passed, 0 failed. my-ideas 23/23, mobile-nav 30/30,
  test-ideas exit 0. Build passes (584 kB JS; >500 kB chunk warning
  pre-existing).

## Visual check (local headless Chromium, 1280px + 390px)

- /school/150 (FGCU): live-capture line, By The Numbers quote, Celebration
  / title emphasis, 3 pending editorial blocks, sidebar '—' for unrecorded
  fields, ESPN+ / NIL Yes / Tickets Yes, live notes + steal rendering.
- /school/149 (Bellarmine): "Streaming Platform: None named", NIL No,
  same pending shape. No "undefined" and no 2026-06-03 anywhere on either
  page. Mobile 390px renders the same content.

## Known loose ends

- The classifier calls Lipscomb's "VOLLEYBALL WINS THREE ASUN
  SUPERLATIVE AWARDS" a game (the wins verb reads as a result) and North
  Florida's record-breaking headline unclear — pre-existing classifier
  behaviour, not retuned in this proof.
- "10 Conferences" / "26 Data Fields" stats are untouched (deferred
  counts-copy issue, as before).
- Pricing FAQ still says every audit covers 26 data fields; capture-only
  pages carry fewer fields — the proof does not change that copy.
- Rollout: same pattern per conference (records + liveNotes + tests +
  counts move on their own). 278 D-I schools remain after the ASUN.
