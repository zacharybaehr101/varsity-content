# Capture-only rollout — 278 D-I schools listed (2026-11-20/21)

Zachary's "March to 278": the remaining Division I schools join the site
as capture-only records (ids 157–434), same shape as the ASUN proof
(PR #12, merged). The site goes 156 → **434 schools listed (148
audited)**; D-I is now 365/365 listed, not just captured. No push yet —
this build is verified locally for the parent to push as draft PR #13.

## Scope

26 conferences, 278 schools, in this ID order (conference order fixed
at assembly; sweep-file order within each conference):

| Conference | IDs | Date | Conference | IDs | Date |
|---|---|---|---|---|---|
| SWAC | 157–168 | Nov 20 | CUSA | 292–301 | Nov 20 |
| Southland | 169–180 | Nov 20 | Missouri Valley | 302–312 | Nov 20 |
| MAC | 181–192 | Nov 20 | Patriot League | 313–322 | Nov 20 |
| Horizon League | 193–204 | Nov 20 | Big South | 323–331 | Nov 20 |
| Big West | 205–216 | Nov 20 | MEAC | 332–339 | Nov 20 |
| Northeast | 217–225 | Nov 20 | Mountain West | 340–349 | Nov 20 |
| Ivy League | 226–233 | Nov 20 | United Athletic | 350–358 | Nov 20 |
| Ohio Valley | 234–242 | Nov 20 | Pac-12 | 359–367 | Nov 14 |
| Southern | 243–253 | Nov 20 | Atlantic 10 | 368–381 | Nov 14 |
| Summit League | 254–261 | Nov 20 | Sun Belt | 382–395 | Nov 14 |
| West Coast | 262–271 | Nov 20 | MAAC | 396–408 | Nov 14 |
| America East | 272–280 | Nov 20 | CAA | 409–421 | Nov 14 |
| Big Sky | 281–291 | Nov 20 | American | 422–434 | Nov 14 |

Sources: the 20 `varsity-*-sweep-2026-11-20.md` files (202 schools) and
the 6 `varsity-*-sweep-2026-11-14.md` files (76 schools) in
`~/workspace/user/files/`. Eight writer subagents worked in parallel
(one per conference group); assembly validated every fragment before
writing: conference sequences, school/liveNotes name alignment via the
`// <Team Name>` comments, field rules, no duplicate names, no name
already listed. **Zero schools skipped** — all 278 sweep schools were
unlisted. Fragments kept at `~/workspace/capture-only-fragments/`
(`a`–`f`, `g1`, `g2` schools + liveNotes).

## What a record carries (ASUN shape, unchanged)

Per record: name (team name), conf, div Division I, cms, url (bare
domain), hero narrative, heroCopy + headline verbatim from the sweep,
headlineCategory only where the sweep states the sport, streaming (the
provider named, or "None named"), hasNIL (true only where a link
exists, incl. menu-only), hasTickets, hasLiveStream (true only where a
live-video link was observed), hasVideo / hasGalleries as observed,
captureDate, captureOnly: true. Editorial (love/strengths/areas + Full)
is empty; the page renders "Full audit coming". Unrecorded fields are
omitted and render '—'. liveNotes entries are the same homepage-only
shape as the ASUN 8 (media + four pillars + steal; roster/giving lines
say plainly those pages were not visited). New constant in liveNotes.js:
`CAPTURE_ONLY_DATE_NOV14 = '2026-11-14'` — Nov 14 schools are NOT
labelled with the Nov 20 date.

CMS across the 286 capture-only records: Sidearm Sports 276, WMT Digital
7 (New Mexico, San Jose State, Little Rock, Washington State, San Diego
State, Old Dominion, UTSA), PrestoSports 2 (Central Connecticut State,
Tennessee Tech), omitted 1 (Seattle — no CMS credit on the newer build).

## Nov 14 extra fields

The Nov 14 sweeps are richer than the Nov 20 ones, so those records
also carry, where the sweep states them: ticketWeight (verbatim, Pac-12
only — the A-10/Sun Belt/MAAC/CAA/American sweeps state no ticketWeight
value), mobileSticky ("Yes"/"No" where stated, "" otherwise),
hasScoreboard (true if any scoreboard/schedule-with-scores is present,
top strip or mid-page/rail carousel with results; false only where the
sweep says none), scoreboardPosition ("Top" only where the sweep says
top strip, otherwise omitted), hasMerch, hasRecruiting. Omitted
everywhere: navCount, heroAssetType, lazyLoading, genderBalance,
screenshotFile — not recorded in a form the page can use, never guessed.

## Field-mapping decisions and fixes at assembly

- **themeFor reorder (src/lib/schoolPage.js).** The writers found that
  the instructed "Gameday Hub" narrative lands Game action, not
  Identity / brand: themeFor checked `game`/`action`/`match` before
  `gameday`/`hub`, and "Gameday" contains "game". The Identity / brand
  theme line explicitly covers "a slogan or a gameday hub", so the
  gameday/hub check now runs before the generic game check. Impact
  verified programmatically against the old order: all 33 "Gameday Hub"
  records now land Identity / brand, and exactly ONE audited school
  changes — Nebraska-Kearney Lopers ("Gameday Coverage", Game action →
  Identity / brand), which is a correction under the same wording, not
  a regression. Test spot-checks added for both.
- **Eastern Washington (id 281).** The writer left heroCopy and headline
  both "" ("no headline copy on first paint"). The sweep itself quotes
  the three promo tiles verbatim, so heroCopy is now the first tile:
  "Football Season Tickets Available Now". Headline stays "" — no story
  headline exists in the sweep. Every capture-only school now has at
  least one of heroCopy/headline; 272 have both.
- **Headline "" (6):** Eastern Michigan, Kansas City, Omaha, Eastern
  Washington, Abilene Christian, Eastern Kentucky — promo/ad heroes
  with no verbatim story headline in the sweep. **heroCopy "" (8):**
  Bethune-Cookman, Northwestern State, UIC, Northern Iowa, Monmouth,
  North Carolina A&T, Memphis, Charlotte — image-only heroes.
- **Wichita State hasGalleries true → false** (writer-flagged): the
  sweep says the gallery link is menu-only, no on-page section.
- **Delaware "Fightin' Blue Hens" → "Delaware Blue Hens"** (site
  naming convention; "Fightin'" is the formal nickname).
- **Corrected URLs:** Texas State txst.com (not txstbobcats.com);
  Utah Valley gouvu.com (not gowolverines.com); West Georgia
  uwgathletics.com (uwgwolves.com does not resolve); Maryland Eastern
  Shore umeshawksports.com.
- **Streaming strings use the sweep's literal naming**, even where it
  isn't "ESPN+": "Ivy League on ESPN", "ESPN" (USI, UMBC, New
  Hampshire, Bradley), "SoCon Digital Network", "Summit League Network",
  "MW+", "NEC Front Row", "KnightVision", "FloCollege"/"FloSports",
  "SWAC TV", "MEAC Network", "HBCU League Pass+ / HBCU GO",
  "Broncos All-Access", "AggieVision", "Hilltopper Sports Network",
  "CBS Sports Network", "The American Digital Network". In-house
  networks (Jaguar Sports Network, TSU Sports Network, Bulldog Vision)
  count as "None named", matching the ASUN precedent.
- **hasNIL true on thin links** (per "link exists, including menu-only"):
  e.g. West Georgia (footer-only menu link — thinnest call), USC
  Upstate counted false ("NIL Disclosure" link only, sweep calls it
  effectively absent), Ohio false (NIL Exchange named in page text but
  no visible link found).
- **Team-name short forms** (site convention): Penn Quakers, SIUE
  Cougars, UT Martin Skyhawks, Kansas City Roos, Omaha Mavericks,
  LIU Sharks, Long Beach State Beach, Louisiana Ragin' Cajuns,
  Louisiana–Monroe Warhawks (en dash as in the sweep).

## Counts — audited vs listed, kept honest (already wired by PR #12)

- Home stats strip and hero still say 148 Schools Audited (computed).
  "See all N schools" is now the listed count (434). Index header:
  "… — 434 schools listed." Pricing directory: "Full school
  directory (434 schools)".
- News feed: one item per school, so the feed is 434 items; feature 105,
  announcement 55, preview 35, game 99, unclear 140 (recomputed from
  the classifier's real output, not guessed). The 278 rollout schools
  classify as feature 20, announcement 33, preview 24, game 74,
  unclear 135. The unclear bucket is large because most capture-only
  headlines are game recaps phrased in ways no rule covers ("FALLS
  TO", "TOPS", berth announcements, ticket promos) — pre-existing
  classifier behaviour, not retuned in this rollout.
- Test scoping fix: the Sheet-count checks (mobileSticky No 20 / Yes
  128, heroAssetType "Image" 112, scoreboardPosition "Top" 102) are
  now scoped to the 148 audited schools — Nov 14 capture-only records
  carry mobileSticky/scoreboardPosition where the sweep recorded them
  (all-schools "Top" would read 135), and must not pollute Sheet counts.

## Tests

- school-page: **320 passed, 0 failed** (was 315 — liveNotes loop now
  covers 296 schools; new capture-only checks: count 286, all D-I,
  editorial empty, heroCopy-or-headline present, both present 272,
  ids 149–434 with no gaps, CMS 276/7/2/1, per-conference counts;
  Gameday Hub → Identity / brand spot check).
- news: **45 passed, 0 failed** (counts recomputed: 105/55/35/99/140
  over 434; unclear list is the 140 names the classifier has no rule
  for). my-ideas 23/23, mobile-nav 30/30, test-ideas exit 0.
- Build passes (1,185,758 bytes JS, gzip 295 kB; >500 kB chunk warning
  pre-existing — the bundle grew from 584 kB because 278 more schools'
  data now ships in it).

## Visual check (local headless Chromium, vite preview :4173)

- /school/157 (Alabama A&M, first new school) at 1280px + 390px:
  live-capture line 2026-11-20, "ROCKET CITY'S ONLY D1 PROGRAM" quote,
  Identity / brand emphasis, 3 pending editorial blocks, sidebar '—'
  for unrecorded fields, SWAC TV / NIL Yes / Tickets Yes.
- /school/359 (Utah State, first Nov 14 school) at 1280px + 390px:
  live-capture line **2026-11-14** (right date), verbatim promo-rotator
  heroCopy, Ticket Promotion narrative, Has Live Scoreboard Yes (from
  the Nov 14 scoreboard mapping), Scoreboard Position '—' (mid-page
  carousel), Streaming "None named", NIL No.
- Homepage: "148 Schools Audited" + "See all 434 schools". Index:
  "434 schools listed". No "undefined" and no 2026-06-03 on any
  checked page.

## Known loose ends

- The news classifier's unclear bucket is now 140 (was 8) — honest
  output for headlines no rule covers; retuning it is a separate
  decision, not part of this rollout.
- "10 Conferences" / "26 Data Fields" stats untouched (deferred
  counts-copy issue). Pricing FAQ still says every audit covers 26
  data fields; capture-only pages carry fewer.
- Pre-existing local-tree drift, NOT part of this rollout and NOT to
  be pushed with it: `src/components/Footer.module.css` and
  `src/components/Navbar.module.css` differ from origin/main (e6e2f6c)
  — the local files carry font sizes ~2px larger (e.g. 13px where main
  has 11px), last modified Nov 14, untouched in this session. Only the
  5 rollout files + this build note belong in PR #13.
- Rollout complete: D-I is 365/365 listed. The audit dashboard artifact
  is still stale (shows 215/365) and parked by Zachary's word.
