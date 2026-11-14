// Verification for the idea-search engine. Not shipped UI — run with:
//   node scripts/test-ideas.mjs
import { schools } from '../src/data/schools.js'
import { searchIdeas } from '../src/lib/ideas.js'

function show(title, results, n = 8) {
  console.log(`\n=== ${title} (${results.length} results) ===`)
  results.slice(0, n).forEach((r, i) => {
    console.log(`${i + 1}. ${r.name} [${r.division} · ${r.conference}] score=${r.score} angle="${r.angle}" src=${r.evidenceSource} effort=${r.effort || '—'}`)
    console.log(`   evidence: "${r.evidence}"`)
  })
  return results.slice(0, n).map((r) => r.name)
}

const tickets = searchIdeas('I need ideas on student ticket sales', { list: schools })
const topTickets = show('student ticket sales — top 8', tickets, 8)
const ticketExpected = ['Indiana Hoosiers', 'Notre Dame Fighting Irish', 'Miami Hurricanes', 'Baylor Bears', 'Arizona State Sun Devils', 'College of Staten Island Dolphins', 'Ohio State Buckeyes', 'Rutgers Scarlet Knights']
console.log('ticket top-8 contains all 8 proven:', ticketExpected.every((n) => topTickets.includes(n)))
console.log('ticket proven missing from top 8:', ticketExpected.filter((n) => !topTickets.includes(n)))
console.log('ticket proven ranks:', ticketExpected.map((n) => `${n}=#${tickets.findIndex((r) => r.name === n) + 1}`).join(' | '))

const track = searchIdeas('Give me feature story ideas for track and field', { list: schools })
const topTrack = show('track and field feature stories — top 8', track, 8)
const trackExpected = ['Dickinson Red Devils', 'Cincinnati Bearcats', 'Mount Marty Lancers', 'Indiana University Kokomo Cougars', 'WVU Tech Golden Bears', 'Clemson Tigers', 'Arkansas Razorbacks']
console.log('track top-8 contains proven:', trackExpected.filter((n) => topTrack.includes(n)))
console.log('track proven missing from top 8:', trackExpected.filter((n) => !topTrack.includes(n)))
console.log('track proven ranks:', trackExpected.map((n) => `${n}=#${track.findIndex((r) => r.name === n) + 1}`).join(' | '))

const naiaTrack = searchIdeas('Give me feature story ideas for track and field', { division: 'NAIA', list: schools })
show('NAIA-filtered track — top 8', naiaTrack, 8)
const naiaExpected = ['Mount Marty Lancers', 'Indiana University Kokomo Cougars', 'WVU Tech Golden Bears', 'Concordia Bulldogs']
console.log('NAIA track top-8 contains:', naiaExpected.filter((n) => naiaTrack.slice(0, 8).map((r) => r.name).includes(n)))

for (const q of ['NIL marketplace ideas', 'streaming and video ideas', 'recruiting landing page ideas']) {
  const r = searchIdeas(q, { list: schools })
  console.log(`\nchip "${q}": ${r.length} results — top 3: ${r.slice(0, 3).map((x) => x.name).join(' | ')}`)
}
