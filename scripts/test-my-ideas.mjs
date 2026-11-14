// Verification for the My Ideas + checklist system. Not shipped UI — run with:
//   node scripts/test-my-ideas.mjs
// Uses a mock localStorage; nothing touches a real browser.

const store = new Map()
globalThis.localStorage = {
  getItem: (k) => (store.has(k) ? store.get(k) : null),
  setItem: (k, v) => store.set(k, String(v)),
  removeItem: (k) => store.delete(k),
  clear: () => store.clear(),
}

const { schools } = await import('../src/data/schools.js')
const { searchIdeas } = await import('../src/lib/ideas.js')
const myIdeas = await import('../src/lib/myIdeas.js')

let passed = 0
let failed = 0
function check(name, ok, detail = '') {
  if (ok) {
    passed++
    console.log(`PASS  ${name}`)
  } else {
    failed++
    console.log(`FAIL  ${name}${detail ? ` — ${detail}` : ''}`)
  }
}
function reset() {
  store.clear()
}

// --- 1. toggleSave round-trip with a full snapshot --------------------------
reset()
const [indiana] = searchIdeas('I need ideas on student ticket sales', { list: schools })
check('Indiana idea found by search', indiana && indiana.name === 'Indiana Hoosiers')
let r = myIdeas.toggleSave(indiana)
check('toggleSave saves', r.isSaved === true && r.saved.length === 1)
const snap = r.saved[0]
check('snapshot carries full fields', snap.angle === 'Floating ticket pane' && snap.evidence === 'Secure Your 2026 Season Football Tickets' && snap.sourceField === 'Hero copy' && snap.stealIt.length > 0 && snap.schoolName === 'Indiana Hoosiers' && snap.status === 'saved' && snap.notes === '')
check('snapshot stored under vc-my-ideas', JSON.parse(store.get('vc-my-ideas')).length === 1)
r = myIdeas.toggleSave(indiana)
check('toggleSave again removes', r.isSaved === false && r.saved.length === 0)
check('savedCount is 0 after remove', myIdeas.savedCount() === 0)

// --- 2. Starter-kit dedup ----------------------------------------------------
reset()
let kit = myIdeas.addKit('tickets')
check('ticket kit adds 6', kit.added === 6 && kit.items.length === 6, `added=${kit.added}`)
kit = myIdeas.addKit('tickets')
check('ticket kit twice does not duplicate', kit.added === 0 && kit.items.length === 6, `added=${kit.added} total=${kit.items.length}`)
kit = myIdeas.addKit('track')
check('track kit adds 5', kit.added === 5 && kit.items.length === 11, `added=${kit.added}`)
kit = myIdeas.addKit('track')
check('track kit twice does not duplicate', kit.added === 0 && kit.items.length === 11)
check('ticket kit labels are the proof verbatim', myIdeas.loadChecklist().some((i) => i.label.startsWith('Add a floating / pinned ticket pane beside the hero (Indiana)')))
check('track kit labels are the proof verbatim', myIdeas.loadChecklist().some((i) => i.label.startsWith('Lead with the athlete’s name + the specific event + the number (Dickinson 800m three-peat)')))

// --- 3. Idea → checklist conversion ------------------------------------------
reset()
const indianaSteps = myIdeas.ideaToChecklistItems(indiana)
check(
  'Indiana idea → floating-pane step',
  indianaSteps.some((i) => i.label === 'Add a floating / pinned ticket pane beside the hero'),
  JSON.stringify(indianaSteps.map((i) => i.label))
)
check('Indiana idea → 2 steps', indianaSteps.length === 2, `got ${indianaSteps.length}`)
const [dickinson] = searchIdeas('Give me feature story ideas for track and field', { list: schools }).filter((x) => x.name === 'Dickinson Red Devils')
const dickinsonSteps = myIdeas.ideaToChecklistItems(dickinson)
check(
  'Dickinson idea → lead-with-name/number step',
  dickinsonSteps.some((i) => i.label === 'Lead with the athlete’s name + the specific event + the number'),
  JSON.stringify(dickinsonSteps.map((i) => i.label))
)
let add = myIdeas.addIdeaToChecklist(indiana)
check('addIdeaToChecklist adds steps', add.added === 2 && add.items.length === 2, `added=${add.added}`)
add = myIdeas.addIdeaToChecklist(indiana)
check('addIdeaToChecklist twice does not duplicate', add.added === 0 && add.items.length === 2, `added=${add.added}`)

// --- 4. Legacy minimal-save migration ----------------------------------------
reset()
store.set('vc-my-ideas', JSON.stringify([
  { schoolId: 3, ideaKey: '3-floating-ticket-pane', savedAt: '2026-11-14T00:00:00.000Z' },
  { schoolId: 999, ideaKey: '999-some-idea', savedAt: '2026-11-14T00:00:00.000Z' },
]))
const migrated = myIdeas.loadSaved()
check('legacy save migrates to full record', migrated[0].angle === 'Floating ticket pane' && migrated[0].evidence.toLowerCase().includes('floating ticket') && migrated[0].unresolved === false, JSON.stringify(migrated[0]))
check('unresolvable legacy save is kept, flagged', migrated.length === 2 && migrated[1].unresolved === true && migrated[1].angle === 'Saved idea', JSON.stringify(migrated[1]))

// --- 5. Checklist toggle / clear done ----------------------------------------
reset()
myIdeas.addChecklistItem({ label: 'Test custom item', source: 'custom' })
let items = myIdeas.loadChecklist()
check('custom item added', items.length === 1 && items[0].done === false)
items = myIdeas.toggleChecklistItem(items[0].id)
check('toggle marks done', items[0].done === true && !!items[0].doneAt)
check('checklistProgress counts', JSON.stringify(myIdeas.checklistProgress()) === JSON.stringify({ total: 1, done: 1, remaining: 0 }))
items = myIdeas.clearDone()
check('clearDone removes done items', items.length === 0)

console.log(`\n${passed} passed, ${failed} failed`)
process.exit(failed ? 1 : 0)
