// Live notes — the deeper layer, from the live audits run Nov 14, 2026.
// Three schools have been audited live in full (homepage + four pillar
// pages): Ohio State 13, Fort Hays State 65, Mount Marty 112. Seven
// more were audited live on the homepage only (the missing-7 run):
// Missouri Southern 142, Newman 143, Rogers State 144, Central
// Missouri 145, Washburn 146, Central Oklahoma 147, Alabama 148.
// For those seven, the roster and giving lines say so plainly —
// the roster and giving pages themselves were not visited — instead
// of inventing findings. Every other school shows the June 3 capture
// signals only. Nothing here is inferred: each line traces to its
// audit file, ~/workspace/user/files/varsity-pillar-minor-sport-audits-2026-11-14.md
// (homepage media/social supplements in varsity-audit-2026-11-14.md)
// or ~/workspace/user/files/varsity-missing-7-audit-2026-11-14.md.
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
  // Missouri Southern Lions — id 142 (homepage audit only, Nov 14, 2026)
  142: {
    schoolId: 142,
    audited: LIVE_NOTES_DATE,
    media: {
      audio: 'No audio player on the homepage; only LISTEN / LIVE AUDIO links in the schedule rows.',
      video: 'No dedicated video module. Video exists only as per-game LIVE VIDEO links in the schedule rows.',
      photos: 'Masked-photography hero and carousel images carry the page, and Photo Galleries is its own dated row with a View All link.',
      social: 'Five icons in the main nav (Facebook, X, Instagram, YouTube, Flickr), repeated under @MOSOSPORTS — but the social section renders as a heading and a large blank white area. The content stream does not load.',
    },
    pillars: {
      tickets: 'One plain-text TICKETS link inside the hamburger menu. No ticket button in the header, no ticket link in schedule rows — the June Medium Weight button is gone.',
      sportHub: 'Top Stories carousel plus a Schedules module with EVENTS/RESULTS tabs. The live football game leads with WATCH / LISTEN / STATS pills in one row.',
      roster: 'Roster pages were not part of this homepage audit — no live notes yet. The page does spotlight two athletes as Featured Lions of the Week.',
      giving: 'SUPPORT sits in the header next to SHOP GEAR. The giving page itself was not audited.',
    },
    steal: 'One live/next-game row carrying Watch / Listen / Stats together, so a visitor never opens a schedule page to follow the game in progress.',
  },
  // Newman Jets — id 143 (homepage audit only, Nov 14, 2026)
  143: {
    schoolId: 143,
    audited: LIVE_NOTES_DATE,
    media: {
      audio: 'JETCAST is a named nav link, and the social stream leads with a new Jetcast episode (#179).',
      video: 'Video lives in the social stream — a YouTube card for the softball field with a Play video button. No photo-galleries section on the homepage.',
      photos: 'Every headline carries a photo thumbnail; social posts carry their own images.',
      social: 'The most fully built social section of the seven: a SOCIAL MEDIA stream with All / Facebook / Twitter / Instagram / YouTube filter buttons and a LOAD MORE button. Quick Links repeats the three social links as text.',
    },
    pillars: {
      tickets: 'Buy Tickets is the first row of QUICK LINKS in plain text with a chevron — the same weight as Gear Shop, Facebook, Twitter, and Instagram. The June high-contrast red button is gone.',
      sportHub: 'A scoreboard strip across the top plus a COUNTDOWN TO GAME DAY box for the very next game, above the headlines.',
      roster: 'Roster pages were not part of this homepage audit — no live notes yet.',
      giving: 'GIVE is a main nav item, and NIL is named in the nav as INFLUXER. The giving page itself was not audited.',
    },
    steal: 'Pair a live scoreboard strip with a Countdown to Game Day box for the very next game, so the two most time-sensitive facts sit above the headlines.',
  },
  // Rogers State Hillcats — id 144 (homepage audit only, Nov 14, 2026)
  144: {
    schoolId: 144,
    audited: LIVE_NOTES_DATE,
    media: {
      audio: 'No audio player; only an Audio link on the 5:00 p.m. men\u2019s-basketball card.',
      video: 'A named, filterable Hillcats Media rail — six YouTube videos with play buttons, athlete-profile shorts first, All Media / Video filters, Load More. No Photo Galleries section.',
      photos: 'The minimalist photo-led hero survives: large player photo one side, headline and score the other, neutral whitespace.',
      social: 'One large full-width FOLLOW THE HILLCATS banner with Facebook, Twitter (still the bird, not X), Instagram, and YouTube icons. No social icons in the header, nav, or footer, and no embedded feed.',
    },
    pillars: {
      tickets: 'TICKETS is a solid red button in the top-right header, first of three equal red buttons — TICKETS, DONATE, SHOP. No prices or per-game ticket links in schedule cards.',
      sportHub: 'Top Stories carousel plus an EVENTS strip — but the strip is dominated by the hosted Tulsa Tip-Off Classic, and three of its five cards are other schools\u2019 tournament games presented with the same treatment as Rogers State games.',
      roster: 'Roster pages were not part of this homepage audit — no live notes yet.',
      giving: 'DONATE is a header button and the site rotates a DONATE TO HILLCAT CLUB banner. The giving page itself was not audited.',
    },
    steal: 'Three equal solid header buttons — Tickets, Donate, Shop — with Tickets first, so the three revenue actions are always one click away.',
  },
  // Central Missouri Mules — id 145 (homepage audit only, Nov 14, 2026)
  145: {
    schoolId: 145,
    audited: LIVE_NOTES_DATE,
    media: {
      audio: 'No audio or podcast section on the homepage; live coverage is signalled only by the Live badge on football in Events.',
      video: 'The Videos section is stale — three videos dated April, about seven months old — while Photo Galleries are current (October, September).',
      photos: 'One large Top Story photo, More News thumbnails, and three current photo galleries.',
      social: 'Header icons (Facebook, X, Instagram, YouTube) plus a dedicated Instagram section headed @ucm_athletics with a Follow Us link.',
    },
    pillars: {
      tickets: 'Tickets in three places: a white pill button in the header (with Shop and Donate), a Tickets item in the main nav, and a large black TICKETS tile in the left column. No longer the June bright-red solid button.',
      sportHub: 'One large Top Story plus a live-event column — live football with a Live badge, then the rest of today\u2019s schedule — under a three-banner game-day strip.',
      roster: 'Roster pages were not part of this homepage audit — no live notes yet.',
      giving: 'GIVING and NIL are black tiles in the left column, and Cardinal & Black Fund is a nav item. The giving page itself was not audited.',
    },
    steal: 'A fixed three-banner game-day strip plus one large story when the day itself is the news.',
  },
  // Washburn Ichabods — id 146 (homepage audit only, Nov 14, 2026)
  146: {
    schoolId: 146,
    audited: LIVE_NOTES_DATE,
    media: {
      audio: 'Audio and video exist only as per-game links — Live audio, Live video, Live stats inside the scoreboard toggles — not as a media section.',
      video: 'No Videos section on the homepage, against Video Yes in June. The only video is the Live video link inside the football and women\u2019s basketball scoreboard toggles.',
      photos: 'Top Stories photos plus Ichabods Galleries (football, women\u2019s soccer, women\u2019s basketball, all within the last two weeks).',
      social: 'Ichabods Social is the only social promotion — an embedded feed with All / Facebook / Twitter / Instagram filters — but its layout is broken on desktop: cards overlap, a Facebook handle renders as a raw URL, and an Instagram card is a blank white box.',
    },
    pillars: {
      tickets: 'TICKETS is a plain nav item in the same white type as MEN\u2019S SPORTS and CAMPS — not the June deep-navy solid CTA. The only other ticket link hides inside the football scoreboard toggle.',
      sportHub: 'A four-game scoreboard strip above the news, each game with a collapsed Toggle game links control (story, boxscore, live audio, live video, live stats, Buy tickets for football).',
      roster: 'Roster pages were not part of this homepage audit — no live notes yet.',
      giving: 'ICHABOD ATHLETIC FUND is in the hamburger menu. The giving page itself was not audited.',
    },
    steal: 'A four-game scoreboard strip above the news, and a top story that is a result with a name and a number — "Henke scores a hat trick…" — rather than a generic preview.',
  },
  // Central Oklahoma Bronchos — id 147 (homepage audit only, Nov 14, 2026)
  147: {
    schoolId: 147,
    audited: LIVE_NOTES_DATE,
    media: {
      audio: 'No audio or podcast section on the homepage; event links sit behind collapsed Toggle links controls in Events Calendar.',
      video: 'The Videos section exists but all three videos are dated Oct 19, 2023 — over three years old, all football. The single Galleries tile is 22 months old.',
      photos: 'Top Stories photos plus one gallery tile, and a Slideshow quote card from a women\u2019s golfer.',
      social: 'An embedded Bronchos on Social section with All / Instagram / Facebook filters and handle @ucoathletics — but the cards render with large black letterbox bars above and below a small central photo.',
    },
    pillars: {
      tickets: 'A solid yellow Tickets button with a ticket icon at the top right of the navy header, alongside matching yellow Donate and Shop buttons — the most visually distinct ticket control of the MIAA six. No ticket link inside today\u2019s event rows.',
      sportHub: 'A left-rail Events Calendar listing today\u2019s games by time, with the MIAA Network streaming banner directly above the Top Story.',
      roster: 'Roster pages were not part of this homepage audit — no live notes yet.',
      giving: 'Donate is a yellow header button, and the first-visit splash is a Broncho Athletic Club fundraising ask. The giving page itself was not audited.',
    },
    steal: 'An Events Calendar rail listing today\u2019s games by time, with the streaming banner directly above the top story — plus a newsletter sign-up and a one-question fan poll in the rail.',
  },
  // Alabama Crimson Tide — id 148 (homepage audit only, Nov 14, 2026)
  148: {
    schoolId: 148,
    audited: LIVE_NOTES_DATE,
    media: {
      audio: 'No embedded player and no Listen Live button on the homepage. Audio lives one click away in Watch/Listen as the Alabama Insider Podcast and Radio/TV Information.',
      video: 'The freshest video of the seven: a Top Video plus 7 more (Nov 10–13), 8 total, filterable by sport — postgame videos the same day as the result.',
      photos: 'Seven galleries totalling 122 images, including a 27-image practice gallery — the largest on the page. The hero photo is Nate Oats with a basketball.',
      social: 'No central Follow Alabama block, no social icons in the header or footer, no handle on the homepage surface. Each of 15 sports gets Facebook, X, and Instagram icons inside the Sports menu — invisible to anyone who never opens it.',
    },
    pillars: {
      tickets: 'The hero itself is a ticket sale — Men\u2019s Basketball Single Game Tickets on Sale — plus a crimson Tickets pill, a Tickets dropdown, a Buy Tickets first row in Quick Links, a ticket link in the Top Story, and a pinned Quick Ticket Help widget.',
      sportHub: 'A filterable scoreboard slider (8 events, 19 sport options) above a Live Game Center for football at Vanderbilt, plus a live countdown to women\u2019s basketball vs Mercer.',
      roster: 'Roster pages were not part of this homepage audit — no live notes yet.',
      giving: 'Donate is a header pill, NIL is a main nav item, and the Yea Alabama feature fronts quarterback Austin Mack with a Join today ask. The giving and NIL pages themselves were not audited.',
    },
    steal: 'Let the hero sell the next on-sale item, repeat the ticket link in Quick Links and in the next game\u2019s Top Story, and keep a persistent ticket-help button on screen.',
  },
}

export function getLiveNotes(schoolId) {
  return liveNotes[schoolId] || null
}
