// News feed — a curated, feature-only feed from the verified June 2026
// captures. NOT live RSS: there is no feed in the repo, no backend, and no
// serverless aggregator yet (see NEWS_BUILD.md for the v2 live-RSS spec).
// Every item traces to a real school, a real Sheet headline / hero copy,
// and the 2026-06-03 capture. No story dates, URLs, authors, or excerpts
// are invented — each item links only to the school's detail page and the
// school's own site. No scores, grades, or rankings.
//
// The classifier is rule-based and transparent on purpose. The Sheet's
// Top_Headline_1_Category is mostly a SPORT name (Baseball 28, Track &
// Field 19…), not a story type — only 1 row is labelled 'Feature Story',
// 4 'Matchup/Preview', 4 'Game Recap' — so category alone cannot filter.
// Worse, several of those labels are wrong on their face: Oregon's
// "Ducks Track & Field Ready for NCAA Championships" is labelled Game
// Recap, and Indiana's "Secure Your 2026 Season Football Tickets" is
// labelled Matchup/Preview. So the classifier works from headline TEXT,
// with the category used only as a weak fallback (see below).
//
// Rule order matters (first match wins):
//   feature (profile / award / coach / record / title / other)
//   → announcement → game → preview → award-category fallback → unclear
// Game is checked BEFORE preview so a result that mentions an opponent
// ("UCLA Wins 2025-26 Crosstown Cup vs USC") is a game, not a preview.
// Championship / title wins ("CLEMSON WINS 2026 ACC … CHAMPIONSHIP")
// classify as FEATURE, not game: per the idea-search proof the title run
// is the feature angle (team title / record chase), while a scoreline or
// an opponent result ("St. John's Stuns No. 10 Florida State, 6-5") is
// a game. That is a deliberate judgment call — see NEWS_BUILD.md.

import { schools } from '../data/schools.js'
import { CAPTURE_DATE } from './ideas.js'

export { CAPTURE_DATE }

// --- Rule tables: [pattern, reason] ---------------------------------------
// Patterns use \b…\b.*\b…\b (never "word .* word" with literal spaces on
// both sides — that silently requires two spaces and misses matches).

const FEATURE_PROFILE = [
  [/\bhow\b/i, 'profile — "how" story'],
  [/\binside\b/i, 'profile — "inside" story'],
  [/\bthe story of\b/i, 'profile — "the story of"'],
  [/\bjourney\b/i, 'profile — journey'],
  [/\blegacy\b/i, 'profile — legacy'],
  [/\bbuilt through consistency\b/i, 'profile — "Built Through Consistency"'],
  [/\bcontinues? reaching for greater heights\b/i, 'profile — "continues reaching"'],
  [/\bfrom the (desk|flats)\b/i, 'column — "From the Desk/Flats"'],
  [/\bletter from\b/i, 'column — letter from the AD'],
  [/\bspotlight\b/i, 'spotlight feature'],
  [/\bmourns? the (passing|loss)\b/i, 'tribute/memorial'],
]

const FEATURE_AWARD = [
  [/\bhall of fame (class|inductee)\b/i, 'award — Hall of Fame'],
  [/\b(inducted|named)\b.*\bhall of fame\b/i, 'award — Hall of Fame'],
  [/\ball-america/i, 'award — All-American'],
  [/\ball-district\b/i, 'award — All-District'],
  [/\ball-region\b/i, 'award — All-Region'],
  [/\ball-(sec|big|miaa|east|conference)\b/i, 'award — all-conference honours'],
  [/\bathlete of the year\b/i, 'award — Athlete of the Year'],
  [/\bfinalist\b/i, 'award — finalist'],
  [/\b(tewaaraton|heisman|hermann trophy|wooden award|naismith|bowerman|brooks wallace)\b/i, 'award — named award (Tewaaraton / Heisman / etc.)'],
  [/\bmvp\b/i, 'award — MVP'],
  [/\bacademic\b/i, 'academic honours'],
  [/\bhonor roll\b/i, 'academic — Honor Roll'],
  [/\bgpa\b/i, 'academic — GPA'],
  [/\b(earn|earns|earned|named|tabbed|selected)\b.*\bhonors?\b/i, 'award — earns/named honors'],
  [/\bnamed\b.*\b(committee|board)\b/i, 'appointment — named to committee'],
  [/\bawards? night\b/i, 'awards night'],
  [/\bpostseason awards?\b/i, 'award — postseason awards'],
  [/\bcelebrat\w*\b.*\b(success|graduation|student-athletes)\b/i, 'celebration — graduation/awards'],
  [/\bweekly awards?\b/i, 'award — weekly awards'],
]

const FEATURE_COACH = [
  [/\bextends?\b.*\bcoach\b/i, 'coach — extension'],
  [/\bcoach of the year\b/i, 'coach — Coach of the Year'],
  [/\bto retire from coaching\b/i, 'coach — retirement'],
  [/\bconclude\b.*\bseasons leading\b/i, 'coach — concluding seasons'],
]

const FEATURE_RECORD = [
  [/\bthree.?peat\b/i, 'record chase — three-peat'],
  [/\bbreaks?\b.*\bschool record\b/i, 'record — breaks school record'],
  [/\brecord-setting\b/i, 'record — record-setting'],
  [/\brecord-breaking\b/i, 'record — record-breaking'],
  [/\bsets?\b.*\bprogram\b.*\brecords?\b/i, 'record — program records'],
  [/\bhistoric\b.*\bthree-title\b/i, 'record — historic three-title'],
  [/\brecord streak\b/i, 'record — record streak'],
  [/\bestablishes?\b.*\bapr record\b/i, 'record — APR record'],
  [/\bschool-record\b/i, 'record — school record'],
]

const FEATURE_TITLE = [
  [/\bwins?\b.*\b(championship|title|crown)\b/i, 'team title — wins championship/title'],
  [/\bclaims?\b.*\b(title|championship|crown)\b/i, 'team title — claims title'],
  [/\bsecure\b.*\b(crown|title|championship)\b/i, 'team title — secures crown/title'],
  [/\bcrowned\b.*\bchampion/i, 'team title — crowned champions'],
  [/\bcomplete\b.*\brun to secure\b.*\b(crown|title)\b/i, 'team title — perfect run to crown'],
]

const FEATURE_OTHER = [
  [/\bto open\b.*\b(club|facility)\b/i, 'facilities — new club/facility opening'],
  [/\bformation of\b/i, 'venture — formation'],
  [/\bearn\b.*\binvites?\b/i, 'award — earns championship invites'],
  [/\binvite to (train|join|compete) with\b.*\bnational team\b/i, 'national-team invite'],
  [/\bpodcast\b/i, 'podcast/interview feature'],
  [/\bupdate from [A-Z][a-z]+ [A-Z][a-z]+\b/, "coach's update column"],
  [/\brepresented on\b.*\bcover\b/i, 'cover feature'],
  [/\bsenior night\b/i, 'senior-night recognition'],
]

// Categories that lean feature — used only as a fallback, after
// announcement / game / preview have had their say.
const FEATURE_CATEGORY = new Set([
  'feature story',
  'award/accolade',
  'awards/accolades',
  'academic awards',
  'academic achievement',
])

const ANNOUNCE = [
  [/\btickets? (on sale|now available|available)\b/i, 'ticket on-sale announcement'],
  [/\bon sale\b/i, 'on-sale announcement'],
  [/\bsecure your\b.*\btickets?\b/i, 'ticket announcement'],
  [/\bseason tickets?\b/i, 'season-ticket announcement'],
  [/\bannounces?\b.*\bsigning\b/i, 'signing announcement'],
  [/\bsigns?\b.*\bto\b.*\broster\b/i, 'signing announcement'],
  [/\badds?\b.*\bas\b.*\b(assistant|associate) coach\b/i, 'coaching hire'],
  [/\badds?\b.*\btransfer\b/i, 'transfer addition'],
  [/\badds?\b.*\bto\b.*\broster\b/i, 'roster addition'],
  [/\bnamed\b.*\b(head|assistant)\b.*\bcoach\b/i, 'coaching hire'],
  [/\bannounces?\b.*\bschedule\b/i, 'schedule announcement'],
  [/\bunveils?\b.*\bschedule\b/i, 'schedule announcement'],
  [/\breleases?\b.*\bschedule\b/i, 'schedule announcement'],
  [/\breveals?\b.*\bschedule\b/i, 'schedule announcement'],
  [/\bschedule (loaded|released|announced)\b/i, 'schedule announcement'],
  [/\bregister( now)?\b/i, 'event registration'],
  [/\bmovie knight\b/i, 'event announcement'],
  [/\bgolf outing\b/i, 'event announcement'],
  [/\bknow before you go\b/i, 'fan guide'],
  [/\binformation$/i, 'event information'],
  [/\bleadership change\b/i, 'leadership change'],
  [/\bleaving\b.*\bfor\b/i, 'personnel move — departure'],
]

const GAME = [
  // 1–2 digit scorelines only: "2025-26" is a season year, not a score.
  [/\b\d{1,2}\s*-\s*\d{1,2}\b/, 'game — scoreline'],
  [/\bpostgame\b/i, 'game — postgame'],
  [/\brecap\b/i, 'game — recap'],
  [/\bwins?\b/i, 'game — wins'],
  [/\bbeats?\b/i, 'game — beats'],
  [/\bdefeats?\b/i, 'game — defeats'],
  [/\bdefeated\b/i, 'game — defeated'],
  [/\bfalls?\b/i, 'game — falls'],
  [/\bloses?\b/i, 'game — loses'],
  [/\badvances?\b/i, 'game — advances'],
  [/\bsweeps?\b/i, 'game — sweeps'],
  [/\boutlasts?\b/i, 'game — outlasts'],
  [/\btriumphs?\b/i, 'game — triumphs'],
  [/\bpulls? away\b/i, 'game — pulls away'],
  [/\bpowers? past\b/i, 'game — powers past'],
  [/\bsurges? past\b/i, 'game — surges past'],
  [/\bstuns?\b/i, 'game — stuns'],
  [/\bends? with\b/i, 'game — ends with'],
  [/\bsecond loss\b/i, 'game — second loss'],
  [/\bpunches? ticket\b/i, 'game — punches ticket'],
  [/\bposts?\b.*\bfinish\b/i, 'game — championship finish'],
  [/\bfinishes?\b.*\b(final round|her season|12th|third|ninth-place)\b/i, 'game — finish result'],
  [/\bplaces? (third|second|first|ninth)\b/i, 'game — places'],
  [/\bcompete(s)? on\b/i, 'game — competes on'],
  [/\btop seed\b/i, 'game — top seed'],
  [/\bsecure\b.*\b(victory|win)\b/i, 'game — secures victory'],
  [/\bcaptures? series opener\b/i, 'game — series opener'],
  [/\btake series\b/i, 'game — takes series'],
  [/\bdominates?\b/i, 'game — dominates'],
  [/\bwin over\b/i, 'game — win over'],
  [/\bwin\b/i, 'game — win'],
]

const PREVIEW = [
  [/\bset (to|for)\b/i, 'preview — "set to/for"'],
  [/\bsets? sights on\b/i, 'preview — "sets sights on"'],
  [/\bprepare(s)? for\b/i, 'preview — "prepare for"'],
  [/\bready for\b/i, 'preview — "ready for"'],
  [/\bto face\b/i, 'preview — "to face"'],
  [/\bvs\.?\b/i, 'preview — "vs."'],
  [/\bupcoming\b/i, 'preview — "upcoming"'],
  [/\bto play\b.*\bat\b/i, 'preview — "to play … at"'],
  [/\btabbed\b.*\bpreseason\b/i, 'preview — preseason poll'],
  [/\btop\b.*\bpreseason\b.*\bpolls?\b/i, 'preview — preseason poll'],
  [/\bnotebook\b/i, 'preview — notebook column'],
]

function matchRules(rules, text) {
  for (const [pattern, reason] of rules) {
    if (pattern.test(text)) return reason
  }
  return null
}

// Classify one headline / hero-copy string.
// Returns { kind: 'feature'|'game'|'preview'|'announcement'|'unclear', reason }
export function classifyStory(text, category = '') {
  const t = (text || '').trim()
  const cat = (category || '').trim().toLowerCase()
  if (!t) return { kind: 'unclear', reason: 'no headline text' }
  if (cat === 'feature story') {
    return { kind: 'feature', reason: 'labelled Feature Story in the Sheet' }
  }
  for (const rules of [
    FEATURE_PROFILE,
    FEATURE_AWARD,
    FEATURE_COACH,
    FEATURE_RECORD,
    FEATURE_TITLE,
    FEATURE_OTHER,
  ]) {
    const reason = matchRules(rules, t)
    if (reason) return { kind: 'feature', reason }
  }
  let reason = matchRules(ANNOUNCE, t)
  if (reason) return { kind: 'announcement', reason }
  reason = matchRules(GAME, t)
  if (reason) return { kind: 'game', reason }
  reason = matchRules(PREVIEW, t)
  if (reason) return { kind: 'preview', reason }
  if (FEATURE_CATEGORY.has(cat)) {
    return { kind: 'feature', reason: 'award/academic category, no game/preview signal' }
  }
  return { kind: 'unclear', reason: 'no rule matched — needs a human look' }
}

// --- Sport normalisation ---------------------------------------------------
// The Sheet mixes "Track & Field" / "Track & field", gendered labels
// ("Men's Basketball"), and non-sport categories ("General", "Administration").
// Non-sport categories become "General Athletics" in v1 — the sport a
// headline is *about* is not in the Sheet, so it is not guessed.

const SPORT_MAP = {
  'track & field': 'Track & Field',
  "men's basketball": 'Basketball',
  "women's basketball": 'Basketball',
  "men's tennis": 'Tennis',
  "women's tennis": 'Tennis',
  "men's golf": 'Golf',
  "women's golf": 'Golf',
  "men's volleyball": 'Volleyball',
  "women's volleyball": 'Volleyball',
  "women's gymnastics": 'Gymnastics',
  "men's track & field": 'Track & Field',
  "women's track & field": 'Track & Field',
  general: 'General Athletics',
  'general athletics': 'General Athletics',
  'championship/rivalry': 'General Athletics',
  'corporate/athletics': 'General Athletics',
  administration: 'General Athletics',
  'event announcement': 'General Athletics',
  'award/accolade': 'General Athletics',
  'awards/accolades': 'General Athletics',
  'academic awards': 'General Athletics',
  'academic achievement': 'General Athletics',
  'feature story': 'General Athletics',
  'game recap': 'General Athletics',
  'matchup/preview': 'General Athletics',
  'football/facilities': 'Football',
}

export function normalizeSport(category = '') {
  const key = (category || '').trim().toLowerCase()
  if (SPORT_MAP[key]) return SPORT_MAP[key]
  // Title-case the rest ("baseball" → "Baseball", "softball / baseball"
  // and "weightlifting / track & field" keep their slash form).
  return (category || '')
    .trim()
    .toLowerCase()
    .split(' ')
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ')
    .replace(/Track & Field/g, 'Track & Field')
    .replace(/& field/g, '& Field')
    || 'General Athletics'
}

// --- Feed model ------------------------------------------------------------
// One item per school maximum (the best candidate per school), so the feed
// is at most 148 items — a clean "one idea per school" list. Candidates
// are the top headline and the hero copy; the more feature-like one wins
// (feature > announcement > preview > game > unclear), headline on ties.
// Generic hero brand lines ("Welcome to Aggieland", "Go Gators: Official
// Hub") match no rule and land in 'unclear', so they never beat a real
// headline.

const KIND_RANK = { feature: 4, announcement: 3, preview: 2, game: 1, unclear: 0 }

export function buildNewsFeed(list = schools) {
  const items = []
  for (const school of list) {
    const candidates = [
      { text: school.headline, source: 'Top headline', slug: 'headline' },
      { text: school.heroCopy, source: 'Hero copy', slug: 'hero' },
    ]
      .filter((c) => (c.text || '').trim())
      .map((c) => ({ ...c, ...classifyStory(c.text, school.headlineCategory) }))
    if (!candidates.length) continue
    candidates.sort((a, b) => KIND_RANK[b.kind] - KIND_RANK[a.kind])
    const best = candidates[0]
    items.push({
      id: `news-${school.id}-${best.slug}`,
      schoolId: school.id,
      school,
      schoolName: school.name,
      division: school.div,
      conference: school.conf,
      url: school.url,
      title: best.text.trim(),
      kind: best.kind,
      reason: best.reason,
      sport: normalizeSport(school.headlineCategory),
      evidenceSource: best.source,
      captureDate: CAPTURE_DATE,
    })
  }
  // A–Z by school. There are no story dates in the June captures, so
  // nothing here is sorted by recency — and the UI says so.
  items.sort((a, b) => a.schoolName.localeCompare(b.schoolName))
  return items
}

export function newsCounts(list = schools) {
  const counts = { feature: 0, announcement: 0, preview: 0, game: 0, unclear: 0 }
  for (const item of buildNewsFeed(list)) counts[item.kind] += 1
  return { ...counts, total: list.length }
}
