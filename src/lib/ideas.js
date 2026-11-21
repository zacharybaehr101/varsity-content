// Idea search engine — pure, client-side, no network, no scores/grades.
// Every result traces to a real school, a real Sheet value, and the
// 2026-06-03 capture. Ranking weights the words that actually differ
// between schools (hero copy, headlines, What We Love) — the Yes/No
// ticket/streaming fields barely vary, so they never rank on their own.
//
// Proven queries (see ~/workspace/user/files/varsity-idea-search-proof.md):
//   "student ticket sales" and "track and field feature stories".

export const CAPTURE_DATE = '2026-06-03'

export const EXAMPLE_SEARCHES = [
  'I need ideas on student ticket sales',
  'Give me feature story ideas for track and field',
]

export const SUGGESTED_CHIPS = [
  { label: 'Student ticket sales', query: 'I need ideas on student ticket sales' },
  { label: 'Track & field feature stories', query: 'Give me feature story ideas for track and field' },
  { label: 'NIL ideas', query: 'NIL marketplace ideas' },
  { label: 'Streaming & video ideas', query: 'streaming and video ideas' },
  { label: 'Recruiting ideas', query: 'recruiting landing page ideas' },
]

// Field weights: hero copy and headlines first, then the editorial text,
// then the hero narrative label. Yes/No fields are deliberately NOT here.
const FIELDS = [
  { key: 'heroCopy', label: 'Hero copy', weight: 10 },
  { key: 'headline', label: 'Top headline', weight: 9 },
  { key: 'headlineCategory', label: 'Headline category', weight: 9 },
  { key: 'loveFull', label: 'What We Love', weight: 6, fallback: 'love' },
  { key: 'strengthsFull', label: 'Strengths', weight: 5, fallback: 'strengths' },
  { key: 'areasFull', label: 'Areas of Opportunity', weight: 6, fallback: 'areas' },
  { key: 'hero', label: 'Hero narrative', weight: 4 },
]

const STOPWORDS = new Set([
  'i', 'need', 'ideas', 'idea', 'for', 'on', 'give', 'me', 'the', 'a', 'an',
  'and', 'feature', 'story', 'stories', 'please', 'show', 'find', 'about',
  'with', 'what', 'are', 'some', 'get', 'help', 'do', 'you', 'have', 'any',
  'of', 'to', 'in', 'my', 'our', 'how',
])

// Terms that are real words but too common to rank on at full weight.
const LOW_WEIGHT_TERMS = new Set(['student', 'field', 'ideas', 'school'])

const PATTERN_WORDS = [
  'pane', 'provider', 'grid', 'ribbon', 'widget', 'checkout',
  'aerial', 'panorama', 'facility',
]

// Intent = the proven query shapes. Each adds synonym terms (half weight)
// and phrase bonuses. Expanded terms only count when the school already
// shows a signal for that intent — e.g. a "championship" hit only counts
// for a track search if the school's headline category is Track & Field
// or its audit text actually mentions track.
const INTENTS = [
  {
    id: 'tickets',
    test: (q) => /ticket|on-?sale|season ticket|tailgat/.test(q),
    phrases: ['season ticket', 'tickets on sale', 'on sale', 'single game ticket'],
    expanded: [
      { term: 'tickets', factor: 0.7 },
      { term: 'tailgat', factor: 0.8 },
      { term: 'checkout', factor: 0.5 },
    ],
    signal: (s) => hasTicketSignal(s),
  },
  {
    id: 'track',
    test: (q) => /\btrack\b/.test(q),
    phrases: ['track and field', 'track & field'],
    expanded: [
      { term: 'championship', factor: 0.5 },
      { term: 'all-american', factor: 0.7 },
      { term: 'record', factor: 0.5 },
      { term: 'coach', factor: 0.5 },
      { term: 'title', factor: 0.4 },
      { term: 'freshman', factor: 0.6 },
      { term: 'national', factor: 0.4 },
    ],
    signal: (s) => hasTrackSignal(s),
  },
  {
    id: 'nil',
    test: (q) => /\bnil\b|collective|marketplace/.test(q),
    phrases: ['nil marketplace', 'nil collective'],
    expanded: [{ term: 'marketplace', factor: 0.6 }, { term: 'collective', factor: 0.6 }],
    signal: (s) => s.hasNIL === true,
  },
  {
    id: 'streaming',
    test: (q) => /stream|video|watch|tv\b/.test(q),
    phrases: ['live stream', 'video highlights'],
    expanded: [{ term: 'video', factor: 0.6 }, { term: 'stream', factor: 0.6 }],
    signal: (s) => s.hasLiveStream === true || s.hasVideo === true,
  },
  {
    id: 'recruiting',
    test: (q) => /recruit/.test(q),
    phrases: ['recruiting'],
    expanded: [{ term: 'roster', factor: 0.4 }, { term: 'signing', factor: 0.5 }],
    signal: (s) => s.hasRecruiting === true,
  },
]

function fieldText(school, field) {
  return (school[field.key] || school[field.fallback] || '').toString()
}

function allText(school) {
  return FIELDS.map((f) => fieldText(school, f)).join(' ').toLowerCase()
}

function hasTicketSignal(school) {
  return /ticket/.test(allText(school)) || /ticket/.test((school.hero || '').toLowerCase())
}

function hasTrackSignal(school) {
  return (school.headlineCategory || '').toLowerCase().includes('track') ||
    /track/.test(allText(school))
}

// Word-boundary matching: "track" must not match "tracking" (a widget),
// but "ticket" should match "ticketing" (a ticketing provider block).
// "punches ticket to the World Series" is an idiom, not a ticket-sales idea.
function matchesTerm(text, term) {
  const t = text.toLowerCase().replace(/-/g, ' ')
  const norm = term.toLowerCase().replace(/-/g, ' ')
  if ((term === 'ticket' || term === 'tickets') && t.includes('punches ticket')) return false
  if (norm === 'track') return /\btrack\b/.test(t)
  const escaped = norm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return new RegExp(`\\b${escaped}\\w*`).test(t)
}

function detectIntent(query) {
  const q = query.toLowerCase()
  return INTENTS.find((intent) => intent.test(q)) || null
}

function queryTerms(query) {
  const tokens = query.toLowerCase().replace(/[^a-z0-9\s&-]/g, ' ').split(/\s+/).filter(Boolean)
  return [...new Set(tokens.filter((t) => t.length > 1 && !STOPWORDS.has(t)))]
}

// Angle labels are derived from the evidence text only — never invented.
// Look at the whole audit record, not just the single best-scoring field:
// Indiana's angle lives in What We Love, WVU Tech's in the hero copy.
export function deriveAngle(school, evidence, intentId) {
  const t = `${school.heroCopy || ''} ${school.headline || ''} ${school.loveFull || school.love || ''} ${school.strengthsFull || school.strengths || ''} ${school.areasFull || school.areas || ''} ${school.headlineCategory || ''}`.toLowerCase()
  if (/floating ticket/.test(t)) return 'Floating ticket pane'
  if (/ticketing provider/.test(t)) return 'Branded ticketing block'
  if (/dynamic grid/.test(t)) return 'One grid: results + tickets + media'
  if (/ticket ribbon|ticket.*viewport|compression on narrower/.test(t)) return 'Mobile check — ticket ribbon'
  if (/ticket-booking.*widget|dominates the fold/.test(t)) return 'Cautionary: ticket widget crowds out news'
  if (/tailgat/.test(t) && /on sale/.test(t)) return 'Bundle tickets with gameday'
  if (/on sale|now available/.test(t) && intentId === 'tickets') return 'Hero as announcement'
  if (/three peat|three-peat|800m|record.*title|national title/.test(t)) return 'Record chase'
  if (/coach of the year|extends.*coach|head coach.*through/.test(t)) return 'Coach as story'
  if (/all-american/.test(t)) return 'Small-school All-American'
  if (/freshman/.test(t) && /record/.test(t)) return 'Freshman breakthrough'
  if (/wins.*(championship|title)|claim.*title|record streak|surge past field/.test(t)) return 'Team title'
  if (/track/.test(t) && intentId === 'track') return 'Track feature story'
  if (/ticket/.test(t)) return 'Ticket idea'
  return 'From the audit'
}

const STEAL_IT = {
  'Floating ticket pane': 'Add a pinned ticket card beside the hero, so fans can check out without a redirect.',
  'Branded ticketing block': 'Brand the ticketing-provider block you already have — no custom build needed.',
  'One grid: results + tickets + media': 'Put results, tickets and media in one grid instead of a separate promo.',
  'Mobile check — ticket ribbon': 'Check the ticket ribbon on a phone before you ship — that is the idea.',
  'Cautionary: ticket widget crowds out news': 'Steal the warning, not the widget — check the ticket block does not crowd out news.',
  'Bundle tickets with gameday': 'Sell the ticket with the gameday experience (tailgating), not the price.',
  'Hero as announcement': 'Turn an on-sale date into the hero for 48 hours.',
  'Record chase': 'Lead with the athlete’s name, the event and the number.',
  'Coach as story': 'Make the coach the story — an extension or a Coach of the Year award.',
  'Small-school All-American': 'Lead with the All-American honour — it travels beyond your conference.',
  'Freshman breakthrough': 'Pair the first-year record with academics in the same layout.',
  'Team title': 'Lead with the title — the whole team is the story.',
  'Track feature story': 'Give the non-revenue sport hero status while it is in postseason.',
}
// Generic angles ('From the audit', 'Ticket idea') intentionally have no
// steal-it line: the one generic line repeated on nearly every card.
// Ideas with those angles carry stealIt '' and render without a Steal-it row.

// Effort hints only where the idea-search proof gives one.
const EFFORT = {
  'Indiana Hoosiers|Floating ticket pane': 'Medium',
  'Notre Dame Fighting Irish|Hero as announcement': 'Low',
  'Baylor Bears|Bundle tickets with gameday': 'Low',
  'College of Staten Island Dolphins|Branded ticketing block': 'Low',
  'Ohio State Buckeyes|One grid: results + tickets + media': 'High',
}

function slug(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

// Build an idea object from one editorial block of a school record
// (used by the school detail page's "Save this as an idea" buttons).
// The key carries the block's source field as well as the angle: the angle
// alone collides when a school's blocks all fall back to "From the audit"
// (saving one block then lit all three bulbs).
export function ideaFromEvidence(school, evidence, evidenceSource) {
  const angle = deriveAngle(school, evidence, null)
  const ideaKey = `${school.id}-${slug(evidenceSource || 'audit')}-${slug(angle)}`
  return {
    id: ideaKey,
    ideaKey,
    schoolId: school.id,
    school,
    name: school.name,
    division: school.div,
    conference: school.conf,
    cms: school.cms,
    url: school.url,
    angle,
    evidence: (evidence || '').trim(),
    evidenceSource,
    stealIt: STEAL_IT[angle] || '',
    effort: EFFORT[`${school.name}|${angle}`] || null,
    captureDate: CAPTURE_DATE,
  }
}

// Re-derive one idea from a school record, for migrating legacy minimal
// saves ({schoolId, ideaKey, savedAt}) that carry no angle/evidence.
// The angle is re-derived from the audit text; the evidence is the first
// quotable field containing the angle's keywords. Returns null when the
// school is not in the list.
const ANGLE_EVIDENCE_KEYS = {
  'Floating ticket pane': ['floating ticket'],
  'Branded ticketing block': ['ticketing provider'],
  'One grid: results + tickets + media': ['dynamic grid'],
  'Mobile check — ticket ribbon': ['ticket ribbon', 'compression on narrower'],
  'Cautionary: ticket widget crowds out news': ['dominates the fold', 'ticket-booking'],
  'Bundle tickets with gameday': ['tailgat'],
  'Hero as announcement': ['on sale', 'now available'],
  'Record chase': ['three peat', 'national title', '800m'],
  'Coach as story': ['coach of the year', 'extends', 'head coach'],
  'Small-school All-American': ['all-american'],
  'Freshman breakthrough': ['freshman', 'record-setting'],
  'Team title': ['championship', 'title', 'record streak'],
  'Track feature story': ['track'],
  'Ticket idea': ['ticket'],
  'From the audit': [],
}

export function getIdeaByKey(schoolId, ideaKey, list) {
  const school = (list || []).find((s) => s.id === schoolId)
  if (!school) return null
  const suffix = String(ideaKey || '').replace(`${schoolId}-`, '')
  let angle = deriveAngle(school, '', null)
  if (slug(angle) !== suffix) {
    const known = Object.keys(STEAL_IT).find((a) => slug(a) === suffix)
    angle = known || angle
  }
  // New-format keys carry the source block first
  // ("what-we-love-from-the-audit"): use it to pick the right evidence
  // field when migrating a minimal save. Old-format keys ("from-the-audit")
  // fall through to the default below, as before.
  const SOURCE_FIELDS = {
    'what-we-love': 'loveFull',
    'strengths': 'strengthsFull',
    'areas-of-opportunity': 'areasFull',
  }
  const sourceKey = Object.keys(SOURCE_FIELDS).find((k) => suffix.startsWith(`${k}-`))
  const quotable = [
    { key: 'heroCopy', label: 'Hero copy', text: school.heroCopy || '' },
    { key: 'headline', label: 'Top headline', text: school.headline || '' },
    { key: 'loveFull', label: 'What We Love', text: school.loveFull || school.love || '' },
    { key: 'strengthsFull', label: 'Strengths', text: school.strengthsFull || school.strengths || '' },
    { key: 'areasFull', label: 'Areas of Opportunity', text: school.areasFull || school.areas || '' },
  ]
  const keywords = ANGLE_EVIDENCE_KEYS[angle] || []
  const best = (sourceKey
    ? quotable.find((f) => f.key === SOURCE_FIELDS[sourceKey])
    : quotable.find((f) =>
      keywords.some((k) => f.text.toLowerCase().includes(k))
    )) || quotable[2]
  return {
    id: ideaKey,
    ideaKey,
    schoolId: school.id,
    school,
    name: school.name,
    division: school.div,
    conference: school.conf,
    cms: school.cms,
    url: school.url,
    angle,
    evidence: best.text.trim(),
    evidenceSource: best.label,
    stealIt: STEAL_IT[angle] || '',
    effort: EFFORT[`${school.name}|${angle}`] || null,
    captureDate: CAPTURE_DATE,
  }
}

export function searchIdeas(query, { division = '', conference = '', list = null } = {}) {
  const q = (query || '').trim()
  if (!q) return []
  const intent = detectIntent(q)
  const intentId = intent ? intent.id : null
  const terms = queryTerms(q).map((term) => ({
    term,
    factor: LOW_WEIGHT_TERMS.has(term) ? 0.3 : 1,
  }))
  if (intent) {
    for (const exp of intent.expanded) {
      if (!terms.some((t) => t.term === exp.term)) terms.push(exp)
    }
  }

  const pool = (list || []).filter((s) => {
    if (division && s.div !== division) return false
    if (conference && s.conf !== conference) return false
    return true
  })

  const results = []
  for (const school of pool) {
    let score = 0
    const fieldScores = []
    const signal = intent ? intent.signal(school) : true
    for (const field of FIELDS) {
      const text = fieldText(school, field)
      if (!text) continue
      let fs = 0
      for (const { term, factor } of terms) {
        const isExpanded = intent && intent.expanded.some((e) => e.term === term)
        if (isExpanded && !signal) continue
        if (matchesTerm(text, term)) fs += field.weight * factor
      }
      if (fs > 0) fieldScores.push({ field, text, score: fs })
      score += fs
    }
    // Phrase bonuses — hero copy / headline only.
    if (intent) {
      const heroText = `${school.heroCopy || ''} ${school.headline || ''}`.toLowerCase()
      for (const phrase of intent.phrases) {
        if (heroText.includes(phrase)) score += 5
      }
      if (intentId === 'track' && (school.headlineCategory || '').toLowerCase().includes('track')) {
        score += 5
        // Title story: the headline category is Track & Field AND the hero or
        // top headline is itself a championship / title / record story.
        // That is the team-title / record-chase angle, not a passing mention.
        if (/championship|champion|title|wins|claim|record|freshman|all-american|coach/.test(heroText)) {
          score += 10
        }
      }
    }
    // Concrete-pattern bonus: one field names BOTH a query term and a real
    // mechanism (a pane, a provider block, a grid, a ribbon, a widget, a
    // facility shot). The pattern word must be in the same field as the
    // term hit — a grid mentioned in Strengths does not rescue a ticket
    // mention in Areas of Opportunity.
    const patternHit = FIELDS.some((field) => {
      const text = fieldText(school, field)
      if (!text) return false
      const termHit = terms.some(({ term }) => matchesTerm(text, term))
      return termHit && PATTERN_WORDS.some((w) => text.toLowerCase().includes(w))
    })
    if (patternHit) score += 6
    // Weak-evidence discount: if the query terms only ever show up in the
    // generic Strengths paragraph — never in the hero, headline, What We
    // Love or Areas of Opportunity — the idea is a passing mention, not a
    // stealable pattern. Halve it so specific evidence ranks above it.
    const strongFields = ['heroCopy', 'headline', 'headlineCategory', 'loveFull', 'areasFull', 'hero']
    const hasStrongHit = fieldScores.some((fs) => strongFields.includes(fs.field.key))
    if (!hasStrongHit && fieldScores.length > 0) score *= 0.5

    if (score <= 0) continue
    // Evidence quote must be a real sentence, not a category label or a
    // narrative tag — so headlineCategory / hero never supply the quote,
    // even though they contribute to the score.
    const quotable = fieldScores.filter((fs) => !['headlineCategory', 'hero'].includes(fs.field.key))
    quotable.sort((a, b) => b.score - a.score)
    const best = quotable[0] || fieldScores[0]
    const angle = deriveAngle(school, best ? best.text : '', intentId)
    const ideaKey = `${school.id}-${slug(angle)}`
    results.push({
      id: ideaKey,
      ideaKey,
      schoolId: school.id,
      school,
      name: school.name,
      division: school.div,
      conference: school.conf,
      cms: school.cms,
      url: school.url,
      angle,
      evidence: best ? best.text.trim() : '',
      evidenceSource: best ? best.field.label : '',
      stealIt: STEAL_IT[angle] || '',
      effort: EFFORT[`${school.name}|${angle}`] || null,
      score: Math.round(score * 10) / 10,
      captureDate: CAPTURE_DATE,
    })
  }

  results.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name))
  return results
}
