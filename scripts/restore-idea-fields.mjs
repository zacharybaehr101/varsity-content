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
//
// Schools in the Sheet but NOT in schools.js are skipped, never added.
// Division/conference labels are NOT taken from the Sheet — schools.js
// values win, because the Sheet mixes e.g. "Division I" / "NCAA Division I"
// and "Centennial Conference" / "Centennial".

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
}

const sheetByName = new Map()
for (const r of rows.slice(1)) {
  sheetByName.set((r[C.name] || '').trim(), r)
}

const { schools } = await import(dataPath)
let matched = 0
const unmatchedInCode = []
for (const s of schools) {
  const r = sheetByName.get(s.name)
  if (!r) { unmatchedInCode.push(s.name); continue }
  matched++
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
}

const skipped = [...sheetByName.keys()].filter(n => !schools.some(s => s.name === n))
const out = 'export const schools = [\n' +
  schools.map(s => '  ' + JSON.stringify(s)).join(',\n') + '\n]\n'
writeFileSync(dataPath, out)

console.log(`Sheet rows (excl. header): ${rows.length - 1}`)
console.log(`Schools in schools.js: ${schools.length}`)
console.log(`Matched by School_Name: ${matched}`)
console.log(`Schools in code with NO Sheet row: ${unmatchedInCode.length ? unmatchedInCode.join(' | ') : 'none'}`)
console.log(`Sheet rows skipped (not in schools.js): ${skipped.length}`)
skipped.forEach(n => console.log(`  skipped: ${n}`))
