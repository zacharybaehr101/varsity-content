// Live notes — the deeper layer, from the live audits run Nov 14, 2026.
// Only three schools have been audited live (homepage + four pillar
// pages). Every other school shows the June 3 capture signals only.
// Nothing here is inferred: each line traces to the audit file
// ~/workspace/user/files/varsity-pillar-minor-sport-audits-2026-11-14.md
// (homepage media/social supplements in varsity-audit-2026-11-14.md).
//
// Keyed by school id. A school with no entry here simply has no live
// notes yet — the page says so, rather than inventing any.

export const LIVE_NOTES_DATE = '2026-11-14'

export const liveNotes = {
  // Ohio State Buckeyes — id 13
  13: {
    schoolId: 13,
    audited: LIVE_NOTES_DATE,
    media: {
      audio: 'No listen link on the schedule rows. Radio (Ohio State Sports Network 97.1 FM, SiriusXM 84) is in the Nov 13 broadcast article, one click away.',
      video: 'Buckeyes Media has a Videos tab, press-conference-led. No video in the hero. The Gameday page runs a background video.',
      photos: 'Hero and headline photos throughout, plus a Galleries tab with 7 albums after Load More.',
      social: 'Footer "Follow Us" icons only (Instagram, Facebook, YouTube, TikTok). The Buckeyes Media Social tab rendered blank in the Nov 14 session.',
    },
    pillars: {
      tickets: 'Ticket Central is a directory of 11 ticketed sports, 3 clicks to a Ticketmaster seat map. The cheapest seat on game day was $10 resale. No prices on the Ohio State side, and season tickets are invisible.',
      sportHub: 'The football hub has a Live Game Center and a 9-stop Gameday Timeline (5 a.m. lots to kickoff), but no standings table, and watch/listen info is buried in an article.',
      roster: "Jeremiah Smith's profile is the best storytelling on the site — record context, snap counts, recruiting backstory. But Related Videos reads 'No videos available'.",
      giving: 'Two named funds with two different asks: Champions Fund $10/month, Football Excellence Fund $100 once. The NIL page never asks for a dollar and takes about 15 seconds to load.',
    },
    steal: 'The Gameday Timeline — nine stops from 5 a.m. lots to kickoff, a fan\u2019s itinerary.',
  },
  // Fort Hays State Tigers — id 65
  65: {
    schoolId: 65,
    audited: LIVE_NOTES_DATE,
    media: {
      audio: 'Listen Live (KJLS 103.3 FM) in the Fans menu, plus per-event Listen icons in the scoreboard — but football\u2019s Listen points to Mix 103 FM, a different station.',
      video: 'No video anywhere on the homepage. Only an outbound YouTube link in the SOCIAL menu.',
      photos: 'The hero mixes action photos with designed game-day graphics. Two tiles print the headline over baked-in image text.',
      social: 'SOCIAL is a primary nav item with Instagram, Twitter, Facebook, YouTube and Photo Galleries, plus per-sport X/Instagram icons in the Sports menu. The footer has no social icons.',
    },
    pillars: {
      tickets: 'Sticky-nav Tickets lands on a text-only price list on a 2011 URL, then Vivenu — 4 clicks to buy, a 5th to see a price. The Hall of Fame ticket link returns a server error while the homepage still promotes those tickets. Students are free.',
      sportHub: 'The Top Stories carousel is the hero. The schedule page is the strongest hub — countdown, honest 3–7 record, season selector back to 1902 — but the site can\u2019t agree on kickoff time (1:00 vs 1:05).',
      roster: 'Mason McMinn\u2019s profile is one headshot and a thin bio, with a literal "GS: undefined" in the stats table. The Historical tab — a three-year growth chart — is the lovely touch.',
      giving: 'Clear tiers ($100–$10,000+) with a matching-gift note, but the Tiger Athletic Fund page has no donate button anywhere. The Tiger Club is paper-and-check only, and its form link opens a 2021 ticket brochure. NIL is a real INFLCR exchange with 393 athletes.',
    },
    steal: 'The century of seasons — a season selector back to 1902 — and a Watch/Listen/Stats row on every game.',
  },
  // Mount Marty Lancers — id 112
  112: {
    schoolId: 112,
    audited: LIVE_NOTES_DATE,
    media: {
      audio: 'No audio at all — no Listen Live, radio link, or podcast anywhere on the site.',
      video: 'The video section is empty ("There are currently no videos") even on game day. Schedule "Live Video" links go to the GPAC Network home page, not the broadcast.',
      photos: 'Game-action photography carries the page. The hero has five slides; both JV basketball slides use the same football celebration photo.',
      social: 'Four channels in three places: an icon bar under the hero, footer icons, and an embedded "Lancers Social Media" feed. The fourth icon is labeled YouTube but links to the GPAC stream page.',
    },
    pillars: {
      tickets: 'There is genuinely no ticket page — no CTA, no price, no student path, anywhere on the site. A fan\u2019s options today: show up and pay at the gate, or watch remotely.',
      sportHub: 'A clean schedule hub — record panel, full 11-game log, Team Leaders sidebar. But the Stats link points to a 2023-24 PrestoSports page that won\u2019t load past Cloudflare.',
      roster: '114 players, deep stats, and a "Choose a Player" dropdown — but the Bio tab is an empty "Biography" heading on both profiles checked, including a graduate senior.',
      giving: 'The Lancer Club ($150–$3,000) is real but lives only inside a game-program PDF; its nav link goes to an admissions visit page, and the Sponsors link goes to a recruit form. The one working path is a per-athlete Hometown Sponsor form ($250/$500/$1,000).',
    },
    steal: 'The Hometown Sponsor form — per-athlete sponsorship tied to a named athlete. Small-college giving that feels personal.',
  },
}

export function getLiveNotes(schoolId) {
  return liveNotes[schoolId] || null
}
