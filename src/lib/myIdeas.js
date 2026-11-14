// My Ideas + checklist — the single source of truth for both stores.
// Persistence is localStorage ONLY in this phase: no auth, no backend,
// no account. Saved ideas and checklist items live in this browser;
// cross-device / team sync is a later Scout/Agency feature, not built here.
//
// Keys:
//   'vc-my-ideas'  — saved ideas
//   'vc-checklist' — checklist items
//
// Saved idea record:
//   { schoolId, ideaKey, angle, evidence, sourceField, stealIt, effort,
//     schoolName, division, conference, savedAt,
//     status: 'saved' | 'doing' | 'done', notes: '' }
// Checklist item record:
//   { id, label, source: 'starter' | 'idea' | 'gap' | 'custom',
//     schoolId, ideaKey, kit: 'tickets' | 'track' | null,
//     done: false, createdAt, doneAt }

import { schools } from '../data/schools.js'
import { getIdeaByKey } from './ideas.js'

export const SAVED_KEY = 'vc-my-ideas'
export const CHECKLIST_KEY = 'vc-checklist'
export const IDEAS_CHANGED_EVENT = 'vc-my-ideas-changed'
export const CHECKLIST_CHANGED_EVENT = 'vc-checklist-changed'

const store = {
  get(key) {
    try {
      if (typeof localStorage === 'undefined') return null
      return localStorage.getItem(key)
    } catch {
      return null
    }
  },
  set(key, value) {
    try {
      if (typeof localStorage === 'undefined') return
      localStorage.setItem(key, value)
    } catch {
      // private mode / quota — saves silently don't persist
    }
  },
}

function notify(eventName) {
  try {
    if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
      window.dispatchEvent(new CustomEvent(eventName))
    }
  } catch {
    // non-browser (tests) — no listeners to notify
  }
}

function readJson(key) {
  try {
    const raw = store.get(key)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function uid() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

// --- Saved ideas -----------------------------------------------------------

// A legacy minimal save is { schoolId, ideaKey, savedAt } — no angle or
// evidence. Migrate it on load by re-deriving the idea from the school
// record. If it cannot be resolved (school gone, key unknown), keep the
// card but flag it unresolved — never drop a save silently.
export function migrateSaved(raw, list = schools) {
  return (raw || []).map((item) => {
    if (item.angle && item.evidence) {
      return {
        ...item,
        status: item.status || 'saved',
        notes: item.notes || '',
        unresolved: false,
      }
    }
    const idea = getIdeaByKey(item.schoolId, item.ideaKey, list)
    if (idea) {
      return {
        schoolId: idea.schoolId,
        ideaKey: idea.ideaKey,
        angle: idea.angle,
        evidence: idea.evidence,
        sourceField: idea.evidenceSource,
        stealIt: idea.stealIt,
        effort: idea.effort || null,
        schoolName: idea.name,
        division: idea.division,
        conference: idea.conference,
        savedAt: item.savedAt || new Date().toISOString(),
        status: item.status || 'saved',
        notes: item.notes || '',
        unresolved: false,
      }
    }
    return {
      schoolId: item.schoolId,
      ideaKey: item.ideaKey,
      angle: 'Saved idea',
      evidence: '',
      sourceField: '',
      stealIt: '',
      effort: null,
      schoolName: item.schoolName || '',
      division: item.division || '',
      conference: item.conference || '',
      savedAt: item.savedAt || new Date().toISOString(),
      status: item.status || 'saved',
      notes: item.notes || '',
      unresolved: true,
    }
  })
}

export function loadSaved(list = schools) {
  return migrateSaved(readJson(SAVED_KEY), list)
}

export function saveSaved(items) {
  store.set(SAVED_KEY, JSON.stringify(items))
  notify(IDEAS_CHANGED_EVENT)
}

// Snapshot a search-result / derived idea into the full saved record.
export function snapshotIdea(idea) {
  return {
    schoolId: idea.schoolId,
    ideaKey: idea.ideaKey,
    angle: idea.angle || 'From the audit',
    evidence: idea.evidence || '',
    sourceField: idea.evidenceSource || idea.sourceField || '',
    stealIt: idea.stealIt || '',
    effort: idea.effort || null,
    schoolName: idea.name || idea.schoolName || '',
    division: idea.division || '',
    conference: idea.conference || '',
    savedAt: new Date().toISOString(),
    status: 'saved',
    notes: '',
    unresolved: false,
  }
}

// Toggle-save: returns { saved: [...], isSaved: bool }
export function toggleSave(idea, list = schools) {
  const current = loadSaved(list)
  const exists = current.some((s) => s.ideaKey === idea.ideaKey)
  const next = exists
    ? current.filter((s) => s.ideaKey !== idea.ideaKey)
    : [...current, snapshotIdea(idea)]
  saveSaved(next)
  return { saved: next, isSaved: !exists }
}

export function updateSavedIdea(ideaKey, patch, list = schools) {
  const next = loadSaved(list).map((s) =>
    s.ideaKey === ideaKey ? { ...s, ...patch } : s
  )
  saveSaved(next)
  return next
}

export function removeSavedIdea(ideaKey, list = schools) {
  const next = loadSaved(list).filter((s) => s.ideaKey !== ideaKey)
  saveSaved(next)
  return next
}

// --- Checklist -------------------------------------------------------------

export function loadChecklist() {
  return readJson(CHECKLIST_KEY).map((item) => ({
    ...item,
    done: !!item.done,
    source: item.source || 'custom',
    kit: item.kit || null,
  }))
}

export function saveChecklist(items) {
  store.set(CHECKLIST_KEY, JSON.stringify(items))
  notify(CHECKLIST_CHANGED_EVENT)
}

export function addChecklistItem(partial) {
  const now = new Date().toISOString()
  const item = {
    id: uid(),
    label: (partial.label || '').trim(),
    source: partial.source || 'custom',
    schoolId: partial.schoolId || null,
    ideaKey: partial.ideaKey || null,
    kit: partial.kit || null,
    done: false,
    createdAt: now,
    doneAt: null,
  }
  if (!item.label) return loadChecklist()
  const next = [...loadChecklist(), item]
  saveChecklist(next)
  return next
}

export function toggleChecklistItem(id) {
  const next = loadChecklist().map((item) =>
    item.id === id
      ? { ...item, done: !item.done, doneAt: !item.done ? new Date().toISOString() : null }
      : item
  )
  saveChecklist(next)
  return next
}

export function removeChecklistItem(id) {
  const next = loadChecklist().filter((item) => item.id !== id)
  saveChecklist(next)
  return next
}

export function clearDone() {
  const next = loadChecklist().filter((item) => !item.done)
  saveChecklist(next)
  return next
}

// --- Starter kits (verbatim from the idea-search proof) --------------------

export const STARTER_KITS = {
  tickets: {
    id: 'tickets',
    title: 'Student ticket push',
    items: [
      'Pick the one ticket story for the hero for 48 hours (Notre Dame / Miami pattern): on-sale date or season tickets',
      'Add a floating / pinned ticket pane beside the hero (Indiana) — checkout without a redirect',
      'Bundle tickets with the gameday experience in the copy (Baylor tailgating)',
      'Brand the ticketing-provider block with the mascot if there is no custom build (Staten Island)',
      'Check the ticket CTA on mobile — sticky button, ribbon compression (Rutgers caution)',
      'Keep one grid holding results + tickets + media together (Ohio State)',
    ],
  },
  track: {
    id: 'track',
    title: 'Track feature story kit',
    items: [
      'Pick the angle: record chase / coach / All-American / freshman / team title',
      'Lead with the athlete’s name + the specific event + the number (Dickinson 800m three-peat)',
      'Pair action shots with academic honors in the same layout (WVU Tech)',
      'Give the non-revenue sport hero status in postseason (Iowa pattern)',
      'Use the facility as the visual — aerial / panorama shot (Dickinson, Oregon’s virtual tour)',
    ],
  },
}

// Add a starter kit, skipping exact duplicates by label (case-insensitive).
// Returns { items, added }.
export function addKit(kitId) {
  const kit = STARTER_KITS[kitId]
  if (!kit) return { items: loadChecklist(), added: 0 }
  const current = loadChecklist()
  const existing = new Set(current.map((i) => i.label.toLowerCase()))
  const now = new Date().toISOString()
  const fresh = kit.items
    .filter((label) => !existing.has(label.toLowerCase()))
    .map((label) => ({
      id: uid(),
      label,
      source: 'starter',
      schoolId: null,
      ideaKey: null,
      kit: kitId,
      done: false,
      createdAt: now,
      doneAt: null,
    }))
  const next = [...current, ...fresh]
  saveChecklist(next)
  return { items: next, added: fresh.length }
}

// Turn one saved idea into 1–3 concrete checklist steps, derived from its
// angle / steal-it line. Never invents a step the evidence doesn't support.
const IDEA_STEPS = [
  {
    test: (idea) => /floating ticket pane/i.test(idea.angle || ''),
    steps: [
      'Add a floating / pinned ticket pane beside the hero',
      'Check the ticket CTA on mobile — sticky button, ribbon compression',
    ],
  },
  {
    test: (idea) => /hero as announcement/i.test(idea.angle || ''),
    steps: ['Pick the one ticket story for the hero for 48 hours'],
  },
  {
    test: (idea) => /bundle tickets/i.test(idea.angle || ''),
    steps: ['Bundle tickets with the gameday experience in the copy'],
  },
  {
    test: (idea) => /branded ticketing block/i.test(idea.angle || ''),
    steps: ['Brand the ticketing-provider block with the mascot'],
  },
  {
    test: (idea) => /one grid/i.test(idea.angle || ''),
    steps: ['Keep one grid holding results + tickets + media together'],
  },
  {
    test: (idea) => /mobile check/i.test(idea.angle || ''),
    steps: ['Check the ticket CTA on mobile — sticky button, ribbon compression'],
  },
  {
    test: (idea) => /cautionary/i.test(idea.angle || ''),
    steps: ['Check the ticket block does not crowd out news on the homepage'],
  },
  {
    test: (idea) => /record chase/i.test(idea.angle || ''),
    steps: [
      'Lead with the athlete’s name + the specific event + the number',
      'Use the facility as the visual — aerial / panorama shot',
    ],
  },
  {
    test: (idea) => /coach as story/i.test(idea.angle || ''),
    steps: ['Pick the angle: coach as the story — extension or award'],
  },
  {
    test: (idea) => /all-american/i.test(idea.angle || ''),
    steps: ['Pick the angle: small-school All-American'],
  },
  {
    test: (idea) => /freshman breakthrough/i.test(idea.angle || ''),
    steps: ['Pair action shots with academic honors in the same layout'],
  },
  {
    test: (idea) => /team title/i.test(idea.angle || ''),
    steps: ['Give the non-revenue sport hero status in postseason'],
  },
]

export function ideaToChecklistItems(idea) {
  const match = IDEA_STEPS.find((entry) => entry.test(idea))
  const labels = match
    ? match.steps
    : [`Work on: ${idea.angle || 'saved idea'} — ${idea.schoolName || ''}`.trim()]
  return labels.map((label) => ({
    id: uid(),
    label,
    source: 'idea',
    schoolId: idea.schoolId || null,
    ideaKey: idea.ideaKey || null,
    kit: null,
    done: false,
    createdAt: new Date().toISOString(),
    doneAt: null,
  }))
}

// Add an idea's steps to the checklist, skipping labels already present
// for that idea. Returns { items, added }.
export function addIdeaToChecklist(idea) {
  const current = loadChecklist()
  const existing = new Set(
    current
      .filter((i) => i.ideaKey === idea.ideaKey)
      .map((i) => i.label.toLowerCase())
  )
  const fresh = ideaToChecklistItems(idea).filter(
    (item) => !existing.has(item.label.toLowerCase())
  )
  const next = [...current, ...fresh]
  saveChecklist(next)
  return { items: next, added: fresh.length }
}

// --- Counts ----------------------------------------------------------------

export function savedCount(list = schools) {
  return loadSaved(list).length
}

export function checklistProgress() {
  const items = loadChecklist()
  const done = items.filter((i) => i.done).length
  return { total: items.length, done, remaining: items.length - done }
}
