// Verification for the News feed classifier (node scripts/test-news.mjs).
// Asserts the classifier against the Sheet's own labels and the proven
// track examples — including the places where the Sheet's labels are
// WRONG, which the test documents rather than papers over:
//
// Sheet 'Game Recap' rows (4):
//   Michigan State "Advances to NCAA Finals" IS a result → game.
//   Iowa "Teeing Off: … Notebook", Oregon "Ready for NCAA Championships",
//   Minnesota "Sets Sights on Postseason Records" are plainly lookahead —
//   the Sheet label is wrong, so they must classify as preview.
// Sheet 'Matchup/Preview' rows (4):
//   Maryland / Washington / Northwestern are previews.
//   Indiana "Secure Your 2026 Season Football Tickets" is a ticket
//   on-sale announcement — the Sheet label is wrong.
// Sheet 'Feature Story' row (1): Wisconsin "How Taylor Volden…" → feature.
// Proof track examples: Dickinson (record chase), Cincinnati (coach
// extension), Mount Marty (All-American), WVU Tech (freshman) → feature.
//
// Counts below are the verified counts over the 141-school capture.
// If the data changes, these fail loudly on purpose.

import { schools } from '../src/data/schools.js'
import {
  classifyStory,
  normalizeSport,
  buildNewsFeed,
  newsCounts,
} from '../src/lib/news.js'

let passed = 0
let failed = 0
function check(name, actual, expected) {
  const ok = actual === expected
  if (ok) passed += 1
  else failed += 1
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name} — got ${JSON.stringify(actual)}, want ${JSON.stringify(expected)}`)
}

function byName(name) {
  const school = schools.find((s) => s.name === name)
  if (!school) throw new Error(`school not found: ${name}`)
  return school
}
function headlineKind(name) {
  const s = byName(name)
  return classifyStory(s.headline, s.headlineCategory).kind
}
function feedKind(name) {
  const item = buildNewsFeed().find((i) => i.schoolName === name)
  return item ? item.kind : null
}

// --- Sheet labels ----------------------------------------------------------
check("Michigan State (Sheet: Game Recap) → game", headlineKind('Michigan State Spartans'), 'game')
// The other three 'Game Recap' labels are wrong on the text:
check("Iowa (Sheet: Game Recap, actually a notebook column) → preview", headlineKind('Iowa Hawkeyes'), 'preview')
check("Oregon (Sheet: Game Recap, actually lookahead) → preview", headlineKind('Oregon Ducks'), 'preview')
check("Minnesota (Sheet: Game Recap, actually lookahead) → preview", headlineKind('Minnesota Golden Gophers'), 'preview')

check("Maryland (Sheet: Matchup/Preview) → preview", headlineKind('Maryland Terrapins'), 'preview')
check("Washington (Sheet: Matchup/Preview) → preview", headlineKind('Washington Huskies'), 'preview')
check("Northwestern (Sheet: Matchup/Preview) → preview", headlineKind('Northwestern Wildcats'), 'preview')
// Indiana's headline is a ticket on-sale announcement, not a preview:
check("Indiana (Sheet: Matchup/Preview, actually tickets) → announcement", headlineKind('Indiana Hoosiers'), 'announcement')

check("Wisconsin (Sheet: Feature Story) → feature", headlineKind('Wisconsin Badgers'), 'feature')

// --- Proof track examples --------------------------------------------------
check('Dickinson record chase → feature', headlineKind('Dickinson Red Devils'), 'feature')
check('Cincinnati coach extension → feature', headlineKind('Cincinnati Bearcats'), 'feature')
check('Mount Marty All-American → feature', headlineKind('Mount Marty Lancers'), 'feature')
check('WVU Tech freshman breakthrough → feature', headlineKind('WVU Tech Golden Bears'), 'feature')

// --- Best-candidate picks (headline vs hero copy) ---------------------------
check('Notre Dame feed item → feature (headline award beats hero ticket ad)', feedKind('Notre Dame Fighting Irish'), 'feature')
check('Clemson feed item → feature (headline title beats hero signing)', feedKind('Clemson Tigers'), 'feature')
check('Baylor feed item → announcement (hero ticket ad beats postgame headline)', feedKind('Baylor Bears'), 'announcement')
check('Fort Hays feed item → preview (headline preview beats hero result line)', feedKind('Fort Hays State Tigers'), 'preview')

// --- Sport normalisation ----------------------------------------------------
check("normalizeSport('Track & field')", normalizeSport('Track & field'), 'Track & Field')
check("normalizeSport(\"Men's Basketball\")", normalizeSport("Men's Basketball"), 'Basketball')
check("normalizeSport('General')", normalizeSport('General'), 'General Athletics')
check("normalizeSport('Baseball')", normalizeSport('Baseball'), 'Baseball')

// --- Feed shape + counts ------------------------------------------------------
const feed = buildNewsFeed()
const counts = newsCounts()
check('feed has one item per school', feed.length, 141)
check('feed schoolIds are unique', new Set(feed.map((i) => i.schoolId)).size, 141)
check('total schools', counts.total, 141)
check('feature items', counts.feature, 83)
check('announcement items', counts.announcement, 22)
check('preview items', counts.preview, 10)
check('game items', counts.game, 24)
check('unclear items', counts.unclear, 2)
const unclear = feed.filter((i) => i.kind === 'unclear').map((i) => i.schoolName).sort()
check('unclear items are Texas Tech + Whitman', JSON.stringify(unclear), JSON.stringify(['Texas Tech Red Raiders', 'Whitman Blues']))
check('feed is A–Z by school', JSON.stringify(feed.map((i) => i.schoolName)) === JSON.stringify([...feed.map((i) => i.schoolName)].sort((a, b) => a.localeCompare(b))), true)

console.log('\n--- Feed counts ---')
console.log(counts)
console.log('\n--- Top 10 feature items (A–Z by school) ---')
feed.filter((i) => i.kind === 'feature').slice(0, 10).forEach((i, n) => {
  console.log(`${n + 1}. ${i.schoolName} — "${i.title}" [${i.sport}] — ${i.reason}`)
})

console.log(`\n${passed} passed, ${failed} failed`)
if (failed > 0) process.exit(1)
