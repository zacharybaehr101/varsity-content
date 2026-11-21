// Verification for the strong school page (node scripts/test-school-page.mjs).
//
// Checks the data the rebuilt SchoolDetail depends on, and that the page
// no longer hardcodes audit values:
//
// Data (all 148 schools):
//   - the 9 restored fields are populated (heroAssetType, hasScoreboard,
//     scoreboardPosition, genderBalance, lazyLoading, hasGalleries,
//     captureDate, screenshotFile, headlineTone)
//   - mobileSticky matches the Sheet: every MIAA and Sun school is "No",
//     every other school is "Yes" (the conference-template fingerprint
//     from the 148-school content analysis) — Sheet-wide 20 No / 128 Yes,
//     and all 20 are on the site now that the 7 missing schools are in
//   - genderBalance has its 3 real variants, not a single hardcoded value
//   - captureDate is 2026-06-03 for all 148
// Lib (src/lib/schoolPage.js):
//   - themeFor covers the proven cases: Notre Dame ticket push, Purdue
//     honors, Cincinnati coach, Duke schedule, Dickinson record chase,
//     Texas A&M brand hub, Whitman tagline
//   - emphasisFor returns a theme + line + verbatim evidence for all 141
//   - pillarSignals returns all four pillars for all 141
//   - ideasFromSchool returns 1–2 ideas per school, each with an angle,
//     verbatim evidence, and a steal-it line
// Live notes (src/data/liveNotes.js):
//   - exactly 10 schools: the 3 fully audited live (Ohio State 13,
//     Fort Hays 65, Mount Marty 112) plus the 7 homepage-only audits
//     from the missing-7 run (142–148), each with media
//     (audio/video/photos/social) and all four pillars
// Page (src/pages/SchoolDetail.jsx):
//   - contains no hardcoded audit values: no 'Image' / 'Balanced' /
//     'Top' literals in the fields list — every field reads school.*
//   - wires the new sections: words-first quote, media, pillars,
//     ideas, compare picker, capture line (no screenshot references)
//
// If the data changes, these fail loudly on purpose.

import { readFileSync } from 'node:fs'
import { schools } from '../src/data/schools.js'
import { themeFor, emphasisFor, pillarSignals, ideasFromSchool } from '../src/lib/schoolPage.js'
import { ideaFromEvidence, getIdeaByKey } from '../src/lib/ideas.js'
import { liveNotes, getLiveNotes } from '../src/data/liveNotes.js'

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

// --- data: all 148 populated ----------------------------------------------
check('schools count', schools.length, 148)
const newFields = ['heroAssetType', 'scoreboardPosition', 'genderBalance', 'lazyLoading', 'captureDate', 'screenshotFile', 'headlineTone']
for (const f of newFields) {
  const missing = schools.filter((s) => !(s[f] || '').trim()).length
  check(`field ${f} populated for all 148 (missing)`, missing, 0)
}
check('hasScoreboard present for all 148', schools.filter((s) => typeof s.hasScoreboard !== 'boolean').length, 0)
check('hasGalleries present for all 148', schools.filter((s) => typeof s.hasGalleries !== 'boolean').length, 0)
check('captureDate is 2026-06-03 for all 148', schools.filter((s) => s.captureDate !== '2026-06-03').length, 0)

// Mobile sticky is a conference template: MIAA + Sun are all "No", rest "Yes".
// Sheet-wide that is 20 No / 128 Yes — and all 20 No schools are on the
// site now, since the 6 missing MIAA schools (all sticky-No) are in.
const stickyNo = schools.filter((s) => s.mobileSticky === 'No')
check('mobileSticky No count', stickyNo.length, 20)
check('mobileSticky No are all MIAA or Sun',
  stickyNo.filter((s) => !['MIAA', 'The Sun Conference'].includes(s.conf)).length, 0)
check('mobileSticky Yes count', schools.filter((s) => s.mobileSticky === 'Yes').length, 128)

// Gender balance is real Sheet data with 3 variants, not one hardcoded value.
const genders = [...new Set(schools.map((s) => s.genderBalance))].sort()
check('genderBalance variants', JSON.stringify(genders),
  JSON.stringify(['Balanced', 'Balanced Representation', 'Equitable Split']))
check('heroAssetType "Image" count (Sheet: 112)', schools.filter((s) => s.heroAssetType === 'Image').length, 112)
check('scoreboardPosition "Top" count (Sheet: 102)', schools.filter((s) => s.scoreboardPosition === 'Top').length, 102)
check('lazyLoading all "No" (Sheet truth, not a default)', schools.filter((s) => s.lazyLoading !== 'No').length, 0)

// --- themeFor: proven cases -------------------------------------------------
check('Notre Dame (Single Game Tickets) → Ticket push', themeFor('Single Game Tickets'), 'Ticket push')
check('Purdue (Academic Honors) → Honors / academics', themeFor('Academic Honors'), 'Honors / academics')
check('Cincinnati (Coaching Update) → Coach / staff', themeFor('Coaching Update'), 'Coach / staff')
check('Duke (Schedule Release) → Schedule release', themeFor('Schedule Release'), 'Schedule release')
check('Dickinson (record chase narrative) → Celebration / title', themeFor('National Championships'), 'Celebration / title')
check('Texas A&M (12th Man Culture) → Identity / brand', themeFor('12th Man Culture'), 'Identity / brand')
check('Auburn (War Eagle Tradition) → Identity / brand', themeFor('War Eagle Tradition'), 'Identity / brand')
check('Whitman (General News) → School news', themeFor('General News'), 'School news')
check('Mount Marty (All-American Honors) → Honors / academics', themeFor('All-American Honors'), 'Honors / academics')
check('Fort Hays (Athlete Spotlight) → Identity / brand', themeFor('Athlete Spotlight'), 'Identity / brand')

// Every school's narrative maps to a known theme (no undefined).
const themes = new Set(schools.map((s) => themeFor(s.hero)))
const known = new Set(['Ticket push', 'Honors / academics', 'Celebration / title', 'Coach / staff', 'Schedule release', 'Game action', 'Event / ceremony', 'Recruiting / roster', 'Identity / brand', 'School news'])
check('all 148 themes are known', [...themes].filter((t) => !known.has(t)).length, 0)

// --- emphasisFor / pillarSignals / ideasFromSchool for all 148 -------------
let emphasisBad = 0
let pillarBad = 0
let ideasBad = 0
for (const s of schools) {
  const e = emphasisFor(s)
  if (!known.has(e.theme) || !e.line || !(e.heroCopy || e.headline)) emphasisBad++
  const p = pillarSignals(s)
  if (!p.tickets || !p.sportHub || !p.roster || !p.giving) pillarBad++
  for (const k of ['tickets', 'sportHub', 'roster', 'giving']) {
    if (!p[k].facts || !p[k].facts.length || !p[k].note) pillarBad++
  }
  const ideas = ideasFromSchool(s)
  if (ideas.length < 1 || ideas.length > 2) ideasBad++
  for (const idea of ideas) {
    if (!idea.angle || !idea.evidence || !idea.ideaKey) ideasBad++
    // No generic steal-it line: generic angles carry stealIt '' and render
    // without a Steal-it row. The generic line must never appear.
    if (idea.stealIt === 'Copy the layout, not the copy — adapt what they did to your school.') ideasBad++
  }
}
check('emphasisFor valid for all 148 (bad)', emphasisBad, 0)
check('pillarSignals valid for all 148 (bad)', pillarBad, 0)
check('ideasFromSchool 1–2 valid ideas for all 148 (bad)', ideasBad, 0)

// Spot checks on the derived ideas.
const nd = ideasFromSchool(byName('Notre Dame Fighting Irish'))
check('Notre Dame ideas include a ticket angle', nd.some((i) => /ticket/i.test(i.angle) || /ticket/i.test(i.evidence)), true)
const ind = ideasFromSchool(byName('Indiana Hoosiers'))
check('Indiana idea angle is Floating ticket pane', ind[0].angle, 'Floating ticket pane')
const dick = ideasFromSchool(byName('Dickinson Red Devils'))
check('Dickinson idea angle is Record chase', dick.some((i) => i.angle === 'Record chase'), true)
const bama = emphasisFor(byName('Alabama Crimson Tide'))
check('Alabama emphasis theme is Celebration / title', bama.theme, 'Celebration / title')
check('Alabama live notes steal mentions the hero ticket sale', /hero/i.test(getLiveNotes(148).steal), true)

// --- live notes --------------------------------------------------------------
check('liveNotes covers exactly 10 schools', Object.keys(liveNotes).length, 10)
for (const id of [13, 65, 112, 142, 143, 144, 145, 146, 147, 148]) {
  const n = getLiveNotes(id)
  check(`liveNotes[${id}] exists`, !!n, true)
  check(`liveNotes[${id}] school id matches`, n && n.schoolId, id)
  check(`liveNotes[${id}] audited date`, n && n.audited, '2026-11-14')
  for (const k of ['audio', 'video', 'photos', 'social']) {
    check(`liveNotes[${id}] media.${k} present`, !!(n && n.media[k]), true)
  }
  for (const k of ['tickets', 'sportHub', 'roster', 'giving']) {
    check(`liveNotes[${id}] pillars.${k} present`, !!(n && n.pillars[k]), true)
  }
  check(`liveNotes[${id}] steal present`, !!(n && n.steal), true)
}
check('no live notes for Nebraska (not audited live)', getLiveNotes(1), null)
check('liveNotes ids all exist in schools.js',
  Object.keys(liveNotes).filter((id) => !schools.some((s) => s.id === parseInt(id))).length, 0)

// --- SchoolDetail.jsx: no hardcoded audit values ------------------------------
const page = readFileSync(new URL('../src/pages/SchoolDetail.jsx', import.meta.url), 'utf8')
check('page has no hardcoded Hero Asset Image', page.includes("['Hero Asset', 'Image']"), false)
check('page has no hardcoded Gender Balanced', page.includes("['Gender Representation', 'Balanced']"), false)
check('page has no hardcoded Scoreboard Top', page.includes("['Scoreboard Position', 'Top']"), false)
check('page has no hardcoded Mobile Sticky Yes', page.includes("['Mobile Sticky Tickets', 'Yes']"), false)
check('page has no hardcoded Lazy Loading No', page.includes("['Lazy Loading Issues', 'No']"), false)
check('page has no hardcoded Scoreboard Yes', page.includes("['Has Live Scoreboard', 'Yes']"), false)
for (const frag of ['school.heroAssetType', 'school.scoreboardPosition', 'school.genderBalance', 'school.lazyLoading', 'school.mobileSticky', 'school.hasGalleries', 'school.captureDate', 'emphasis.headlineTone', 'emphasisFor', 'pillarSignals', 'ideasFromSchool', 'getLiveNotes', 'compareIds', 'MAX_COMPARE', 'tierForSlot', 'compareRowsFor', 'compareOptions', 'rowSpan', 'compareLockCell', 'compareUnlockBtn', 'Add another school', 'In their own words', 'The four pillars', 'Ideas from this school', 'Compare']) {
  check(`page wires ${frag}`, page.includes(frag), true)
}
// The four differentiating rows must be in the compare block itself, not
// just in the sidebar data fields (which share the same labels).
{
  const block = page.slice(page.indexOf('const compareRowsFor'))
  const rowsBlock = block.slice(0, block.indexOf('\n  ]'))
  for (const label of ['Has Tickets CTA', 'Mobile Sticky Tickets', 'Photo Galleries', 'Video Highlights']) {
    check(`compare rows include ${label}`, rowsBlock.includes(`'${label}'`), true)
  }
  check('compare rows count is 11', (rowsBlock.match(/\['/g) || []).length, 11)
}
// Tier gates: slot 0 free, slots 1-2 Scout (up to 4 schools), slots 3-6
// Agency (up to 8). Locked columns show a lock + upgrade prompt, never
// scrambled or blurred data.
check('compare tier gate: slot 0 free', page.includes("i === 0 ? null"), true)
check('compare tier gate: slots 1-2 Scout', page.includes("i <= 2 ? 'Scout' : 'Agency'"), true)
check('compare lock mentions Scout limit', page.includes('Compare up to 4 schools with Scout'), true)
check('compare lock mentions Agency limit', page.includes('Compare up to 8 schools with Agency'), true)
check('compare lock links to pricing', page.includes('to="/pricing" className={styles.compareUnlockBtn}'), true)
check('compare has no blurred/scrambled lock', /blur|scramble/i.test(page), false)
// Screenshots are not referenced anywhere on the page (2026-11-14: the
// screenshot placeholder block was removed; the data field stays in schools.js).
check('page has no screenshot references', /screenshot/i.test(page), false)
check('page uses the lightbulb save button', page.includes('IdeaSaveButton'), true)
// One bulb per block: the three editorial blocks must have distinct idea
// keys, or saving one lights all three (Nebraska: all three fell back to
// the "From the audit" angle and shared one key).
{
  const nebraska = byName('Nebraska Huskers')
  const blockKeys = [
    ideaFromEvidence(nebraska, nebraska.loveFull || nebraska.love, 'What We Love').ideaKey,
    ideaFromEvidence(nebraska, nebraska.strengthsFull || nebraska.strengths, 'Strengths').ideaKey,
    ideaFromEvidence(nebraska, nebraska.areasFull || nebraska.areas, 'Areas of Opportunity').ideaKey,
  ]
  check('school page block ideas have distinct keys', new Set(blockKeys).size, 3)
  check('new-format key migrates to the right block',
    getIdeaByKey(1, blockKeys[1], schools).evidenceSource, 'Strengths')
  check('legacy key still migrates as before',
    getIdeaByKey(1, '1-from-the-audit', schools).evidenceSource, 'What We Love')
}

console.log(`\n${passed} passed, ${failed} failed`)
process.exit(failed ? 1 : 0)
