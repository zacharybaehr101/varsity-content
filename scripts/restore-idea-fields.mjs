// Restore idea-search fields from the VarsityContent Google Sheet CSV export
// into src/data/schools.js — verbatim, matched by School_Name only.
//
// Usage: node scripts/restore-idea-fields.mjs [/path/to/sheet.csv]
// Default CSV path: /tmp/sheet.csv (the export used for the idea-search proof).
// Run from the repo root.
//
// What it adds per matched school (existing 15 keys are left untouched):
//   heroCopy        Hero_Copy_Text
//   headline        Top_Headline_1_Text
//   headlineCategory Top_Headline_1_Category
//   ticketWeight    Tickets_CTA_Visual_Weight (verbatim string)
//   mobileSticky    Mobile_Sticky_Tickets_Button (verbatim string, "Yes"/"No")
//   hasVideo        Has_Direct_Video_Highlights ("Yes" -> true, "No" -> false)
//   hasMerch        Has_Merchandise_Shop_Link (Yes/No -> boolean)
//   hasRecruiting   Has_Recruiting_Landing_Page (Yes/No -> boolean)
//   loveFull        What_We_Love (full text; existing `love` stays truncated)
//   strengthsFull   Strengths_Highlights (full text)
//   areasFull       Areas_of_Opportunity (full text)
//   heroAssetType   Hero_Asset_Type (verbatim — replaces the hardcoded "Image")
//   hasScoreboard   Has_Live_Scoreboard (Yes/No -> boolean)
//   scoreboardPosition Scoreboard_Position (verbatim — replaces hardcoded "Top")
//   genderBalance   Gender_Representation_Balance (verbatim — replaces "Balanced")
//   lazyLoading     Lazy_Loading_Issues_Detected (verbatim "Yes"/"No" — replaces "No")
//   hasGalleries    Has_Photo_Galleries (Yes/No -> boolean)
//   captureDate     Capture_Timestamp, date part only ("2026-06-03")
//   screenshotFile  Screenshot_File_Name (verbatim)
//   headlineTone    Headline_Tone (verbatim)
//
// Schools in the Sheet but NOT in schools.js are ADDED as new records,
// in Sheet order, with the next free ids (142+ for the 7 missing schools
// added 2026-11-14). A new record is built entirely from its Sheet row:
// the 15 base keys come from the Sheet columns (url is the bare domain,
// div is normalized by stripping a leading "NCAA ", navCount is parsed
// as an integer), and the 20 restored fields come from the same columns
// as the match path. The one judgment call: love / strengths / areas
// for a new record are the verbatim Sheet texts, not a hand summary —
// the original 141 records carry hand-written summaries in those keys
// and the full Sheet text in loveFull / strengthsFull / areasFull, but
// no summary exists for the 7, and inventing one would not be verbatim.
// Division/conference labels for new records are the Sheet values
// after the div normalization above; for matched schools, schools.js
// values still win, because the Sheet mixes e.g. "Division I" /
// "NCAA Division I" and "Centennial Conference" / "Centennial".

import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const csvPath = process.argv[2] || '/tmp/sheet.csv'
const dataPath = resolve(repoRoot, 'src/data/schools.js')

// Minimal RFC-4180 CSV parser (quoted fields, doubled quotes, embedded commas/newlines).
function parseCsv(text) {
  const rows = []
  let row = []
  let field = ''
  let inQuotes = false
  for (let i = 0; i < text.length; i++) {
    const ch = text[i]
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') { field += '"'; i++ } else { inQuotes = false }
      } else {
        field += ch
      }
    } else if (ch === '"') {
      inQuotes = true
    } else if (ch === ',') {
      row.push(field); field = ''
    } else if (ch === '\n') {
      row.push(field); field = ''; rows.push(row); row = []
    } else if (ch === '\r') {
      // ignore CR
    } else {
      field += ch
    }
  }
  if (field !== '' || row.length) { row.push(field); rows.push(row) }
  return rows.filter(r => r.length > 1 || (r.length === 1 && r[0].trim() !== ''))
}

const yesNo = (v) => v.trim().toLowerCase() === 'yes'

const rows = parseCsv(readFileSync(csvPath, 'utf8'))
const header = rows[0]
const idx = (name) => {
  const i = header.indexOf(name)
  if (i === -1) throw new Error(`Column not found in Sheet CSV: ${name}`)
  return i
}
const C = {
  name: idx('School_Name'),
  // Base keys (only used when creating a record for a Sheet row that
  // has no schools.js entry yet).
  url: idx('Athletic_URL'),
  conf: idx('Conference'),
  div: idx('Division'),
  cms: idx('CMS_Provider'),
  hero: idx('Hero_Text_Narrative'),
  navCount: idx('Primary_Nav_Item_Count'),
  hasNIL: idx('Has_Donation_NIL_Link'),
  hasTickets: idx('Has_Buy_Tickets_CTA'),
  hasLiveStream: idx('Has_Live_Stream_Link'),
  streaming: idx('Streaming_Platform'),
  // Restored fields.
  heroCopy: idx('Hero_Copy_Text'),
  headline: idx('Top_Headline_1_Text'),
  headlineCategory: idx('Top_Headline_1_Category'),
  ticketWeight: idx('Tickets_CTA_Visual_Weight'),
  mobileSticky: idx('Mobile_Sticky_Tickets_Button'),
  hasVideo: idx('Has_Direct_Video_Highlights'),
  hasMerch: idx('Has_Merchandise_Shop_Link'),
  hasRecruiting: idx('Has_Recruiting_Landing_Page'),
  loveFull: idx('What_We_Love'),
  strengthsFull: idx('Strengths_Highlights'),
  areasFull: idx('Areas_of_Opportunity'),
  heroAssetType: idx('Hero_Asset_Type'),
  hasScoreboard: idx('Has_Live_Scoreboard'),
  scoreboardPosition: idx('Scoreboard_Position'),
  genderBalance: idx('Gender_Representation_Balance'),
  lazyLoading: idx('Lazy_Loading_Issues_Detected'),
  hasGalleries: idx('Has_Photo_Galleries'),
  captureDate: idx('Capture_Timestamp'),
  screenshotFile: idx('Screenshot_File_Name'),
  headlineTone: idx('Headline_Tone'),
}

const sheetByName = new Map()
for (const r of rows.slice(1)) {
  sheetByName.set((r[C.name] || '').trim(), r)
}

const { schools } = await import(dataPath)

// The 20 restored fields, set on a record (existing or newly built)
// from its Sheet row. Verbatim strings stay verbatim; Yes/No become
// booleans; captureDate keeps the date part only.
function enrich(s, r) {
  s.heroCopy = (r[C.heroCopy] || '').trim()
  s.headline = (r[C.headline] || '').trim()
  s.headlineCategory = (r[C.headlineCategory] || '').trim()
  s.ticketWeight = (r[C.ticketWeight] || '').trim()
  s.mobileSticky = (r[C.mobileSticky] || '').trim()
  s.hasVideo = yesNo(r[C.hasVideo] || '')
  s.hasMerch = yesNo(r[C.hasMerch] || '')
  s.hasRecruiting = yesNo(r[C.hasRecruiting] || '')
  s.loveFull = (r[C.loveFull] || '').trim()
  s.strengthsFull = (r[C.strengthsFull] || '').trim()
  s.areasFull = (r[C.areasFull] || '').trim()
  s.heroAssetType = (r[C.heroAssetType] || '').trim()
  s.hasScoreboard = yesNo(r[C.hasScoreboard] || '')
  s.scoreboardPosition = (r[C.scoreboardPosition] || '').trim()
  s.genderBalance = (r[C.genderBalance] || '').trim()
  s.lazyLoading = (r[C.lazyLoading] || '').trim()
  s.hasGalleries = yesNo(r[C.hasGalleries] || '')
  s.captureDate = (r[C.captureDate] || '').trim().slice(0, 10)
  s.screenshotFile = (r[C.screenshotFile] || '').trim()
  s.headlineTone = (r[C.headlineTone] || '').trim()
}

let matched = 0
const unmatchedInCode = []
for (const s of schools) {
  const r = sheetByName.get(s.name)
  if (!r) { unmatchedInCode.push(s.name); continue }
  matched++
  enrich(s, r)
}

// Sheet rows with no schools.js entry become new records, in Sheet
// order, with the next free ids. Key order matches the existing
// records (15 base keys, then the 20 restored fields).
const skipped = [...sheetByName.keys()].filter(n => !schools.some(s => s.name === n))
let nextId = schools.reduce((m, s) => Math.max(m, s.id), 0) + 1
const created = []
for (const name of skipped) {
  const r = sheetByName.get(name)
  const s = {
    id: nextId++,
    name,
    conf: (r[C.conf] || '').trim(),
    div: (r[C.div] || '').trim().replace(/^NCAA\s+/, ''),
    cms: (r[C.cms] || '').trim(),
    url: (r[C.url] || '').trim().replace(/^https?:\/\//, '').replace(/\/$/, ''),
    hero: (r[C.hero] || '').trim(),
    navCount: parseInt((r[C.navCount] || '0').trim(), 10) || 0,
    hasNIL: yesNo(r[C.hasNIL] || ''),
    hasTickets: yesNo(r[C.hasTickets] || ''),
    hasLiveStream: yesNo(r[C.hasLiveStream] || ''),
    streaming: (r[C.streaming] || '').trim(),
    // No hand summary exists for these schools: the editorial blocks
    // carry the verbatim Sheet text (same value as the *Full keys).
    love: (r[C.loveFull] || '').trim(),
    strengths: (r[C.strengthsFull] || '').trim(),
    areas: (r[C.areasFull] || '').trim(),
  }
  enrich(s, r)
  schools.push(s)
  created.push(`${s.id} ${name}`)
}
const out = 'export const schools = [\n' +
  schools.map(s => '  ' + JSON.stringify(s)).join(',\n') + '\n]\n'
writeFileSync(dataPath, out)

console.log(`Sheet rows (excl. header): ${rows.length - 1}`)
console.log(`Schools in schools.js: ${schools.length}`)
console.log(`Matched by School_Name: ${matched}`)
console.log(`Schools in code with NO Sheet row: ${unmatchedInCode.length ? unmatchedInCode.join(' | ') : 'none'}`)
console.log(`New records created from Sheet rows: ${created.length}`)
created.forEach(n => console.log(`  created: ${n}`))
