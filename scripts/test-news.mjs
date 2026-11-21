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
// Counts below are the verified counts over the 434-school capture
// (148 audited + the 286 capture-only schools: the 8 ASUN proof schools
// plus the 278-school rollout of Nov 20–21, 2026).
// If the data changes, these fail loudly on purpose.
//
// The 278 rollout schools classify as: feature 20, announcement 33,
// preview 24, game 74, unclear 135. The unclear bucket is large because
// most capture-only headlines are game recaps phrased in ways no rule
// covers ("FALLS TO", "TOPS", berth announcements, ticket promos) —
// pre-existing classifier behaviour, not retuned in the rollout.
//
// The 8 ASUN schools classify as: feature 1 (FGCU — its "By The Numbers"
// strip beats the championship-run headline), announcement 2 (Stetson
// schedule announcement; West Florida season-ticket on-sale),
// game 2 (Jacksonville result; Lipscomb "WINS THREE AWARDS" — the wins
// verb reads as a result), unclear 3 (Bellarmine, Queens, North Florida).
//
// The 7 new schools classify as: feature 2 (Rogers State academic
// honours, Washburn conference title), preview 1 (Central Oklahoma —
// its hero copy "Broncho Football Prepares for Opener" beats the
// headline staff addition, the same best-candidate behaviour as
// Baylor), game 1 (Missouri Southern sweep), unclear 3 (Alabama
// "Secures Top-Seed Berth" — a berth announcement no rule covers;
// Central Missouri "Shines At National Preview Meet" — a result
// verb at an event named a preview meet; Newman "Soar Past Opponent"
// — a result verb the game rules do not list). The unclear bucket
// saying "needs a human look" is the honest output for all three;
// adding a "soar past" game rule is a possible future tweak, not
// part of the add-schools change.

import { readFileSync } from 'node:fs'
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
check('Central Oklahoma feed item → preview (hero copy "Prepares for Opener" beats headline staff addition)', feedKind('Central Oklahoma Bronchos'), 'preview')
check('Missouri Southern feed item → game (sweep headline)', feedKind('Missouri Southern Lions'), 'game')
check('Rogers State feed item → feature (postseason academic honours)', feedKind('Rogers State Hillcats'), 'feature')
check('Washburn feed item → feature (conference title)', feedKind('Washburn Ichabods'), 'feature')
check('Alabama feed item → unclear (berth announcement, no rule matches)', feedKind('Alabama Crimson Tide'), 'unclear')
check('Central Missouri feed item → unclear (result verb at a "Preview Meet")', feedKind('Central Missouri Mules'), 'unclear')
check('Newman feed item → unclear ("soar past" is not a game rule)', feedKind('Newman Jets'), 'unclear')

// --- Sport normalisation ----------------------------------------------------
check("normalizeSport('Track & field')", normalizeSport('Track & field'), 'Track & Field')
check("normalizeSport(\"Men's Basketball\")", normalizeSport("Men's Basketball"), 'Basketball')
check("normalizeSport('General')", normalizeSport('General'), 'General Athletics')
check("normalizeSport('Baseball')", normalizeSport('Baseball'), 'Baseball')

// --- Feed shape + counts ------------------------------------------------------
const feed = buildNewsFeed()
const counts = newsCounts()
check('feed has one item per school', feed.length, 434)
check('feed schoolIds are unique', new Set(feed.map((i) => i.schoolId)).size, 434)
check('total schools', counts.total, 434)
check('feature items', counts.feature, 105)
check('announcement items', counts.announcement, 55)
check('preview items', counts.preview, 35)
check('game items', counts.game, 99)
check('unclear items', counts.unclear, 140)
const unclear = feed.filter((i) => i.kind === 'unclear').map((i) => i.schoolName).sort()
check('unclear items are the 140 the classifier has no rule for', JSON.stringify(unclear), JSON.stringify(["Abilene Christian Wildcats","Air Force Falcons","Alabama A&M Bulldogs","Alabama Crimson Tide","Albany Great Danes","Alcorn State Braves","American Eagles","Arkansas State Red Wolves","Army Black Knights","Bellarmine Knights","Binghamton Bearcats","Bowling Green Falcons","Bradley Braves","Brown Bears","Bucknell Bison","CSU Bakersfield Roadrunners","CSUN Matadors","Cal Poly Mustangs","California Baptist Lancers","Canisius Golden Griffins","Central Arkansas Bears","Central Missouri Mules","Charleston Southern Buccaneers","Charlotte 49ers","Chattanooga Mocs","College of Charleston Cougars","Colorado State Rams","Detroit Mercy Titans","East Carolina Pirates","East Tennessee State Buccaneers","East Texas A&M Lions","Eastern Illinois Panthers","Evansville Purple Aces","Fairfield Stags","Florida A&M Rattlers","Florida Atlantic Owls","Fresno State Bulldogs","Furman Paladins","Gardner-Webb Runnin' Bulldogs","Grand Canyon Lopes","Green Bay Phoenix","Hawaii Rainbow Warriors","High Point Panthers","Houston Christian Huskies","Howard Bison","Idaho State Bengals","Incarnate Word Cardinals","Kansas City Roos","La Salle Explorers","Lafayette Leopards","Le Moyne Dolphins","Liberty Flames","Lindenwood Lions","Louisiana Tech Bulldogs","Loyola Chicago Ramblers","Loyola Maryland Greyhounds","Loyola Marymount Lions","Marist Red Foxes","Maryland Eastern Shore Hawks","McNeese Cowboys","Memphis Tigers","Mercer Bears","Mercyhurst Lakers","Miami RedHawks","Milwaukee Panthers","Missouri State Bears","Montana Grizzlies","NJIT Highlanders","Navy Midshipmen","Nevada Wolf Pack","New Haven Chargers","New Mexico Lobos","Newman Jets","North Alabama Lions","North Florida Ospreys","Northeastern Huskies","Northern Arizona Lumberjacks","Northern Colorado Bears","Northern Illinois Huskies","Northern Kentucky Norse","Northwestern State Demons","Oakland Golden Grizzlies","Ohio Bobcats","Oral Roberts Golden Eagles","Pacific Tigers","Portland State Vikings","Presbyterian Blue Hose","Queens Royals","Quinnipiac Bobcats","Radford Highlanders","Rhode Island Rams","Robert Morris Colonials","SIUE Cougars","Sacred Heart Pioneers","Saint Mary's Gaels","Saint Peter's Peacocks","Sam Houston Bearkats","San Francisco Dons","San Jose State Spartans","Seattle Redhawks","South Carolina State Bulldogs","Southern Illinois Salukis","Southern Indiana Screaming Eagles","Southern Jaguars","Southern Utah Thunderbirds","St. Thomas Tommies","Stephen F. Austin Lumberjacks","Stony Brook Seawolves","Tarleton State Texans","Temple Owls","Tennessee State Tigers","Tennessee Tech Golden Eagles","Texas A&M–Corpus Christi Islanders","Texas Southern Tigers","Texas Tech Red Raiders","The Citadel Bulldogs","Towson Tigers","Troy Trojans","Tulane Green Wave","UAB Blazers","UC Davis Aggies","UC San Diego Tritons","UIC Flames","UMass Lowell River Hawks","UNC Asheville Bulldogs","UNC Greensboro Spartans","UNLV Rebels","UT Arlington Mavericks","UT Martin Skyhawks","Utah Tech Trailblazers","VMI Keydets","Valparaiso Beacons","Vermont Catamounts","Wagner Seahawks","Western Illinois Leathernecks","Western Michigan Broncos","Whitman Blues","William & Mary Tribe","Wright State Raiders","Youngstown State Penguins"]))
check('feed is A–Z by school', JSON.stringify(feed.map((i) => i.schoolName)) === JSON.stringify([...feed.map((i) => i.schoolName)].sort((a, b) => a.localeCompare(b))), true)

// --- Categories hidden from the page (2026-11-20) ---------------------------
// The classifier still runs (the counts above prove it), but the News page
// no longer surfaces the kinds: no announcement toggle, no kind tag, no
// category counts in the capture note. The feed is feature-only.
const newsPage = readFileSync(new URL('../src/pages/News.jsx', import.meta.url), 'utf8')
for (const frag of ['kindTag', 'Include announcements', 'includeAnnouncements', 'counts.announcement', 'counts.preview', 'counts.game']) {
  check(`news page hides ${frag}`, newsPage.includes(frag), false)
}
check('news page is feature-only', newsPage.includes("item.kind !== 'feature'"), true)

console.log('\n--- Feed counts ---')
console.log(counts)
console.log('\n--- Top 10 feature items (A–Z by school) ---')
feed.filter((i) => i.kind === 'feature').slice(0, 10).forEach((i, n) => {
  console.log(`${n + 1}. ${i.schoolName} — "${i.title}" [${i.sport}] — ${i.reason}`)
})

console.log(`\n${passed} passed, ${failed} failed`)
if (failed > 0) process.exit(1)
