// School-page helpers — what makes one school's page strong on its own.
// Pure functions over a school record. No scores, no rankings, no
// cross-school comparison here: emphasis is derived from THIS school's
// own hero narrative, headline and hero copy only.
//
// Theme grouping is the one from the 148-school content analysis
// (~/workspace/user/files/varsity-content-analysis-148-schools-2026-11-14.md):
// 102 distinct Hero_Text_Narrative values grouped into 8 themes.

import { ideaFromEvidence } from './ideas.js'

export const EMPHASIS_THEMES = [
  'Ticket push',
  'Honors / academics',
  'Celebration / title',
  'Coach / staff',
  'Schedule release',
  'Game action',
  'Event / ceremony',
  'Recruiting / roster',
  'Identity / brand',
  'School news',
]

// Plain-English line per theme — what the emphasis means for a reader.
const THEME_LINES = {
  'Ticket push': 'The hero is selling tickets, not telling a story — the on-sale date is the news.',
  'Honors / academics': 'The hero leads with somebody being honoured — an academic award, an All-America nod, a classroom honour.',
  'Celebration / title': 'The hero leads with a win — a championship, a title, a record.',
  'Coach / staff': 'The hero leads with the people running the program — an extension, a hire, a retirement.',
  'Schedule release': 'The hero leads with the calendar — a new schedule dropping.',
  'Game action': 'The hero leads with the game itself — a preview, a recap, a team ready for postseason.',
  'Event / ceremony': 'The hero leads with an occasion — a Hall of Fame night, a golf outing, a special event.',
  'Recruiting / roster': 'The hero leads with who is joining — a signing, a transfer, a roster move.',
  'Identity / brand': 'The hero is the brand itself — a slogan or a gameday hub, not a story. The news lives below it.',
  'School news': 'The hero leads with a school story that fits no single theme.',
}

function hasAny(text, words) {
  const t = (text || '').toLowerCase()
  return words.some((w) => t.includes(w))
}

// Group the Sheet's Hero_Text_Narrative into one of the 8 themes.
// Order matters: ticket and honours checks run before the generic ones,
// because e.g. "National Finish" must read as celebration, not brand.
export function themeFor(narrative) {
  const n = narrative || ''
  if (hasAny(n, ['ticket', 'on sale'])) return 'Ticket push'
  if (hasAny(n, ['academic', 'scholar', 'honor', 'honour', 'all-americ', 'all america', 'award', 'all-region'])) return 'Honors / academics'
  if (hasAny(n, ['coach', 'staff', 'hire', 'extension', 'retire'])) return 'Coach / staff'
  if (hasAny(n, ['schedule', 'release'])) return 'Schedule release'
  if (hasAny(n, ['celebrat', 'champion', 'title', 'win', 'national finish', 'postseason victor', 'record'])) return 'Celebration / title'
  if (hasAny(n, ['recruit', 'sign', 'commit', 'transfer', 'roster'])) return 'Recruiting / roster'
  if (hasAny(n, ['event', 'ceremony', 'hall of fame', 'golf outing', 'movie'])) return 'Event / ceremony'
  // Gameday hubs are checked before the generic game check: "Gameday"
  // contains "game", so without this a gameday-hub hero would land
  // Game action instead of Identity / brand (the theme line for
  // Identity / brand explicitly covers "a slogan or a gameday hub").
  if (hasAny(n, ['gameday', 'hub'])) return 'Identity / brand'
  if (hasAny(n, ['action', 'game', 'match', 'recap', 'tournament', 'super regional'])) return 'Game action'
  if (hasAny(n, ['brand', 'tradition', 'culture', 'hub', 'gameday', 'community', 'faith', 'heritage', 'identity', 'message', 'letter', 'ventures', 'network', 'podcast', 'program', 'spotlight', 'focus', 'pride', 'excellence', 'spirit', 'welcome', 'official', 'nation', 'country', 'dominance'])) return 'Identity / brand'
  return 'School news'
}

// What this homepage emphasizes, from its own words.
// Evidence is always the hero copy and the top headline — verbatim.
export function emphasisFor(school) {
  const theme = themeFor(school.hero)
  return {
    theme,
    line: THEME_LINES[theme],
    heroCopy: school.heroCopy || '',
    headline: school.headline || '',
    headlineCategory: school.headlineCategory || '',
    headlineTone: school.headlineTone || '',
    narrative: school.hero || '',
  }
}

// The four pillar pages, as the June 3 capture sees them.
// These are Sheet facts only — a full pillar audit (live notes) is a
// separate layer, added per school in liveNotes.js when it exists.
export function pillarSignals(school) {
  return {
    tickets: {
      title: 'Tickets / Ticket Central',
      facts: [
        { label: 'Tickets CTA', value: school.hasTickets ? 'Yes' : 'No' },
        { label: 'CTA visual weight', value: school.ticketWeight || '—' },
        { label: 'Mobile sticky tickets', value: school.mobileSticky || '—' },
      ],
      note: !school.ticketWeight
        ? 'Ticket-button weight was not recorded in the live capture — see the live pillar note below.'
        : (school.ticketWeight !== 'High Contrast')
          ? `The ticket button is bespoke — "${school.ticketWeight}" — not the standard high-contrast button.`
          : 'The ticket button is the standard high-contrast treatment.',
    },
    sportHub: {
      title: 'Sport page / schedule hub',
      facts: [
        { label: 'Streaming platform', value: school.streaming || '—' },
        { label: 'Live scoreboard', value: school.hasScoreboard == null ? '—' : (school.hasScoreboard ? 'Yes' : 'No') },
        { label: 'Scoreboard position', value: school.scoreboardPosition || '—' },
        { label: 'Video highlights', value: school.hasVideo ? 'Yes' : 'No' },
      ],
      note: school.hasVideo
        ? 'Video highlights are linked from the homepage.'
        : 'No direct video highlights on the homepage — a gap to check live.',
    },
    roster: {
      title: 'Roster / player profiles',
      facts: [
        { label: 'Recruiting landing page', value: school.hasRecruiting == null ? '—' : (school.hasRecruiting ? 'Yes' : 'No') },
        { label: 'Photo galleries', value: school.hasGalleries ? 'Yes' : 'No' },
        { label: 'Gender representation', value: school.genderBalance || '—' },
      ],
      note: school.hasGalleries
        ? 'Photo galleries are present — the roster has somewhere visual to point.'
        : school.captureOnly
          ? 'No photo galleries on the homepage.'
          : 'No photo galleries on the homepage — player pages carry the visuals alone.',
    },
    giving: {
      title: 'Support / Giving / NIL',
      facts: [
        { label: 'Donation / NIL link', value: school.hasNIL ? 'Yes' : 'No' },
        { label: 'Merchandise shop', value: school.hasMerch == null ? '—' : (school.hasMerch ? 'Yes' : 'No') },
      ],
      note: school.hasNIL
        ? 'A donation/NIL link is present on the homepage.'
        : 'No donation or NIL link on the homepage.',
    },
  }
}

// Ideas that belong to THIS school — derived from its own hero copy,
// headline, and ticket push, via the same ideaFromEvidence the
// editorial blocks use. Deduped by ideaKey (hero copy and headline are
// often the same text). Returns 1–2 ideas; never invents one.
export function ideasFromSchool(school) {
  const out = []
  const seen = new Set()
  const push = (evidence, source) => {
    const text = (evidence || '').trim()
    if (!text) return
    // Dedupe on the evidence itself, not the idea key: a school's hero
    // copy and top headline are often the same words, and the key now
    // carries the source field, so key-based dedupe would show the same
    // quote twice.
    const norm = text.toLowerCase()
    if (seen.has(norm)) return
    seen.add(norm)
    out.push(ideaFromEvidence(school, text, source))
  }
  push(school.heroCopy, 'Hero copy')
  push(school.headline, 'Top headline')
  return out
}
