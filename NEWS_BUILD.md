# News — feature-story feed (v1: curated snapshot, NOT live RSS)

## 2026-11-20: categories hidden (Zachary)
The schools aren't producing feature-story headlines the way he hoped, so
the category labels are hidden from the page — not deleted. `src/lib/news.js`
(the classifier) and `scripts/test-news.mjs` (classifier + counts) are
untouched; the kinds still classify, they just aren't shown.
- `src/pages/News.jsx`: "Include announcements" toggle removed — the feed
  is now feature-only (85 stories); the "Announcement" kind tag is gone;
  the capture note no longer breaks out announcement/preview/game counts
  ("85 stories from 148 schools"); "Why a feature/story idea" → "Why a
  feature:"; empty state no longer mentions the toggle.
- `src/pages/News.module.css`: `.toggle` and `.kindTag` rules removed.
- `scripts/test-news.mjs`: 7 new guard checks (38 → 45) asserting the page
  contains no `kindTag`, no "Include announcements", no
  `includeAnnouncements`, no `counts.announcement/preview/game`, and that
  the feed filter is `item.kind !== 'feature'`.
- Verified: news 45/45, school-page 207/207, build passes, headless
  screenshot at 1280px shows no toggle, no kind tags, no category counts.
- Reversible in one edit: re-add the toggle + the `item.kind ===
  'announcement'` branch and the announcements return to the feed.

Built 2026-11-14 in the local clone at `~/workspace/varsity-content-build`
(repo `zacharybaehr101/varsity-content`, main, HEAD `7286d6aa`, 2026-06-04,
on top of the idea-search UI and My Ideas from `IDEA_SEARCH_BUILD.md` /
`MY_IDEAS_BUILD.md`).
**Not pushed. Not deployed. Nothing on the live site changed.**

## What changed

### 1. Classifier — `src/lib/news.js` (new)
Pure, rule-based, transparent. `classifyStory(text, category)` returns
`{ kind: 'feature' | 'game' | 'preview' | 'announcement' | 'unclear',
reason }`. Rule order (first match wins):

1. **Feature** — profile (`how` / `inside` / `the story of` / `journey` /
   `legacy` / `Built Through Consistency` / `continues reaching` /
   `From the Desk/Flats` / `letter from` / `spotlight` / tribute
   `mourns the passing/loss`); award/academic (Hall of Fame class or
   inductee, All-American / All-District / All-Region / all-conference,
   Athlete of the Year, finalist, MVP, `academic`, Honor Roll, GPA,
   earns/named honors, named to committee, awards night, postseason /
   weekly awards, named awards incl. Tewaaraton / Heisman / Hermann /
   Wooden / Naismith / Bowerman / Brooks Wallace); coach (extension,
   Coach of the Year, retire from coaching, conclude N seasons leading);
   record (three-peat, breaks school record, record-setting,
   program records, historic three-title, record streak, APR record,
   school-record); **team title** (wins/claims/secures/crowned + 
   championship/title/crown); other (facilities opening, venture
   formation, earns championship invites, national-team invite,
   podcast, coach's update column, cover feature, senior night).
   Category `Feature Story` → feature.
2. **Announcement** — ticket on-sale / season tickets, signing, coaching
   hire, transfer/roster addition, schedule announcement, event
   registration, fan guide, leadership change, departure.
3. **Game** — 1–2 digit scorelines only (`6-5`, `86-72` — `2025-26` is a
   season year, not a score), postgame, recap, wins/beats/defeats/falls/
   loses/advances/sweeps/outlasts/triumphs/pulls away/powers past/surges
   past/stuns/ends with/second loss/punches ticket/championship finish/
   places/finishes/competes on/top seed/secures victory/series opener/
   takes series/dominates/win.
   Game is checked **before** preview, so a result that names an opponent
   ("UCLA Wins 2025-26 Crosstown Cup vs USC") is a game, not a preview.
4. **Preview** — set to/for, sets sights on, prepare for, ready for,
   to face, vs., upcoming, to play … at, preseason poll, notebook column.
5. **Fallback** — award/academic categories (`Award/Accolade`,
   `Awards/Accolades`, `Academic Awards`, `Academic Achievement`) →
   feature, only if no announcement/game/preview fired.
6. **Unclear** — no rule matched.

Two deliberate judgment calls, documented here rather than hidden:
- **Title wins are features, not games.** "CLEMSON WINS 2026 ACC WOMEN'S
  OUTDOOR TRACK & FIELD CHAMPIONSHIP", "Arkansas … Claim SEC Title",
  "Ole Miss … Extends Record Streak" classify as feature (team title /
  record chase) — per the idea-search proof, the title run IS the feature
  angle. A scoreline or an opponent result ("St. John's Stuns No. 10
  Florida State, 6-5") is a game. If Zachary disagrees, the fix is one
  line: drop the `FEATURE_TITLE` table and those 7 items become games.
- **Generic hero brand lines** ("Welcome to Aggieland", "Go Gators:
  Official Hub", "Never Yield: Arkansas Athletics") match no rule and
  land in `unclear`, so they never beat a real headline. The feed picks
  the more feature-like of headline vs hero copy per school
  (feature > announcement > preview > game > unclear, headline on ties).

### 2. Feed model — `buildNewsFeed()` in `src/lib/news.js`
One item per school maximum: `{ id: 'news-<schoolId>-<headline|hero>',
schoolId, schoolName, division, conference, url, title, kind, reason,
sport, evidenceSource, captureDate: '2026-06-03' }`. Sport is normalised
from `Top_Headline_1_Category` (`normalizeSport`): "Track & field" →
"Track & Field", "Men's Basketball" → "Basketball", non-sport categories
(Award/Accolade, Academic Awards, General, Administration…) →
"General Athletics" — the sport a headline is *about* is not in the
Sheet, so it is not guessed. Feed is sorted A–Z by school: the captures
carry no story dates, so nothing is sorted by recency, and the UI says so.

### 3. Counts — verified by `node scripts/test-news.mjs` (31 passed, 0 failed)
Over all 141 schools (best item per school):
- **feature 83, announcement 22, preview 10, game 24, unclear 2** (total 141)
- Unclear (2): Texas Tech "Red Raiders Option out for WCWS Finals"
  (phrasing is genuinely ambiguous) and Whitman "BREAK BEYOND" (a
  tagline, not a story).
- Feature sport split: General Athletics 25, Baseball 15, Track & Field
  15, Tennis 7, Golf 5, Softball 4, Football 3, Soccer 2, Basketball 2,
  Gymnastics 1, Lacrosse 1, Volleyball 1, Softball / Baseball 1,
  Weightlifting / Track & Field 1. The big General Athletics bucket is
  award/academic stories whose category names no sport — a v1 limit.

### 4. The Sheet's labels are wrong — the test proves it, it doesn't hide it
`Top_Headline_1_Category` is mostly a sport name, not a story type, and
the 9 rows that *are* labelled by story type include 4 mislabels:
- **Game Recap (4):** only Michigan State ("Advances to NCAA Finals")
  is a game. Iowa ("… Notebook"), Oregon ("Ready for NCAA
  Championships"), Minnesota ("Sets Sights on Postseason Records") are
  plainly lookahead → preview. The test asserts preview for those three
  and documents the label error.
- **Matchup/Preview (4):** Maryland, Washington, Northwestern are
  previews. Indiana ("Secure Your 2026 Season Football Tickets") is a
  ticket on-sale announcement → announcement. The test asserts that.
- **Feature Story (1):** Wisconsin ("How Taylor Volden…") → feature.
- **Proof track examples:** Dickinson (record chase), Cincinnati (coach
  extension), Mount Marty (All-American), WVU Tech (freshman) → feature.
- **Best-candidate picks:** Notre Dame headline (Tewaaraton award) beats
  its hero ticket ad → feature; Clemson headline (title) beats its hero
  signing → feature; Baylor hero ticket ad beats its postgame headline →
  announcement; Fort Hays headline preview beats its hero result line →
  preview.
- Two classifier bugs found while testing and fixed (not weakened):
  patterns of the form `word .* word` silently required two spaces and
  missed "ADDS TRANSFER", "Named Head Swim Coach", "BREAKS SCHOOL
  RECORD", "Top Preseason … Polls" — all patterns now use
  `\b…\b.*\b…\b`; and the scoreline rule matched the season year
  "2025-26", so it is now 1–2 digit scores only. Notre Dame's Tewaaraton
  win also needed a named-award rule (it fell through to the game rule
  on "win"); adding it moved Notre Dame announcement → feature, which
  is why the counts are 83/22 and not 82/23.

### 5. Borderline calls (kept, with reasons shown in the UI)
- Arizona State "… Hall of Fame Inductee Liz Bogus As Assistant Coach"
  → feature (a Hall of Famer joining staff is a people story; the hire
  itself is secondary).
- Miami "Represented On EA SPORTS College Football 27 Cover" → feature
  (cover story, not a result).
- Utah "Crimson Corner Podcast: Guest Clark Phillips III" → feature
  (podcast/interview).
- Whitworth "Track & field update from Toby Schwarz" → feature (coach's
  update column).
- Queens "Celebrates 2025-26 Success at Annual Awards Night" and
  Briar Cliff "… CELEBRATE STUDENT-ATHLETES AT GRADUATION CEREMONY" →
  feature (awards/graduation celebration).
- Warner "Recognize Standout Class on Senior Night Celebration" →
  feature (senior-night recognition).
- Johns Hopkins "Mourns The Passing of Winston Earle" and Daemen
  "Mourns The Loss Of Bob Lanza" → feature (tribute/memorial).
- LSU / Southeastern / Pittsburg State "Top Seed" → game (postseason
  seeding is a competitive outcome), while Ave Maria / Northwest
  Missouri preseason polls → preview (lookahead ranking).
- IU East "Day 1 Recap", Midway "compete on final day", SMWC "Places
  Third" → game, even though the proof lists them as NAIA track
  examples: they are result reports, and the feed is honest about that.

### 6. UI — `src/pages/News.jsx` + `News.module.css` (new)
Route `/news` in `src/App.jsx`; "News" link in the Navbar.
- Header: "Feature stories, not game stories" + the honest subhead
  "A snapshot feed, not live RSS: these are the headlines as captured
  on June 3, 2026. Live RSS is planned."
- Counts line: 83 feature stories from 141 schools, with the held-out
  announcements / previews / games named, and the A–Z sorting note.
- Filters: text search, sport, division, conference, and an
  "Include announcements (22)" checkbox — announcements are idea-worthy
  (ticket on-sales, schedule releases) but not features, so they are
  out by default and opt-in.
- Each card: sport tag, title, school + division/conf, "Why a feature"
  reason line, evidence source + capture date, "Save as idea" (uses
  `ideaFromEvidence` + `myIdeas.toggleSave`, so it lands in My Ideas
  with the correct ideaKey and shows ✓ Saved), "View school", and a
  link to the school's own site. First 12 + "Show all N stories".
  Empty state when filters exclude everything.
- Weave (tight scope only): "Browse the feature-story feed →" link in
  the Ideas page header and in the My Ideas empty state. No other
  pages redesigned.

### 7. v2 — live RSS aggregator spec (NOT built)
What a true live feed needs, and why it is not this build:
- **Per-school RSS URL discovery.** The Sheet has no RSS column.
  Sidearm schools typically expose `https://<site>/rss.aspx` (and
  per-sport feeds like `/sports/<sport>/rss`), PrestoSports and WMT
  have their own feed paths, and some schools have none. Each of the
  141 URLs must be discovered and stored (new Sheet column or a
  `src/data/rssFeeds.js` map) — that discovery work is the bulk of v2.
- **Serverless aggregator.** The browser cannot fetch 141 feeds
  directly (CORS, and 141 requests per page load). Design: a Vercel
  serverless function (`/api/news`) that fetches the feed list,
  parses each feed (RSS 2.0 / Atom), runs the *same*
  `classifyStory()` rules from `src/lib/news.js` on each item's title,
  keeps features (+ announcements), and returns JSON. Cache the result
  (Vercel KV / Blob, or a committed `public/news.json`) so the page
  reads one file, not 141 feeds.
- **Refresh cadence.** A Vercel Cron (e.g. hourly, weekdays) that
  re-runs the aggregator and rewrites the cache. Story dates then come
  from each item's `pubDate` — real dates, so the feed can sort by
  recency for the first time.
- **Blocked right now:** Vercel project access is still 403 for team
  scope "zjb" (`team_tqbhgA1cUAKfRcOtbeq8rhQe`) — no project, no
  serverless function, and no cron can be created until that team
  access is effective for Muse. Also: no feed fetching happens in the
  v1 page at all, by design.

## Verification
- `node scripts/test-news.mjs` — **31 passed, 0 failed** (labelled-row
  assertions incl. the 4 documented mislabels, proof track examples,
  best-candidate picks, sport normalisation, feed shape, exact counts).
- `node scripts/test-ideas.mjs` — still passes (idea search unaffected).
- `node scripts/test-my-ideas.mjs` — **23 passed, 0 failed** (unchanged).
- `npm run build` — **passes** (Vite 8, 48 modules, JS 492 kB / 136 kB gzip).
- **Not verified in a live browser:** no click-through of `/news`, the
  filters, the announcement toggle, or the Save-as-idea button. That
  needs a parent-agent browser check before Zachary reviews it.

## Deliberately NOT done
- No live RSS, no backend, no serverless function, no cron, no feed
  fetching in the page (see v2 spec above).
- No story dates / URLs / authors / excerpts invented. No scores,
  grades, or rankings. No social evaluations.
- No /compare, /about, /methodology, /contact, /submit, newsletter,
  Resend, /api. The 16 vs 26 fields / 12 vs 10 conferences counts fix
  stays deferred, untouched.
- No push to GitHub, no Vercel deploy. Vercel project access still
  blocked (403, team scope "zjb") and was not touched.

## To review / push (run these yourself — not run during this build)
```bash
cd ~/workspace/varsity-content-build
git status
git diff src/App.jsx src/components/Navbar.jsx src/pages/Ideas.jsx src/pages/MyIdeas.jsx
npm run build
node scripts/test-news.mjs
git checkout -b news-feed
git add src scripts NEWS_BUILD.md
git commit -m "Add News: feature-only feed from June 2026 captures, rule-based classifier, v2 live-RSS spec"
git push -u origin news-feed
```
Then open a pull request on GitHub for review before merging to main.
Note: the clone currently also holds the uncommitted idea-search and
My Ideas work (draft PRs #1 and #2); a `news-feed` branch cut from
main would need those merged first, or this branch stacks on
`my-ideas-checklist` instead.
