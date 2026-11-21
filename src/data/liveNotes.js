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
// Eight more were captured live on the homepage only in the ASUN run
// (Nov 20, 2026): Bellarmine 149, Florida Gulf Coast 150, Jacksonville
// 151, Lipscomb 152, Queens 153, Stetson 154, North Florida 155,
// West Florida 156. These are capture-only records (captureOnly in
// schools.js) — no full editorial audit yet — so their live notes carry
// the sweep's media/social and pillar facts, and the roster and giving
// lines say plainly that those pages were not visited. Source:
// ~/workspace/user/files/varsity-asun-sweep-2026-11-20.md.
//
// The rollout (Nov 20–21, 2026) lists the remaining 278 Division I schools
// the same way (ids 157–434): SWAC 157–168, Southland 169–180, MAC 181–192,
// Horizon League 193–204, Big West 205–216, Northeast 217–225, Ivy League
// 226–233, Ohio Valley 234–242, Southern 243–253, Summit League 254–261,
// West Coast 262–271, America East 272–280, Big Sky 281–291, CUSA 292–301,
// Missouri Valley 302–312, Patriot League 313–322, Big South 323–331,
// MEAC 332–339, Mountain West 340–349, United Athletic 350–358 (all
// captured Nov 20, 2026), then Pac-12 359–367, Atlantic 10 368–381,
// Sun Belt 382–395, MAAC 396–408, CAA 409–421, American 422–434 (all
// captured Nov 14, 2026). Sources: the 20 varsity-*-sweep-2026-11-20.md
// files and the 6 varsity-*-sweep-2026-11-14.md files in
// ~/workspace/user/files/.
//
// Keyed by school id. A school with no entry here simply has no live
// notes yet — the page says so, rather than inventing any.

export const LIVE_NOTES_DATE = '2026-11-14'
export const CAPTURE_ONLY_DATE = '2026-11-20'
export const CAPTURE_ONLY_DATE_NOV14 = '2026-11-14'

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
  // Bellarmine Knights — id 149 (homepage capture only, Nov 20, 2026)
  149: {
    schoolId: 149,
    audited: CAPTURE_ONLY_DATE,
    media: {
      audio: 'No audio player noted on the homepage in the Nov 20 capture.',
      video: 'No video section on the homepage — no video or gallery section.',
      photos: 'No photo gallery section on the homepage. The hero is a 6-slide Top Stories carousel.',
      social: 'Header icons (Facebook, X, Instagram, YouTube); "KNIGHTS SOCIAL" content-stream section present but empty — a blank white box, still empty after a 10-second wait.',
    },
    pillars: {
      tickets: 'Header TICKETS link, plus "Buy tickets" links in events. No ticket promo in the hero; the promo below the hero is Norton Sports Health / gear ("free GROUND SHIPPING ORDERS OF $75+").',
      sportHub: 'Top Stories carousel (6 slides) plus Knights Events. Streaming: no provider named — only generic "Live video" links.',
      roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
      giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent from the homepage and menus.',
    },
    steal: 'A blank social section is worse than none — Bellarmine\u2019s "KNIGHTS SOCIAL" renders as an empty white box. Check yours actually loads posts.',
  },
  // Florida Gulf Coast Eagles — id 150 (homepage capture only, Nov 20, 2026)
  150: {
    schoolId: 150,
    audited: CAPTURE_ONLY_DATE,
    media: {
      audio: 'No audio player noted on the homepage in the Nov 20 capture.',
      video: 'Videos section, latest Nov 19 — "Flight Plan S1 E06 with Thais Baziquetto-Allen, Abby Toeniskoetter and Josh Molino." The freshest video in the conference.',
      photos: 'Photo galleries present and fresh — Nov 18 "FGCU at FAU" MBB (6 images), Nov 15 vs. Abraham Baldwin (21), Nov 14 vs. FAU WBB (37).',
      social: '"Eagles Social" section present but empty — text reads "No all posts available." Footer "Follow Us" links: Facebook, Twitter, Instagram, YouTube; Social Media Hub in the Fans menu.',
    },
    pillars: {
      tickets: 'Header Tickets link plus a green pill Tickets button, Quick Links "Buy Your Tickets Today!", and a TICKETS link in the lead story. No ticket promo in the hero/lead.',
      sportHub: '"By The Numbers" strip above a "Latest News" grid. Lead story carries TICKETS / LIVE STREAM / LIVE STATS / GAME NOTES with an ESPN+ logo. "FGCU on ESPN+" tile in the promo rotator and in the Fans menu, plus a header Watch link and an Eagles Watch+ tile.',
      roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
      giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is menu-only ("NIL" / "Name, Image, Likeness Information" under the Athletes menu).',
    },
    steal: 'The "By The Numbers" strip above the news grid (82 NCAA appearances / 35 tournament victories / 126 conference players of the year / 117 conference championships / 9 academic All-Americans) — institutional proof before a single story.',
  },
  // Jacksonville Dolphins — id 151 (homepage capture only, Nov 20, 2026)
  151: {
    schoolId: 151,
    audited: CAPTURE_ONLY_DATE,
    media: {
      audio: 'No audio player noted on the homepage in the Nov 20 capture.',
      video: 'Dolphin Vision present, but stale in rotation — latest seen Nov 2 ("Head coach Jordan Mincy and Jamie Phillips Jr. talk big win over TCJ 11/02/26"); the rotator also shows a May 6 video.',
      photos: 'No photo galleries named or present on the homepage.',
      social: 'Populated — "Social" section, "Follow us @JAX_DOLPHINS," three posts visible (Lacrosse Community Day; Veterans Day; "Hoops Season Is Here"), with Twitter/Facebook/Instagram links.',
    },
    pillars: {
      tickets: 'Header TICKETS link. The ticket push happens before the homepage — a first-visit splash gate for 2026-27 MBB season tickets ("ON SALE NOW!") with a "Continue to Home" step. The only "Buy tickets" link in the schedule list was for away MBB at UCF, Dec 1.',
      sportHub: 'Top Stories below the brand hero. Hero and schedule use generic "Live video" links with no provider named; ESPN+ appears only in a mid-page banner ad and as "ESPN+ FAQ" in the Fan Zone menu.',
      roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
      giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent from the homepage and menus.',
    },
    steal: 'The brand-slogan hero ("EXCEED EXPECTATIONS") over a single strong photo — no headline, no rotator, the brand is the hero.',
  },
  // Lipscomb Bisons — id 152 (homepage capture only, Nov 20, 2026)
  152: {
    schoolId: 152,
    audited: CAPTURE_ONLY_DATE,
    media: {
      audio: 'No audio player noted on the homepage in the Nov 20 capture.',
      video: 'Video Zone present (latest Nov 12) but appears twice on the page.',
      photos: 'No gallery section observed on the homepage.',
      social: '#HORNSUP populated (Nov 3–10).',
    },
    pillars: {
      tickets: 'Header "Buy Tickets" link.',
      sportHub: 'Story hero (volleyball postseason awards). ESPN+ appears only as a footer logo — no mention in the homepage body or menus. Root redirects to a Game Day page (3 Nov 20 events) — the homepage is reached only via /index.aspx; the redirect page is sparse, with empty score parentheses and failed team logos.',
      roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
      giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent — 0 occurrences on the homepage.',
    },
    steal: 'The populated #HORNSUP feed — a week of recent posts at capture, the most alive social section in the conference.',
  },
  // Queens Royals — id 153 (homepage capture only, Nov 20, 2026)
  153: {
    schoolId: 153,
    audited: CAPTURE_ONLY_DATE,
    media: {
      audio: 'No audio player noted on the homepage in the Nov 20 capture.',
      video: 'Video stale — 3 items, all "Queens Coaches Show", latest May 6, 2026.',
      photos: 'No gallery section on the homepage.',
      social: '#GoRoyals populated visually (Nov 20 x3) but the Nov 20 tiles carry no caption text.',
    },
    pillars: {
      tickets: 'Header Tickets link.',
      sportHub: '3-slide Stories Slider. ESPN+ absent entirely; NIL absent — 0 occurrences on the homepage.',
      roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
      giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent — 0 occurrences on the homepage.',
    },
    steal: 'The Hall of Fame splash gate ("2027 QUEENS ATHLETICS HALL OF FAME" with Continue to Home / Skip Permanently) — a first-visit gate that promotes heritage instead of selling.',
  },
  // Stetson Hatters — id 154 (homepage capture only, Nov 20, 2026)
  154: {
    schoolId: 154,
    audited: CAPTURE_ONLY_DATE,
    media: {
      audio: 'No audio player noted on the homepage in the Nov 20 capture.',
      video: 'No dedicated video section (filters inside the social stream only).',
      photos: 'No dedicated gallery section (filters inside the social stream only).',
      social: '#GOHATTERS populated (captioned Instagram posts).',
    },
    pillars: {
      tickets: 'Prominent green Tickets/Donate/Shop bar plus a "Basketball Single Game Tickets" ad banner below Top Stories.',
      sportHub: '6-slide Top Stories rotator. ESPN+ is menu-only ("Upcoming ESPN+ Events" in the collapsed Hatter Fans menu); no mention in the homepage body.',
      roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
      giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is menu-only ("Stetson NIL Merch"); no homepage tile or header link.',
    },
    steal: 'The green Tickets/Donate/Shop bar plus a single-game ticket ad banner — tickets, giving, and merch in one persistent strip.',
  },
  // North Florida Ospreys — id 155 (homepage capture only, Nov 20, 2026)
  155: {
    schoolId: 155,
    audited: CAPTURE_ONLY_DATE,
    media: {
      audio: 'No audio player noted on the homepage in the Nov 20 capture.',
      video: 'VIDEOS: 3 items, all Oct 22 — women\u2019s basketball media availability (about a month stale on Nov 20).',
      photos: 'PHOTO GALLERIES fresh — "Volleyball vs FGCU" (6 images, 45m ago), "Men\u2019s Soccer at Vermont" (10 images, Nov 19), "Volleyball vs Queens" (9 images, Nov 19).',
      social: 'Feed empty; icons/links in the header (Facebook, X, Instagram, YouTube). The SOCIAL MEDIA section reads, verbatim, "No all posts available."',
    },
    pillars: {
      tickets: 'White "Tickets" button in the header (with Shop and Donate), a TICKETS menu, "Purchase Tickets" in Quick Links, and ticket promos in two of five hero rotator slides.',
      sportHub: '5-slide promo rotator (tickets, Mayo Clinic partnership, a letter from the VP, boosters) with the lead story below it. No streaming provider named anywhere on the homepage.',
      roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
      giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is menu-only ("NIL Guidance" under INSIDE ATHLETICS). The bottom promo is the "Swoop Impact Fund" (not labelled NIL on the homepage).',
    },
    steal: 'The ticket-led hero rotator — two of five slides sell tickets — plus fresh photo galleries (Volleyball vs FGCU, 45 minutes old at capture).',
  },
  // West Florida Argonauts — id 156 (homepage capture only, Nov 20, 2026)
  156: {
    schoolId: 156,
    audited: CAPTURE_ONLY_DATE,
    media: {
      audio: 'No audio player noted on the homepage in the Nov 20 capture.',
      video: 'No VIDEOS or PHOTO GALLERIES region on the homepage; only the schedule\u2019s generic Watch links. A "Slideshow champions" region is present but empty.',
      photos: 'No photo galleries region on the homepage. A "Slideshow champions" region is present but empty (blank link only).',
      social: 'Feed empty; icons/links in the header (Facebook, Twitter/X, Instagram, YouTube). The SOCIAL MEDIA heading is present with no posts under it (blank white space).',
    },
    pillars: {
      tickets: 'No standalone header ticket button — the header has only menu buttons (TEAMS, INSIDE ATHLETICS, FAN ZONE, TICKETS, ARGONAUT ATHLETIC CLUB, STUDENT-ATHLETES). Ticket promo is in the Promo A rotator ("2026 Season Tickets ON SALE NOW"); "Buy Tickets" appears in QUICK LINKS and in the schedule.',
      sportHub: 'Promo A ad rotator (sponsor/ticket promos) above the story-led Top Big Story. No streaming provider named — schedule Watch links are generic "Live video" with no platform.',
      roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
      giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent — no "NIL" anywhere in the homepage text, including all menus.',
    },
    steal: 'Division I transition storytelling on the homepage itself — "ARGOS WIN FIRST DIVISION I GAME AT PENAIR FIELD HOUSE" (MBB, Nov 17) — a milestone as a story, not a press release.',
  },
  // Alabama A&M Bulldogs — id 157 (homepage capture only, Nov 20, 2026)
  157: {
    schoolId: 157,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Bulldog Vision / “BULLDOGS+” current — “AAMU Coaches Show Episode 2 11/19/26”, “Game 12 - Mississippi Valley State” (Nov 16), “AAMU Football Review 11/15/26”.',
        photos: 'Photo Galleries current — “Alabama A&M vs. Alcorn State” (Nov 15, women’s volleyball), “Alabama A&M vs. Cleveland State” (Nov 15, men’s basketball), “Alabama A&M vs. Texas Southern” (Nov 14, football).',
        social: 'Header icons top-right (Facebook, X, Instagram, YouTube); “Load More Social Posts” under Latest News. No standalone labelled feed section.',
      },
    pillars: {
        tickets: 'Header Tickets and Parking buttons, TICKETS main menu, Tickets in Trending, rotating “Basketball Season Tickets” promo at the top.',
        sportHub: 'Brand hero (“ROCKET CITY’S ONLY D1 PROGRAM”) above Bulldog Schedule cards. Streaming: “Watch Live - SWAC TV” links in Latest News.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is named in the Trending sidebar (“Name, Image and Likeness” link).',
      },
    steal: 'The current video and gallery rails — coaches show dated Nov 19 and galleries dated Nov 14–15, all within a week of capture.',
  },
  // Alabama State Hornets — id 158 (homepage capture only, Nov 20, 2026)
  158: {
    schoolId: 158,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Top Videos present but aging — “Coaches Show | Texas Southern Recap” (NOV 14), “Coaches Show Week 7 UAPB” (OCT 24), “Coaches Show Week 4 Mississippi Valley” (OCT 02).',
        photos: 'Galleries (“LATEST PHOTOS”) stale — “Freda Freeman-Jackson Celebrates 27 year” (MAR 25), “INAGURAL #SWARMAS1 GOLF TOURNAMENT” (APR 07), “MBB vs. Grambling State” (MAR 13).',
        social: 'No header social icons. Instagram section near footer headed “Instagram” / “#SWARMAS1” — heading only, no posts rendered.',
      },
    pillars: {
        tickets: 'Header Tickets menu, “Buy Tickets” links on individual events, TicketSmarter promo in the “School Promo Abover Footer” rotator.',
        sportHub: 'Gameday-hub entry screen (“GAMEDAY” with both Nov 20 matchups) behind a “Continue to Full Site” button; full-site lead is a volleyball awards story. Streaming: generic “Watch Live Video” links only, no provider named.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent from the homepage and menus.',
      },
    steal: 'The gameday entry screen itself — both of today’s matchups, with records, time and venue, before the visitor ever reaches the homepage.',
  },
  // Alcorn State Braves — id 159 (homepage capture only, Nov 20, 2026)
  159: {
    schoolId: 159,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No video section and no photo-gallery section on the homepage.',
        photos: 'No photo-gallery section on the homepage; the page runs on Top Stories, a “COUNTDOWN TO TIPOFF” module and Upcoming Events/Recent Results.',
        social: '“SOCIAL ZONE” below the sponsor rotator with Facebook, Instagram, Twitter, YouTube icon links; no feed or posts shown.',
      },
    pillars: {
        tickets: 'Header “TICKETS” nav with submenu “TICKETS”, “IMPACT TICKETS”, “FOOTBALL TICKET INFORMATION”. No ticket promotion in the hero.',
        sportHub: 'Top Stories rotator led by a gameday-information story (“ALCORN RELEASES TRAFFIC CONTROL PLAN FOR JSU GAME”). Streaming: generic “Live Video” links per event, no provider named.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is menu-only (“NIL” under INSIDE ATHLETICS).',
      },
    steal: 'The traffic-control-plan story — service journalism for the big rivalry game (parking opening at 5:00 a.m., kickoff 2:00 p.m.) as the lead story.',
  },
  // Bethune-Cookman Wildcats — id 160 (homepage capture only, Nov 20, 2026)
  160: {
    schoolId: 160,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted; the scoreboard offers generic “Live audio” links.',
        video: 'No dedicated video-gallery section; a “Promotional Video” with a Pause button is present in the hero area.',
        photos: 'Photo Galleries present, 3 tiles, no dates: “Marching Wildcats: HBCU Culture x NFL”, “Football: Week 1 vs. Miami (Ohio)”, “Football: Week 1 Practice at Miami (Ohio)”.',
        social: 'Header icons (Facebook, X, Instagram); lower section “@BCU_ATHLETICS ON SOCIAL” with Instagram and Twitter buttons — no feed posts rendered below it (empty region).',
      },
    pillars: {
        tickets: 'Header “Tickets” button (top right) plus “Buy tickets” links in the scoreboard for Nov 20 and Nov 21 games; no ticket promotion in the hero.',
        sportHub: 'Brand hero — image-only slideshow (first paint a full-bleed marching-band photo, no headline overlay) with recurring text “#HAILWILDCATS”. Streaming: generic “Live video / Live audio / Live stats” scoreboard links, no provider named.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent from the homepage and menus.',
      },
    steal: 'The fast first paint (13/13 images decoded on first view) behind a full-bleed brand slideshow — the only SWAC school besides Jackson State and Southern to paint fast.',
  },
  // Florida A&M Rattlers — id 161 (homepage capture only, Nov 20, 2026)
  161: {
    schoolId: 161,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No video section on the homepage.',
        photos: 'No photo-gallery section on the homepage. The homepage is Top Promo, Quick Links, Schedule, Top Stories, sponsor carousel, footer only.',
        social: 'No social-feed section and no header social icons. Social is only Quick Links tiles: “Follow on Instagram”, “Follow on Twitter”, “Follow on Facebook”.',
      },
    pillars: {
        tickets: 'Header “TICKETS” (opens in new window) and “DONATE” links; no ticket promotion in the hero or a body promo section.',
        sportHub: 'Commercial hero — the lead “Top Promo” image link is the Rattler Athletic Fund donation ask. No streaming section; no provider named.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is named in Quick Links: “INFLCR Quick Links Rattlers Local Exchange (NIL Opportunities)”. The hero itself is the donation ask.',
      },
    steal: 'Leading the homepage with the donation ask — “Rattler Athletic Fund - Donate Today” as the top promo instead of a story or a ticket sale.',
  },
  // Grambling State Tigers — id 162 (homepage capture only, Nov 20, 2026)
  162: {
    schoolId: 162,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“ALL ACCESS VIDEO”, 6 items, latest Nov 12 (“Mickey Joseph Press Conference (Week 11 vs. Alcorn State)”); two video tiles rendered as black rectangles.',
        photos: 'Latest Photos — 4 galleries, month/day only: “Grambling State vs. Florida A&M Baseball” (MAY 3), “Grambling State vs Southern MBB” (JAN 24), “GSYOU Belong” (JAN 5), “Grambling State at Liberty” (DEC 19).',
        social: '“#GRAMFAM” section near the footer with only a “Skip Content Stream” link — feed panel rendered empty. Media menu lists Facebook, Instagram, Twitter links; no header social icons.',
      },
    pillars: {
        tickets: 'Header “TICKETS” button (gold bar, top right) and “SHOP”; TICKETS nav menu; Quick Links “Ticket Office”; body Main Promo “2026 Bayou Classic Banner”.',
        sportHub: 'Story hero — Top Stories slideshow led by the men’s basketball double-overtime loss to Southern Miss. Streaming: HBCU League Pass+ / HBCU GO in the collapsed MEDIA menu only.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL does not appear on the homepage; INFLCR appears only as a footer sponsor logo.',
      },
    steal: 'Naming HBCU League Pass+ / HBCU GO in the media menu — the only SWAC school naming an HBCU streaming platform.',
  },
  // Jackson State Tigers — id 163 (homepage capture only, Nov 20, 2026)
  163: {
    schoolId: 163,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“Tigers All Access” videos dated Nov 15 (“FB | Alabama State Postgame”), Nov 10 (“FB | MVSU Highlights”), Oct 25, Oct 21, Oct 12.',
        photos: 'Photo galleries in the Jackson State Media stream (“FB at Alabama State”, “FB vs. Mississippi Valley State”, no dates) plus a “Photo Galleries” Quick Link.',
        social: 'No header social icons; “Jackson State Media” section mid-page with Facebook / Instagram / Galleries filters, posts from “@gojsutigers”, and a “Load More Social Posts” button.',
      },
    pillars: {
        tickets: '“TICKET Information” tile in the Top Promo strip, “IMPACT TICKETS” promo lower on the page, “Buy Tickets” in the header and in Quick Links.',
        sportHub: 'Story hero (volleyball All-SWAC honors) under a commercial promo strip (“JOIN THEE MOVEMENT” Building Champions Fund, “Marketplace”, “TICKET Information”). Streaming: “SWAC TV” named in Quick Links; “Watch Live” in the header.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is not labelled as such — a “Marketplace” promo tile is present but not labeled NIL.',
      },
    steal: 'The fast first paint (content and 16 images decoded on first load, 0 pending) plus the filtered Jackson State Media feed.',
  },
  // Mississippi Valley State Delta Devils — id 164 (homepage capture only, Nov 20, 2026)
  164: {
    schoolId: 164,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“VIDEO ZONE” present but defective — three identical, undated tiles all titled “MVSUsports Live Stream” with “Watch Now” buttons.',
        photos: 'Photo Galleries present and dated: “Men’s Basketball at Washington” 11.09.26, “Men’s Basketball at Oklahoma” 11.06.26, “Football vs Alcorn State” 10.31.26, “Homecoming 2026 - FB vs Bethune-Cookman” 10.17.26.',
        social: 'Header icons for X and Facebook only, plus Facebook / Twitter / YouTube links in the expanded menu. No social feed section and no Instagram icon.',
      },
    pillars: {
        tickets: 'The entire lead hero is a season-tickets promotion (men’s & women’s basketball season tickets on sale now, with the ticket-office phone number), plus a “TICKETS” item in the main nav.',
        sportHub: 'Commercial hero — season-ticket graphic above the headline announcing 2026-27 basketball season ticket prices. Streaming: “SWAC TV” and “Valley Sports Network” named only in the Watch/Listen menu; “Live video” links in the scoreboard.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent from the homepage and menus.',
      },
    steal: 'Turning the whole hero into the season-ticket sale — graphic, prices headline and the ticket-office phone number (662-254-3550) on the first screen.',
  },
  // Prairie View A&M Panthers — id 165 (homepage capture only, Nov 20, 2026)
  165: {
    schoolId: 165,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“LATEST VIDEOS” present but stale — newest items May 7 (“PVAMU Women’s Golf Team Reflects on Winning the First SWAC Championship in Program History”), May 5, Apr 12; no fall 2026 videos shown.',
        photos: 'Photo galleries in the Social Media stream, undated: “2026 SWAC Football Media Day”, “2025 SWAC Media Day”, “Baseball v Houston Christian”, “Baseball v FAMU: Day Three”. A “FACILITIES” gallery carousel is also present.',
        social: 'Strongest social in its batch — header icons for Instagram, Facebook, X and YouTube, plus a “SOCIAL MEDIA” section mid-page with All / Instagram / Facebook / Galleries filters, posts from “@PVAMUPanthers”, and a “Load More Social Posts” button.',
      },
    pillars: {
        tickets: 'Header + Quick Links only — “TICKETS” in the main nav and “Tickets” in Quick Links. Absent from the hero (hero promos link to schedules and support, not tickets).',
        sportHub: 'Commercial hero — rotating “Promo” carousel (Ask the AD, schedule promos, sponsor, Panther Athletic Fund) above the Top Story. Streaming: neither ESPN+ nor SWAC TV named; only Live Stats / calendar game links.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is named once, only in the collapsed “ATHLETICS” nav menu under “ABOUT”: “Name, Image, & Likeliness (NIL)” (spelled “Likeliness”). A Panther Athletic Fund promo rotates in the hero carousel.',
      },
    steal: 'The filtered Social Media section plus the live countdown to the next event (women’s volleyball vs Texas Southern, Nov 20, 4:00 PM).',
  },
  // Southern Jaguars — id 166 (homepage capture only, Nov 20, 2026)
  166: {
    schoolId: 166,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Video gallery absent as a homepage section (only the WATCH nav).',
        photos: 'Photo galleries present, “Latest photos,” 5 galleries: Men’s Basketball at Iowa State (Nov 10), at Drake 11/8/2026, at TCU (Nov 6), at SMU 11/2/2026, Cross Country at LSU Twlight (Sep 18). Full-width image-only “Slideshow” banner reading “#SOUTHERN IsTheStandard”.',
        social: 'Mid-page “Social Zone” in the Content Stream, Instagram only in view, @southernusports, 8 posts visible plus “Load More Posts”. Footer “Stay Connected”: Twitter, Instagram, Facebook, YouTube, E-mail Updates, RSS Feed.',
      },
    pillars: {
        tickets: 'Header only — “TICKETS” in gold with a ticket icon in the main nav. No ticket promotion in the hero; the Promo Slider shows the “2025 Women’s Basketball SWAC Tourney Champion Banner”.',
        sportHub: 'Story hero — 6-slide Top Stories rotator led by the SWAC Libero of the Year award. Streaming: generic only, a “WATCH” nav item and a footer “Jaguar Sports Network” link; no provider named.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent from the homepage and menus.',
      },
    steal: 'The Instagram Social Zone with 8 real posts visible — the most populated social section in the SWAC.',
  },
  // Texas Southern Tigers — id 167 (homepage capture only, Nov 20, 2026)
  167: {
    schoolId: 167,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“TSU Sports Network” with a main “Texas Southern Athletics is live!” player and five identically titled “Texas Southern Athletics is live!” buttons, plus “MORE VIDEOS +” to YouTube; also an “ABOUT TEXAS SOUTHERN — Play Video”. No dates shown on the videos.',
        photos: 'Photo galleries absent; no Latest Photos/gallery section on the homepage.',
        social: 'Mid-page Content Stream “SOCIAL,” with All / Twitter / Instagram / Facebook filters, @TXSOTIGERS, 2 posts visible plus “LOAD MORE +”. No social icons in the footer.',
      },
    pillars: {
        tickets: 'Header ticket icon, plus the first “TRENDING” card: “TIX24 FOOTBALL — Purchase Texas Southern Athletics Tickets” / “PURCHASE TICKETS.” No ticket promotion in the hero itself.',
        sportHub: 'Story hero — “Stories” rotator led by the men’s basketball San Diego road-trip wrap, with GAME NOTES / WATCH / LISTEN / LIVE STATS buttons. Streaming: generic “WATCH/LISTEN” nav and TSU Sports Network; neither ESPN+ nor SWAC TV named.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is named prominently — a top-level “NIL” nav item.',
      },
    steal: 'The top-level NIL nav item — the fullest NIL treatment in the SWAC.',
  },
  // Arkansas-Pine Bluff Golden Lions — id 168 (homepage capture only, Nov 20, 2026)
  168: {
    schoolId: 168,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“Videos” section, 6 thumbnails (with duplicates in the page markup): “#UAPBVolleyball vs Alcorn State,” “#UAPBVolleyball vs Southern U,” “#UAPBSoccer VS PRAIRIE VIEW A&M,” “#UAPBVolleyball VS Louisiana Tech,” “#UAPBVolleyball Vs. Alabama State” (twice). No dates shown.',
        photos: 'Photo galleries absent; no Latest Photos/gallery section on the homepage.',
        social: 'Header gold bar with X/Twitter, Instagram, Facebook icons (top right). A “Social” section headed “GOLDEN LIONS FAN ZONE” appears lower on the page but contains no posts.',
      },
    pillars: {
        tickets: 'Header only — “TICKETS” in the main nav (opens in a new tab). No ticket promotion in the hero.',
        sportHub: 'Story hero — lead slide is the women’s basketball road win at ULM, behind a “GAMEDAY #1TEAM1ROAR” splash gate (“Continue To The Lion’s Den”). Streaming: only a “Watch Live, On Demand” promo graphic beside the countdown, no provider named.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent from the homepage and menus.',
      },
    steal: 'The live countdown to the next game (football vs. Texas Southern, 1 day 6 hrs at capture) beside the “Watch Live, On Demand” promo.',
  },
  // East Texas A&M Lions — id 169 (homepage capture only, Nov 20, 2026)
  169: {
    schoolId: 169,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'Podcast present — “Inside Lion Athletics Podcast Episode 92: November 18” (Watch on YouTube / Listen on Spotify / Listen on Apple Podcasts).',
        video: '“INSIDE LION ATHLETICS” videos: podcast episode 92 (Nov 18), women’s basketball post-game interviews (NOV 18, NOV 15), men’s basketball post-game interview (NOV 14).',
        photos: 'Photo galleries absent; photos appear only as story images.',
        social: '“SOCIAL” section lower on the page, with All / Instagram / Facebook filters and embedded volleyball posts (“Happy Birthday @gracie.campbell5! #HailET”).',
      },
    pillars: {
        tickets: 'Header “TICKETS” nav link; Tickets button on the football hero slide; “Buy Tickets” and “Cub Season Pass” links under the Oct 01 basketball-schedule featured story; buy-tickets links in the Calendar.',
        sportHub: 'Story hero — rotating “Top Stories” carousel (men’s basketball loss at Cal, football game week vs. No. 24/21 UIW, volleyball Co-Setter of the Year) under a commercial promo slider. Streaming: ESPN+ logo link in the top-right header.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is not named on the homepage.',
      },
    steal: 'The Inside Lion Athletics podcast (YouTube / Spotify / Apple Podcasts) as the video section’s lead item.',
  },
  // Houston Christian Huskies — id 170 (homepage capture only, Nov 20, 2026)
  170: {
    schoolId: 170,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted; schedule entries offer generic “Live audio” links.',
        video: 'No video list/gallery as a homepage section; “Video” appears only as “Live video” schedule links.',
        photos: 'No photo galleries; only a “Slideshow parallax” / “DawgsUp” banner image.',
        social: '“Content Stream” / “SOCIAL MEDIA” heading near the footer, but the feed itself is empty — no posts, icons or links rendered, just blank white space above the sponsor carousel.',
      },
    pillars: {
        tickets: 'Very prominent — the site opens with a full-screen “All-Sports Pass” splash ($15/month auto-draft for tickets to every HCU event, or a one-time yearly payment) with “Continue to Home” / “Skip Permanently”; on the homepage, an orange “Tickets” button, an “All Sports Pass” logo in the header, and “Buy tickets” links in the schedule.',
        sportHub: 'Story hero — rotating “Top Stories” carousel (men’s basketball loss to Georgia Southern, football Senior Day vs. Vaqueros, men’s soccer NCAA loss to No. 5 West Virginia). Streaming: ESPN+ not named; generic “Live video” schedule links only.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is not named on the homepage.',
      },
    steal: 'The All-Sports Pass offer itself — $15/month auto-draft for tickets to every HCU event — stated on the first screen a visitor sees.',
  },
  // Lamar Cardinals — id 171 (homepage capture only, Nov 20, 2026)
  171: {
    schoolId: 171,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“VIDEO ZONE” with six items: “HIGHLIGHTS East Texas A&M vs Lamar Football” (lead), “Lamar Football Week 12 Press Conference 11/16/26”, “The Pete Rossomando Coach’s Show With Harold Mann 11/11/26”, plus “View All Videos.”',
        photos: 'Photo galleries absent; a “Slideshow” region below Video Zone is a single full-width, uncaptioned photo banner (red Cardinals flags).',
        social: 'Absent — no social icons, feed, or Instagram/Facebook text anywhere on the homepage; the footer shows only Lamar University, Southland Conference, NCAA and Under Armour logos.',
      },
    pillars: {
        tickets: 'Header “Tickets” dropdown button; “Buy tickets” links in the Schedule (e.g. women’s basketball vs Texas State, Nov 20, 6:30 PM). No ticket promotion in the hero itself.',
        sportHub: 'Story hero — rotating “Top Stories” carousel, lead is women’s soccer gearing up to face Baylor in the NCAA Tournament first round, with ESPN+ / Live Stats / Game Notes buttons. Streaming: ESPN+ button on the lead hero slide, plus a “Watch” item in the main nav.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is named prominently: a direct “NIL” link in the main header nav, between “Donate” and “Shop”.',
      },
    steal: 'The Video Zone — highlights, press conferences and the coach’s show, all dated within the last two weeks.',
  },
  // LSU New Orleans Privateers — id 172 (homepage capture only, Nov 20, 2026)
  172: {
    schoolId: 172,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“FEATURED VIDEOS”: “Pelican Invitational 2026” Sep 24; “Cross Country: Coach Clayton Impressions” Sep 23; “Volleyball Highlights- Alcorn State” Sep 3.',
        photos: 'Photo galleries absent; no “Gallery” text appears on the page.',
        social: 'Header icons for Facebook, Instagram, YouTube, X/Twitter; repeated in the footer under “Follow Us:”. A “#PrivateerProud” link/button sits on the Lakefront Arena parallax banner. No embedded social feed was visible — the “Content Stream” region was empty.',
      },
    pillars: {
        tickets: 'Header — white “Tickets” button, top right. Also a promo rotator below Featured Videos: “Buy Tickets (280) 504-GAME”. No ticket promotion in the hero itself.',
        sportHub: 'Story hero — lead story is beach volleyball concluding the fall season against Tulane, under a Top Stories / NEWS list. Streaming: ESPN+ named only in the Gameday Central dropdown (“WATCH LIVE ESPN+”, “How to Watch on ESPN+”).',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is named in the main header navigation as a top-level “NIL” menu, with “About NIL”, “Privateer Exchange”, “Influxer” and “Campus Ink”.',
      },
    steal: 'The top-level NIL menu — About NIL, Privateer Exchange, Influxer and Campus Ink in the header nav.',
  },
  // McNeese Cowboys — id 173 (homepage capture only, Nov 20, 2026)
  173: {
    schoolId: 173,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted; schedule offers generic “Live audio” links.',
        video: '“#GeauxPokes PROUD” video/social grid, 6 videos shown: postgame interviews, “Gameday Unfiltered Episode 3”, “Interview with R.C. Slocum. September 8, 2026.”',
        photos: 'Photo galleries absent as a homepage section; “Photo Gallery - McNeese Sports” and “Photo Galleries - Smug Mug” appear only as links in the FAN ZONE dropdown.',
        social: 'No social icons in the header. Mid-page “#GeauxPokes PROUD” is an embedded video/social grid with filters for All, Twitter, Facebook, YouTube, Instagram and Podcasts, plus a “LOAD MORE” button. Footer icons for Facebook, Instagram, Twitter, YouTube.',
      },
    pillars: {
        tickets: 'Header — “TICKETS” in the main navigation, plus “Buy tickets” links per upcoming event in the Schedule. No ticket promotion in the hero itself.',
        sportHub: 'Story hero — “RECENT HEADLINES” rotator, lead is volleyball beginning the SLC Tournament against No. 4 seed UTRGV. Streaming: generic “Live video” / “Live audio” / “Live stats” links per event; ESPN+ not named.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is named as a top-level header link “NIL”, and under Inside McNeese as “NIL (M-Pact)”.',
      },
    steal: 'The #GeauxPokes PROUD grid — one filtered grid carrying video, social and podcasts together.',
  },
  // Nicholls Colonels — id 174 (homepage capture only, Nov 20, 2026)
  174: {
    schoolId: 174,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“COLONELS ALL ACCESS”, 4 items: “Nicholls FB Post Game Press Conferences 11/7” — 11.07.26; soccer post-game interview 11.06.26; SLC XC Championships preview 10.27.26; “Coach Schilling 2026 LaTour Recap” 10.20.26.',
        photos: 'No photo gallery section on the homepage; a “PHOTOS” filter tab exists in the social feed and “Photo Galleries” is a link under FANS, but no photo items were visible.',
        social: 'Header — “#GEAUXCOLONELS” plus Facebook, Twitter, Instagram icons. Below the video section, a social-feed bar offers ALL / VIDEOS / PHOTOS / TWITTER / INSTAGRAM filters, but the feed itself is largely broken/empty (one video card and a broken Instagram card showing only alt text).',
      },
    pillars: {
        tickets: 'Header — “TICKETS” in the main navigation, plus “Tickets” links per sport in the SPORTS dropdown. No ticket promotion in the hero, and no promo rotator was seen.',
        sportHub: 'Story hero — lead story is the River Bell football loss to Southeastern (38-10). Streaming: ESPN+ not named and no live-video link is named; the scoreboard offers only “Live Stats” links.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL appears only as “Colo-NIL Exchange” under the ATHLETICS dropdown.',
      },
    steal: 'The dated Colonels All Access rail — post-game press conferences within two weeks of capture.',
  },
  // Northwestern State Demons — id 175 (homepage capture only, Nov 20, 2026)
  175: {
    schoolId: 175,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Content Stream shows 2 Facebook videos: “Interim head coach Norman Joseph following season finale at SFA” and “Head coach Rick Cabrera previews Friday’s game against UT Arlington” (no dates shown).',
        photos: 'Content Stream shows 2 photo galleries — “W-Basketball vs. LSU-Shreveport” and “Football vs. Houston Christian” (no dates shown).',
        social: 'Strong — sticky bottom bar: Facebook, Twitter, Instagram, Photos, Tickets, Shop; plus an “@NSUDEMONS” Content Stream with All / Photos / Twitter / Facebook / YouTube / Instagram filters.',
      },
    pillars: {
        tickets: 'Header “TICKETS” link, plus a mid-page “Buy Tickets” sport dropdown with a BUY button. No ticket copy in the hero itself.',
        sportHub: 'Commercial hero — a Fork ’Em Collective (NIL) banner ad sits above “Top Stories”; the lead editorial story is the 66-0 football loss at Stephen F. Austin. Streaming: “ESPN+ Live/Archived Events” in the mid-page Watch dropdown.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is the hero-position Fork ’Em Collective banner ad.',
      },
    steal: 'The sticky bottom bar (social, photos, tickets, shop) plus the @NSUDEMONS stream — the strongest social in the Southland.',
  },
  // Southeastern Louisiana Lions — id 176 (homepage capture only, Nov 20, 2026)
  176: {
    schoolId: 176,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No Videos or Galleries section on the homepage; the #LIONUP Contentstream is the only feed-like area and it showed no content.',
        photos: 'No photo-gallery section on the homepage.',
        social: 'Minimal/absent — no social icons or Facebook/Twitter/Instagram links in the header or footer. The only social element is a “Contentstream” section headed “#LIONUP”, which rendered with no posts/items loaded.',
      },
    pillars: {
        tickets: '“TICKETS” in the main navigation; no ticket promotion in the hero. A “Promo - Gameday” tile appears in the Parallax Top promo carousel (with Donate $25, LAA and Clear Bag promos).',
        sportHub: 'Story hero — lead Top Story is retaining the River Bell with a 38-10 rout of Nicholls, behind a full-page Cretin-Townsend Homes sponsor splash (“Continue to Home”). Streaming: ESPN+ logo linked in the header, plus “Live video” links in the scoreboard.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is not named anywhere on the homepage. A Donate $25 promo tile runs in the Parallax Top carousel.',
      },
    steal: 'The tagline under the H1 — “Classroom. Community. Competition.” — three words doing the brand work the hero doesn’t.',
  },
  // Stephen F. Austin Lumberjacks — id 177 (homepage capture only, Nov 20, 2026)
  177: {
    schoolId: 177,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“VIDEOS” section with 3 dated items: “11.17.26 | Leonard Bishop Postgame Presser (TAMU-Texarkana)”, “11.16.26 | Debbie Humphreys Weekly Presser”, “11.16.26 | Colby Carthel Weekly Presser (Week 12 vs. Northwestern State)”.',
        photos: 'Photo galleries absent — no Galleries section on the homepage.',
        social: 'No social icons/links in the header or footer. The only social element is a “#AXEEM” feed section, which renders the text “No all posts available.” — an empty social feed.',
      },
    pillars: {
        tickets: 'Header “Tickets” button, plus a “Tickets on Sale Now” Quick Link and a Countdown module for women’s volleyball at Texas A&M - Corpus Christi (Nov 20, 4:00 p.m.) with a “buy now” ticket link.',
        sportHub: 'Story hero — lead NEWS story is the back-to-back SLC title in the 66-0 rivalry blowout of Northwestern State, under a gameday/scoreboard strip (8 events, Nov 14–21). Streaming: ESPN+ appears only as an affiliate logo image in the footer; “Watch video” links appear in scoreboard event panels.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL appears as “SFA NIL Store” as a Quick Link (also “Axe ’Em Experience Exchange” Quick Link).',
      },
    steal: 'The dated VIDEOS section — three pressers from Nov 16–17, all within four days of capture.',
  },
  // Texas A&M–Corpus Christi Islanders — id 178 (homepage capture only, Nov 20, 2026)
  178: {
    schoolId: 178,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No video section on the homepage.',
        photos: 'A “#SHAKASUP” slideshow — a single wide campus/palm-tree image, no captions or dates. Main Stories are dated Nov 19 and Nov 18.',
        social: 'Header icons for X, Instagram and Facebook. A “SOCIAL MEDIA” / “Social Wall” section appears mid-page, but its feed area was blank/empty white space in this capture.',
      },
    pillars: {
        tickets: 'Header “TICKETS” link only; no hero or rotator ticket promo seen.',
        sportHub: 'Story hero — lead slide is the Islanders starting the Southland Conference Tournament against SFA (volleyball, Nov 19). Streaming: ESPN+ not named anywhere on the homepage; only Live Stats / calendar game links.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is named only in the site menu as “Name, Image, and Likeness (NIL) Information”; no NIL promo or mention in the homepage body.',
      },
    steal: 'The fast first paint — hero, scoreboard and stories rendered on first view, the only Southland school to paint fast without an overlay.',
  },
  // UTRGV Vaqueros — id 179 (homepage capture only, Nov 20, 2026)
  179: {
    schoolId: 179,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Video present as “Play Video” buttons on two Top Stories (women’s basketball postgame press conference; men’s basketball postgame press conference).',
        photos: 'Photo Galleries section present with 8 galleries, all March–April 2026 and all baseball except one tennis; no recent (fall 2026) galleries.',
        social: 'No visible social icons, links or feed in the header, body or footer in this capture. (Page-text search returned 16 “Instagram” mentions, but none appeared as a visible social section or icons — hidden-markup only.)',
      },
    pillars: {
        tickets: 'Header “Tickets” link AND an “Experience the action — Buy Tickets” rotator promo below the Top Stories.',
        sportHub: 'Story hero — lead Top Story is the women’s basketball postgame press conference (Nov 19). Streaming: ESPN+ named once in page text, with no visible logo, link or labelled section; the visible streaming element is a “Catch all the action / Watch Live” promo tile below Photo Galleries.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is named only in the Students menu under “CURRENT STUDENT-ATHLETES”; no NIL promo in the homepage body.',
      },
    steal: 'The academic stats strip — 3.37 cumulative GPA, 5,385 community service hours in 2025-26, 207 conference championships, 16 national championships.',
  },
  // Incarnate Word Cardinals — id 180 (homepage capture only, Nov 20, 2026)
  180: {
    schoolId: 180,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No video section and no photo-gallery section on the homepage. Only Top Stories photos (Nov 19 and Nov 18), a “Cardinal Gear” promo, a Schedule list (Nov 20–21) and sponsor rotators.',
        photos: 'No photo-gallery section on the homepage.',
        social: 'A “Social Media” region/heading appears mid-page, but it contains only a “Skip Content Stream” link — no posts, icons or feed visible. No social icons in the header or footer.',
      },
    pillars: {
        tickets: 'Black “TICKETS” button in the header (top right) and “UIW Athletics Tickets / Buy Tickets” in the footer; no hero ticket promo.',
        sportHub: 'Story hero — a Top Stories grid (not a rotating carousel), lead is volleyball opening the Southland tournament against Lamar. Streaming: ESPN+ logo/link in the header, top right.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL appears in page text as “NIL” / “NIL Policy” (menu-level only); no NIL promo in the homepage body.',
      },
    steal: 'The prominent ESPN+ header logo — the streaming home is visible on the first screen, unlike most of the conference.',
  },
  // Ball State Cardinals — id 181 (homepage capture only, Nov 20, 2026)
  181: {
    schoolId: 181,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Videos present in the Content Stream (multiple Play Video tiles, dates in titles November 13–18, 2026, e.g. press conferences).',
        photos: 'Photo galleries present via the Content Stream “Galleries” filter and a “Photo Galleries” link in the Fan Zone menu; no standalone dated gallery list on the homepage.',
        social: 'Instagram, Facebook, X, and YouTube icons in the top black bar, plus a “Content Stream” section with Instagram / YouTube / Galleries filters and an Instagram post from @ballstatesports (“Men’s Basketball at SMU,” November 13).',
      },
    pillars: {
        tickets: 'Header — “Buy Tickets” in the black utility bar and a “Tickets” dropdown in the red nav; also a promo rotator below Athlete Awards with “2026 Football Tickets” and “Shop Ball State Gear.”',
        sportHub: 'Story hero — no full-width hero carousel; the homepage opens with a scoreboard strip, then “TOP STORIES” led by the volleyball All-MAC honors story. Streaming: “Watch on ESPN+” appears only in the Fan Zone & Gameday menu.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is named in the top red nav as a “NIL” menu item, with “NIL APPAREL & JERSEY MARKETPLACE” and “Fanatics: NIL Pick-A-Player Jerseys” in that menu.',
      },
    steal: 'The Content Stream with Instagram / YouTube / Galleries filters — one section carrying social, video and galleries together.',
  },
  // Bowling Green Falcons — id 182 (homepage capture only, Nov 20, 2026)
  182: {
    schoolId: 182,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“Watch / Videos” section with 3 dated videos: “Nov. 19, 2026 - Men’s Soccer NCAA Championships Post-Match Press Conference”, “BG Hockey Weekly Sitdown vs #10 Augustana 11.17”, “BG Hky Press Conference vs Augustana 11.17”, plus “All Videos.”',
        photos: 'Photo galleries absent as a homepage section; only a “Photo Galleries” link in the Fan Zone menu.',
        social: 'No social icons in the header and no social feed section on the homepage body. Social links exist only inside the Fan Zone dropdown (Facebook, YouTube, Instagram, Twitter) and as per-sport links in the Sports menu.',
      },
    pillars: {
        tickets: 'Hero-adjacent and header — “Tickets” button in the header (brown, top right), the promo-rotator slide “2026 Tickets, All Sports / SEASON TICKETS ON SALE,” a “Digital Tickets” promo slide, and “Buy Tickets Now” in Quick Links.',
        sportHub: 'Story hero — main feature-story rotator led by the linebacker/computer-science feature, with a commercial promo rotator above it (Falcon Insider, Winter Sports Luncheon, season tickets). Root URL redirects to a gameday takeover page on game day. Streaming: “ESPN+” appears only once, as a link in the Fan Zone menu.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL does not appear anywhere on the homepage; the only NIL-adjacent element is the repeated “Support Our Student-Athletes” link on feature stories.',
      },
    steal: 'The feature-story rotator carrying “Support Our Student-Athletes” on every story — giving asked for inside the feature, not in a separate ask.',
  },
  // Central Michigan Chippewas — id 183 (homepage capture only, Nov 20, 2026)
  183: {
    schoolId: 183,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“VIDEOS” section — 8 videos, November 18 down to November 12, 2026 (e.g. “Week 12 @ Buffalo | Trailer,” Nov 18; “CMU WBB vs. Michigan Postgame Press Conference,” Nov 17).',
        photos: '“PHOTOS” section — 10 galleries, November 18 down to November 7, 2026 (e.g. “CMU Football At Buffalo,” Nov 18; “CMU Volleyball at Akron,” Nov 7), with “See All Galleries.”',
        social: 'Instagram, Facebook, X, and YouTube icons in the gold top bar, plus a dedicated “SOCIAL MEDIA” section mid-page with “Like Us on Instagram,” “Like Us on Facebook,” “Follow Us on Twitter,” and a “Load More social posts” button.',
      },
    pillars: {
        tickets: 'Hero and header — “Tickets” button in the maroon header, the top promo rotator’s men’s/women’s basketball “TICKETS ON SALE” slides, and “Buy Tickets” on the football countdown.',
        sportHub: 'Commercial hero — a 10-slide Top Promo rotator led by men’s and women’s basketball tickets on sale, above an event countdown (football at Ball State, Nov 28, with Buy Tickets). Streaming: named in the body — “Watch Live on ESPN+” on the men’s basketball story, plus “ESPN3/ESPN+ Live Broadcasts” in the Fans menu.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is named only in the collapsed About Us menu: “NIL: Influencer,” “NIL: Influxer,” “Name, Image & Likeness,” and “NIL Assist”; not in the homepage body.',
      },
    steal: 'The 8 videos + 10 dated photo galleries, all within two weeks of capture — the freshest media rails in the MAC.',
  },
  // Eastern Michigan Eagles — id 184 (homepage capture only, Nov 20, 2026)
  184: {
    schoolId: 184,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'Podcasts section present — Nov 17, “Episode 12: Head Coach Chris Creighton”. No audio player section noted.',
        video: 'No dedicated video gallery or photo gallery section on the homepage. One “Play Video” button appears on a Top Story (football).',
        photos: 'No photo gallery section on the homepage; “Photo Store” is only a link in the Fans menu (external emueaglesphoto.com).',
        social: 'No social icons or feed visible on the homepage body or footer; social exists only inside collapsed nav menus (per-sport links and Connect > Social Media).',
      },
    pillars: {
        tickets: 'Hero (Flex Packs + 734 Deal), header Tickets menu, Quick Links “Buy Tickets Now,” and per-event Buy Tickets links in the schedule.',
        sportHub: 'Commercial hero — a 3-panel promo strip: Flex Packs on sale, the 734 Deal ($7 tickets / $3 hot dogs / $4 beers, Tue Nov 24 vs. Kent State), and Giving Trueday (12.1.26). Streaming: a dedicated “Watch Eastern on ESPN+” section with the ESPN+ logo and upcoming ESPN+ events Nov 21–Dec 2.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is named: “Eastern NIL Exchange” in the Connect menu; “EMU NIL Store” and “Adidas NIL Locker Room” in Quick Links. The hero’s third panel is the Giving Trueday save-the-date.',
      },
    steal: 'The 734 Deal — $7 tickets, $3 hot dogs, $4 beers, with a date and an opponent (Tuesday Nov 24 vs. Kent State) — the most specific ticket offer captured in any conference so far.',
  },
  // Kent State Golden Flashes — id 185 (homepage capture only, Nov 20, 2026)
  185: {
    schoolId: 185,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Videos section with 2 items, both Nov 18: “Kent State Football Weekly Press Conference - Week 13 at Eastern Michigan | 11.18.26” and “WBB Podcast (S2: E5) - Talia Harris,” with a “See All Videos” link.',
        photos: 'Photo gallery absent; no photo-gallery section. “Flash Gear” is a single-product shop module (KENT STATE FEARLESS FLASH T-SHIRT, $21.99).',
        social: 'No social icons or feed visible on the homepage body or footer; no social section. (Flashes+ is the video/app brand, not social.)',
      },
    pillars: {
        tickets: 'Hero slide 1 (season tickets) and slide 7 (KSU Tix banner), header TICKETS button, Quick Links “Purchase Tickets Today,” and Buy Tickets links in the schedule.',
        sportHub: 'Commercial hero — 10-slide auto-rotating carousel led by 26-27 men’s/women’s basketball season tickets, with Giving Tuesday and shop slides in rotation. Streaming: ESPN+ named only once, as a link in the Latest News article about the Cleveland State women’s basketball series.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is prominent: orange NIL button in the header (next to TICKETS and DONATE TODAY), Quick Links “Name, Image, and Likeness (NIL),” and hero slide 8/10, “NIL Marketplace Top Banner.”',
      },
    steal: 'The orange NIL button in the header, next to TICKETS and DONATE TODAY — NIL given the same weight as tickets and giving.',
  },
  // Miami RedHawks — id 186 (homepage capture only, Nov 20, 2026)
  186: {
    schoolId: 186,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted; schedule links offer generic “Audio” links.',
        video: '“LATEST VIDEOS” — 10 items, Nov 19–Nov 17, e.g. “Miami Football Head Coach Chuck Martin 11-19 Press Conference NOV 19,” “Miami Football Kris Manu 11-19 NOV 19,” “Miami Men’s Basketball Head Coach Travis Steele 11-18 Post Game Press Conference NOV 18.”',
        photos: '“LATEST PHOTOS” — 10 items, Nov 18–Nov 7, e.g. “Men’s Basketball vs. Defiance 11/18/26 NOV 18,” “Miami Women’s Basketball vs. Oakland NOV 15,” “Miami Hockey vs. Omaha 11/14/26 NOV 14.”',
        social: 'Icons only, no feed: Instagram, X, and Facebook circular red icons at the bottom of the left sidebar (plus a ticket icon), and Instagram/Twitter/Facebook links in the top nav. No embedded social feed.',
      },
    pillars: {
        tickets: 'Header Tickets link, Quick Links “Purchase Tickets,” left-nav “Student Tickets,” a right-rail promo ad “Miami GROUP TICKETS NOW AVAILABLE,” and Buy Tickets links in the schedule. No hero ticket promo (there is no hero).',
        sportHub: 'Story hero — no hero carousel or banner; the lead element is the Top Stories lead story (RedHawks closing the regular season at WMU) with a large football photo. Streaming: ESPN+ not named; schedule links are generic “Video” / “Audio” / “Stats” with no provider named.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent from the homepage and menus.',
      },
    steal: 'The LATEST VIDEOS (10 items) + LATEST PHOTOS (10 items) carousels — the best photo and video rails in the MAC, on a homepage with no hero at all.',
  },
  // Ohio Bobcats — id 187 (homepage capture only, Nov 20, 2026)
  187: {
    schoolId: 187,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“OHIO BOBCATS STUDIOS” videos: Nov 19, 18, 17, 16, 16 (e.g. “2026 Ohio Volleyball Catchup with Olivia Gardner”, Nov 19).',
        photos: '“GALLERIES” (8 slides): Football vs Ball State PreGame (11.17.26, 84 images), Football vs Ball State (11.17.26, 1,124 images), M Basketball vs Morehead State (11.18.26, 76 images), W Basketball vs Georgia (11.14.26, 204 images), and others.',
        social: 'Facebook, X/Twitter, Instagram, TikTok icons in the header; a dedicated “INSTAGRAM” feed section with @ohiobobcats posts dated November 18, 17, 16, 12, and 11, with a “Follow Us” link.',
      },
    pillars: {
        tickets: 'Header “Tickets” button; “Student Tickets” in the quick-link bar; “Buy Tickets” links in the schedule; “FOOTBALL SEASON TICKETS ON SALE NOW” in Explore Athens. Not in the hero itself.',
        sportHub: 'Story hero — Stories Slider 1/3, lead is women’s golf adding two during the early signing period, with swim-record and volleyball-championship stories in rotation. Streaming: “ESPN+” named in the dark-green quick-link bar directly below the hero.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. “Ohio NIL Exchange” appears in page text, but no visible NIL link/tile was found in the homepage sections inspected, so NIL is not visibly promoted on the homepage surface.',
      },
    steal: 'The INSTAGRAM feed plus GALLERIES with image counts (Football vs Ball State, 1,124 images) — the counts make the galleries feel deep.',
  },
  // Buffalo Bulls — id 188 (homepage capture only, Nov 20, 2026)
  188: {
    schoolId: 188,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“Bulls Video”: 4 videos, no dates shown (men’s/women’s basketball postgame press conferences at/vs. St. Bonaventure; football postgame vs. Central Michigan; Buffalo Bulls Sports Network: Wrestling vs. Ohio). Also a Podcasts section (latest: “In the Bullseye Podcast”, June 13, 2025).',
        photos: '“Photo Galleries”: “FB vs CMU – 11.18.26”, “MBB vs Canisius – 11.15.26”, “WBB vs Mississippi State – 11.14.26”, “MBB vs Penn State Schuylkill – 11.09.26”.',
        social: 'Weak on the homepage surface — no dedicated social feed/icons section and no social icons in the visible header (only Tickets / Join the Herd / Donate / Shop / Search). Social exists only behind menus: per-sport links inside the collapsed “Sports” menu, and a collapsed “Video/Social” nav button.',
      },
    pillars: {
        tickets: 'HERO and header — hero rotator slides 2–3 are season tickets (“WOMEN’S HOOPS SEASON TICKETS ON SALE NOW!”); header “Tickets” button and “Tickets” nav menu; “Buy Tickets” for men’s basketball vs. RIT, Nov 23, 6:30 p.m.',
        sportHub: 'Commercial hero — a 6-slide promo rotator (FB Bowl Eligible, MBB/WBB season tickets, Built In Buffalo NIL Exchange, Bulls Championship Fund, Junior Bulls Club) above the Top Story (men’s basketball loss at St. Bonaventure). Streaming: no ESPN named anywhere; generic “Watch” links in Events.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is prominent: hero rotator slide 4 and a second ad rotator both read “Built In Buffalo NIL Exchange” (mascot holding an “NIL” sign), and Quick Links has “Built in Buffalo - Name, Image, Likeness”. The Bulls Championship Fund is hero slide 5.',
      },
    steal: 'The Built In Buffalo NIL Exchange mascot creative — the mascot holding an “NIL” sign, in the hero rotator and again in an ad rotator.',
  },
  // Akron Zips — id 189 (homepage capture only, Nov 20, 2026)
  189: {
    schoolId: 189,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“Watch — ZIPS DIGITAL NETWORK”: 4 videos, Nov 15, 15, 14, 14, 2026 (men’s soccer post-game vs. Georgetown, Big East Championship; men’s basketball post-game vs. Tulane).',
        photos: '“Photo Galleries”: “Akron Zips MBB vs Tulane 11.14.26” and “Akron Football vs. Western Michigan” (photos from Nov. 10, 2026, InfoCision Stadium).',
        social: 'A dedicated “Akron Social Media” section exists with All / Instagram / Facebook filter buttons — BUT IT IS EMPTY: no posts, icons, or handles load in it, and on screen it renders as a large blank dark-blue block. No social icons were visible in the header.',
      },
    pillars: {
        tickets: 'Header “TICKETS” button; 3-slide ad rotator below Quick Links: “2026 MSOC Tickets On Sale Now”, “2026 FB Tickets On Sale Now”, “2026-27 MBB + WBB Season Tickets”; “Digital Tickets Central” in Quick Links. Not in the hero itself.',
        sportHub: 'Story hero — lead headline is Magnus Cup Day 1 (Akron wins seven events, two meet records, two NCAA Diving Zones qualifiers). Streaming: “Watch ESPN” named in QUICK LINKS (no “ESPN+” specifically).',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent from the homepage and menus.',
      },
    steal: 'The ZIPS DIGITAL NETWORK dated videos plus dated photo galleries — both rails current within a week of capture.',
  },
  // UMass Minutemen — id 190 (homepage capture only, Nov 20, 2026)
  190: {
    schoolId: 190,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“UMass Videos,” 2 videos, both dated 11.19.26: “UMass Basketball Weekly | Show #2 | 11.19.26” and “Inside the Mind of... | Episode 4 | 11.19.26.”',
        photos: 'Photo galleries absent — no “Gallery” text, gallery section, or gallery link on the homepage.',
        social: 'No social icon row in the header/footer; social is per-sport Facebook/Twitter/Instagram links inside the Sports menu, plus a mid-page Instagram feed section headed “University of Massachusets Athletics on Instagram” (sic) — which is EMPTY: “There are no instagram posts” with a “Load More” button.',
      },
    pillars: {
        tickets: 'Header “Tickets” menu; scoreboard “Buy Tickets” (Nov 21 hockey vs. Providence); Quick Links “Get Tickets”; dedicated “UMass Tickets” region (hockey, men’s/women’s basketball, football, group tickets).',
        sportHub: 'Commercial hero — lead visual is a Fan Grams banner (“PUT YOUR MESSAGE ON THE BIG SCREEN! … STARTING AT $50”) above the first story (women’s basketball travelling to Boston College). Streaming: generic “Watch” links in the scoreboard, “Live Video,” “Live Audio,” “Live Stats,” “All-Access”; ESPN+ not named.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is prominent: header nav “NIL,” Fans menu “NIL,” Quick Links “NIL Store,” sponsor rotator “UMass NIL Merch Powered by Athletic Solutions” and “Athlete’s Thread.”',
      },
    steal: 'The Fan Grams banner — sell a $50 message on the big screen as the lead visual instead of a story.',
  },
  // Toledo Rockets — id 191 (homepage capture only, Nov 20, 2026)
  191: {
    schoolId: 191,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“Toledo Video,” 8 videos, Oct 28–Nov 16: latest Nov 16, “Toledo Women’s Basketball vs Valparaiso Post Game Press Conference” and “Toledo Football - Week 11 Press Conference”; oldest Oct 28, “Toledo Football - Week 10 Press Conference.”',
        photos: 'Photo galleries absent — no “Gallery” or “Photo” text on the homepage.',
        social: 'Header icons for Facebook, Twitter/X, Instagram, YouTube, and Shop; lower-page “Social Media” section, “Follow Us on Instagram” — feed empty (“No posts available.”).',
      },
    pillars: {
        tickets: 'Header Tickets menu + Tickets link; “Buy Tickets” links in the schedule; Quick Links “Tickets On Sale Now”; mid-page promo rotator: “BB Single Game Tickets,” “WBB Single Game,” “MBB Single Game Tix,” “BB27 White Out Weekend.”',
        sportHub: 'Gameday-hub hero — Stories Slider lead is the game-time announcement for Toledo’s Dec. 5 MAC home opener vs. Kent State (6:00 p.m.). Streaming: Quick Links “Watch on ESPN+”, plus “Watch video” links on schedule items.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is named in the “For Toledo” section card headed “NIL” with an “Opportunities” link.',
      },
    steal: 'The “Watch on ESPN+” Quick Link — one click from the homepage to the stream, no hunting through menus.',
  },
  // Western Michigan Broncos — id 192 (homepage capture only, Nov 20, 2026)
  192: {
    schoolId: 192,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“Bronco Productions,” 3 videos: Nov 17, “WMU Football | Postgame vs. EMU | Broc Lowry, Dillon Moore, Lance Taylor | 11-17-26”; Nov 17, “Bronco Coaches Show - 11/16/26”; Nov 15, “WMU Hockey | Postgame vs Colorado College | Pat Ferschweiler, Joona Väisänen | 11.14.26.”',
        photos: 'Photo galleries linked, not embedded — Quick Links “Photo Galleries” and Fans menu “Photo Galleries” / “Purchase Photos”; no gallery grid on the homepage.',
        social: 'Header/nav icons for Instagram, Twitter, Facebook, and YouTube; per-sport Facebook/X/Instagram links in the Sports menu. No embedded social feed section on the homepage.',
      },
    pillars: {
        tickets: 'Gold “TICKETS” button in the header; Top Promo tile “Purchase TICKETS”; Tickets menu (Buy Tickets Online, General Information, Group Tickets, Renew Season Tickets); Quick Links “Buy Season Tickets”; “Buy tickets” links in the schedule.',
        sportHub: 'Commercial hero — a “Top Promo” rotator (6 slides, 3 tiles visible): “Purchase TICKETS”, a Milk Means More vote promo, an NIL / Bronco Exchange tile, camps/events, and the WMU Impact Study. Streaming: generic “Watch Live video” / “Live Video” links per event; ESPN+ not named.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is very prominent: Top Promo tile “NIL / BRONCO EXCHANGE / CONNECT WITH WMU ATHLETES,” Athletics menu “ONWARD: NIL Program,” and “Broncos Will Reign - NIL Collective.”',
      },
    steal: 'The Top Promo rotator carrying an NIL tile next to the ticket tile — NIL sold as a first-screen offer, not buried in a menu.',
  },
  // Cleveland State Vikings — id 193 (homepage capture only, Nov 20, 2026)
  193: {
    schoolId: 193,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No dedicated video section on the homepage — the social stream is the only photo/video feed; a social caption mentions a new episode of Vikings All-Access.',
        photos: 'No photo gallery section on the homepage; photos appear in the SOCIAL MEDIA stream and story thumbnails.',
        social: 'SOCIAL MEDIA content stream mid-page with All / Instagram filters, 8 posts, and a load-more button; header icons for Instagram, X, Facebook and phone.',
      },
    pillars: {
        tickets: 'Prominent header TICKETS button (with SHOP / DONATE), a Tickets On Sale promo tile below the hero, and a TICKET CENTRAL link in VIKINGS SPOTLIGHT.',
        sportHub: '5-slide Top Stories rotator plus a SCHEDULE section with upcoming/results tabs. CSU on ESPN+ in the FANS menu; Watch Live links in the schedule.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is visible: Name, Image and Likeness under STUDENT-ATHLETES, Viking Ventures NIL Marketplace under SUPPORT, and a NIL EXCHANGE POWERED BY TEAMWORKS INFLUENCER promo tile.',
      },
    steal: 'The SOCIAL MEDIA stream (8 posts) plus VIKINGS SPOTLIGHT and the THIS CITY IS OUR CAMPUS parallax — the city as the brand.',
  },
  // Indiana University Indianapolis Jaguars — id 194 (homepage capture only, Nov 20, 2026)
  194: {
    schoolId: 194,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Videos in the content stream — MSOC postgame and highlights (Nov 3), plus a Play Video button on the hero WBB slide; all shown as 0 views.',
        photos: 'LATEST GALLERIES section with five galleries, all tournament-current (volleyball at HL Tourney, WBB vs Evansville, MBB at Penn State).',
        social: 'Follow The Jags content stream mid-page with All / Photos / Twitter / Instagram / YouTube / Facebook filters; Social Media links in the Fan Zone menu.',
      },
    pillars: {
        tickets: 'Header Tickets dropdown plus a Buy Tickets Now promo tile directly below Top Stories.',
        sportHub: 'Top Stories rotator with a scoreboard strip on top (WBB 65–59 vs Evansville, MBB 74–81 at Penn State, volleyball 1–3 at Milwaukee). IU Indy on ESPN in the FAN ZONE menu — worded ESPN, no + — plus an Upcoming Media Coverage section.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is menu-only (Jag Prowl NIL Marketplace, Influxer NIL Merchandise, NIL Policy).',
      },
    steal: 'LATEST GALLERIES — five galleries, all tournament-current — the freshest gallery rail in the conference.',
  },
  // Northern Illinois Huskies — id 195 (homepage capture only, Nov 20, 2026)
  195: {
    schoolId: 195,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'HUSKIE DIGITAL YouTube section, 6 videos with Load More — WBB highlights and postgame pressers, football weekly presser, wrestling vs Bellarmine, all Nov 14–17.',
        photos: 'No gallery section on the homepage; only a Photo Galleries link in the FANS menu.',
        social: 'Footer social icons/links only — Facebook, Instagram, Twitter, YouTube; no social feed embedded in the homepage body.',
      },
    pillars: {
        tickets: 'Prominent Tickets / Donate / Shop bar directly under the scoreboard (Tickets in red), Buy Tickets Now in the SUPPORT menu, and ticket links in the schedule.',
        sportHub: 'Top Story photo plus a scoreboard with Video/Audio/Stats links. No ESPN/ESPN+ named — Watch MW+ and Huskie All-Access in the FANS menu.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is a top-level header nav item, plus Name Image and Likeness and NIU Marketplace (Opendorse) under INSIDE ATHLETICS.',
      },
    steal: 'The Tickets / Donate / Shop bar under the scoreboard — three asks in one high-contrast strip — and a top-level NIL nav item.',
  },
  // Northern Kentucky Norse — id 196 (homepage capture only, Nov 20, 2026)
  196: {
    schoolId: 196,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'NKU NORSE VIDEOS — postgame press conferences (Nov 19 vs Berea) and Norse WVB highlights, with View More Videos.',
        photos: 'No photo gallery section; the Instagram feed is the photo feed.',
        social: 'Mid-page Instagram section, #NORSEUP, with View More Posts; per-sport Facebook/X links inside the SPORTS menu; no header social icons.',
      },
    pillars: {
        tickets: 'No header ticket button — tickets live inside the yellow MENU (single-game basketball, volleyball tickets, ticketing information under Game Day Central).',
        sportHub: 'Top Stories rotator plus a scoreboard (cells clip text). Game Day Central menu: WATCH NKU LIVE ON ESPN+, SIGN UP FOR ESPN+, WATCH ESPN+, plus radio ESPN 1530 AM.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent — no match anywhere on the homepage, including menus.',
      },
    steal: 'The ESPN+ Game Day Central menu — WATCH LIVE / SIGN UP / WATCH in one place — the clearest streaming menu in the conference.',
  },
  // Oakland Golden Grizzlies — id 197 (homepage capture only, Nov 20, 2026)
  197: {
    schoolId: 197,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'GRIZZ VIDEO ZONE — 6 dated videos (Nov 9–19): GrizzVision coach recaps, MBB highlights, postgame pressers, The Greg Kampe Show.',
        photos: 'Photo Galleries — 6, current (MBB at Arizona State Nov 18, MBB vs UNI Nov 14, XC regionals Nov 13).',
        social: 'Header icons (X, Facebook, Instagram, YouTube); Content Stream / @GOLDENGRIZZLIES heading mid-page, but no posts visible/loaded under it at capture.',
      },
    pillars: {
        tickets: 'TICKETS in the black main navigation with DONATE and SHOP alongside; no ticket promotion in the hero itself.',
        sportHub: 'Top Stories rotator behind a UNLEASH THE GRIZZ splash gate. Hero slides offer generic Live video links; ESPN/ESPN+ not named anywhere.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is menu-only (Gold Standard NIL Marketplace and NIL Policy under INSIDE ATHLETICS).',
      },
    steal: 'GRIZZ VIDEO ZONE — six dated videos with coach-led recaps — plus six current photo galleries.',
  },
  // Purdue Fort Wayne Mastodons — id 198 (homepage capture only, Nov 20, 2026)
  198: {
    schoolId: 198,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Youtube Videos — 4, championship-current (HL volleyball 1st round recap Nov 19, HL men’s soccer championship Nov 14).',
        photos: 'Galleries — 3, current (MSOC HL championship Nov 14, semifinal Nov 11, MBB vs Albion Nov 7).',
        social: 'No social icons in the header; footer-only text links (Facebook, Twitter, Instagram, YouTube); no social feed on the homepage.',
      },
    pillars: {
        tickets: 'Tickets in the top navigation with per-sport links and an Event Tickets Center, plus Ticket Information under Quick Links; no hero ticket promo.',
        sportHub: 'Top Stories rotator (lead: WVB beats Oakland 3-2 in the #HLVB first round) with a Box Score link and a generic Watch (Thursday) link. ESPN/ESPN+ not named.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is menu-only (NIL Policy under Inside Athletics).',
      },
    steal: 'The fastest first paint in the conference paired with championship-current videos and galleries — speed plus fresh media.',
  },
  // Robert Morris Colonials — id 199 (homepage capture only, Nov 20, 2026)
  199: {
    schoolId: 199,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No Videos or Photo Galleries section on the homepage; Video appears only as schedule Live Video links.',
        photos: 'No photo galleries section on the homepage.',
        social: 'CONNECT WITH THE COLONIALS parallax with follow buttons for Instagram, Facebook, X, YouTube, TikTok, LinkedIn; the SOCIAL MEDIA content-stream section below it is empty (heading plus a Chick-fil-A logo only).',
      },
    pillars: {
        tickets: 'Header nav TICKETS, Quick Links Ticket Office, and schedule Book Tickets links (women’s hockey vs Mercyhurst, football vs LIU); the pre-homepage splash was itself a Soulja Boy concert ticket promo.',
        sportHub: 'Top Stories carousel (lead: WBB heads to Akron, Friday morning showdown). Hero deck: will stream live on ESPN+; schedule also has generic Live Video links.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is a card link in the mid-page slideshow cards, alongside the COLONIAL CHAMPIONS FUND.',
      },
    steal: 'The CONNECT WITH THE COLONIALS parallax — six platforms in one follow strip — even though the feed below it is empty.',
  },
  // Detroit Mercy Titans — id 200 (homepage capture only, Nov 20, 2026)
  200: {
    schoolId: 200,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Videos section with Recently Added / Interviews / Highlights filters, 6 items (Nov 17 podcast, Nov 14 postgames and highlights, Oct 31 cross country championship postgames).',
        photos: 'Photo Galleries — 5 (MBB at Eastern Michigan, WBB vs North Dakota, MBB vs Toledo Nov 14, NCAA Great Lakes Regional, MBB at Xavier).',
        social: 'Social Media content-stream section mid-page with All / Facebook / Instagram filters and posts; header and footer icons (Instagram, Facebook, Twitter/X, YouTube).',
      },
    pillars: {
        tickets: 'Buy Tickets button in the schedule strip above the hero; no ticket copy in the hero itself.',
        sportHub: '6-slide Top Stories rotator (lead is a DFCU Financial partnership announcement). ESPN+ not named in visible homepage text; schedule game toggles are collapsed.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is visible in the header — The Shield NIL Collective beside Team Store and Donate.',
      },
    steal: 'The Videos section with filters (Recently Added / Interviews / Highlights) plus five photo galleries — the most complete media rail in the conference.',
  },
  // Green Bay Phoenix — id 201 (homepage capture only, Nov 20, 2026)
  201: {
    schoolId: 201,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Videos / LATEST VIDEOS — 4 highlights (Nov 2–14, WBB and MBB), with View More Videos.',
        photos: 'No photo-gallery grid/section in the homepage body; Photo Galleries is a header button only.',
        social: 'SOCIAL MEDIA Content Stream mid-page with All / Instagram / Facebook filters and Nov 18–20 posts; header icons (Facebook, Instagram, Twitter/X, YouTube).',
      },
    pillars: {
        tickets: 'The hero itself is the ticket pitch — Basketball Flex Plans 2026-27, AVAILABLE NOW — plus TICKETS in the main nav.',
        sportHub: 'Full-width promo banner hero above a story grid; schedule shows Live Now — MBB vs Florida State. ESPN+ logo/link in the header.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent — no match anywhere in homepage text.',
      },
    steal: 'The ESPN+ header logo/link — streaming named where every visitor sees it — plus a hero that sells Flex Plans outright.',
  },
  // Milwaukee Panthers — id 202 (homepage capture only, Nov 20, 2026)
  202: {
    schoolId: 202,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Videos tab — lead The PounceCast: Episode 4 (Nov 19), plus HL women’s soccer championship (Nov 14) and WBB highlights (Nov 12–14).',
        photos: 'No photo galleries on the homepage; no Galleries section and no Gallery match.',
        social: 'Header black-bar icons only — Instagram, X, Facebook, plus Calendar, Email/E-Newsletter, Shop; no social feed section and no footer social list.',
      },
    pillars: {
        tickets: 'Header TICKETS link; Promo Slider includes men’s and women’s basketball season tickets 2026-27; schedule items have Buy tickets links.',
        sportHub: 'Stories tab lead (WBB preview at Western Michigan) with a schedule; items have unnamed Live video links. ESPN/ESPN+ not named anywhere.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is menu/DOM-only (Name, Image, Likeness (NIL) Resources in the collapsed STUDENT-ATHLETES menu).',
      },
    steal: 'The PounceCast — a named, episodic show (Episode 4) leading the video tab instead of a generic highlights pile.',
  },
  // Wright State Raiders — id 203 (homepage capture only, Nov 20, 2026)
  203: {
    schoolId: 203,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Videos present but stale — 6 items, latest Mar 27 (Exceeding Expectations); no fall/November videos.',
        photos: 'Galleries present but stale — 10 items, latest Aug 23 (men’s soccer vs Belmont); no November galleries.',
        social: 'Header icons (Facebook, Twitter, Instagram, YouTube); the SOCIAL MEDIA section below Galleries is empty — No all posts available.',
      },
    pillars: {
        tickets: 'Header gold Tickets button plus TICKETS menu; calendar Buy Tickets links; news promotes $3 beer for the WBB/Marshall doubleheader.',
        sportHub: 'Stories Slider (lead: Lauren Yacobucci named Horizon League Volleyball Player of the Year). Calendar items have unnamed Watch video links; ESPN+ not named.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is menu/DOM-only (Name, Image, Likeness in the collapsed ATHLETES & RECRUITS menu).',
      },
    steal: 'The $3 beer promo for the WBB/Marshall doubleheader — a concrete, cheap reason to come to a game, promoted in the news itself.',
  },
  // Youngstown State Penguins — id 204 (homepage capture only, Nov 20, 2026)
  204: {
    schoolId: 204,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No dedicated Videos section on the homepage; video only via scoreboard Watch video links and an ESPN+ Highlights link.',
        photos: 'Photo galleries present and current, with image counts — WBB vs Heidelberg Nov 17 (30 images), WBB at Colorado Nov 14 (22), FB vs Illinois State Nov 14 (42), MBB vs Marshall Nov 14 (28).',
        social: 'No header social icons; footer Follow Us links (Facebook, Twitter, Instagram, YouTube); a SOCIAL HUB tile in the Pillars Slideshow; no live social feed.',
      },
    pillars: {
        tickets: 'Header TICKETS dropdown; red QUICK LINKS bar below the hero with Football Tickets, Basketball Tickets, Football Gameday, Join The Penguin Club.',
        sportHub: 'Stories Slider (lead: two golfers sign) above a scoreboard/gameday strip. ESPN+ Highlights link under a WBB story; scoreboard items have unnamed Watch video links.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is visible in the Pillars Slideshow (NIL tile with QB Beau Brungard, Learn More); Penguins NIL also appears in page DOM.',
      },
    steal: 'Current photo galleries with image counts (30, 22, 42, 28) plus the Pillars Slideshow — NIL and Social Hub tiles in one rotating strip.',
  },
  // California Baptist Lancers — id 205 (homepage capture only, Nov 20, 2026)
  205: {
    schoolId: 205,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Videos — 12, latest Lancer Madness 2026 (Oct 27), then Aug 31 hype videos and Jun 29 videos.',
        photos: 'No photo galleries — no Photo/Gallery text and no gallery section; photos appear only as story thumbnails.',
        social: '#LanceUp Instagram feed, @Cbulancers, 6 posts (Nov 13–19) with a Follow Us link; header icons (Facebook, Twitter/X, Instagram, YouTube).',
      },
    pillars: {
        tickets: 'Header Tickets dropdown plus a Tickets Icon link; scoreboard Buy Tickets for WVB vs UC Santa Barbara (Nov 20, 6:00 PM). No ticket tile in the hero or promo rotator.',
        sportHub: 'Gold brand band above a News grid (lead: Kai Flanagan, women’s swimming, Nov 19). ESPN+ and Official CBU NIL Store found by page-text search but not visible as a named tile/section; scoreboard events carry generic Watch video links.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is page-text only (Official CBU NIL Store found by search, placement in a collapsed menu not verified).',
      },
    steal: 'The #LanceUp Instagram feed — six dated posts — sitting beside a 12-video rail.',
  },
  // Cal Poly Mustangs — id 206 (homepage capture only, Nov 20, 2026)
  206: {
    schoolId: 206,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'MUSTANG VIDEO — 8 videos, latest Nov 14 (three wrestling post-dual pressers), Nov 13–12 highlights, Nov 5 and Nov 3.',
        photos: 'No photo galleries — only a Promotional Background Photo heading; no gallery section.',
        social: 'SOCIAL MEDIA Instagram feed, @cpmustangs — Nov 18–19 posts, with a Load More Instagram Posts button; header icons (Facebook, Twitter/X, Instagram, YouTube, TikTok) plus Shop.',
      },
    pillars: {
        tickets: 'Header TICKETS menu and Quick Links Ticketing, plus single-game and season ticket tiles in both promo carousels (26 MBB/WBB single game, 27 baseball season) and scoreboard Buy Tickets links.',
        sportHub: 'Lead story (Cal Poly–UC Davis four-year scheduling partnership) flanked by a QUICK LINKS rail (Official App, Game Day, Ticketing, All Sports Calendar, Game Day Hospitality, Donate). ESPN+ Rail and RideHigh Exchange tiles in the promo carousels.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is the RideHigh Exchange tile in the promo-rail carousels (the word NIL itself does not appear as visible text).',
      },
    steal: 'The QUICK LINKS rail beside the hero — app, gameday, ticketing, calendar, hospitality, donate in one column — plus ticket tiles in both promo carousels.',
  },
  // CSU Bakersfield Roadrunners — id 207 (homepage capture only, Nov 20, 2026)
  207: {
    schoolId: 207,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Videos / ROADRUNNER ON DEMAND — 4 tiles, all with the identical title CSUB Basketball Mid Week Press Conference and identical date Nov 05.',
        photos: 'No photo galleries — no Photo/Gallery text and no gallery section.',
        social: 'Footer icons (Instagram, Facebook, Twitter only); the homepage SOCIAL MEDIA section is present as a heading but EMPTY — no posts loaded, a large blank grey/white region.',
      },
    pillars: {
        tickets: 'Header Tickets link in the main navigation only; no ticket promo tile in the hero or homepage body; the only commercial promo tile below Videos is Shop Runner Gear.',
        sportHub: 'Top Stories lead (men’s soccer NCAA opponent announced, Nov 16) behind a 2026 BIG WEST MEN’S SOCCER CHAMPIONS splash gate. “Runners on ESPN” and “Big West on ESPN+” appear in the collapsed Watch / Listen / Connect nav; the visible cue is a Watch Here button in the Next Event bar.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent — no match on the homepage and no NIL/exchange/collective tile visible.',
      },
    steal: 'The championship splash gate — a full-screen 2026 Big West Men’s Soccer Champions interstitial with Continue to Home — a title as the front door.',
  },
  // CSU Fullerton Titans — id 208 (homepage capture only, Nov 20, 2026)
  208: {
    schoolId: 208,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No Videos section on the homepage; only generic Video links inside schedule cards.',
        photos: 'Photo Galleries — 4, all dated (WVB vs Cal State Bakersfield Nov 18, WBB vs Weber State Nov 13, MBB vs Biola Nov 12, WVB vs UC San Diego Oct 23), with a More Galleries link.',
        social: 'Footer only — Instagram and Facebook icons; no social feed and no X, YouTube or TikTok icons.',
      },
    pillars: {
        tickets: 'Header TICKETS button in the main navigation only; no ticket promotion in the hero and no Buy Tickets link in the schedule cards checked.',
        sportHub: '5-slide Top Stories carousel (lead: WBB home win over Weber State, Nov 19). ESPN+ not named anywhere; schedule cards offer only a generic Video link and Live Stats.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent — no match anywhere on the homepage.',
      },
    steal: 'Four dated photo galleries — every gallery carries its date — the most honestly dated gallery rail in the conference.',
  },
  // Long Beach State Beach — id 209 (homepage capture only, Nov 20, 2026)
  209: {
    schoolId: 209,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Videos — 4 items, all post-game press conferences, dated Nov 9–14 (WVB and MBB).',
        photos: 'Photo Galleries — 6 items, no dates shown (MBB, Hall of Fame, MG, WSOC); the View more link reads literally View more undefined galleries.',
        social: 'Instagram feed section mid-page — 6 @lbsuathletics Instagram posts, with a Follow Us on Instagram link; no social icons observed in the footer.',
      },
    pillars: {
        tickets: 'Header Tickets menu (Buy Tickets, Parking, Student Tickets); no ticket promotion in the hero; promo rotator is Shop / BAF Promo / AOTW Promo / Newsletter Promo.',
        sportHub: 'Top Stories lead (WBB loss at San Francisco, Nov 19) plus a dedicated mid-page Upcoming ESPN Plus Streams section listing 16 streams Nov 20–Dec 21, with an ESPN Plus logo and a View more link.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is menu-only (Beach NIL in the Inside Athletics dropdown); it does not appear in the homepage body.',
      },
    steal: 'The Upcoming ESPN Plus Streams section — 16 dated, timed streams — the best streaming treatment captured in any conference.',
  },
  // CSUN Matadors — id 210 (homepage capture only, Nov 20, 2026)
  210: {
    schoolId: 210,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Recent Videos — 3 items, all dated but old (Sep 16 WVB hype video, Sep 3 tip-off lunch, Aug 26 WVB preview).',
        photos: 'No gallery section on the homepage; only a Photo Galleries link in the Fan Zone dropdown menu.',
        social: 'Header icons (Facebook, Twitter, Instagram, YouTube) and a QUICK LINKS area with Instagram, X, Facebook, YouTube and TikTok; no social feed section on the homepage.',
      },
    pillars: {
        tickets: 'Prominent red Buy Tickets button at the top right of the main navigation, plus Buy Tickets links inside the Nov 20–21 schedule cards; no ticket promotion in the hero.',
        sportHub: 'Top Stories carousel (lead: WBB comeback win over San Diego State, Nov 19) plus a dedicated Upcoming ESPN Plus Streams section listing 3 streams (MBB vs Delaware Nov 20, WVB Nov 20–21) and a Fan Zone link CSUN on ESPN+.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent — no match anywhere on the homepage.',
      },
    steal: 'The Upcoming ESPN Plus Streams section (3 dated, timed streams) beside Long Beach’s 16 — the only two schools in the run to list streams as a section.',
  },
  // Sacramento State Hornets — id 211 (homepage capture only, Nov 20, 2026)
  211: {
    schoolId: 211,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No Videos or Galleries section in the homepage regions (Top Stories, Events/Schedule, Promo rotator, Sponsors, footer only).',
        photos: 'No Videos or Galleries section in the homepage regions (Top Stories, Events/Schedule, Promo rotator, Sponsors, footer only).',
        social: 'Header icons only, top right — X/Twitter, Instagram, Facebook, YouTube; no social feed section.',
      },
    pillars: {
        tickets: 'Header TICKETS menu plus per-event Buy tickets links in the Events/Schedule list (e.g. WBB vs Pacific, Nov 20); no ticket promotion in the hero.',
        sportHub: 'Lead Top Stories item (MBB loss to Stanford, Nov 19) above an Events/Schedule list with generic Live video links. ESPN+ not named anywhere in homepage text.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is in the main header nav, plus a story VISIT THE HORNET EXCHANGE! (General, May 3), powered by INFLCR.',
      },
    steal: 'Header NIL nav plus the Hornet Exchange story — NIL as a top-level item, not a buried menu link.',
  },
  // UC Irvine Anteaters — id 212 (homepage capture only, Nov 20, 2026)
  212: {
    schoolId: 212,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Videos — 3, current (WBB postgame Nov 18, MBB postgame Nov 12, Zot on the Yacht 2026 recap Nov 12).',
        photos: 'Galleries — 10 items with image counts (MSOC Big West semifinal Nov 7, 26 images; MBB Oct 27, 20; WSOC Oct 10, 29); 4 of the first 5 thumbnails were blank dark-blue at capture.',
        social: 'Header icons only (Facebook, Twitter/X, Instagram, YouTube) next to Donate / Buy Tickets / Shop; no social feed section. A Newsletter section (Get weekly news sent directly to your inbox) is present.',
      },
    pillars: {
        tickets: 'Header Tickets menu plus a white Buy Tickets button top right, and Buy Tickets in the schedule (MBB vs San Diego, Nov 21); no ticket promotion in the hero.',
        sportHub: 'Lead Stories Feature item (WBB takes a two-game win streak to San Diego, Nov 21) with a schedule offering generic Watch video links. ESPN+ not named anywhere in homepage text.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is prominent — NIL Marketplace in the main nav, a Nov 19 story on Adidas NIL Locker Rooms, and an Anteater Exchange Quick Link.',
      },
    steal: 'Ten galleries with image counts plus a Nov 19 Adidas NIL Locker Rooms story — the best NIL treatment in the conference.',
  },
  // UC Riverside Highlanders — id 213 (homepage capture only, Nov 20, 2026)
  213: {
    schoolId: 213,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Highlander Video — UCR Men’s Basketball Goes Behind the Scenes at R’Pantry (Oct 19), with MORE VIDEOS.',
        photos: 'No Galleries section (page-text search for Galleries returned nothing); a Promotional Background Photo region has no text/copy.',
        social: 'Instagram section mid-page (@ucr_athletics, posts Nov 2 and Nov 10) plus FOLLOW US; footer Follow Us links (Instagram, Facebook, Twitter, YouTube); no social icons in the header.',
      },
    pillars: {
        tickets: 'Header TICKETS menu plus per-event Buy Tickets links in the Schedule (WVB vs Cal Poly Nov 20, WBB vs Idaho State Nov 22, MBB vs Portland State Nov 25); no ticket promotion in the hero.',
        sportHub: 'Root URL redirects to a Match Day takeover (WVB vs Cal Poly, Fri Nov 20, 6:00 PM, SRC Arena) with a Continue to Full Site link; the full homepage lead is a MBB recap (Duckett, 18 points, loss at San Diego). Schedule offers only generic Watch video links; ESPN+ not named.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent — no match anywhere on the homepage.',
      },
    steal: 'The Match Day takeover — the root URL lands on tonight’s volleyball match day page, not the homepage — a gameday-first front door.',
  },
  // UC San Diego Tritons — id 214 (homepage capture only, Nov 20, 2026)
  214: {
    schoolId: 214,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Video — MBB Postgame Interviews and MBB Highlights vs Texas Southern, both Nov 16, 2026.',
        photos: 'Photo gallery — WBB vs Portland St, Nov 12, 2026 (linked as a gallery); a Slideshow region below shows a La Jolla coastline photo with no caption.',
        social: 'MULTIMEDIA section with Twitter / Facebook / Instagram filters and embedded posts (e.g. a Facebook post Nov 18, an Instagram post); Quick Links > Social Media; no social icons in the footer.',
      },
    pillars: {
        tickets: 'Header ticket-icon Tickets link (opens new window); Promos carousel slide Single-game tickets are now on sale!; per-event Buy tickets links in the Calendar; plus a floating ticket ad (TRITONS BASKETBALL SINGLE GAME TICKETS ON SALE NOW) that overlapped the Calendar.',
        sportHub: 'Rotating news-story carousel (lead: Tritons head to Acrisure Series in Palm Desert) above a Calendar. ESPN+ named in the Calendar — Nov 20, 7 PM, WVB at Long Beach State, with ESPN+ logo/link.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is in the Promos carousel — THE TRITON EXCHANGE / YOUR NIL CONNECTION.',
      },
    steal: 'The MULTIMEDIA filtered feed (Twitter / Facebook / Instagram in one section) plus the Triton Exchange promo in the carousel.',
  },
  // UC Santa Barbara Gauchos — id 215 (homepage capture only, Nov 20, 2026)
  215: {
    schoolId: 215,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Latest Videos — 5 hype videos dated Aug 21, 2026 (men’s soccer) through Apr 23, 2026 (baseball, men’s tennis).',
        photos: 'Photo galleries — 5 listed (MSOC Big West Final Nov 13, WBB vs UC Santa Cruz Nov 3, MBB vs San Francisco State Nov 2); gallery thumbnails never loaded in the capture (white blank tiles).',
        social: 'Content Stream section headed #GOGAUCHOS / Social Media is present but no feed posts were visible (empty white region); per-sport social links in the Sports dropdown; no social icons in the footer.',
      },
    pillars: {
        tickets: 'Header ticket-icon button; Buy tickets link in the schedule (WBB vs Utah Tech, Nov 20); the hero rotation includes a ticket-related story (men’s volleyball 2027 schedule and season tickets); no ticket promo in the lead hero.',
        sportHub: 'Rotating Top Stories carousel (lead: MBB improves to 5-0 with road win at Pepperdine, Nov 19). ESPN+ appears only as a link in the Fan Zone dropdown (The Big West / ESPN+ / Gaucho Shop); no ESPN+ label on any schedule/event item.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent — no NIL, Name, Image and Likeness, or Exchange anywhere in homepage text, nav, hero, or sections.',
      },
    steal: 'Five dated photo galleries (Nov 13 back to Oct 24) — the gallery rail stays current even when its thumbnails lag.',
  },
  // Utah Valley Wolverines — id 216 (homepage capture only, Nov 20, 2026)
  216: {
    schoolId: 216,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Video — 9 videos in the carousel, latest Utah Valley Wrestling vs West Virginia (Nov 19), UVU soccer’s first Big West Tournament title (Nov 14), wrestling vs Iowa State (Nov 6).',
        photos: 'Photo galleries — 10 in the carousel; three visible with counts (Wrestling vs West Virginia, 38 photos; vs Long Beach State, 41; women’s soccer vs UC Riverside, 18).',
        social: 'Top utility bar icons (Instagram, X, Facebook, YouTube); a dedicated Social Media section with All / Facebook / Instagram filters and embedded posts (XC NCAA Championships, MBB Paradise Jam, WBB vs Utah) with a Load More Social Posts button.',
      },
    pillars: {
        tickets: 'Header Tickets nav link and outlined Tickets button (with Wolverine Club / Shop / Donate); per-sport Tickets links in the Sports dropdown; a social post links GoUVU.com/GetTix; no ticket promo in the hero.',
        sportHub: 'Top Stories news grid (lead: wrestling knocks off No. 23 West Virginia 20-14, Nov 19). ESPN+ named in Events and Results (Nov 20 MBB at East Carolina card lists ESPN+ with Watch Live / Listen / Stats links) and in a social post (WBB vs Utah, Nov 20, on ESPN+).',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent — no NIL / Name, Image and Likeness anywhere in homepage text, nav menus, promos, or social feed.',
      },
    steal: 'Nine videos and ten galleries with photo counts — the deepest media rail in the conference — led by a ranked wrestling upset.',
  },
  // Central Connecticut State Blue Devils — id 217 (homepage capture only, Nov 20, 2026)
  217: {
    schoolId: 217,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Videos tab was selected and its panel was empty — 0 videos listed.',
        photos: 'Photos tab shows 4 galleries — women’s soccer vs Stonehill (11/12/26), football vs Duquesne (11/9/26), swim & dive vs New Hampshire (10/22/26), football vs Mercyhurst (10/16/26).',
        social: 'Header icons (Instagram, X, YouTube, Facebook, RSS); a STAY CONNECTED section shows 4 large icon tiles — icons only, no embedded feed and no posts.',
      },
    pillars: {
        tickets: 'Weakest ticket setup in its batch — no header ticket button, no hero/promo tile; only a Fan Zone > Ticket Office menu link plus schedule links.',
        sportHub: '5-slide auto-rotating story carousel (lead: volleyball falls at top-seeded LIU in four sets at the NEC Tournament, Nov 20). No streaming/watch section; ESPN+ absent; the scoreboard is empty on both Events and Results tabs.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent — no NIL, exchange, or collective named anywhere on the homepage or in those menus.',
      },
    steal: 'Four dated photo galleries (Oct–Nov) on a PrestoSports site — the only non-Sidearm site in the entire run — proving the gallery habit travels across CMS.',
  },
  // Chicago State Cougars — id 218 (homepage capture only, Nov 20, 2026)
  218: {
    schoolId: 218,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No photo/video gallery section; a text search for Gallery returns nothing.',
        photos: 'No photo/video gallery section; a text search for Gallery returns nothing.',
        social: 'Both feeds populated — Facebook (MBB recaps, a $5 student-tickets promo, Game One Student-Athlete of the Week) and Instagram (Battle of the Dan Ryan $5 student tickets, Education Day with 2,678 fans, Veterans Day); header icons plus a Social Media Directory link.',
      },
    pillars: {
        tickets: 'Header TICKETS link; scoreboard Buy tickets links (MBB at Marquette Nov 22, WBB vs Western Illinois Nov 24); Fan Zone > Ticketsmarter; Inside Athletics > CSU Ticketing Website. The Facebook feed also carried a $5 student-tickets promo.',
        sportHub: '4-slide story rotator (lead: MBB falls to UIC Wednesday) above a populated scoreboard (5 games). Fan Zone has a generic Live Stream link with no provider named; ESPN+ absent.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is menu-only (NIL Information inside the Inside Athletics menu); no exchange/collective is named.',
      },
    steal: 'Populated Facebook + Instagram feeds and a $5 student-ticket promo in the feed itself — the ticket offer where the audience already is.',
  },
  // Fairleigh Dickinson Knights — id 219 (homepage capture only, Nov 20, 2026)
  219: {
    schoolId: 219,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Media section shows 3 videos — women’s soccer NEC championship postgame (11.17.26), WBB vs East Stroudsburg highlights (11.10.26), MBB vs CCNY highlights (11.10.26).',
        photos: 'No gallery section on the homepage body; Photo Galleries is a Fans-menu link only.',
        social: 'Effectively absent — no social icons in the header; the Social section contains only an FDU image and a Bogota Savings Bank ad — no feed, no posts, no platform icons or links.',
      },
    pillars: {
        tickets: 'Header Tickets link plus ticket/cart/donate icon buttons and Fans menu > TICKETS (opens in new tab); no hero ticket promo; scoreboard game links are Live video/stats only.',
        sportHub: 'Top Promo hero (FDU BY THE NUMBERS) above Top Stories (lead: men’s soccer falls to Cornell in the NCAA first round, Nov 19). Streaming is branded KnightVision (header link) and NEC Front Row (Fans menu); ESPN+ absent.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is menu-only (a single NIL Policy link inside the Inside Athletics menu); no exchange/collective named.',
      },
    steal: 'The FDU BY THE NUMBERS brand promo — 4 national championships / 400 student-athletes / 23 teams / 133 NEC titles — institutional proof as the hero.',
  },
  // Le Moyne Dolphins — id 220 (homepage capture only, Nov 20, 2026)
  220: {
    schoolId: 220,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Video — 4 tiles: men’s basketball highlights vs Manhattan, baseball highlights vs Stonehill, men’s soccer vs Mercyhurst highlights (10/16/25), women’s volleyball highlights vs CCSU (10/25/25).',
        photos: 'No homepage gallery section; only a Photo Gallery link in the Fan Zone dropdown.',
        social: 'Twitter, Instagram, Facebook, and YouTube icons beside the Top Stories heading; no populated social feed on the homepage; a Social Media image tile below the Video section and social links in the Fan Zone menu.',
      },
    pillars: {
        tickets: 'Header Tickets link; schedule Buy tickets link for Nov 21 WBB at Niagara (away); no hero or promo ticket tile.',
        sportHub: 'Rotating Top Stories carousel, 7 slides (lead: Play of the Week — behind-the-back pass from Gysel to King, presented by ’Phins Hospitality). NEC Front Row in the Fan Zone menu; schedule entries have generic Live video links; ESPN+ absent.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL / exchange / collective is absent — no hit in homepage text search.',
      },
    steal: 'Sponsored Play/Athlete of the Week framing — the Play of the Week presented by ’Phins Hospitality, Athlete of the Week presented by CADimensions — a sponsor in the story itself.',
  },
  // Long Island University Sharks — id 221 (homepage capture only, Nov 20, 2026)
  221: {
    schoolId: 221,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'SHARKMEDIA — 8 tiles, no dates shown (VP Michael Berthel, The College Tour episode, football, cheerleading, men’s and women’s hockey, MBB, WVB).',
        photos: 'No photo galleries on the homepage (no hit in text search, no section).',
        social: 'No social icons found in the header, footer, DOM, or homepage text; no populated social feed. The Contentstream section is only #GOSHARKS / THISISLIU with university promo tiles, not social posts.',
      },
    pillars: {
        tickets: 'Prominent yellow TICKETS button in the header, plus an ad tile for LIU men’s hockey at UBS Arena, Dec 28–29, 2026 (Empire State Holiday Invitational tickets on Ticketmaster).',
        sportHub: 'Championship-bound hero promo (WVB NEC Championship bound Saturday, 7 PM) tied to the lead story — women’s volleyball wins 19th straight, returns to the NEC Championship (Nov 20). No streaming provider named; schedule entries have toggle links rather than visible ticket links.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL / exchange / collective is absent — no hit in homepage text search.',
      },
    steal: 'The championship-bound hero promo and the big yellow TICKETS button — the game and the ticket in the same first screen.',
  },
  // Mercyhurst Lakers — id 222 (homepage capture only, Nov 20, 2026)
  222: {
    schoolId: 222,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Video — 3 tiles, all stale: 2026 NCWA Wrestling Nationals Preview (Mar 25), baseball season preview (Feb 12), football coach introductory press conference (Feb 11).',
        photos: 'Photo galleries — 3, all stale: 2026 Mercyhurst Golf Outing (May 19), 2026 Shamrock Awards (May 6), NEC Men’s Basketball Championship (Mar 27).',
        social: 'Footer icons only — Instagram and Twitter; no Facebook or YouTube icons, and no social feed section on the homepage.',
      },
    pillars: {
        tickets: 'Header Tickets pill button (with Give and Shop pills); the large ON SALE NOW promo tile (single-game and season tickets for basketball / football / hockey); a schedule Buy tickets link for Nov 20 MBB at Canisius.',
        sportHub: 'Story-led grid (lead: men’s wrestling on the road vs LIU and Sacred Heart, Nov 20) with commercial promo tiles above it and a live schedule ticker (Live Now for MBB at Canisius and women’s ice hockey at Robert Morris). Schedule entries have generic Live video links; ESPN+ absent.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL / exchange / collective is absent — no hit in homepage text search.',
      },
    steal: 'The ON SALE NOW tile — single-game and season tickets for basketball, football, and hockey in one promo — the most ticket-forward tile in the conference.',
  },
  // Stonehill Skyhawks — id 223 (homepage capture only, Nov 20, 2026)
  223: {
    schoolId: 223,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Latest Videos — 8 items, latest Nov 12 (Skyhawk Talk, women’s cross country), then seven Nov 11 postgame interviews.',
        photos: 'No photo-gallery section or Gallery text on the homepage.',
        social: 'Header icons (Instagram, Facebook, X/Twitter); a Skyhawks Instagram feed section exists (heading + Instagram link) but it is EMPTY — a large blank white area with no posts/tiles rendered.',
      },
    pillars: {
        tickets: 'Header Tickets pill button (opens in new window), plus a TicketSmarter sponsor ad in the footer sponsors carousel; no ticket promo tile in the hero; ticket links also via scoreboard game toggles.',
        sportHub: 'Rotating Top Stories carousel (lead: men’s hockey falls to No. 13 Northeastern, Nov 19) above a current scoreboard (Nov 18–20 finals and events). A header Watch Live pill button; ESPN+ absent.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL / exchange / collective is absent — no NIL match in text search. A GoHill Fund sponsor ad appears in the sponsors carousel, not labelled NIL.',
      },
    steal: 'Eight latest videos (Nov 11–12 postgame interviews) — the freshest video rail in the conference.',
  },
  // New Haven Chargers — id 224 (homepage capture only, Nov 20, 2026)
  224: {
    schoolId: 224,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No video section; only per-event Live video links.',
        photos: 'PHOTO GALLERIES — 5 tiles, latest Spring 2026 Stable Showdown (Feb 21, 2026), the rest 2025 (SHU LAN for Marvel Rivals Apr 2025, basketball vs Assumption Jan 2025).',
        social: 'Header icons (Facebook, Twitter/X, Instagram, RSS Feed); a Social Stream section (#GOCHARGERS) exists but is EMPTY — heading and texture background only, no posts rendered.',
      },
    pillars: {
        tickets: 'No header Tickets button (header has Shop and Donate instead); ticketing only via schedule/event links — a Buy tickets link on the Nov 21 MBB vs University of New Hampshire event.',
        sportHub: 'Rotating Top Stories carousel (lead: gameday-experience enhancements at the Hazell Center, Nov 9) above Events & Results with per-event Live video links. ESPN+ absent; Charger Sports Network is a header menu item.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL / exchange / collective is absent — no NIL text match.',
      },
    steal: 'The gameday-experience announcement leading the homepage — enhancements to the Hazell Center as the top story, eleven days running.',
  },
  // Wagner Seahawks — id 225 (homepage capture only, Nov 20, 2026)
  225: {
    schoolId: 225,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Seahawks All-Access — 3 videos, latest Nov 14, 2026 (football highlights and postgame press conference vs New Haven), then Nov 12 (WBB postgame vs Rhode Island).',
        photos: 'No photo-gallery section or Gallery text on the homepage.',
        social: 'Seahawks Social feed section is POPULATED — 4 Instagram posts from @wagnerathletics (a lot can change in 13 years, Happy Halloween, Grymes Hill, Hall of Fame Class of 2026) with a LOAD MORE button; header icons (Instagram, X/Twitter, Facebook, YouTube).',
      },
    pillars: {
        tickets: 'Header nav Tickets menu button plus a ticket-icon link in the scoreboard strip; promo tiles below the hero include Sammy’s Kids Club, Seahawk Club, and Touchdown Club; a TicketSmarter sponsor ad in the footer.',
        sportHub: 'Single large lead story (field hockey concludes a historic season with a loss to No. 2 Maryland in the NCAA first round, Nov 13) with a 6-story grid beside it and a scoreboard strip. No streaming section named on the homepage; ESPN+ absent.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL / exchange / collective is absent — no NIL text match. Giving is promoted instead via Seahawk Club and Touchdown Club promo tiles.',
      },
    steal: 'The populated Seahawks Social feed — four Instagram posts with a LOAD MORE button — beside a lead story about a historic season ending.',
  },
  // Brown Bears — id 226 (homepage capture only, Nov 20, 2026)
  226: {
    schoolId: 226,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“Brown All Access Videos,” 4 tiles + Load More; latest Nov 19 (Highlights: Women’s Basketball vs. Merrimack) and Nov 15 (three women’s soccer Ivy Tournament Final videos).',
        photos: 'No photo gallery section on the homepage — only a “Photo Galleries” link in the Fan Zone menu and one “Photo Gallery” link on the Merrimack story.',
        social: 'No homepage social feed section. Per-team Facebook/Twitter/Instagram links inside the Sports menus, @brownu_wbb X/Instagram links on the lead story, Fan Zone “Social Media Directory,” and a “FOLLOW ON SOCIAL MEDIA” promo graphic.',
      },
    pillars: {
        tickets: 'Header “Ticketing” button (top right, with Shop and Donate); per-event “Tickets” links in the score ticker and top stories; Fan Zone menu “Season Ticket Holder Benefits.” No hero ticket promo.',
        sportHub: 'Rotating “Brown Top Stories” carousel (football, squash, hockey, lacrosse, basketball, equestrian). Fan Zone menu “Bears on ESPN+,” plus “Watch (ESPN+)” links on basketball stories and “ESPN+ Replay” on the Merrimack recap.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent from the homepage — a text search for “NIL” returned nothing.',
      },
    steal: 'The Fan Zone “Bears on ESPN+” label — the clearest streaming naming in the Ivy — plus per-story “Watch (ESPN+)” links right where a fan decides to watch.',
  },
  // Columbia Lions — id 227 (homepage capture only, Nov 20, 2026)
  227: {
    schoolId: 227,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“VIDEOS,” 4 tiles; latest “Preview: FB | Coach Poppe Show - Week 10” (Nov 20), “Captains’ Corner Podcast: (S8, E10)” (Nov 18), two men’s basketball Northwestern videos (Nov 16).',
        photos: '“LIONS GALLERIES,” 3 tiles with image counts — “Gallery: MTEN | NCAA Doubles” Nov 19 (17 images), “Gallery: WTEN | NCAA Championship” Nov 17 (11 images), “Gallery: MBK | Columbia vs. Northwestern” Nov 16 (18 images).',
        social: 'Populated “#ROARLIONROAR” feed with All/Instagram filters, 6 posts shown (Nov 20, Nov 19 x2, Nov 11, Nov 10, Oct 29) from @gocolumbialions, plus “Load More Posts.” Header icons: Facebook, X, Instagram, YouTube.',
      },
    pillars: {
        tickets: 'Header “TICKETS” link; 4-tile promo rotator (Store Game Day Section; Roar Mobile Homepage; Fan Experiences; Student Promotions). Ticket urgency via the social feed — the Nov 20 post reads “SOLD OUT — Only student tickets remain for Saturday’s @culionswbb game vs. #5 Duke!”',
        sportHub: 'Lead story in a “Stories Grid” with a Stories List below and a Load More Stories button. ESPN+ is text-search only — the only hit was “Watch ESPN+” inside a collapsed scoreboard media panel; no visible ESPN+ section, menu item, or tile.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent from the homepage; “One Roar” is a prominent Featured Content tile, but the homepage gives it no NIL, exchange, or collective explanation.',
      },
    steal: 'Sold-out ticket urgency inside the social feed (“Only student tickets remain for Saturday’s @culionswbb game vs. #5 Duke!”) — scarcity as a social post, not a banner.',
  },
  // Cornell Big Red — id 228 (homepage capture only, Nov 20, 2026)
  228: {
    schoolId: 228,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“VIDEOS,” 6 tiles; latest “Highlights: Cornell Women’s Ice Hockey vs Colgate - 11/20/2026,” then men’s soccer vs FDU 11/19, women’s basketball vs Mercyhurst 11/18, three from 11/14 and 11/13.',
        photos: '“PHOTO GALLERIES” section with a rotator — only one gallery visible (“MBKB at Syracuse, 11.18.26”), no image count shown.',
        social: 'No social feed section. Sidebar icons for Facebook, Instagram, X, YouTube (bottom of the left rail). “BIG RED #MOMENTS” is WePlayed video playlists (5 videos, all 11/14/2026), not a social feed.',
      },
    pillars: {
        tickets: 'Left-nav “Tickets” button and a footer sponsor tile for bigredtix.com; per-event links behind the Calendar’s toggle controls. No homepage ticket promo tile, hero ticket CTA, or ticket banner — the “Promo Slider” instead promotes “BIG RED BIOS,” “HALL OF FAME,” “FACILITIES.”',
        sportHub: '“Top Stories” card grid (lead card largest, left) plus “MORE HEADLINES” (10 more stories, Nov 18–19) and a Calendar (Events tab) listing Nov 19–21, including live men’s polo and men’s ice hockey vs Clarkson at capture time. A QUICK LINKS pill reads “Ivy League on ESPN”; the literal text “ESPN+” does not appear as homepage text.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent from the homepage (no hits for “NIL” or “exchange”).',
      },
    steal: 'The six-tile video section, latest Nov 20 — the deepest video shelf in the Ivy — sitting right under the Top Stories grid.',
  },
  // Dartmouth Big Green — id 229 (homepage capture only, Nov 20, 2026)
  229: {
    schoolId: 229,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Videos present, 5 items, latest 11.17.26 (“Men’s Basketball Postgame Press Conference Vs Maine Augusta 11.17.26”; also WBB Colby-Sawyer post-game, Brett MacConnell postgame at Boston University 11.15.26).',
        photos: 'Photo galleries absent; photos only as news/feature thumbnails.',
        social: 'No central icons, no feed. Per-team links only in the collapsed TEAMS menu (Facebook/Twitter/Instagram per team) plus “Dartmouth Sports YouTube Channel” in FAN ZONE.',
      },
    pillars: {
        tickets: 'Header “TICKETS” menu (Ticket Office Home, sport tickets, Big Green Next Gen Pass, Lil Green Kids Club); QUICK LINKS “Buy Tickets”; schedule “Buy Tickets” on Women’s Rugby vs #1 Harvard, Nov 21, 7:00 PM. No hero ticket promo.',
        sportHub: 'News-led grid (no traditional carousel or slogan) with “This Week In Dartmouth Sports: 11.17–11.22.” ESPN+ is menu only — collapsed FAN ZONE: “Dartmouth Athletics on ESPN+.”',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent from the homepage (text search returned nothing).',
      },
    steal: 'Harvard and Dartmouth mirror each other as lead story — the same NIRA championship final told from opposite sides. When rivals share a game, let both homepages lead with it.',
  },
  // Harvard Crimson — id 230 (homepage capture only, Nov 20, 2026)
  230: {
    schoolId: 230,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'VIDEOS 5, latest Nov 17 (“Fencing Opens Season at Elite Invitational in Philadelphia”), then Nov 16, 15, two Nov 14.',
        photos: 'PHOTO GALLERIES 3: “M. Swimming & Diving at OSU Fall Invite” Nov 19, 10 photos; “Men’s Basketball vs. BC” Nov 18, 25 photos; “M. Swimming & Diving at OSU Fall Invite” Nov 18, 15 photos; “View All Galleries.”',
        social: 'Strongest in its batch. “Follow the Crimson” icon/link row: @harvardcrimson Instagram, @HarvardCrimson X, Harvard Athletics Facebook, @HarvardCrimson TikTok, @HarvardCrimson YouTube, RSS. “GET SOCIAL” feed populated with 5 posts (“Tomorrow. #TheGame | #GoCrimson”) + “Load More Social Posts.”',
      },
    pillars: {
        tickets: 'Minimal. No “Tickets” text in the main nav; two icon-only links top right (Shop, Tickets), no visible label. The only visible “Tickets” text is in the PHOTO GALLERIES filter. No hero/promo ticket promotion.',
        sportHub: 'Top Stories rotator (lead: women’s rugby NIRA championship final; later “Men’s Cross Country Set for NCAA Championships”). A brand-values bar above the rotator reads “PRINCIPLED LEADERSHIP / ACADEMIC INTEGRATION / COMPETITIVE EXCELLENCE”; a sidebar tile reads “WHY HARVARD?” ESPN+ is text-search only (“Ivy League on ESPN+” twice; a story preview notes MBB at Holy Cross Nov 20, 7 p.m., “streamed on ESPN+”).',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent from the homepage.',
      },
    steal: 'The populated “GET SOCIAL” feed (5 posts, including “Tomorrow. #TheGame”) — the social feed carries the rivalry, not just the news grid.',
  },
  // Princeton Tigers — id 231 (homepage capture only, Nov 20, 2026)
  231: {
    schoolId: 231,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'A PODCASTS player: “First in Football - Week 10 vs. Penn,” Nov 19, 2026, 20:52, playlist back to Oct 21, 2026.',
        video: 'No dedicated video section (text searches for “VIDEOS” and “GALLERIES” returned nothing).',
        photos: 'No dedicated photo-gallery section on the homepage.',
        social: 'Weak/empty. Multimedia menu lists Facebook, Instagram, Twitter, YouTube under “SOCIAL MEDIA.” The homepage “SOCIAL MEDIA” section shows no posts — only “Load More Instagram Posts” under an empty area. “TIGERS #MOMENTS” likewise has no items.',
      },
    pillars: {
        tickets: 'Header “Tickets” menu (“BUY PRINCETON TICKETS / Main Ticket Page / My Princeton Account”) + “Gameday” menu (Composite Schedule, Directions/Parking, Tailgating, Facilities). No hero ticket promo; the Latest Stories rotator contains four unnamed promo links (“Promo 1”–“Promo 3”, repeated), with no visible text.',
        sportHub: 'Latest Stories rotator (lead: men’s lacrosse coach of the year). Multimedia menu: “The Ivy League on ESPN – Watch,” “– FAQ,” “– International Feed”; QUICK LINKS: “Ivy League On ESPN.”',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is menu only, low prominence: “Name, Image And Likeness” under Who We Are; no exchange/collective named on the homepage body.',
      },
    steal: 'The Princeton Facts strip (38 SPORTS / 231 NATIONAL TITLES / 558 IVY LEAGUE TITLES / 153 OLYMPIANS) — institutional proof as a single line under the stories.',
  },
  // Penn Quakers — id 232 (homepage capture only, Nov 20, 2026)
  232: {
    schoolId: 232,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“Penn Sports Network” section, 3 videos: “Penn Postgame Press Conference | Saint Joseph’s | 11.14.26” — NOV 15; “Penn Postgame Press Conference | Harvard | 11.14.26” — NOV 14; “Volleyball - Penn vs Harvard” — NOV 7; plus “VIEW MORE VIDEOS” link.',
        photos: '“Photo Galleries” section, 5 tiles, no dates shown: MSOC vs. Columbia; WSOC vs. Harvard; MSOC at Drexel; WSOC at Princeton; Women’s Soccer vs. Brown; plus “VIEW MORE GALLERIES.”',
        social: 'None on the homepage — no social icons, no social feed section, no social links in the footer or the menus checked; a page text search for “Instagram” returned nothing.',
      },
    pillars: {
        tickets: 'Header TICKETS menu plus a top-right Tickets link. The TICKETS menu offers: Buy Now; “SeatGeek: Buy or Sell Football Tickets”; Sign In To My Account; Student & Student Guest Tickets; Promotions & Theme Days; Charitable Donation Request; “Purchase Tickets By Sport”; “Know Before You Go”; Special Events: Cathedral Classic. No ticket promotion in the hero.',
        sportHub: 'Rotating Top Stories carousel (women’s squash, basketball, wrestling, football). The scoreboard strip has a FULL SCHEDULE link. ESPN+ appears only once, in the FANS menu under “Watch & Listen,” as a link labeled “ESPN+.”',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent everywhere checked — homepage text search for “NIL” returned nothing; the FANS, ATHLETICS, and SUPPORT menus contain no NIL, exchange, or collective link.',
      },
    steal: 'The deep TICKETS menu — SeatGeek resale, student tickets, Know Before You Go facility policies, and the Cathedral Classic — one menu that answers every ticket question before the fan asks.',
  },
  // Yale Bulldogs — id 233 (homepage capture only, Nov 20, 2026)
  233: {
    schoolId: 233,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“BULLDOGS #moments” — WePlayed highlights/playlists; the Playlists tab shows 4 videos, all dated 2026/11/18 (all Men’s Basketball vs. Vermont): “Riley Fox In the Zone,” “Trevor Mullin In the Zone,” “Courtney Wallace In the Zone,” “Daniel Ogunyemi In the Zone.”',
        photos: 'No gallery section on the homepage; the LIVE menu links out to a Photo Gallery page.',
        social: 'Strong. A populated “Social Media / Yale Social” feed section with ALL / TWITTER / INSTAGRAM filters and a “Load more items” button; 6 tiles visible, including “Winter Season Tickets are out now” and “𝗘𝗫𝗧𝗘𝗡𝗗𝗘𝗗 — Yale Athletics and Under Armour Extend Partnership Through 2036 #ThisIsYale.” LIVE > ENGAGE links Twitter, Instagram, Facebook, YouTube; the header has a “#THISISYALE” nav item.',
      },
    pillars: {
        tickets: 'Header TICKETS is a direct link; the scoreboard gives a per-event “Buy tickets” link (e.g. WVBALL Nov 20, 7 p.m. at No. 3 Harvard, with Live video / Live stats alongside). The FANS menu lists Promotions, Group Experiences, Yale Student Tickets, “2026 Yale Day @ Football,” Skybox Suites – Yale Bowl, Gameday Central. No ticket promotion in the hero.',
        sportHub: 'Rotating Top Stories slider (lead: volleyball Ivy League Tournament preview; also “Fox’s Late Heroics Propel Men’s Basketball Past Vermont in Overtime”). LIVE > WATCH offers “Ivy League on ESPN” (not “ESPN+”), alongside Schedule Of Events and Photo Gallery.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent from the homepage body, but named once at low prominence in a menu — INSIDE ATHLETICS > Department > “NIL Marketplace.” No collective or exchange name appears on the homepage.',
      },
    steal: 'The populated social feed carrying a winter season-ticket tile (“Winter Season Tickets are out now”) — the feed itself sells tickets.',
  },
  // Eastern Illinois Panthers — id 234 (homepage capture only, Nov 20, 2026)
  234: {
    schoolId: 234,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No dedicated video gallery — only “Live video” links per schedule event.',
        photos: 'One photo-gallery tile, “Panther Photos”: a single image, “Men’s Basketball Hosts Purdue Fort Wayne,” with no date shown.',
        social: 'Header/sidebar icons for Instagram, X, Facebook, and YouTube. A “Social Media” section is populated, with “All” and “Instagram” filters and a “Load More” button; at least two Instagram posts were visible (a volleyball OVC tourney ticket post; a football “ultimate Thanksgiving feast” post).',
      },
    pillars: {
        tickets: '“Tickets / Shop” in the left navigation; Quick Links for “2026-27 Season Tickets” and “2026-27 Basketball Tickets”; a “Buy tickets” link on the Volleyball at UT Martin event in the Event Schedule.',
        sportHub: 'Top Stories rotator (lead: volleyball OVC tourney first round vs UT Martin). ESPN+ appears only as a logo inside the hero graphic (bottom right) and inside an Instagram social graphic — no text match anywhere on the homepage.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL / exchange / collective — absent: no text match and no menu link. The homepage opens behind a Giving Blue Day splash gate (“2026 EIU Giving Blue Day — TUESDAY, DECEMBER 1, 2026 : FUEL YOUR SPORT OF CHOICE”) with “Continue to Home” / “Skip Permanently.”',
      },
    steal: 'The populated Social Media section with filters and Load More — including a volleyball tourney ticket post that sells tickets from inside the feed.',
  },
  // Lindenwood Lions — id 235 (homepage capture only, Nov 20, 2026)
  235: {
    schoolId: 235,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“VIDEOS” section, 4 videos: “Keith Fisher Press Conference - Long Island Week,” “Phil Sayers Postgame Press Conference: Stephens College,” “Keith Fisher Press Conference - Denver Week,” and “Coach Gerdeman Postgame Press Conference 11/7/26: East-West” (the only dated one, Nov 7, 2026), plus “View All Videos.”',
        photos: 'No dedicated photo-gallery section on the homepage.',
        social: 'No header social icons were observed. Social promotion is via the “LINDENWOOD MEDIA” feed section, which is populated — filters “All,” “Facebook,” “Instagram,” 8+ posts from @LindenwoodLions (Facebook) and @Lindenwood_lions (Instagram) under “#OnTheHunt,” with a “Load More Social Posts” button.',
      },
    pillars: {
        tickets: '“TICKETS/SHOP” in the top navigation; Quick Links for “2026 Football Season Ticket Information,” “2026-27 Men’s Hockey Season Ticket Information,” “2026-27 Women’s Ice Hockey Season Ticket Information,” and “Men’s And Women’s Basketball Season Ticket Information,” plus “LU Team Shop.” No ticket promotion in the hero.',
        sportHub: 'Top Stories rotator (lead: women’s basketball at Evansville). ESPN+ is absent: no text match anywhere on the homepage, and no logo, section, menu item, or tile observed.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL / exchange / collective — absent: no text match and no menu link.',
      },
    steal: 'The populated LINDENWOOD MEDIA feed (#OnTheHunt, 8+ posts) — a full social section with filters, carrying the social work the header icons never do.',
  },
  // Morehead State Eagles — id 236 (homepage capture only, Nov 20, 2026)
  236: {
    schoolId: 236,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No dedicated video gallery and no photo-gallery section on the homepage. Only story images (one credited “Photos by Raymond Gleadle”), promo graphics, and social-feed images.',
        photos: 'No dedicated photo-gallery section on the homepage.',
        social: 'Header icons for X, Facebook, Instagram, and YouTube. The “#SOARHIGHER” contentstream feed is populated, with “All,” “Instagram,” “Facebook,” and “Twitter” filters and a “LOAD MORE” button; 8+ posts from @msueagles / @MSUEagles under “#SoarHigher” / “#SkoEags,” including congratulations on Coach Jackie Alexander’s first win.',
      },
    pillars: {
        tickets: 'Strongest of the three in its batch. “TICKETS” in the top navigation; a large mid-site promo banner, “2026-2027 SEASON TICKETS BUY YOURS TODAY! CLICK HERE!”; a “12 PLAYS OF Giveaways” promo above the schedule; and a promo rotator (MBB Promos / WBB Promos / DWTS).',
        sportHub: 'Story rotator, with brand slogan in the header branding: “SOAR HIGHER” / “HOME OF MSU ATHLETICS.” ESPN+ is absent: no text match anywhere on the homepage; no section, menu item, or tile.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL / exchange / collective — absent: no text match and no menu link.',
      },
    steal: 'The big mid-site “2026-2027 SEASON TICKETS BUY YOURS TODAY!” banner plus the “12 PLAYS OF Giveaways” promo — tickets and giveaways stacked above the schedule.',
  },
  // Southeast Missouri State Redhawks — id 237 (homepage capture only, Nov 20, 2026)
  237: {
    schoolId: 237,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'VIDEOS 4: “What’s Cookin Redhawks at Encore Pizzeria + Kitchen” Nov 11; same title Nov 3; “Home Coming Recap: No Place Like Home” Oct 21; “THE BRAWL: Semo defeats Lindenwood” Oct 12.',
        photos: 'GALLERIES 8, latest “WBB vs Hannibal-LaGrange” Nov 18 (15 images), then “WBB games 1 and 2” Nov 6, “SEMO at Morehead State” (VB) Oct 19, “VB vs SIUE” Oct 5, “WSOC vs. Belmont” Sep 15, “VB SEO Invitational” Sep 1, “SEMO vs. Indiana State” (FB) Aug 29, “WSOC vs. SIU” Aug 14. A STORE section (4 items, $22–$41.99).',
        social: 'Absent — no social icons, links, or feed found in page text/DOM (text search for “Instagram” returns nothing; the footer lists only OVC/NCAA/FCS logos). The only school in the conference with no social presence at all on the homepage.',
      },
    pillars: {
        tickets: 'Prominent — a “Tickets” button in the red header (with a “TICKETS” menu), “Purchase Tickets” in QUICK LINKS, and “Buy Tickets” in the scoreboard for Football vs UT Martin, Nov 21, 1 PM.',
        sportHub: 'A large banner image above NEWS reads “COMMISSIONER’S CUP CHAMPIONS / BACK TO BACK / OVC COMMISSIONER’S CUP CHAMPIONS 2025 2026” — the hero is the achievement, not a story. Lead news below: “Redhawks Fall to St. Thomas Thursday” (MBB, Nov 19). ESPN+ is absent from homepage text; the only ESPN mention is a sponsor tile “SEMO ESPN Radio” (radio, not ESPN+).',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL / exchange / collective not named anywhere. Fundraising is generic via promo tiles “SEMO Athletics Fund” and “573 Fundraising” and a “SUPPORT THE REDHAWKS” menu.',
      },
    steal: 'The back-to-back Commissioner’s Cup champions banner as the hero — an achievement, not a story, leading the whole page.',
  },
  // SIUE Cougars — id 238 (homepage capture only, Nov 20, 2026)
  238: {
    schoolId: 238,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'FEATURED VIDEOS 3: “SIUE WBB Head Coach Coach Sam Quigley Smith with Giselle Dogan & Kaitlin Cassidy After 114-38 Win” Nov 14; “SIUE Men’s Basketball Head Coach Brian Barone postgame 11-13-26” Nov 13; “SIUE wrestling Head Coach Daryl Thomas 11-13-26” Nov 13.',
        photos: 'GALLERIES 3: “SIUE vs. UTRVG 10-18-26” (MSOC, Nov 18); “SIUE vs. Eureka 11-14-2026” (WBBALL, Nov 14, 114 images); “Wrestling vs George Mason 11-13-26” (Nov 13, 89 images).',
        social: 'Icons only, no feed — header links for Facebook, X, Instagram, YouTube. No social feed section.',
      },
    pillars: {
        tickets: '“TICKETS” in the main nav + “Buy Tickets” in QUICK LINKS; also “2026-27 Men’s Basketball Schedule” and “2026-27 Women’s Basketball Schedule” quick links.',
        sportHub: 'The page opens directly on NEWS (no large hero banner/rotator). Featured/lead story: “SIUE Wrestling Travels to Evanston Sunday.” ESPN+ named once, as a QUICK LINKS text link: “Watch the Cougars on ESPN+.”',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is prominent — a top-level main-nav button “NIL” (rightmost nav item), alongside a “COUGARS CHAMPIONS FUND” nav button. No exchange/collective name is shown. SIUE is the only school in the conference with NIL in the main nav.',
      },
    steal: 'The main-nav NIL button — the only school in the OVC with NIL in the main nav — sitting beside the Cougars Champions Fund button.',
  },
  // Tennessee State Tigers — id 239 (homepage capture only, Nov 20, 2026)
  239: {
    schoolId: 239,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Both present, in a combined “Big Blue Sports Network” section with VIDEOS/PHOTOS tabs. VIDEOS 6: “Postgame Highlights — TSU vs. Fisk (Nov. 9, 2026)”; “Nolan Smith Postgame vs. Fisk (November 9, 2026)”; “Nolan Smith Postgame vs. East-West (November 5, 2026)”; “Football Game Preview vs. Lindenwood: Reggie Barlow (Oct. 28, 2026)”; “Football Game Preview vs. Charleston Southern: Reggie Barlow (Oct. 20, 2026)”; “Postgame Highlights — TSU vs. Morgan State (Oct. 17, 2026).”',
        photos: 'PHOTOS 6 galleries in the same “Big Blue Sports Network” section: “WBB vs. Fisk,” “MBB vs. East-West,” “WBB vs. Fisk (1/2),” “(2/2),” “(3/3),” “MBB vs. East-West” — no dates displayed.',
        social: 'Quick Links only, no feed — “X,” “Instagram,” “Youtube” links (no Facebook found). No social feed section. QUICK LINKS also include “TSU Nike Gear,” “TSU Athletics Official App,” and “Make a Gift.”',
      },
    pillars: {
        tickets: '“TICKETS” main-nav link + “DONATE” beside it; QUICK LINKS include a “Digital Ticketing Guide” (no “Buy Tickets” quick link). Schedule (EVENTS tab): Football vs Gardner-Webb Nov 21, 12:30 PM CT, plus WVB Nov 22, WBB Nov 22/25/28, with per-event toggle links.',
        sportHub: 'Lead Top Story is a game preview: “Game Information: Week 12 — Gardner-Webb” (NOV 19 | FOOTBALL), hero graphic reads “GAME NOTES WEEK 12 — NOV. 21.” Above the hero, three promo banners: “2026 OVC Men’s Basketball Tournament CHAMPIONS,” “DONATE TODAY! Tennessee State Athletic Fund,” “STRATEGIC PLAN 2023 | TIGERS FORWARD.” ESPN+ is not named in any homepage text, but an “ESPN+” bug/watermark is visible in the corner of video thumbnails in “Big Blue Sports Network.”',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL / exchange / collective not named anywhere in homepage text or nav. A “DONATE TODAY! Tennessee State Athletic Fund” banner sits above the hero.',
      },
    steal: 'The “Big Blue Sports Network” combining videos and photo galleries under one brand — one media home instead of two sections.',
  },
  // Southern Indiana Screaming Eagles — id 240 (homepage capture only, Nov 20, 2026)
  240: {
    schoolId: 240,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No dedicated video section (“Video” has no match on the page).',
        photos: 'No homepage photo-gallery section; “Photo Gallery” appears only as navigation-menu text (2 matches). A “Featured Athletes” section rendered as a heading only, with no athletes visible in the capture.',
        social: 'A “Keep Up With Everything USI” section with Facebook, Instagram, X, YouTube, and RSS Feed links (icons/links only). No embedded social feed section.',
      },
    pillars: {
        tickets: 'A header “Tickets” link (opens a new window); a Slideshow promo “USI Basketball Season Tickets” with a “Learn More” link; scoreboard/schedule links; and a Parallax promo “JOIN THE EXCITEMENT!” / “Join the Varsity Club Today!”',
        sportHub: 'Rotating Top Stories news carousel (lead: men’s basketball showdown with No. 6 Texas). The literal string “ESPN+” does not appear anywhere in homepage text. ESPN appears only as a Quick Link, “Screaming Eagles on ESPN,” and as “ESPN 97.7 The Ref” radio branding in the Awards rotator.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL: “NIL Exchange” appears once in page text, as a navigation item only — no homepage section, tile, or promo.',
      },
    steal: 'The “JOIN THE EXCITEMENT!” / “Join the Varsity Club Today!” parallax promo — a giving ask built as a full-width visual break, not a footer link.',
  },
  // UT Martin Skyhawks — id 241 (homepage capture only, Nov 20, 2026)
  241: {
    schoolId: 241,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'Podcasts — 6 shown, latest Nov 17 “Skyhawk Sports Talk Season 4, Episode 12,” back to Oct 6 Episode 7.',
        video: 'Both present and current. “Skyhawk Vision.” Videos — 6 shown, latest Nov 18 “Meet the Skyhawks - Peyton Cook,” then Nov 17 “Skyhawk Sports Talk Season 4, Episode 12,” Nov 15 “OVC Championship Conversation with Mike Varga,” Nov 14 “FB: Lindenwood Postgame Press Conference,” Nov 10 “Skyhawk Sports Talk - Season 4, Episode 11,” Nov 7 “FB: Charleston Southern Postgame.”',
        photos: 'Galleries — 6 shown, latest Nov 15 “WBB vs. Butler” and “Soccer vs. Southern Indiana (OVC Champ),” Nov 14 “Football vs. Lindenwood,” Nov 13 “MBB vs. Champion Christian,” Nov 12 “Soccer vs. SIUE (OVC Semis),” Nov 10 “MBB at Arkansas State.”',
        social: 'Pill links for Instagram, Facebook, and X in the top button row (no YouTube pill). No embedded social feed section.',
      },
    pillars: {
        tickets: 'A header TICKETS menu; a “Skyhawk Tickets” pill (opens a new window); a Slider section “Tickets / Purchase Tickets”; and a Calendar “Buy Tickets” link for Soccer at #1 seed Vanderbilt on Nov 20, 6 p.m.',
        sportHub: 'Story-led Latest News grid (no single full-width hero image — the top of the page is a row of pill buttons, then “Latest News”). ESPN+ is the most prominent of the three schools in its batch — the first pill button in the top button row, “ESPN+” (opens a new window), and the ESPN+ logo also appears on the WBB “GAME #6” graphic. A brand-slogan element appears lower on the page: a repeating “MARTIN MADE / SKYHAWK NATION” marquee.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL: absent — no matches in homepage text for “NIL,” “Exchange,” or “collective.”',
      },
    steal: 'The ESPN+ pill button as the first item in the top button row — streaming as the very first action on the page — plus Skyhawk Vision videos paired with 6 podcasts.',
  },
  // Western Illinois Leathernecks — id 242 (homepage capture only, Nov 20, 2026)
  242: {
    schoolId: 242,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“Video Zone” is present — a “Currently Playing” tile plus tiles for “Saint Louis @ Western Illinois” and “Morehead State @ Western Illinois” (x3); no dates are shown on the video tiles.',
        photos: 'Photo galleries: absent — no “Gallery” match and no Galleries section on the homepage.',
        social: 'A dedicated “Social Media” section with Instagram (selected) and Facebook tabs and a populated feed: “Grand Challenge Completed! Thank you to all our supporters for helping us unlock an extra $5,000!”; “A NEW ATTENDANCE RECORD! Leatherneck Nation showed out! WIU Women’s Basketball has surpassed last [season]...”; a Veterans Day post; “BOGO DEAL. ONE MORE TIME AT HOME...” (football); and “October Student-Athletes of the Month...” — plus a “See More Posts” button. The footer also links Facebook, Instagram, Twitter, Youtube, and Email.',
      },
    pillars: {
        tickets: 'A header TICKETS nav button and a “Ticket Smarter” sponsor ad in the footer. The Upcoming Events list shows “Live video” and “Live stats” links but no “Buy Tickets” link in the four events shown.',
        sportHub: 'Rotating Top Stories carousel (lead: “Queen City Classic Preview”), with a gameday-hub element above the nav: an EVENTS/RESULTS ticker (Nov 21 MBB at Mercyhurst 12:30 PM; WBB vs Loyola 1 PM; Football at Lindenwood 2 PM; Nov 22 MBB at Canisius 12 PM; Nov 22 WVB at #1 Lindenwood 7 PM; Nov 24 WBB at Chicago State 6 PM). “ESPN+” appears once in page text as “How to Watch ESPN+” — a navigation-menu item; no ESPN+ section, tile, or button in the homepage body.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL: absent — no match for “NIL” in homepage text.',
      },
    steal: 'The populated two-tab (Instagram/Facebook) social feed, including a fundraising “Grand Challenge Completed!” post — the feed itself closes a $5,000 unlock.',
  },
  // East Tennessee State Buccaneers — id 243 (homepage capture only, Nov 20, 2026)
  243: {
    schoolId: 243,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Neither video nor a photo gallery on the homepage — no Video or Photo Gallery section; the “Media Zone” menu links to video/photo pages, but the homepage itself has no gallery. The “Top Stories” and schedule sections are the only media groupings.',
        photos: 'No photo gallery section on the homepage.',
        social: 'Header icons for X, Instagram, Facebook, and YouTube, plus a populated “Content Stream” section with 8 items and All / Facebook / Instagram / YouTube filters (latest items dated Nov 18–19, 2026, plus an undated “ETSUTough” post).',
      },
    pillars: {
        tickets: 'Strong. Header “TICKETS” button, hero “Get Tickets” button, “BUY TICKETS” links in the schedule carousel, and rotating promo tiles (“MEN’S BASKETBALL TICKETS — CLICK HERE FOR MORE INFO,” “BUY A BRICK,” “I GIVE A BUC”).',
        sportHub: '4-slide “Top Stories” carousel (lead: men’s basketball returns home to host Longwood). ESPN+ is text-search only; the string “ESPN+” occurs once on the homepage (in schedule/watch-link data) with no dedicated section, menu item, or visible tile.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is moderately prominent: a rotating promo tile reads “NAME, IMAGE, & LIKENESS — CLICK HERE FOR MORE INFO,” and “NIL Store” links (Influxer, Campus Ink, Athletes Thread) appear in a shop dropdown.',
      },
    steal: 'The populated 8-item Content Stream with All / Facebook / Instagram / YouTube filters — one feed, four platforms, filterable.',
  },
  // Furman Paladins — id 244 (homepage capture only, Nov 20, 2026)
  244: {
    schoolId: 244,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Both present, in one “PALADINS MULTIMEDIA” section with Video / Photo Gallery / Live Streaming tabs. Video: 4 shown, latest “Inside Furman Athletics - Jason Donnelly (10-28-25)” dated Oct 28; then “Inside Furman Athletics - Rita Gary (9-9-25)” dated Sep 12, and two Ingles/Furman Radio Network previews dated Sep 05.',
        photos: 'Photo Gallery: 4 shown, latest “Football vs Chattanooga” Nov 14 (101 photos); then “Men’s Basketball vs Bob Jones” Nov 7 (149 photos), “Men’s Basketball vs Columbia International” Nov 4 (72 photos), “Women’s Basketball vs Newberry” Nov 4 (74 photos).',
        social: 'Header icons only — X, Instagram, Facebook, YouTube. There is no social feed section on the homepage. “PALADINS MOMENTS” is a WePlayed video-playlist widget (women’s basketball clips dated 2026/11/14), not a social feed.',
      },
    pillars: {
        tickets: 'Header “TICKETS” dropdown plus two identical full-width purple “TICKETS” banners (the “Promo B” and “Promo C” sections). Schedule cards offer Watch/Stats/Listen, not Buy Tickets links.',
        sportHub: '6-slide auto-rotating “Top Stories” carousel (lead: men’s basketball returns home to host Clinton). ESPN+ is visible, as an image button/link “ESPN Plus, opens in new tab” in the “PALADINS SCHEDULE” header, above the Upcoming/Results tabs, plus per-event “Watch Live” links.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is minimal: the strings “NIL” and “NIL Shop” are found only via text search (menu/shop level); no NIL tile, banner, or section is visible in the homepage body.',
      },
    steal: 'The combined PALADINS MULTIMEDIA section (Video / Photo Gallery / Live Streaming tabs in one place) — one media home instead of three sections.',
  },
  // Mercer Bears — id 245 (homepage capture only, Nov 20, 2026)
  245: {
    schoolId: 245,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Featured Videos: 3 shown, latest “Monday Presser (Week 12 Vs. East Tennessee State)” (dated Nov 16 in the final view; Nov 17 on first load), then “November 14 Postgame Press Conference (Mercer 38, Tennessee Tech 31)” (Nov 14) and “UNCG Vs Mercer Volleyball, 11-14-2026” (Nov 14).',
        photos: 'Galleries: 5 shown, all baseball and stale — latest “Baseball Senior Day Vs. Towson” Apr 18 (37 images), then “Baseball Vs. West Georgia April 7” (22), “Baseball At West Georgia March 24” (17), “Baseball At Georgia State March 10” (15), “Baseball At Florida State March 4” (21). No fall 2026 galleries appear on the homepage.',
        social: 'Header icons for Facebook, X, Instagram, and YouTube, plus a dedicated, populated “Instagram” feed section with 5 posts from @Mercerathletics (three dated Nov 20, one Nov 19, one Nov 18) and a “Follow Us” link. No Facebook, X, or YouTube feed appears on the homepage.',
      },
    pillars: {
        tickets: 'Header “Tickets” dropdown; a leaderboard ad “2026-27 Basketball Season Tix”; a “BOX AD Football Single Game Tix”; “Buy Tickets” icon links in schedule cards (Football vs. East Tennessee State Nov 21, Men’s Basketball vs. Charleston Southern Nov 21, Women’s Basketball vs. Shorter Nov 28, Men’s Basketball vs. Georgia Southern-East Georgia Nov 29); a Countdown module with a “buy now” link for Football vs. East Tennessee State; and a Quick Link for “Football Season Tickets.”',
        sportHub: 'A single “Top Story” (not a carousel) with a “Top Headlines” list beside it (lead: volleyball quarterfinal loss to Samford at the SoCon Championship). ESPN+ is text-search only: the phrase “Mercer Bears On ESPN+” is found by text search, but no dedicated ESPN+ section, menu item, or tile is visible in the homepage DOM.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is prominent, in two places: a rotating box ad reading “GEAR UP! NIL.STORE/MERCER — SUPPORT OUR STUDENT-ATHLETES,” and a near-footer Promotional Graphic tile, “Gear Up! / Mercer NIL Store.”',
      },
    steal: 'The two-placement NIL Store push (box ad + near-footer tile) — the same NIL store shown twice, in two different page positions.',
  },
  // Samford Bulldogs — id 246 (homepage capture only, Nov 20, 2026)
  246: {
    schoolId: 246,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“Digital” — 5 videos, latest “FB: John Grass Show: Episode 8,” 7h ago; then Nov 19 (x2), Nov 17, Nov 16.',
        photos: '“Galleries” — 5 galleries, latest “Student-Athlete Feature: Sam De Luca” (10 images), Nov 4; the other four are Sep 18, Sep 18, Sep 10 and Sep 2.',
        social: 'Header icons for Facebook, X, Instagram, YouTube. A “Social” section, “Follow Us On Instagram,” is populated — 5 Instagram posts by @samfordsports, dated Nov 20, 18, 16, 12, 12.',
      },
    pillars: {
        tickets: 'Header only — a “Tickets” dropdown in the main nav. No hero ticket tile, no promo tile and no Buy Tickets links in the scoreboard (only Recap/Box Score/Watch/Stats).',
        sportHub: 'News rotator led by the volleyball semifinal win, beside a Football at Auburn countdown. ESPN+ is absent from homepage text (text search for “ESPN” returned no match; scoreboard “Watch video” links name no provider).',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is text-search only, very low prominence: “NIL Information” appears in page/nav text only; no NIL section, exchange or collective is promoted on the homepage.',
      },
    steal: 'The fresh Instagram feed (5 posts, Nov 12–20) under a plain “Follow Us On Instagram” heading — a current feed with no gimmick around it.',
  },
  // Tennessee Tech Golden Eagles — id 247 (homepage capture only, Nov 20, 2026)
  247: {
    schoolId: 247,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture. The “More News” items do carry Photos/Video/Audio links per event.',
        video: 'A “Media Section” with Gallery and Videos tabs. Videos: empty — selecting the Videos tab shows a blank panel with no videos listed.',
        photos: 'Gallery: 1 item only — “Tucker Stadium Renovation” (Aug 28).',
        social: 'Header and footer icons for Facebook, Instagram, Twitter/X, YouTube. A “Social Stream” section has FACEBOOK and INSTAGRAM headings. Instagram is populated — @ttugoldeneagles, 11.4K followers, 6,730 posts, with a visible post grid (including “High Flying Numbers” and a “Gameday — ETSU” post). The Facebook plugin box rendered blank/white in the capture, with no posts visible.',
      },
    pillars: {
        tickets: 'Header only — a “Tickets” link/dropdown in the main nav. No hero or promo ticket tile, and no Buy Tickets links among the More News event links (only Photos / Audio / Video / Live stats / Recap / Box Score / Preview).',
        sportHub: 'Story (news rotator), with a “NEXT EVENT / Football at Mississippi State” countdown strip — but the countdown is stuck at 00 DAYS / 00 HOURS / 00 MINS / 00 SECS for Football at Mississippi State (Sat Nov 21). ESPN+ is text/event-link only: the sole homepage occurrence is a “Video” link label “ESPN+” for one past event: “Women’s Basketball … at Middle Tennessee: ESPN+” (Nov 16). The hero image never loaded — a solid purple block on every rotator slide.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent; a text search for “NIL” returned no match on the homepage.',
      },
    steal: 'The PrestoSports cookie bar with an actual “I Accept” button — the only Accept button in the conference, where every other banner is X-only.',
  },
  // The Citadel Bulldogs — id 248 (homepage capture only, Nov 20, 2026)
  248: {
    schoolId: 248,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“HIGHLIGHTS & FEATURES” — 4 videos, latest Nov 17 (“Senior Captain Jacob Silka - Sit-down Interview - WRESTLING - 11.14.2026”), then Nov 16 (x3: Basketball Highlights at North Florida, at Clemson, and a Clemson postgame presser).',
        photos: 'Photo galleries absent as a homepage section (a text search for “Galleries” returned no match).',
        social: 'Header and footer icons for X, Instagram, Facebook, YouTube. A “#THECITADELATHLETICS” section, “Follow Us,” is populated with Instagram only — 6 posts by @citadelsports, latest Nov 9, then Nov 6 (x2), Nov 5, Oct 30, Oct 24, with a “Load More Instagram Posts” button. That makes the feed 11 days stale at capture (Nov 20). No Facebook/X feed section.',
      },
    pillars: {
        tickets: 'Heavy. Header “TICKETS” dropdown plus Calendar / Shop / Donate buttons; a tickets link in the hero slide; “Buy Tickets” links on the Schedule (Upcoming) events — Basketball vs South Carolina State (Nov 20, 7:00 PM), Football at Western Carolina (Nov 21, 1:00 PM), Basketball vs USC Upstate (Nov 25); a “buy now tickets” link under the Basketball countdown; and a 7-slide promo carousel (MBB Blue Zone; Baseball, Wrestling and MBB Season Tickets; TCBF Membership; Vozzi Text Alerts).',
        sportHub: 'Stories Slider (lead: football concludes 2026 campaign Saturday at Western Carolina). The ESPN+ logo appears in hero slides 1 and 2 (football and volleyball), and ACCNX appears in slide 3 (wrestling). No dedicated ESPN+ section, but the logo is a visible hero element. The brand slogan “Honor. Duty. State. Country.” appears lower down, in the Pillars Slideshow, not in the hero.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent; a text search for “NIL” returned no match, and no exchange or collective is named on the homepage.',
      },
    steal: 'The hero slide chip pairing the ESPN+ logo with a tickets link — watch and buy in the same slide.',
  },
  // UNC Greensboro Spartans — id 249 (homepage capture only, Nov 20, 2026)
  249: {
    schoolId: 249,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Videos present, thin: “Spartan Videos” shows 1 video tile — “Head Coach Trina Patterson Postgame Interview vs. North Carolina Central,” Women’s Basketball, 11/19/2026 — with Men’s/Women’s filter tabs and “VIEW ALL VIDEOS.”',
        photos: 'No named photo-gallery section: a “Slideshow” heading follows, with a single image captioned “Spartans” and no captions, dates or grid.',
        social: 'Absent. No social icons, no feed section (populated or empty) and no platform names were found in the homepage text or footer.',
      },
    pillars: {
        tickets: 'Header “TICKETS” menu and a Tickets icon (top-right, with Donate / All Access / Shop), plus an “Athletics Promo” carousel tile for “2026-27 SoCon Basketball Championships.” Schedule ticker at top (Nov. 14–20, all Final) with a “FULL SCHEDULE” / composite-calendar link.',
        sportHub: 'Dated game-preview story as the lead (Top Stories slide 1 of 5: men’s basketball welcomes USC Upstate). A separate commercial sits above the schedule ticker, not in the hero: FieldLevel, “Where athletes get discovered.” ESPN+ is absent — a homepage text search for “ESPN” returned no match; no dedicated section, menu label or tile names it. The header has an unlabeled “All Access” (monitor) icon, with no ESPN+ label.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL / exchange / collective — absent; a text search for “NIL” returned no match.',
      },
    steal: 'The single-tile “Spartan Videos” section with Men’s/Women’s filter tabs — even one fresh video (Nov 19) earns a named section.',
  },
  // Chattanooga Mocs — id 250 (homepage capture only, Nov 20, 2026)
  250: {
    schoolId: 250,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Both present and current. Videos: 1 featured — “Football Weekly Presser 11-17-26” (Nov 17) — plus 5 more listed (Postgame – Women’s Basketball vs. Lipscomb, Nov 15; Weekly Football Presser 11-10-2026; 11/09/2026 Men’s Basketball vs Covenant Post-Game Presser; WBB Postgame Presser – Florida, Nov 8; Football Weekly Presser 11-3-26), with “Load More Videos” and “All Videos.”',
        photos: 'Galleries: 8 shown, latest “Men’s Basketball at Winthrop” (6 images, Nov 18), then WBB vs Lipscomb (24, Nov 15), Men’s Basketball at Elon (5, Nov 13), MBB vs. Covenant (29, Nov 9), WBB vs. Florida (47, Nov 8), “Women’s Basketball Game vs. Florida” (32, Nov 8), Football vs. Mercer (21, Nov 7), Men’s Basketball at Penn State (10, Nov 5). “Mocs Gear” shop carousel shows 8 adidas items, $31.98–$139.99.',
        social: 'Absent. No social icons, feed section or platform names were found in the homepage text or footer (a text search for “Instagram” returned no match).',
      },
    pillars: {
        tickets: 'Strong. Main-nav “Tickets” button, a “Tickets” pill in the header (with Shop and Mocs Club), “Tickets” in Quick Links, “2026-27 Promotions & Giveaways” in Quick Links, and “Buy Tickets” links inside the schedule carousel for Men’s Basketball vs. Radford (Nov. 21, 7 p.m.) and Wrestling vs. Little Rock (Nov. 22, 2:00 PM).',
        sportHub: 'Lead item in the “Stories Grid” is “Mocs Monthly: Team Stores Available in Time for the Holidays” (GEN, 4h ago), over a photo of smiling fans in Chattanooga/Mocs shirts. The page’s dominant visuals are the 8-event schedule carousel at the very top, an American Express Platinum banner above it, and a 3-slide commercial rotator below the lead story. ESPN+ is absent — a homepage text search for “ESPN” returned no match; schedule “Watch video” links are unlabeled as to provider, and one event is explicitly marked “(No Stream Available)” (Women’s Basketball vs. St. Bonaventure, Nov. 23, 12:00 p.m.).',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is prominent as a top-level main-nav menu item (“NIL,” alongside Teams / Tickets / Fans / Department), but no collective or exchange name is shown on the homepage itself.',
      },
    steal: 'The 8 fresh photo galleries with image counts (latest Nov 18) — galleries as a current, countable content shelf, not an archive.',
  },
  // VMI Keydets — id 251 (homepage capture only, Nov 20, 2026)
  251: {
    schoolId: 251,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Videos present but stale: “ROOTUBE” — “NOW PLAYING: Watch Wednesday: Grayson Fitzwater,” Baseball, 04-22-26; “Ryan Vigil Wins 2026 SoCon Championship,” Athletics, 03-10-26; “Watch Wednesday: Cameron Jones,” Athletics, 02-11-26 — 3 tiles, latest Apr. 22, 2026, with “Watch RooTube” and “SoCon Digital Network” links.',
        photos: '“PHOTOS” shows 4 galleries, all football, latest “VMI Football at Davidson (9/19/26),” then “VMI Football vs. Bucknell (9/12/26),” “VMI Football at Virginia Tech” (undated in title) and “VMI Football at VA Tech - 9/5/26” — latest Sep. 19, 2026, about two months old, with “View More Photos.”',
        social: 'Link-only, no feed. A “CONNECT” section has headings “Instagram” and “Facebook,” each with an “@VMIAthletics” link, plus a “VMI Social Media Directory” link. No embedded feed (populated or empty) and no social icons were visible in the homepage text.',
      },
    pillars: {
        tickets: 'Header/nav only. “TICKETS” is a main-nav menu item; there is no header Tickets button, no promo tile and no “Buy Tickets” link in the scoreboard cards (only Listen/Watch/Live Stats, plus Recap/Boxscore for finals). A “View Full Schedule” link sits under the scoreboard.',
        sportHub: 'Dated game-preview story (lead, slide 1 of 6, Stories: “VMI BASKETBALL HOSTS GARDNER-WEBB THIS SATURDAY,” Men’s Basketball, 11-20-26) with a red scoreboard band above it. A “NEXT UP: MBB vs Gardner-Webb, 11/21/26 | 7:00 PM” chip accompanies it. ESPN+ is absent; streaming is presented generically: “Watch Live” / “Listen Live” / “Live Stats” links in the scoreboard and a “SoCon Digital Network” link under the video section.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL / exchange / collective — absent; a text search for “NIL” returned no match. The nav instead has “CADET-ATHLETE DEVELOPMENT.” An “Information Slider” promotes the “VMI KEYDET CLUB — Supporting VMI Athletics Through Annual Giving” (More Info).',
      },
    steal: 'The “NEXT UP” chip on the hero slide (opponent, date, time in one line) — the next game, readable at a glance.',
  },
  // Western Carolina Catamounts — id 252 (homepage capture only, Nov 20, 2026)
  252: {
    schoolId: 252,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Video present; photo galleries absent. “Videos / TOP VIDEOS” shows 4 tiles: “WCU WBB vs VUL Win Recap” (Now Playing), “WCU FB vs Samford Win Melt,” “Football Win Recap vs Wofford,” “WBB vs West Florida Win Melt,” with Video Portal and Live Event links. No dates are shown on the homepage tiles.',
        photos: 'No Photos/gallery section on the homepage (“PAWS SPOTLIGHT” is a sponsor rotator, not a gallery).',
        social: 'Header icons only: Facebook, X (Twitter), Instagram (no YouTube). A “Social Media #CATAMOUNTCOUNTRY” section exists, but it is a heading only — the feed area below it is blank/empty, with no posts rendered and no platform filters.',
      },
    pillars: {
        tickets: 'Header “BUY TICKETS” button (top right) and a TICKETS nav item; hero TICKETS button; a Tickets link in the Countdown (00 days, 17 hrs, 58 mins, 35 secs at ~6:01 PM CST, consistent with a 1:00 PM ET kickoff); and a “Buy tickets” link on each schedule event (Football vs The Citadel Nov 21, Men’s Basketball at Wake Forest Nov 21, Women’s Basketball vs Morehead State Nov 22).',
        sportHub: 'Gameday hub in a 6-slide Top Stories rotator. Lead slide, labelled “FOOTBALL”: “THINGS TO KNOW BEFORE YOU GO – SAT., NOV. 21,” with “NEXT GAME: Saturday, Nov 21 vs The Citadel” and buttons “ESPN+,” “STATS,” “TICKETS”; “PRESENTED BY Pepsi.” ESPN+ is named twice, but with no dedicated section: an ESPN+ logo button in the hero and “Watch on: ESPN+” in the Countdown to the Citadel game.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent from the homepage — text searches for “NIL,” “exchange” and “collective” returned nothing. The only related item is a “House v NCAA Settlement FAQ” buried in the Inside Athletics menu, not visible on the homepage body. The homepage is reached only via a splash gate (“2026 FINAL FOOTBALL HOME GAME / SATURDAY, NOVEMBER 21 • 1:00 PM / VS. THE CITADEL”) with “GET TICKETS” and “CONTINUE TO HOME” buttons.',
      },
    steal: 'The “THINGS TO KNOW BEFORE YOU GO” gameday hub with ESPN+ / STATS / TICKETS buttons — everything a fan needs for Saturday in one slide.',
  },
  // Wofford Terriers — id 253 (homepage capture only, Nov 20, 2026)
  253: {
    schoolId: 253,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'The VIDEOS section shows 6 tiles: “Football New Head Coach Mike Houston Introductory Interview,” “Wofford Football Introduces New Head Coach Mike Houston,” “Football Falls at Home to ETSU | Interviews,” “Volleyball Sweeps Tennessee Tech to Close Out The Regular Season | Interviews,” “Volleyball Defeats Tennessee Tech | Interviews,” “Men’s Basketball Has Dominate Win over Voorhees | Interviews.” No dates are shown on the homepage tiles.',
        photos: 'Text searches for “Photos” and “Galleries” returned nothing; no photo-gallery section on the homepage.',
        social: 'Header icons: Facebook, Instagram, X (Twitter), YouTube (4 platforms). The SOCIAL section is populated, with All / Instagram / Facebook filter buttons and 3 posts with photos: “Volleyball Sweeps No. 8 Western Carolina; Advances to SoCon Semifinals”; “See you tomorrow — Women’s basketball at 2 p.m. Men’s basketball at 5 p.m. Men’s game parking zones”; and “No. 1 Wofford Set to Take on No. 8 Western Carolina in SoCon Quarterfinals.”',
      },
    pillars: {
        tickets: 'Top leaderboard banner “BASKETBALL SEASON TICKETS ON SALE NOW!” (image alt “2025 Basketball Season Tickets 970x90” / “2025-26 Basketball Season Tickets”), a TICKETS nav link, and Quick Links “+ Tickets.” Schedule-event toggles are collapsed, so per-event ticket links were not expanded.',
        sportHub: 'Lead news story in a Top Stories list (lead Top Story, dated “November 20 / Volleyball”: “Volleyball Sweeps No. 8 Western Carolina; Advances to SoCon Semifinals”); the brand slogan “Conquer and Prevail” appears only in a parallax band near the footer, and gameday info lives in the right-rail schedule. ESPN+ is absent: a text search for “ESPN+” returned nothing anywhere on the homepage; only generic “Watch” links inside schedule-event toggles.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is named at menu/quick-link level, not as a homepage section or hero tile — “Name, Image and Likeness” appears under both the ATHLETICS and RECRUITING menus, and Quick Links lists “+ NIL Marketplace” (opens in a new window).',
      },
    steal: 'The social post carrying game-day parking info (“Men’s game parking zones”) — practical logistics inside the feed, not buried on a facilities page.',
  },
  // North Dakota State Bison — id 254 (homepage capture only, Nov 20, 2026)
  254: {
    schoolId: 254,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'VIDEOS: 8 items, latest “BISON BASKETBALL COACHES SHOW 11/16/26” — Nov 18; then Nov 17, 15, 15, 13, 13, 10, 9.',
        photos: 'PHOTOS: 3 galleries — “NDSU AT HAWAII” FB Nov 14 (16 images), “NDSU VS. UTEP” FB Oct 31 (43), “NDSU AT NEW MEXICO” FB Oct 24 (29).',
        social: 'None found — no social icons, no feed section, and no Facebook/Instagram/X/YouTube text in the homepage content.',
      },
    pillars: {
        tickets: 'Header TICKETS menu; hero slide 1 single-game tickets; a second 8-slide promo carousel includes “26 Winter Single-Game Tickets” and “Tickets”; Quick Links “Tickets”; calendar “Buy Tickets” for Football vs Northern Illinois, Nov 21, 3:10 p.m.',
        sportHub: 'A promo/ad rotator, not a story — 5-slide rotator, three tiles visible at once: single-game tickets, “NDSU X MW+ / SUBSCRIBE NOW,” and “GREEN AND GOLD FUND / JOIN TODAY / RECRUIT. RETAIN. DEVELOP.” Slides 4–5 are “Summit League Network” and “Join The Climb.” The lead story below the rotator is “NDSU BASEBALL SET TO HOST FOUR WINTER CAMPS” (Baseball, 7h ago, Nov 20). Streaming is via MW+ (hero tile) and Summit League Network (rotator slide + Quick Link).',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. The term “NIL” does not appear on the homepage; the closest item is the Green and Gold Fund (“Recruit. Retain. Develop.”), presented as a fund/join tile, not labelled NIL.',
      },
    steal: 'The promo rotator that stacks tickets, streaming subscription, and fund in one hero — three asks, one rotator.',
  },
  // Oral Roberts Golden Eagles — id 255 (homepage capture only, Nov 20, 2026)
  255: {
    schoolId: 255,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No dedicated VIDEOS or PHOTOS gallery section. Video exists only via the Social Networks YouTube posts (4 shown).',
        photos: 'No photo galleries, counts or dates.',
        social: '“Social Networks” section, populated, with All / Facebook / Instagram / YouTube filters and a “Load More +” button. Four YouTube video posts shown initially: “#ORUMBB Postgame Press Conference vs Central Baptist,” “Introductory Press Conference - Coach Kory Barnett (Men’s Basketball),” “Press Conference with Athletic Director Tim Johnson,” “#ORUWBB Postgame Press Conference vs. North Dakota.” No dates were shown on those cards, and no standalone header/footer social-icon row was observed.',
      },
    pillars: {
        tickets: 'Header TICKETS (highlighted gold) plus DONATE/SHOP/FAN ZONE; the splash gate and the season-tickets banner above Top Stories; calendar “Buy tickets” link (notably for the away Women’s Soccer game at #19 Kansas, Nov 20).',
        sportHub: 'Story / gameday preview — lead Top Story, slide 1 of 5: “#ORUMBB WELCOMES TEXAS A&M-CORPUS CHRISTI TO TOWN SATURDAY NIGHT” (NOVEMBER 20, 2026). A “Basketball Season Tickets” banner sits above the Top Stories rotator, but the hero itself is the story. Summit League Network has a dedicated promo block: “DON’T MISS A MINUTE OF / THE ACTION!” + “Summit League Network” link, between Calendar and Social Networks; there is also a WATCH menu. Direct entry redirected to a splash gate (splash_49, “2026-27 BSK Season Tickets On Sale Now,” image never loaded) — “Continue to Home” / “Skip Permanently” were the way through.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent — no “NIL,” exchange or collective named anywhere on the homepage; only a DONATE menu.',
      },
    steal: 'The dedicated Summit League Network promo block (“DON’T MISS A MINUTE OF THE ACTION!”) — streaming gets its own branded block, not a menu link.',
  },
  // South Dakota State Jackrabbits — id 256 (homepage capture only, Nov 20, 2026)
  256: {
    schoolId: 256,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'VIDEOS: 4 items — “Gameday Eve - Indiana State (11.19.2026)” Nov 20, 2026; “Jackrabbit Tip Off - Women’s Basketball vs. Wyoming (11.18.2026)” Nov 19; “Women’s Basketball Highlights vs Wyoming (11.18.2026)” Nov 18; “Women’s Basketball Post Game Press Conference vs Wyoming (11.18.2026)” Nov 18.',
        photos: 'No PHOTOS section — no gallery counts or dates; the only image tiles are the “Slideshow Grid” (“BACK THE JACKS” softball image and “FACILITIES” / Leah Hisken).',
        social: 'Header yellow-circle icons (app, Facebook, Instagram, X, YouTube) and Quick Links for Facebook, Instagram, Jackrabbit App, Spotify, X and YouTube, plus per-sport Facebook/Twitter/Instagram links inside the SPORTS menu. No populated social feed section — no feed posts or dates on the homepage.',
      },
    pillars: {
        tickets: 'Header TICKETS menu (Order Tickets, My Account, Student Tickets, SeatGeek: Buy or Sell Football Tickets); Quick Links “Tickets”; calendar “Buy Tickets” for Football vs Indiana State, Nov 21, 2 p.m.; promo slider includes 2026 MBB/Wrestling at Sanford Pentagon.',
        sportHub: 'Story hero — lead Top Story: “UT MARTIN DEFEATS JACKS” (Equestrian, Nov 20, 2026). The promo slider (Hall of Fame, MBB at Sanford Pentagon, Summit League Network, etc.) sits lower down. Summit League Network appears in the WATCH/LISTEN menu, as promo-slider slide 4, and as a Quick Link; Jackrabbit Sports Network (Live & On-Demand) is also in WATCH/LISTEN.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is the most prominent of the three in its batch: the SUPPORT menu has a dedicated NIL subsection — “Jacked NIL,” “Jacked NIL Apparel,” “SDSU NIL Marketplace” — but it is menu-level only (collapsed nav), with no NIL tile/section in the homepage body; “BACK THE JACKS” is a separate donor tile.',
      },
    steal: 'The three-link NIL subsection (“Jacked NIL,” “Jacked NIL Apparel,” “SDSU NIL Marketplace”) — NIL as a shop, a brand, and a marketplace in one menu.',
  },
  // Kansas City Roos — id 257 (homepage capture only, Nov 20, 2026)
  257: {
    schoolId: 257,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No dedicated video or gallery section. Inside “Latest News”: 1 video — “MBB Post Game Presser Mark Turgeon 11.17.26 VS Newman,” Nov 18, 2026.',
        photos: 'Inside “Latest News”: 1 photo gallery — “Men’s Basketball vs Newman, 12 Photos,” Nov 17, 2026.',
        social: 'No social feed section. Header toggle opens Instagram, Facebook, Twitter (X), and TikTok links only.',
      },
    pillars: {
        tickets: 'Header TICKETS link; “Buy Tickets” in the scoreboard for Women’s Basketball vs Missouri State, Nov 22, 11:00 AM, and Men’s Soccer, Nov 22, 5:00 PM; Quick Links “Receive Future Ticketing Info.”',
        sportHub: 'Commercial / fundraising hero — the 3-slide rotator is all promotion: slide 1 ROOS UNITED giving, slide 2 “ROOS GEAR — SHOP NOW!”, slide 3 Roo Updates sign-up. No story headline leads the hero. Branding: KANSAS CITY ROOS, “KANSAS CITY’S COLLEGE TEAM.” Streaming is via “Roo Sports Network” and “Summit League Network” in Quick Links. A full-screen splash gate appeared delayed, solid blue with no visible creative/image, only “Continue to Home” and “Skip Permanently” buttons; it blocked the entire homepage until dismissed.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is prominent in the header (NIL link beside TICKETS / DONATE / SHOP) and in Quick Links as “NIL: KC Roos Exchange” — the exchange is named, but no collective name appears. The hero itself is the ROOS UNITED 2025 giving campaign (“FUEL DREAMS. BUILD CHAMPIONS. BE UNITED. GIVE TODAY”).',
      },
    steal: 'The ROOS UNITED giving campaign as the hero rotator — fundraising leads the homepage, not a story or a ticket sale.',
  },
  // Omaha Mavericks — id 258 (homepage capture only, Nov 20, 2026)
  258: {
    schoolId: 258,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Both present and dedicated. Videos Feature: “WELCOME TO OMAHA,” Oct 19. VIDEOS carousel: 10 slots but only 8 unique entries (duplicates — “HKY | Weekly Press Conference (Nov. 5, 2025)” and “(Oct. 29, 2025)” each appear twice); latest otherwise is “HKY | 2025-26 Press Conference (Season in Review),” Mar 11, with MBB Summit League pressers Mar 6–7.',
        photos: 'GALLERIES carousel: 10 galleries, latest “Omaha Volleyball vs. Western Michigan, 49 images,” Sep 3 — i.e. no gallery newer than ~2.5 months despite a current news cycle.',
        social: 'Absent. No social icons, links, or feed section were found anywhere in the homepage DOM or footer (footer has only University of Nebraska Omaha, NCHC, Summit League, NCAA, and MAC affiliate logos).',
      },
    pillars: {
        tickets: 'Very prominent — header “Buy Tickets” button and TICKETS menu; hero is a season-ticket ad; “Buy Tickets” links in the scoreboard for Hockey vs No. 4 Western Michigan, Nov 20 and Nov 21, 7 p.m. CT; Quick Links include Tickets.',
        sportHub: 'Commercial / ticket promotion hero — a season-ticket sales hero, not a story or brand slogan. Verbatim hero (Promo A 1, image text): “2026 STARTS HERE” / “SEASON TICKETS ON SALE NOW.” Branding: Omaha “O” logo, Mutual of Omaha header sponsor. ESPN+ is absent — a homepage text search for “ESPN” returned nothing, and no streaming section, menu item, or tile names it.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL appears only as a collapsed header menu label (“NIL”); no exchange or collective name appears anywhere on the homepage.',
      },
    steal: 'The “2026 STARTS HERE / SEASON TICKETS ON SALE NOW” season-ticket hero — the whole first screen is one ticket ask.',
  },
  // North Dakota Fighting Hawks — id 259 (homepage capture only, Nov 20, 2026)
  259: {
    schoolId: 259,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“UND INSIDER” has 4 videos, all fresh: “UND Women’s Basketball | Jacksonville State Postgame | 11.20.26,” “UND Women’s Basketball | Highlights vs. Jacksonville State | 11.20.26,” “UND Football | The 701 | Season 2, Episode 16,” and “UND Men’s Basketball | Mayville State Postgame | 11.19.26.”',
        photos: 'No GALLERIES section or gallery link was found (text search for “Gallery” returned nothing).',
        social: 'One populated embedded feed item, no icon row: a single X/Twitter post, “Tailgate Information | Senior Day! Saturday, Nov. 21 … Lots open at 8 a.m. … Busch Light Tailgate Village … #UNDproud | #LGH,” attributed to the numeric handle @16576552355, with its text clipped/truncated by the layout and the cookie banner. No other platform is promoted on the homepage.',
      },
    pillars: {
        tickets: 'Header TICKETS link; a TICKETS tab on the scoreboard strip; “Buy tickets” links for Men’s Hockey vs St. Cloud State, Nov 20 (7:07 p.m.) and Nov 21 (6:07 p.m.), and Football vs Southern Illinois, Nov 21 (1:00 p.m.).',
        sportHub: 'Story — a news rotator, not a slogan or commercial, although its legibility is compromised: the hero image rendered heavily darkened/blurred with no legible headline on first paint, and as the rotator advanced the headline caption at the bottom of the hero was overlapped/cut off by a Gate City Bank ad banner. The first-listed story is “Women’s Basketball Narrowly Falls to Jacksonville State” (Nov 20, 2026; WBB lost 65–58 to Jacksonville State, Nov 20). Live links are generic “Live video / Live audio / Live stats” per game, with no provider named.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent — a homepage text search for “NIL” returned nothing; there is no NIL header link, exchange, or collective named (header is Teams / Fans / Inside Athletics / Content / Shop / DONATE / TICKETS).',
      },
    steal: 'The UND INSIDER video set (4 videos, all Nov 19–20) — the freshest video shelf in the Summit, all from the last two days.',
  },
  // St. Thomas Tommies — id 260 (homepage capture only, Nov 20, 2026)
  260: {
    schoolId: 260,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Present: “Media Gallery” with All Media / Photos / Videos filters. All view shows 10 items, Nov 11–19, 2026, latest “Nov 19 MBB vs SEMO (11/19/26).” Videos filter returns 5 YouTube items, latest Nov 14 (“2026 Football Press Conference: Illinois State”) and earliest Oct 14 (“St. Thomas Athletics Hall of Fame Class of 2026”), plus Nov 11 men’s/women’s basketball intro videos and Oct 31 football press conference.',
        photos: 'Photos are galleries Nov 11–19 (e.g. Nov 18 Summit League Championship, Nov 14 VB vs Kansas City, Nov 13 XC at NCAA Midwest Regional), inside the same “Media Gallery.”',
        social: 'No dedicated social feed section and no footer icon row seen. “Social Media” is Features tile 7 of 7, and the Teams dropdown lists Facebook / Twitter / Instagram links for every sport. No populated feed on the homepage.',
      },
    pillars: {
        tickets: 'Header “Tickets” menu; its submenu (“’26-27 LPA Season Tickets” and “Tickets Home,” both opening in a new window) was visible overlaying the hero in the captured screenshots. Also “Buy Tickets” links in the schedule (e.g. Women’s Hockey vs #2 Minnesota, Nov 20, 6:00 p.m.) and a “Promotional Schedules” Features tile (4 of 7). No hero ticket promo.',
        sportHub: 'Rotating “Top Stories” carousel; lead story on load: “Men’s Swimming & Diving / November 20, 2026 — Tommies open Coyote Mid-Season Classic with record breaking performances” / subhead “Men in second, women in third after day one,” over a photo of swimmers at the blocks. The header “Watch” link and schedule “Watch video” links name no provider.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL: “NIL Exchange” appears once, as Features tile 5 of 7 (image “NILtile1”) — low prominence, no collective name.',
      },
    steal: 'The Media Gallery with All Media / Photos / Videos filters — one gallery, three views, latest Nov 19.',
  },
  // South Dakota Coyotes — id 261 (homepage capture only, Nov 20, 2026)
  261: {
    schoolId: 261,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'Podcasts, not a video section: a PODCASTS section listing YOTECAST Season 8, Episode 15: Chris Herrin & Henley Hatzung (Nov 19, 2026), Episode 14 (Nov 12), Episode 13 (Nov 5) and Episode 12 (Oct 29), plus a YOTECAST story in Top Stories.',
        video: 'No dedicated Photo/Video Gallery section on the homepage (no “Gallery” hits). Video is via YOTECAST: a PODCASTS section (see audio). Photos appear only as story images and Instagram images.',
        photos: 'No dedicated photo-gallery section on the homepage.',
        social: 'Populated Instagram feed only: a SOCIAL MEDIA section with an INSTAGRAM tab selected (the only tab), 6 posts and a “FOLLOW US” link; no dates are shown on the posts. Captions include “The video everyone has been asking for… your 2026 South Dakota Coyote baby race!,” the $10 volleyball-ticket post, Military Appreciation gear at Charlie’s, volleyball vs North Dakota State “TOMORROW,” a Veterans Day honor post, and “BE ON, BE NEON!” for the MBB neon game. No Facebook/X feed on the homepage; the “CONNECT WITH US” menu lists Facebook/Instagram/X and the Sports menu lists per-sport Facebook/X/Instagram.',
      },
    pillars: {
        tickets: 'Heavy: header TICKETS menu and ticket icon, the $10 Flash Sale hero banner for Nov 22, a Trending “Buy Tickets” link, and schedule “Buy Tickets” links for Football at #11 Illinois State (Nov 21), Men’s Basketball (Nov 22, 25, 27) and Women’s Volleyball (Nov 23). An Instagram post also promotes “$10 volleyball tickets.”',
        sportHub: 'Commercial hero — there is no story hero carousel. The lead visual is a ticket banner: “SINGLE GAME TICKETS / FLASH SALE / $10 TICKETS / NOV 22 / UTAH TECH / 1 PM / @ SANFORD PENTAGON,” with a men’s basketball player photo and Coyote head logo. The first story, below in Top Stories (right column), is “COYOTES ANNOUNCE SPRING 2027 MEN’S GOLF SCHEDULE.” A black “Live Now / South Dakota @ Valparaiso / Listen Live” bar sits under the header. ESPN+ is named exactly once in homepage text: a “WATCH (ESPN+)” link under the women’s basketball preview story — the only ESPN+ mention in the entire conference.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent — no hits for “NIL,” “Exchange” or “collective.” The only fundraising label is “THE YOTE FUND” in the header, which is not NIL.',
      },
    steal: 'The $10 Flash Sale hero banner with a hard date and price — a sale, not a slogan, leading the page — plus the YOTECAST podcast series as the video section’s stand-in.',
  },
  // Loyola Marymount Lions — id 262 (homepage capture only, Nov 20, 2026)
  262: {
    schoolId: 262,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No dedicated video section — the "Top Video" region is the hero image itself (campus aerial). Top Stories are image-led news cards.',
        photos: 'No photo gallery section on the homepage. The hero is a campus photo (chapel / Sunken Garden) under the "JOIN THE PRIDE" slogan.',
        social: 'No social presence on the homepage at all — no icons, no feed section; footer affiliate logos only (university, WCC, adidas, NCAA).',
      },
    pillars: {
        tickets: 'Header "Purchase Tickets" button and Tickets menu, hero "Purchase Tickets" button, and a promo slideshow tile ("HOME COURT ADVANTAGE BEGINS WITH YOU! SECURE YOUR SEAT TODAY!"), plus "Buy Tickets" links on schedule rows.',
        sportHub: 'No hero story — the brand slogan leads. Schedule rows (7 events, Nov 20–24) carry "Buy Tickets" links. ESPN+ is menu-only ("LMU on ESPN+" under Fan Central > Stay Connected); no dedicated streaming section.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is header-level ("NIL INFORMATION" menu button, "ROAR LMU" program name) with an "Athletic Solutions - NIL Shop" link in homepage text.',
      },
    steal: 'The brand-slogan hero ("JOIN THE PRIDE") over a campus photo, with ticket, NIL, and giving buttons as the sub-buttons — the run’s only brand-slogan hero.',
  },
  // Pepperdine Waves — id 263 (homepage capture only, Nov 20, 2026)
  263: {
    schoolId: 263,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No dedicated video section — video appears only as per-event "Watch video" links in the schedule (e.g. MBB vs West Coast Baptist, Nov 20; WVB vs LMU, Nov 21).',
        photos: 'No photo gallery section. Photos appear only via the Instagram feed and story images.',
        social: 'Header icons (Facebook, X, Instagram, YouTube) and a populated Instagram feed ("Instagram", @pepperdinewaves, "Follow Us") with 6 posts, latest Nov 20.',
      },
    pillars: {
        tickets: 'Orange "Tickets" button in the header, a Tickets menu, Quick Links "Buy Tickets", hero "Women’s Volleyball versus LMU tickets" link, and a "Buy Tickets" link on the Nov 21 volleyball schedule row — plus a delayed "BBALL TICKETS" splash gate before the homepage.',
        sportHub: 'Lead story is a gameday preview (WVB prepares for LMU, Sat Nov 21, 12:00 pm PT) with an ESPN+ logo badge on the hero card and a working live countdown to MBB vs West Coast Baptist. Schedule rows carry "Watch video" links; ESPN+ is a logo badge only, no text mention.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent from the homepage — no "NIL" string in the homepage text or menus.',
      },
    steal: 'The populated Instagram feed (6 posts, current to Nov 20) plus a working live countdown to the next game — the feed and the clock do the homepage’s selling.',
  },
  // Saint Mary's Gaels — id 264 (homepage capture only, Nov 20, 2026)
  264: {
    schoolId: 264,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '"Video Highlights" section with a sport filter and 4 videos, latest "VB | Saint Mary’s vs. Santa Clara Highlights, 11-19-26" (Nov 19).',
        photos: 'No dedicated photo gallery section on the homepage.',
        social: 'Header icons (Instagram, X, Facebook, YouTube) and a populated Instagram feed (@smcgaels) with 6 posts, latest Nov 14 — 6 days stale at capture.',
      },
    pillars: {
        tickets: 'Red "Tickets" header button, hero "Game Tickets" link, "Buy Tickets" links on schedule rows, and a "MBB Single Game Tickets" promo tile.',
        sportHub: 'Story / gameday-hub hybrid hero: lead story "MBB | Gaels Host Saint Louis in Marquee Matchup" over a dunk photo, with hero event cards (Fri Nov 20, 8:00 PM vs Saint Louis, ESPN2 badge; Sun Nov 22 vs Menlo) carrying "Game Tickets", "Parking Pass", and student pass links. ESPN+ is a Quick Links text link ("Gaels on ESPN+"); the hero broadcast badge is ESPN2.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is prominent — a red "NIL" button in the header next to Tickets, repeated in Quick Links ("Name, Image, and Likeness"); no collective or exchange name given.',
      },
    steal: 'Hero event cards with times, a broadcast badge, and Game Tickets / Parking Pass / Student Game Pass links — the gameday details are the hero, not a separate page.',
  },
  // Santa Clara Broncos — id 265 (homepage capture only, Nov 20, 2026)
  265: {
    schoolId: 265,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '"Latest Videos" — 3 tiles, all 2026 and undated in the listing ("2026 Women’s Basketball Coach Payne Post vs GCU", "2026 Women’s Soccer NCAA Draw", "2026 Women’s Soccer Kennedy Schoennauer Player of the Year").',
        photos: '"Photo Galleries" — 4 tiles, including two future-dated "2027" head-shot galleries (Nov 4), the "2026 SCU Hall of Fame" (May 2), and "Men’s Basketball NCAA Selection Show" (Mar 15).',
        social: '"Social Media" section with All / Instagram filter tabs and 6 populated Instagram tiles (santaclarawbb, scuvolleyball, scuwomenssoccer, scumensgolf), plus "Load More". Instagram only — no X, Facebook, or YouTube feed or icons found.',
      },
    pillars: {
        tickets: 'Header "TICKETS" nav item, a full-width "SINGLE GAME TICKETS ON SALE" banner directly above the story rotator, a "Bucky’s Kids Club" promo banner, and "Buy Tickets" links in the scoreboard ticker.',
        sportHub: 'Lead story in the "Top Stories" rotator (slide 1 of 6): "No. 17 Broncos Advance to WCC Championship Semifinal" (Men’s Water Polo, Nov 20), under the ticket banner. ESPN+ appears only inside Instagram captions — no dedicated section, menu item, or tile.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is navigation-level (a top-nav "NIL" link and a "NIL" Quick Link); no exchange or collective named.',
      },
    steal: 'The single-game-tickets banner directly above the story rotator — the sale sits on top of the story instead of buried in the nav.',
  },
  // Seattle Redhawks — id 266 (homepage capture only, Nov 20, 2026)
  266: {
    schoolId: 266,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '"VIDEO HUB" — 5 videos, latest Oct 17, 2026 ("Celebrating 30 Seasons of Coach Julie Woodward"), then Oct 8, Oct 4, Oct 4, Sep 27. A Seattle U / Nike partnership section also has a Play Video button.',
        photos: 'No photo gallery section — no "photo" text on the homepage.',
        social: 'No feed section. Footer icon links only (Twitter, Facebook, Instagram), all mislabeled "University of Seattle" (the school’s name reversed). No YouTube link.',
      },
    pillars: {
        tickets: 'Header "TICKETS" nav menu, a hero ticket banner ("REDHAWK BASKETBALL / SINGLE GAME TICKETS / ON SALE NOW!"), a "Tickets" tile in the red Quick Links band, and "Buy Tickets" links in the scoreboard/schedule cards.',
        sportHub: 'Ticket banner above the lead story ("Redhawks to the Last Frontier, Compete at Great Alaska Shootout", WBB, Nov 20) with an UP NEXT gameday graphic and "READ ARTICLE", "LIVE STATS", "WATCH ON GNAC NETWORK" buttons. ESPN+ appears once, as a schedule link ("Watch on ESPN+ — Seattle U at San Diego", volleyball, Nov 21).',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is a top-nav link plus a red Quick Links tile "NIL Marketplace" (opens in new window); no exchange or collective brand named.',
      },
    steal: 'The "NIL Marketplace" Quick Links tile — NIL as a one-tap tile next to Tickets and Shop, not buried in a menu.',
  },
  // Denver Pioneers — id 267 (homepage capture only, Nov 20, 2026)
  267: {
    schoolId: 267,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: '"PODCASTS" section with 4 "Denver Coaches’ Show" episodes (S4E2–S4E5, undated in the listing). No standalone audio player noted.',
        video: '"VIDEOS" — 3, latest "VOLL v Seattle (19 NOV 26) — Highlights" (Nov 19), then WBB and MBB postgame/highlights (Nov 17, Nov 16).',
        photos: '"GALLERIES" — 3, all recent with image counts: "MBB: Denver vs. Wyoming" (66 images, Nov 14), "MSOC: WCC Semifinal vs. San Diego" (34, Nov 11), "MSOC: Denver vs. Seattle" (70, Nov 6).',
        social: 'Footer "Follow Us:" icon/text links only (Facebook, Twitter, Instagram, YouTube). No social feed section on the homepage.',
      },
    pillars: {
        tickets: 'Header "Tickets" pill, "Buy Tickets" links in scoreboard cards (hockey vs. St. Thomas, volleyball vs. Portland), a live "Countdown" to "#3 Ice Hockey vs St. Thomas" with a "buy now" link, a "Hockey Season Ticket" ad, and a "Denver Gymnastics Single-Meet Tickets On-Sale Now" news tile (Nov 17).',
        sportHub: 'No hero rotator or slogan — a 12-event scoreboard slider, then a "NEWS" grid led by "Pioneers Set for Final Home Match Against Portland" (Volleyball, 6h ago). ESPN+ is a header-nav logo button beside an "NCHC.TV" button; schedule "Watch video" links are generic.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is a header pill button plus a "Pillars Slideshow" tile ("THE DENVER WAY — NIL AT THE UNIVERSITY OF DENVER"); no exchange or collective named.',
      },
    steal: 'The live countdown to a real puck drop with a buy-now link, plus dated galleries with image counts — the fastest, cleanest load in the conference.',
  },
  // Portland Pilots — id 268 (homepage capture only, Nov 20, 2026)
  268: {
    schoolId: 268,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No dedicated video section on the homepage — only Stories and the social Content Stream.',
        photos: 'No photo gallery section on the homepage.',
        social: 'Left-nav icons (Facebook, Instagram, X) and a populated "Content Stream" feed (Facebook and Instagram tiles, @PortlandPilots / @portlandmsoc), including "Portland Wins the 2025-26 WCC Presidents’ Cup" — no dates shown on the tiles.',
      },
    pillars: {
        tickets: '"TICKETS" in main nav, a "Buy Tickets Now" quick link, and per-event Buy Tickets links in the Nov 21 schedule strip (e.g. MBB vs San Diego State).',
        sportHub: 'Rotating Top Stories carousel led by "Pilots Advance to Second Round With 3-2 win Over California" (Men’s Soccer, Nov 19). Schedule links are generic "Watch/Stats/Tickets" icons; ESPN+ is absent entirely (a "Where to Watch" quick link names no provider).',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is a main left-nav item, with "Back the Bluff" as a Quick Link.',
      },
    steal: 'The populated Content Stream (Facebook + Instagram) and the "Buy Tickets Now" quick link — social proof and the sale one tap apart.',
  },
  // San Diego Toreros — id 269 (homepage capture only, Nov 20, 2026)
  269: {
    schoolId: 269,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '"TORERO VIDEO" — 6 videos, latest "USD MBB Postgame Media | 11/18/26 vs. UC Riverside", then Nov 16, 14, 13, 11, 10.',
        photos: 'No photo gallery section on the homepage.',
        social: 'Header icons only (Facebook, Calendar, Twitter/X, Instagram, YouTube). No social feed section on the homepage.',
      },
    pillars: {
        tickets: '"TICKETS" in top nav and a "Buy tickets" icon/link in the scoreboard for Nov 21 WVB vs Seattle, 12 PM. The homepage is gated behind a coach-introduction splash takeover ("THE FUTURE IS HERE / INTRODUCING COACH JR BLOUNT") reached only via "Continue to Home."',
        sportHub: 'Top Stories carousel led by "TOREROS SWEEP PORTLAND FOR 20TH STRAIGHT WIN IN SERIES" (Women’s Volleyball, Nov 19). Scoreboard carries generic "Live video / Live stats" icons; ESPN+ is absent entirely.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is a top-nav item alongside Sports, Tickets, Fans, Athletic Department, Get Involved, Donate.',
      },
    steal: '"TORERO VIDEO" — six videos, all from the last nine days at capture, dated and current.',
  },
  // San Francisco Dons — id 270 (homepage capture only, Nov 20, 2026)
  270: {
    schoolId: 270,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '"Videos" — 4, latest Nov 19 ("MBB | Nov. 18 vs. Louisiana Players Press Conference" and "MBB | Nov. 18 vs. Louisiana — Chris Gerlufsen Press Conference"), then Nov 18 and Nov 16.',
        photos: 'No photo gallery section on the homepage.',
        social: 'A "Social Media" section is present but empty — Instagram link only, text "No posts available." No other platform feed; the header carries a Provident Credit Union ad, not social icons.',
      },
    pillars: {
        tickets: '"Tickets" in main nav, "Tickets" first in Quick Links, a promo tile for group tickets ("2026-27 SAN FRANCISCO ATHLETICS — SPECIAL RATES FOR GROUP TICKETS (10+) — CONTACT US (415) 422-2873"), and a "Buy Tickets" link in the schedule (WBB vs CSU Bakersfield, Nov 22).',
        sportHub: 'Single-story lead grid (not a carousel): "USF Heads To Acrisure Series In Palm Springs" (MBB, "10h ago" at first paint), with a "Game Notes" link. Schedule "Watch video" links name no provider; ESPN+ is absent.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent — no NIL, exchange, or collective named anywhere on the homepage.',
      },
    steal: 'The group-ticket promo tile with a phone number and email — a group-sales offer with a human contact, not just a button.',
  },
  // Pacific Tigers — id 271 (homepage capture only, Nov 20, 2026)
  271: {
    schoolId: 271,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No dedicated video section — the "SOCIAL MEDIA" section shows only 4 video tiles (latest dated video "MSOC vs SCU Postgame 10/3/2026", ~7 weeks old; the other three are undated Hispanic Heritage Month videos).',
        photos: 'No photo gallery section on the homepage.',
        social: 'Footer icons (Facebook, Twitter/X, Instagram, YouTube). The "SOCIAL MEDIA" section has Facebook and YouTube filters but shows only the 4 video tiles above — no text/social posts.',
      },
    pillars: {
        tickets: '"TICKETS" highlighted in orange in the main nav, a promo slider for season tickets (Baseball, Women’s Water Polo, Softball, plus "Join PAF"), and "Buy tickets" links in the Schedule for Nov 21 WVB vs Santa Clara and MBB vs Bradley.',
        sportHub: 'Top Stories carousel led by "Kiss Dazzles as Pacific Takes Down San Jose State in WCC Championship Opener" (Men’s Water Polo, Nov 20), with the hero media titled "2026 MWP WCC Tournament Quarterfinals — Pacific Defeats SJSU — 11-20-26". ESPN+ appears only as a small logo in the Schedule beside two Nov 21 events.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent — no NIL, exchange, or collective named anywhere on the homepage; main nav is Sports, Inside Athletics, Tickets, Giving, Gear, Fan Zone.',
      },
    steal: 'The orange-highlighted TICKETS nav plus a season-ticket promo slider (baseball, women’s water polo, softball, plus "Join PAF") — the most ticket-forward homepage in the conference.',
  },
  // Binghamton Bearcats — id 272 (homepage capture only, Nov 20, 2026)
  272: {
    schoolId: 272,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '"LATEST VIDEOS" — 4 populated thumbnails: "Big E Tire Plays of the Month — October 2026", "Driven: A Bearcat Conversation with Neel Bhattacharjee", "2026 Binghamton Athletics Hall of Fame Ceremony", "Big E Tire Plays of the Month — August/September 2026", plus "All Videos" (YouTube).',
        photos: '"LATEST PHOTOS" galleries — 5 populated: "2026 WSOC Semifinals vs. UMBC", "2026 AEXC Championships", "2026 MEN’S SOCCER SENIOR DAY", "Swimming & Diving vs. Bryant (10-17-26)", "MSOC vs. UMass Lowell (10-10-2026)".',
        social: 'No social icons in the footer and no social links found in homepage text. Only a "Content Stream" section headed "#BINGPRIDE" — empty: no posts, handles, or feed items. The "Athlete of the Week" heading is likewise empty.',
      },
    pillars: {
        tickets: 'No header Tickets button (header has only a cart/Shop icon and search) and no hero ticket promo. "Tickets" appears only inside the FAN INFO menu; the scoreboard has no Buy Tickets link.',
        sportHub: 'No hero carousel — a score ticker, then a UHS sponsor promo, then the lead story "Women’s basketball host for the first time this season against Daemen" (WBB, Nov 20). No streaming provider named — no ESPN+, America East TV, FloCollege, or "Watch" text in homepage text.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is menu-only ("NIL Marketplace" under STUDENT-ATHLETES and under SUPPORT); not in the homepage body.',
      },
    steal: 'Five populated photo galleries with dates — the gallery section carries the homepage while the social stream sits empty.',
  },
  // Bryant Bulldogs — id 273 (homepage capture only, Nov 20, 2026)
  273: {
    schoolId: 273,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '"Latest Videos" — 4 populated items, most recent "Nadine Abdat’s 2026 AVCA-The Marines Battles Won Award Interview" (Oct 22, Women’s Volleyball), then "Bryant Bulldog Sports Hour: Ep. 32" (Jul 1), Ep. 31 (May 1), Ep. 30 (Apr 22).',
        photos: 'No photo-gallery section at all — no "Galleries"/"Photos" heading or gallery items on the homepage. An "Awards Slider" heading is present with no visible content.',
        social: 'Populated "Stay Connected" content stream with All / Instagram / Facebook filters and "Load More Social Posts" (posts dated Nov 17, Nov 16, Nov 11). Footer social icons/links: Instagram, Facebook, Twitter.',
      },
    pillars: {
        tickets: 'Gold "Tickets" button in the header (with a "Giving" button) and a "Buy Tickets" link in the scoreboard. No separate hero ticket promo — the hero is the soccer story.',
        sportHub: 'First Top Stories slide: "BRYANT FALLS TO UVA AFTER HISTORIC SEASON" (Women’s Soccer, Nov 20) — a season-ending NCAA Tournament story. No ESPN+ and no streaming named in homepage body text; FloCollege appears only as a footer logo/link.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is menu-only ("Name, Image and Likeness (NIL)" in the Inside Athletics menu); a "Giving" button sits beside Tickets in the header.',
      },
    steal: 'The populated "Stay Connected" social stream — the conference’s liveliest feed, with posts from Nov 11–17 at capture.',
  },
  // NJIT Highlanders — id 274 (homepage capture only, Nov 20, 2026)
  274: {
    schoolId: 274,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No standalone "Latest Videos" section. Video lives inside the #RollTech Content Stream — e.g. "Post Game Interview vs. Delaware State | 11.18.26" — and the Top Stories carousel has a "Play Video" item for Men’s Soccer.',
        photos: 'No standalone gallery section. One photo gallery inside the Content Stream: "America East Semifinals — MSOC • 11.11.2026 — Photos".',
        social: 'Populated "Content Stream" headed "#RollTech", sponsored by Adidas, with All / Instagram / YouTube / Facebook / PHOTOS (Galleries) filters and "LOAD MORE" — including the Adidas Team Store Thanksgiving sale post. No social icons in the footer.',
      },
    pillars: {
        tickets: 'Red "TICKETS" button in the header, alongside "DONATE" and "SHOP", plus a "TICKETS" item in the main navigation. No separate hero ticket promo.',
        sportHub: '4-slide "Top Stories" carousel led by "Women’s Basketball Heads to Milwaukee for Saturday Showdown" (WOMEN’S BASKETBALL, 11/20/2026). No ESPN+, America East TV, FloCollege, or "Watch"/stream text on the homepage. A separate "Slideshow" section below carries the brand line "One School. One Team."',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent — no "NIL" text in homepage text or in the Inside Athletics menu as captured; "DONATE" sits beside Tickets in the header.',
      },
    steal: 'The Adidas-sponsored #RollTech content stream — a sponsored social hub with video, photos, and a store sale in one feed.',
  },
  // Albany Great Danes — id 275 (homepage capture only, Nov 20, 2026)
  275: {
    schoolId: 275,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Videos tab populated (e.g. "UAlbany Football Weekly" Nov 14, Nov 7, Oct 31, with Load More).',
        photos: 'Galleries tab populated (e.g. "WBB at #24 Ole Miss 2026", 26 photos, Nov 11; "FH vs Vermont (AE Championship) 2026", 47, Nov 06) — though "FH vs Bryant (AEQF) 2026" is listed twice.',
        social: 'The "Great Danes Media" Social tab is EMPTY — its tabpanel contains no posts/feed items. Per-sport Facebook/X/Instagram links exist inside the Sports menus and a "Social Media Directory" link sits in Fans; no footer social-icon row was found.',
      },
    pillars: {
        tickets: 'No standalone header pill button; "Tickets" is a header dropdown menu, plus four gold circular icon buttons top-right. Hero-adjacent promo: Features slider with "WBB vs Cornell Tickets", "2026 Albany Cup Tickets", and "UAlbany Sports App"; Quick Links include "Ticket Central." The entry splash itself sells tickets ("SWIFTIE DAY! … CLICK HERE FOR TICKETS!").',
        sportHub: '"Latest Headlines" carousel (slide 1 of 3): "Great Danes Emerge Victorious in First Queen City Classic Matchup" (Men’s Basketball, Nov 20). ESPN+ is named in the Fans > "Follow Along" menu, alongside America East TV, Flo Football, and ESPN Radio 104.5 The Team; FloCollege is a footer sponsor logo only.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is navigation-only ("Name, Image & Likeness (NIL)" under Athletes > Future); no homepage body promo, no collective named.',
      },
    steal: 'The "SWIFTIE DAY!" splash selling WBB vs Cornell tickets — a themed gate that sells before the homepage even loads.',
  },
  // Maine Black Bears — id 276 (homepage capture only, Nov 20, 2026)
  276: {
    schoolId: 276,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Videos section populated — featured "Maine Women’s Basketball | Highlights v VCU (11.19.26)" plus 5 items (Nov 17–19), "See All".',
        photos: 'No named photo-gallery section; the closest is a 12-slide "Slideshow Slider" of Harold Alfond Athletics Village facility photos.',
        social: 'No social-icon row, no populated feed, and no Facebook/X/Instagram text links on the homepage. Social promotion is a single unnamed "Social Media" promo tile in a rotator (with "Bananas Cub Club"), plus the YouTube link under All-Access.',
      },
    pillars: {
        tickets: 'Header "TICKETS" menu plus a light-blue "Tickets" pill button top-right (with "Give" and "Shop" pills); Quick Links lead with "Buy Tickets." No hero ticket promo (no hero).',
        sportHub: 'No hero carousel — an 8-event score/results ticker, then the lead news story "Track and Field announces indoor schedule" (MTRACK, 8h ago). ESPN+, America East TV, FloSports, Maine All-Access, and Maine Athletics on YouTube are named under ALL-ACCESS > VIDEO, with per-event Watch/Listen/Stats links.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is navigation/footer only ("Name, Image, Likeness FAQ", "NIL Policy", "NIL Marketplace — Icon Source"); no homepage promo. A "Give" pill sits beside Tickets in the header.',
      },
    steal: 'The fast, clean load with a score ticker above a story lead — the only fast first paint in the conference, and the ticker does the gameday work.',
  },
  // UMBC Retrievers — id 277 (homepage capture only, Nov 20, 2026)
  277: {
    schoolId: 277,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '"Latest Videos" populated with 6 items, Nov 13–19 (e.g. "UMBC Volleyball vs Binghamton | 11/19/26", "UMBC Men’s Basketball vs Iona | 11/16/26"), "VIEW MORE VIDEOS".',
        photos: 'No photo-gallery section — "galler*" does not occur on the homepage.',
        social: 'Populated "Social Media — umbcathletics" section with an @UMBCAthletics post ("CALLING ALL DAWGS! … help @umbcvolleyball keep the @americaeast championship trophy!"), plus Athletes of the Week Ella Nadeau and Grant Moore. Footer: "Follow Us On Social:" with 3 icon-only links.',
      },
    pillars: {
        tickets: '"TICKETS" header menu (no pill button). The splash itself is the ticket promo: "AMERICA EAST VOLLEYBALL PLAYOFFS / CHAMPIONSHIP NOV 21 — 4 PM … UMBC STUDENT TICKETS ARE FREE *FOR THE FIRST 500 STUDENTS / CLICK HERE FOR TICKETS." No ticket promo in the homepage hero itself.',
        sportHub: 'Gameday ticker strip above the nav (Nov 21 WBB at Brown, Nov 21 VB vs New Hampshire, Nov 22 MBB vs Lancaster Bible, "FULL SCHEDULE"), then a "Top Stories" carousel led by "Women’s Basketball Set For Road Meeting at Brown". The WATCH menu names "America East Digital Network", "UMBC Athletics on YouTube", and "UMBC Athletics on ESPN" — ESPN, not ESPN+.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent — 0 mentions of NIL / "Name, Image" anywhere in the homepage text/DOM captured.',
      },
    steal: 'The splash gate that doubles as a free-student-ticket promo (first 500 students, volleyball championship) — the gate is the offer.',
  },
  // UMass Lowell River Hawks — id 278 (homepage capture only, Nov 20, 2026)
  278: {
    schoolId: 278,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '"RIVER HAWK NETWORK" YouTube grid, populated — "Field Hockey | 2026 Season Recap" (6h ago), "Men’s Soccer | 2026 Season Recap" (Nov 19), "Women’s Basketball | UMass Lowell vs CCSU Highlights (11.18.26)" (Nov 18), "Women’s Soccer | 2026 Season Recap" (Nov 18), with "Load More".',
        photos: '"PHOTOS" section, populated — "2026 Hall of Fame Celebration" (235 images, Nov 7) and "Men’s Soccer Alumni Day 2026" (99 images, Oct 24).',
        social: 'Header and footer icons/links (Facebook, Twitter/X, Instagram, YouTube). No embedded social feed on the homepage.',
      },
    pillars: {
        tickets: 'Header "Tickets" button (top right, beside Donate), schedule "Buy Tickets" links, and a lower promo slideshow ("BUY TICKETS / Never Miss a Game / Buy Now!").',
        sportHub: 'No brand-slogan hero carousel at the top. First-paint lead is the Latest News grid, large tile: "Season in Review: River Hawks Turn in Historic 2026 Season" (Field Hockey, 9h ago) with a "Play video" season-recap link. A lower "RISE WITH US" video banner with "GIVE NOW" is a secondary brand/donate element. ESPN+ is not named anywhere; the menu has only "Live Video Streaming" and schedule "Watch" links, with no provider named.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is menu-only ("Student-Athlete NIL" and "Student-Athlete NIL Marketplace" in navigation; "Opendorse" in Quick Links). A "Donate" button sits beside Tickets in the header, and the "RISE WITH US" banner carries a "GIVE NOW" ask.',
      },
    steal: 'The PHOTOS section with image counts — a 235-image Hall of Fame gallery, the biggest gallery in the conference.',
  },
  // New Hampshire Wildcats — id 279 (homepage capture only, Nov 20, 2026)
  279: {
    schoolId: 279,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No dedicated video section and no photo-gallery section on the homepage — only the YouTube Channel and Watch/Listen links. A "Wildcat Shop" and "Featured Athletes" (Maggie Cavanaugh, Women’s Basketball; Myles Thomason, Football) appear instead.',
        photos: 'No photo-gallery section on the homepage — no "PHOTOS" heading and no gallery counts.',
        social: 'No header social icons and no embedded social feed. The Fans menu has Social links for Facebook, Instagram, and X only; the Teams menu has per-team Facebook/Twitter/Instagram links.',
      },
    pillars: {
        tickets: 'Header "Tickets" dark-blue button (top right); Tickets in the Shop menu. No hero ticket promo was visible on first paint. (The Tickets menu lists Women’s Ice Hockey "Singleuuuu" and "Group Ticketsuuuu".)',
        sportHub: 'A scoreboard carousel sits above Top Stories (which was empty on first paint and populated only after a delay). First large tile once loaded: "Blume, ’Cats Set for Day 2 of Harold Anderson Invitational (Nov. 20)" (Women’s Swimming and Diving) beside "Battle for the Brice-Cowell Musket: Nov. 21 at Maine" (Football). ESPN+ is not named in homepage body text; ESPN, Flo College, and NESN appear only as footer affiliate logos. Scoreboard has generic "Live video" links.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is buried ("NIL Policies" and "NIL Guide" in the Athletics menu; "Influxer" under Shop).',
      },
    steal: 'The scoreboard carousel above Top Stories — the gameday element is present even where the hero itself is a story.',
  },
  // Vermont Catamounts — id 280 (homepage capture only, Nov 20, 2026)
  280: {
    schoolId: 280,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '"Catamount TV" is populated — YouTube player "Men’s Soccer: Vermont vs. North Florida — NCAA First Round (11/19/26)" plus 8 thumbnails, including "Catamount Insider presented by Milton CAT: Episode 8 — Emma Haan (11/20/26)".',
        photos: 'No dedicated photo-gallery section; "Galleries" is only a filter in the Connect section, and each story has a "Photos" link.',
        social: 'Footer links (Twitter, Instagram, Facebook, YouTube, Snapchat) plus "#VCATS". A "Connect with the #VCATS" section has Headlines / Instagram / YouTube / Galleries filters, but its feed area rendered empty — a large blank, faded stadium background with no posts visible.',
      },
    pillars: {
        tickets: '"TICKETS" is a top-nav text menu (not a button): "Buy Tickets", "SeatGeek: Buy or Sell Tickets" for Men’s Soccer, Men’s Hockey, Men’s Basketball, and Women’s Basketball, "My Account", "Claim Student Tickets", "Group Tickets". Per-event "TICKETS" links appear in Upcoming Events, and a promo ad under the main rotator is "Cat Gilwee Tickets".',
        sportHub: '"Top Stories" is a 6-slide auto-rotating carousel; the slide visible on the reload first paint was "Men’s Basketball Hosts Brown Saturday Night" (@UVMmbb, November 20th, 2026). An "Upcoming Events" list sits alongside. ESPN+ is not named anywhere, and no streaming provider is named; event links are generic "VIDEO" / "STATS" / "AUDIO".',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent — zero "NIL" hits in homepage text, no Opendorse/Influxer, no NIL policy link observed.',
      },
    steal: 'Catamount TV — a YouTube grid with 8 current thumbnails, including a same-day "Catamount Insider" episode.',
  },
  // Eastern Washington Eagles — id 281 (homepage capture only, Nov 20, 2026)
  281: {
    schoolId: 281,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '"EWU Media" video section populated (tiles dated Nov 19, 2026, with "WATCH" links), e.g. "MVB | Highlights from a 3-1 win vs Weber State".',
        photos: 'A Galleries filter is offered in EWU Media, but no standalone photo-gallery section was seen on the homepage.',
        social: 'Per-team Facebook/X/Instagram links in the Sports menus, a "GoEags on YouTube" link, and an "EWU Media" section with Instagram / YouTube / Galleries filters, populated with video tiles.',
      },
    pillars: {
        tickets: 'Black "TICKETS" button in the header, "Quick Links — Buy Tickets", and the first content on the page is three season-ticket promo tiles ("Football Season Tickets Available Now", "2026-27 Basketball Season Tickets On Sale Now", "2026-27 BBall Season Ticket Rotator").',
        sportHub: 'No headline copy on first paint — the hero is commercial/promo-led, not a story. ESPN+ is named in Top Stories ("Watch Live on ESPN+").',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is header-level — a "NIL" button in the header and, in the Athletics menu, "Eagle NIL Support", "Rise of the Red", "Eagle Marketplace", and "NIL Apparel" — the most prominent NIL treatment in the conference.',
      },
    steal: 'The header "NIL" button with its four-item menu cluster (Eagle NIL Support, Rise of the Red, Eagle Marketplace, NIL Apparel) — NIL as a header destination, not a buried policy.',
  },
  // Idaho State Bengals — id 282 (homepage capture only, Nov 20, 2026)
  282: {
    schoolId: 282,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '"Videos — BENGAL VISION" section populated with press-conference videos (e.g. "Idaho State Football Press Conference 11/18", Nov 18, 2026, "0 Views"); the same press-conference tile is duplicated in the section.',
        photos: 'No photo-gallery section was found (no "gallery"/"photo" text on the homepage).',
        social: '"Social Networks" section with Facebook / Twitter / Instagram headings, but the feeds rendered empty — no posts visible (only an Instagram header tile on the right).',
      },
    pillars: {
        tickets: '"TICKETS" dropdown in the header, a "Dropdown Menus" block with TICKETS / "BUY NOW!", and "Buy tickets" links on scoreboard events (e.g. Football vs Idaho, Nov 21). No hero ticket promo.',
        sportHub: 'First-paint feature (Top Stories): "Fowler Family Makes Multi-Year Commitment to Elevate Bengal Athletics" (General, Nov 19, 2026), with a "MORE HEADLINES" rail beside it. ESPN+ is named only in the Fan Zone menu ("Sign Up for ESPN + Online"); scoreboard "Live video" links name no provider.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is one mention only, buried in the Athletic Department menu as "NIL Policy" — the lowest prominence in the conference.',
      },
    steal: 'Leading with a donor-commitment story ("Fowler Family Makes Multi-Year Commitment to Elevate Bengal Athletics") — a giving milestone as the homepage’s top story.',
  },
  // Montana State Bobcats — id 283 (homepage capture only, Nov 20, 2026)
  283: {
    schoolId: 283,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '"VIDEOS" section populated but thin — only two videos: "2025 Code of a Champion" (Mar 23) and "2026 Code of A Champion" (Sep 4), plus "All Videos".',
        photos: 'No photo-gallery section on the homepage; "Photo Galleries" appears only as a menu link.',
        social: 'No social section or social icons found on the homepage — no Facebook/X/Instagram feed or icon links in the body or footer; only a "Social Media Policy" link in the Athletics menu.',
      },
    pillars: {
        tickets: 'Gold "Tickets" pill in the header plus a "Tickets" link, "TICKETS" menu, Quick Links "Tickets", and the entire 7-slide hero carousel is ticket panels (WBB, MBB, and football single-game tickets "AVAILABLE NOW!"). Scoreboard events carry "Buy Tickets" links (Volleyball vs Montana, Nov 20; Football vs Montana, Nov 21).',
        sportHub: 'A scoreboard slider sits above the header as a gameday-hub element (8 events, Nov 20–24), above the all-ticket carousel. ESPN+ is named prominently in "QUICK LINKS" ("Stream WatchESPN/ESPN+"). The homepage is gated behind a "GOLD OUT NOVEMBER 20 vs MONTANA" splash with "Continue to Home" / "Skip Permanently".',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is one mention only, buried in the Athletics menu as "NIL Policy" — no homepage prominence.',
      },
    steal: 'The all-ticket hero carousel — one panel per sport, single-game tickets available now.',
  },
  // Northern Arizona Lumberjacks — id 284 (homepage capture only, Nov 20, 2026)
  284: {
    schoolId: 284,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No dedicated video section on the homepage.',
        photos: '"PHOTO GALLERY" tab with 12 galleries.',
        social: '"Social Content Stream" is EMPTY (graphic + Load More, no posts rendered).',
      },
    pillars: {
        tickets: '"TICKETS" header nav and per-event BUY TICKETS links.',
        sportHub: 'Lead story: "NOBLE YOUNG-BLACKGOAT HOPES TO SET EXAMPLE FOR NATIVE AMERICAN AND INDIGENOUS YOUTH" (Football). ESPN+ is NOT named in homepage text (live-video links labelled "VIDEO", pointing to espn.com/watch).',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is prominent: "LUMBERJACK EXCHANGE" is a top-level header nav link.',
      },
    steal: 'The top-level "LUMBERJACK EXCHANGE" header link — the NIL exchange as a main-nav destination, named for the school.',
  },
  // Portland State Vikings — id 285 (homepage capture only, Nov 20, 2026)
  285: {
    schoolId: 285,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '"VIKING VISION" — 5 videos.',
        photos: '"PHOTO GALLERIES" — 3 (though gallery thumbs rendered as blank white boxes at capture).',
        social: 'No homepage social feed or icons (per-sport links in nav only).',
      },
    pillars: {
        tickets: 'Header button, one per-event Buy link, and a footer ticket phone "1-888-VIK-TIKS".',
        sportHub: 'Three-tile Top Stories grid led by "Vikings Finally Return Home after Five Straight Road Games, Host Cal State Fullerton Tuesday" (WBB, Nov 20). ESPN+ is NOT named (live-video links "Video" to espn.com/watch). Featured Story: "Portland State Athletics Expands Partnership with Rose City SportsNet, Adding 10 Basketball Broadcasts" (Oct 30). The homepage is gated behind a full-screen dark-green splash (PS shield only, ~15 seconds).',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent entirely.',
      },
    steal: 'The footer ticket phone "1-888-VIK-TIKS" — a memorable vanity number for tickets, right in the footer.',
  },
  // Southern Utah Thunderbirds — id 286 (homepage capture only, Nov 20, 2026)
  286: {
    schoolId: 286,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '"Thunder Vision" — 4 videos.',
        photos: '"Photo Galleries" — 3.',
        social: '"Social Media Contentstream" POPULATED (suuthunderbirds; lead: "Southern Utah Mourns Dr. Kathryn Berg…").',
      },
    pillars: {
        tickets: '"TICKETS" header button (dropdown Buy Now / Seating Maps); no buy link visible in the homepage body (schedule links collapsed behind toggles). The homepage is gated behind a full black splash screen (SUU logo only, ~15 seconds).',
        sportHub: 'Lead story (archival): "Mead’s Marvel Meets Its Match" (MBB, Nov 20; "143 Points — 1970", black-and-white 1970 scoreboard photo, 143–106). ESPN+ is FANZONE menu only.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent entirely.',
      },
    steal: 'The archival 1970 scoreboard story as the hero ("Mead’s Marvel Meets Its Match", 143 points) — heritage as the lead story, not a press release.',
  },
  // Idaho Vandals — id 287 (homepage capture only, Nov 20, 2026)
  287: {
    schoolId: 287,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Videos "VANDAL VISION" — 6 items, Nov 2–15.',
        photos: 'No photo-gallery section (menu link only).',
        social: '"Social Media" section EMPTY (footer icons only).',
      },
    pillars: {
        tickets: 'Header link; the promo beside the hero is BSN/Nike merch ("VANDALS CELEBRATE AMERICA’S 250TH").',
        sportHub: 'Lead story: "Vandals Set for Friday Clash with ’Runners" (MBB, Nov 19). ESPN+ has low prominence in schedule/watch links only.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is a header link only.',
      },
    steal: 'The "VANDALS CELEBRATE AMERICA’S 250TH" merch promo beside the hero — a national moment tied to team gear.',
  },
  // Montana Grizzlies — id 288 (homepage capture only, Nov 20, 2026)
  288: {
    schoolId: 288,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'Videos + Photos + Podcasts + Publications in "The Latest" — podcasts are present on the homepage; no standalone audio player noted.',
        video: 'Videos in "The Latest" (with Photos, Podcasts, and Publications).',
        photos: 'Photos in "The Latest" (with Videos, Podcasts, and Publications).',
        social: 'Instagram feed populated (6 posts).',
      },
    pillars: {
        tickets: 'Header "Buy Tickets"; the Top Promo region is blank.',
        sportHub: 'Lead story / award campaign: "Support #Eli4Payton" (Football, Nov 20; graphic "ELI GILLMAN FOR THE WALTER PAYTON AWARD"). ESPN+ appears only as a calendar watch icon (MBB vs Carroll, Nov 23).',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent entirely (closest: a "406 Fund" story, not labelled NIL).',
      },
    steal: 'The "Support #Eli4Payton" award-campaign hero — a player-award push as the homepage’s lead, with a hashtag to carry it.',
  },
  // Northern Colorado Bears — id 289 (homepage capture only, Nov 20, 2026)
  289: {
    schoolId: 289,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'YouTube "Latest Videos" — 4 items, Oct 21–26 (stale ~1 month at capture).',
        photos: '"Photo Galleries" — 6.',
        social: 'No homepage social feed or icons (per-sport links only inside the collapsed Sports menu).',
      },
    pillars: {
        tickets: 'Header menu + yellow pill + Quick Links.',
        sportHub: 'Commercial hero — a promo rotator: Slide 1 "BECOME A MEMBER OF THE OFFICIAL KID’S CLUB OF THE UNC BEARS!" (Klawz’s Cub Club); Slide 2 an app download ("DOWNLOAD TODAY!"). ESPN+ appears only as a sponsor ad in a rotator; no live-video link was observed.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is the most prominent of its batch: a yellow "nil" pill button, "Northern Vision Exchange" in Quick Links and Give > NIL, plus a "Northern Vision" promo.',
      },
    steal: 'The yellow "nil" pill button and "Northern Vision Exchange" Quick Link — NIL branded with a name and a color, one tap from the header.',
  },
  // Utah Tech Trailblazers — id 290 (homepage capture only, Nov 20, 2026)
  290: {
    schoolId: 290,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Videos "Trailblazer SportsVision" — 3 (all swim, Nov 19–20).',
        photos: '"Photo Galleries" — 4 (Nov 4–18).',
        social: '"Social Media" section EMPTY (heading + "Skip Content Stream" only; no social icons anywhere on the homepage).',
      },
    pillars: {
        tickets: 'No header buy button; Tickets is a nav dropdown, with per-event Buy links. The promo below the hero is a Salt Lake Express ad.',
        sportHub: 'Lead story: "Trailblazers Wrap Up Road Swing With Sunday Matinee Versus South Dakota at Sanford Pentagon" (MBB, Nov 20). Streaming is MWC+ (a promo image, watch.themw.com); ESPN+ appears once in page text as a live-video destination (label just "Live video"); Nov 22 MBB video goes to Midco Sports Plus.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is menu-only ("UT NIL Policy" + FAQ).',
      },
    steal: 'Four dated photo galleries (Nov 4–18) and three same-week swim videos — the media sections are current even where the hero is a plain story.',
  },
  // Weber State Wildcats — id 291 (homepage capture only, Nov 20, 2026)
  291: {
    schoolId: 291,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Videos "Wildcat Media" — 4 (Nov 5–19).',
        photos: '"Galleries" — 4, but ALL STALE (June 2024, Mar 2024, Sept 2023, June 2023 — no 2025/26 gallery).',
        social: '"#WeAreWeber" feed populated (7+ posts) plus footer icons.',
      },
    pillars: {
        tickets: 'Strong — purple pill Tickets button, top promo card "WEBER STATE TICKETS", and per-event Buy links.',
        sportHub: 'Lead story: "WSU Falls to Cal State Fullerton, 84-79" (WBB, Nov 19); the hero loaded promptly. ESPN+ is PROMINENT — top promo card: "ESPN+ — The home for Weber State Athletics and Big Sky Conference streaming video", plus a Multimedia menu link.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is menu-only ("Name, Image, and Likeness" + "Weber State Wildcat Exchange").',
      },
    steal: 'The dedicated ESPN+ promo card ("The home for Weber State Athletics and Big Sky Conference streaming video") — the most prominent ESPN+ naming in the conference.',
  },
  // FIU Panthers — id 292 (homepage capture only, Nov 20, 2026)
  292: {
    schoolId: 292,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'PANTHERS VIDEOS — “MBB | Get to Know Huascar Cuevas”, “Baseball | Get to Know Aidan Cohall”; WePlayed #moments Playlists with 5 men’s basketball videos dated 2026/11/17.',
        photos: 'PANTHERS GALLERIES, 4 galleries: Football at Delaware (27 photos), WBB vs Stetson (67), Football vs. Missouri State (30), 2026 FIU Athletics Hall of Fame Ceremony (42).',
        social: 'PANTHERS SOCIAL feed populated, with All/Instagram filters and posts from @FIU.FOOTBALL and @FIUATHLETICS; Quick Links to Instagram, X and Facebook.',
      },
    pillars: {
        tickets: 'Header TICKETS dropdown plus gold DONATE and SHOP buttons; the Top Promo is the 2026-27 men’s basketball season-tickets banner.',
        sportHub: 'Top Promo carousel above the main Stories carousel, led by the volleyball season-closer. ESPN+ named in Quick Links (2 mentions).',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL appears only as a Stories carousel headline about the official adidas team stores and NIL app; a gold DONATE button sits in the header.',
      },
    steal: 'The populated PANTHERS SOCIAL feed with All/Instagram filters — a live social stream next to the ticket-selling Top Promo.',
  },
  // Jacksonville State Gamecocks — id 293 (homepage capture only, Nov 20, 2026)
  293: {
    schoolId: 293,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No dedicated Videos section. WEPLAYED Playlists tab has 5 men’s basketball videos dated 2026/11/17 (e.g. “Chris Lockett Jr. In the Zone”).',
        photos: 'GALLERIES, 10 galleries, first: Men’s Basketball vs. UAB, Nov 14, 28 images.',
        social: 'Header icons only — Facebook, Twitter/X, Instagram, YouTube. No social feed section on the homepage.',
      },
    pillars: {
        tickets: 'Black “Tickets” button in the red header; Promo Slider slide 2 is “FB Tickets”; Quick Links include “2026-27 Basketball Season Tickets”; a countdown to Men’s Basketball vs Pacific (Nov 25) carries a buy-now tickets link.',
        sportHub: 'Scoreboard + Live Game Center dominate the top of the page (Men’s Basketball vs Georgia State, live at capture). No streaming provider named.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent — 0 mentions on the homepage.',
      },
    steal: 'The Live Game Center with a countdown carrying a buy-now ticket link — the scoreboard sells the next game, not just the last one.',
  },
  // Kennesaw State Owls — id 294 (homepage capture only, Nov 20, 2026)
  294: {
    schoolId: 294,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'VIDEOS section with sport/category filters, 3 videos: “Antoine Pettway Postgame PC at Alabama” (Nov 17), “Coach Mack Weekly Presser - Week 12 vs. FIU” (Nov 16), “WBB Postgame Press Conference: South Alabama” (Nov 15).',
        photos: 'GALLERIES, 3 galleries: WBB vs. South Alabama (32 photos), FB at Sam Houston (148), 2026 Hall of Fame Ceremony (17).',
        social: 'INSTAGRAM heading with only a “Follow” link — no posts/tiles, so the feed is empty/absent. No social icons in the header; Trending has a “Follow the Owls” link.',
      },
    pillars: {
        tickets: 'Gold “Buy Tickets” header button, “TICKET INFO” in main nav, hero CTA “Purchase Tickets to FIU (Nov. 21)”, and Trending link “Men’s Basketball Season Tix”.',
        sportHub: 'Hero carousel auto-rotates through gameday stories with ESPN+ and Live Stats links; header “Watch” button. NIL: Trending “NIL Store” link and a “NIL Learn More” tile.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is a Trending “NIL Store” link and a “NIL Learn More” tile — no giving page detail.',
      },
    steal: 'Hero-slide ESPN+ links with Live Stats on gameday stories — the stream is in the story, not buried in a menu.',
  },
  // Liberty Flames — id 295 (homepage capture only, Nov 20, 2026)
  295: {
    schoolId: 295,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'Flames Central includes a podcast (11/16/26) alongside video (11/12/26); no standalone audio player noted.',
        video: '“Highlights” — 3 videos; “Flames Central” video (11/12/26), plus “Flames Minute” and Podcast sections.',
        photos: '“Looking At The Flames” galleries — 3 populated, dated 11/20, 11/17 and 11/14/2026.',
        social: 'Populated “Social” section with 4 Instagram posts from @libertyflames; X/Facebook/Instagram/YouTube links in Quick Links and footer.',
      },
    pillars: {
        tickets: 'Header “TICKETS” button; Quick Links “Buy Tickets”; slide 2 has “PURCHASE FOOTBALL TICKETS”; schedule rows have “Buy Tickets” links.',
        sportHub: 'First carousel slide is a WBB Game Day slide with “GAME DAY CENTRAL / GAME NOTES”; “WELCOME TO THE MOUNTAIN” brand line below. ESPN+ named in Quick Links; header “WATCH” and “Flames Central” (YouTube).',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent from the homepage; “Flames Club” is present but not labelled NIL.',
      },
    steal: 'The only fast first paint in CUSA, with a populated Instagram feed and same-day galleries — speed plus fresh visuals.',
  },
  // Middle Tennessee Blue Raiders — id 296 (homepage capture only, Nov 20, 2026)
  296: {
    schoolId: 296,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“Latest Videos” — 5 populated, filterable by sport (Nov 19–13, e.g. “unFAZed with Volleyball Outside Hitter - Sophia Henry”, Nov 19).',
        photos: '“Latest Galleries” — 10 populated, filterable by sport (Nov 18–2, e.g. “@MT_MBB at Georgia Southern”, Nov 18).',
        social: 'Icons/links only, no feed. Quick Links: “Follow us on Instagram” and “Like us on Facebook”; Instagram/Facebook/X/YouTube icons beside the Build Blue video.',
      },
    pillars: {
        tickets: 'Header “Tickets” button (black, top right); hero slide 1 is the 2026 basketball season-tickets promo; the 7-slide carousel is entirely promotional.',
        sportHub: '7-slide promo carousel, not a story hero; the first story sits lower under “Top Story.” ESPN+ named only as slide 7/7 of the promo carousel. Live Game Center present (WBB at Auburn, live at capture).',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL does not appear on the homepage; the closest is “Raiders Rising” as the first Quick Link (not labelled NIL).',
      },
    steal: '10 filterable photo galleries — the deepest gallery set in the conference, filterable by sport.',
  },
  // Missouri State Bears — id 297 (homepage capture only, Nov 20, 2026)
  297: {
    schoolId: 297,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“ALL-ACCESS” — 4 populated videos with sport filter and “Load More Videos” (e.g. “Men’s Soccer Postgame vs. Saint Louis (11/19/26)”).',
        photos: '“PHOTO GALLERIES” — 6 populated galleries with image counts (12–20 images each, Nov 19–11).',
        social: 'Absent on the homepage — no social icons, links or feed in the homepage body or footer. The only social-adjacent item is a “YouTube Channel” link inside the Fan Central menu.',
      },
    pillars: {
        tickets: 'Header “TICKETS” nav item plus a “Tickets” pill top-right; Quick Links “Buy Tickets”; hero “Tickets” link; Promo A/B carousels for “MBB27 vs. Drake” and “WBB27 vs. UCA.”',
        sportHub: 'Static “TOP HEADLINES” grid (not a carousel) led by the MBB hosting-Drake preview with Tickets / Watch / Listen / Live Stats / Game Notes links. No streaming provider named.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is prominent: “NIL Marketplace” is the 4th of 5 Quick Links directly below the hero.',
      },
    steal: 'The “NIL Marketplace” Quick Link directly below the hero — NIL one click from the top story.',
  },
  // New Mexico State Aggies — id 298 (homepage capture only, Nov 20, 2026)
  298: {
    schoolId: 298,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“AGGIE VIDEOS” populated — lead “Cup of Joe presented by White Sands Federal Credit Union - Episode 8” (Sept 8, 2026) plus 4 press-conference videos.',
        photos: 'No dedicated photo-gallery section on the homepage.',
        social: 'Header icons only — X, Instagram, Facebook, YouTube and email. No social feed section and no “Follow” text on the homepage.',
      },
    pillars: {
        tickets: 'No header ticket button — “TICKETS” is a plain nav dropdown; no hero ticket promo. Schedule rows carry “Buy Tickets” links (e.g. Football vs Delaware, Nov 21).',
        sportHub: 'First carousel slide is the All-Academic Team story; the nav has “AGGIEVISION” as the in-house broadcast hub. No ESPN+ named anywhere.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is not named anywhere on the homepage.',
      },
    steal: 'The All-Academic Team story as the hero — classroom honors leading the homepage, not a score.',
  },
  // Sam Houston Bearkats — id 299 (homepage capture only, Nov 20, 2026)
  299: {
    schoolId: 299,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“Bearkat Sports Network” section populated — lead “FB: Weekly Press Conference” (Nov 17) plus a 6-video slider (press conferences, MBB highlights).',
        photos: '“Galleries” section populated with 6 galleries (32, 40, 14, 12, 50, 32 images; e.g. “Bowers Stadium - West Side Complex,” Jul 31).',
        social: 'None found — no social icons, links or feed in the accessible homepage DOM.',
      },
    pillars: {
        tickets: 'No header ticket button — “Tickets” is a plain nav item. Ticket promotion is via Quick Links (“Buy Tickets”, “Ticket Central”) and per-event “Buy Tickets” links in the schedule.',
        sportHub: '6-slide news carousel led by the 2027 non-conference baseball slate announcement. ESPN+ named only inside the “Bearkat Sports Network” nav menu (“Watch on ESPN+”).',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is named only inside the “Donate” nav menu — “Bearkat Competitive Excellence (NIL)”.',
      },
    steal: 'The Bearkat Sports Network as a named video hub — press conferences and highlights under one brand, with “Watch on ESPN+” inside its menu.',
  },
  // Delaware Blue Hens — id 300 (homepage capture only, Nov 20, 2026)
  300: {
    schoolId: 300,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“Hens All Access” populated with 3 videos — “Delaware Football Weekly Press Conference - Week 11” (Nov 18), “Delaware Football Postgame Press Conference - FIU 11/14/26,” “Fightin’ Words: Episode 7” (Nov 12).',
        photos: '“Photo Galleries” populated with 3 galleries — “Men’s Basketball vs. Wilson College” (Nov 17), “Women’s Basketball vs. American” (Nov 15), “Men’s Basketball vs. Colgate” (Nov 15).',
        social: 'Minimal on the homepage body — no general social icons or feed; per-sport Facebook/Twitter/Instagram links exist only inside the Sports nav menu, and the hero rotator’s slide 1 is a “Follow Us” ad link.',
      },
    pillars: {
        tickets: 'Yellow pill “Tickets” button in the header (with “Donate” and “Shop”), plus hero-rotator slide “Buy Tickets - Football,” a bottom ad rotator slide “2026 Football Season Tickets,” and a Quick Links “Tickets” link.',
        sportHub: 'Top carousel is a 5-slide promo/ad rotator (“Follow Us,” “Shop Blue Hens,” “Buy Tickets - Football,” “Rep the 302,” “Hire YoUDee and Baby Blue”); the first news headline below is the ice hockey recap. Streaming is generic — Quick Link “Watch the Fightin’ Blue Hens” and the “Hens All Access” video section.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is named only in menus — “Name, Image, Likeness (NIL)” under Inside Athletics and “NIL Support” under Donate.',
      },
    steal: 'The yellow pill Tickets button paired with a “Buy Tickets - Football” rotator slide — the ticket ask is in the header and in the hero.',
  },
  // Western Kentucky Hilltoppers — id 301 (homepage capture only, Nov 20, 2026)
  301: {
    schoolId: 301,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“Watch — HILLTOPPER VIDEO” populated with 4 videos, e.g. “WKU VB: HC Travis Hudson and Faith Young Postgame vs. FIU (CUSA Championship Quarterfinal) 11-20-26,” “Tops Trending Episode 18” (Nov 20).',
        photos: '“PHOTO GALLERIES” populated with 3 — “TRAVEL DAY: WKU VS LIBERTY” (Football, Nov 20), “KENTUCKY STATE VS WKU” (WBB, Nov 16), “JACKSONVILLE STATE VS WKU” (Football, Nov 14).',
        social: 'Quick Links sidebar lists “Follow us on Twitter / Facebook / Instagram / TikTok” with icons (plus per-sport social links in the Sports nav). No populated social feed on the homepage.',
      },
    pillars: {
        tickets: 'White “TICKETS” button in the red header (with “GIVE”), “Mobile Tickets” in Quick Links, and promo tiles for “WKU Basketball Tickets” and “2026 FB Tickets” / “TICKETS ON SALE NOW” for the CUSA Volleyball Championship.',
        sportHub: '“Top Promos” carousel led by “THIS WEEK IN WKU ATHLETICS,” then the volleyball-championship ticket tile and a “$200,000 GIFT MATCH” tile; the lead Top Story below is the volleyball semifinal win. Streaming is via “Hilltopper Sports Network” — no ESPN+ named.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is the most prominent in the conference: “CLIMB NIL” is a Quick Links item, plus “CLIMB Program - NIL” under Inside Athletics.',
      },
    steal: 'The “CLIMB NIL” Quick Links placement and the CUSA Volleyball Championship ticket promo tile — NIL and the next on-sale event side by side in the sidebar.',
  },
  // Belmont Bruins — id 302 (homepage capture only, Nov 20, 2026)
  302: {
    schoolId: 302,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '7 videos.',
        photos: '8 photo galleries (Nov 5–18).',
        social: 'Feed populated (3 posts).',
      },
    pillars: {
        tickets: 'Header menu plus a prominent season-ticket banner below the scoreboard and a slideshow slide.',
        sportHub: 'Story hero (STUNT schedule release). ESPN+ is collapsed-menu only; live-video links go to espn.com/watch.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is menu-only (“NIL Locker Room”).',
      },
    steal: 'The season-ticket banner below the scoreboard — tickets pitched right under the scores.',
  },
  // Bradley Braves — id 303 (homepage capture only, Nov 20, 2026)
  303: {
    schoolId: 303,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“BRAVESVIDEO” populated.',
        photos: 'No gallery section (menu link only).',
        social: 'Feed empty — filters and LOAD MORE, no posts.',
      },
    pillars: {
        tickets: 'Header “TICKETS INFO” button plus per-event Buy links. The “Lower Promo Rotator” and “Promo Location” regions are empty.',
        sportHub: 'Story / gameday-hub hero — a championship semifinal preview (No. 3 Bradley at No. 2 Belmont, volleyball). ESPN+ is not named in homepage text; live-video links go to espn.com/watch and the footer carries a “The Valley on ESPN” logo.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is menu-only.',
      },
    steal: 'Two schools, one story — Belmont and Bradley both lead with the same Nov 21 Bradley-at-Belmont MVC volleyball semifinal. A shared rivalry story is a free cross-promotion.',
  },
  // Drake Bulldogs — id 304 (homepage capture only, Nov 20, 2026)
  304: {
    schoolId: 304,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“BULLDOG VISION” populated.',
        photos: 'No gallery/photo section at all.',
        social: '“SOCIAL ZONE” populated (@DrakeAthletics).',
      },
    pillars: {
        tickets: 'Header TICKETS (opens in new window) plus menu. The Top Promo is an email signup; the Bottom Promo is the Bulldog Club.',
        sportHub: 'Story hero (Good Neighbor Award). No ESPN/ESPN+ anywhere — streaming is “Bulldog Vision powered by MidAmerican Energy.”',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent entirely; the Bottom Promo is the Bulldog Club.',
      },
    steal: 'The populated “SOCIAL ZONE” — social as a named, populated section on a homepage with no photo galleries at all.',
  },
  // Illinois State Redbirds — id 305 (homepage capture only, Nov 20, 2026)
  305: {
    schoolId: 305,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“Videos” section populated with 4 items (Nov 3–17, 2026), all press conferences.',
        photos: 'No photo-gallery section.',
        social: 'Header icons for Facebook, X/Twitter, Instagram. A “Social Wall” / “SOCIAL MEDIA” section with a type filter is present near the footer, but it was empty — no posts visible.',
      },
    pillars: {
        tickets: 'Header “TICKETS” menu and ticket icon; Quick Links include “Buy Tickets”; per-event “Buy tickets” links (e.g. Football vs #6 South Dakota, Nov 21). No hero ticket promotion.',
        sportHub: 'Story hero (Good Neighbor Award, soccer). Events offer generic “Live video” / “Live audio” / “Live stats” links; ESPN+ is not named anywhere.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is very low prominence — only as a “Name, Image & Likeness” filter option in the Videos section.',
      },
    steal: 'The Good Neighbor Award as the hero — a conference service honor leading the homepage, with the winner’s story told in the sub-copy.',
  },
  // Indiana State Sycamores — id 306 (homepage capture only, Nov 20, 2026)
  306: {
    schoolId: 306,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“VIDEOS” section populated with 6 items (Nov 14–20, 2026: MBB Radio, WBB postgame press conference, coaches shows, football press conference).',
        photos: 'No dedicated photo-gallery section on the homepage; “Photo Galleries” exists only as a link in the collapsed main menu.',
        social: '“SOCIAL MEDIA” section populated with 6 Facebook posts from @SYCAMORES (Nov 19–20 stories, plus a #HighFiveFridays community post), with “All” and “Facebook” filter buttons and “LOAD MORE POSTS”.',
      },
    pillars: {
        tickets: 'A floating “BUY” button at top left; Quick Links lead with “TICKETS ON SALE NOW!”; a “MEN’S BASKETBALL SEASON TICKETS” banner; hero “PURCHASE TICKETS”; per-event “BUY TICKETS” links.',
        sportHub: 'The run’s strongest gameday hub — a rotating “Events Count Down” above the “KNOW BEFORE YOU GO: 2026 NCAA Cross Country Championships Info” slide, bundling PURCHASE TICKETS, a site map, WATCH LIVE (ESPNU) and live results. ESPN+ appears only in the collapsed Fans menu.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is prominent — Quick Links include “CROSSROAD OF CHAMPIONS - NIL FUND”.',
      },
    steal: 'The gameday hub — a ticking Events Count Down above a “KNOW BEFORE YOU GO” championship guide with PURCHASE TICKETS, a site map, WATCH LIVE (ESPNU) and live results.',
  },
  // Murray State Racers — id 307 (homepage capture only, Nov 20, 2026)
  307: {
    schoolId: 307,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: '“Racers Podcast Central” section is present on the homepage; no standalone audio player noted.',
        video: '“Racer Video” populated with 4 press-conference videos (Nov 12–17, 2026) and “View All Videos”.',
        photos: 'A dedicated “Photos” section is populated with 5 galleries (Nov 2–20, 2026, e.g. “MSU Football at Indiana State”, “MSU MBB vs Alcorn State”).',
        social: 'A “Social” / “Follow Us” section with links to Twitter, Facebook, Instagram, and YouTube (icons/links only) — no social feed, embedded posts, or populated stream.',
      },
    pillars: {
        tickets: 'Header “TICKETS” menu item; Quick Links include “Buy Tickets Now”; a “Men’s Basketball Premium Seating” ad; per-event “Buy Tickets” links.',
        sportHub: 'A “Live Game Center” sits above the Top Stories slider (Men’s Basketball vs Wisconsin, live at capture). No streaming provider named — events offer generic “Watch” / “Video” / “Live Stats” / “Audio” links. The hero is a two-month-old institutional announcement, not a current story.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is very low prominence — only two policy links, “MVC NIL Policy” and “NCAA NIL Policy”, inside the collapsed “VISION FOR EXCELLENCE” menu. “Donate Now” appears in the top utility bar.',
      },
    steal: 'Fast load plus “Racer Video”, “Photos”, and “Racers Podcast Central” all on one homepage — and a working Game Day Central countdown for Football vs Northern Iowa.',
  },
  // Southern Illinois Salukis — id 308 (homepage capture only, Nov 20, 2026)
  308: {
    schoolId: 308,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No dedicated video section. Video appears only as inline items in the Content Waterfall (e.g. “Video | Women’s Basketball Postgame,” Nov 17, 2026).',
        photos: 'No dedicated photo-gallery section. Photos appear only as inline items in the Content Waterfall (e.g. “Photos | WBB Vs. Eastern Illinois” with a “Photo Gallery” link).',
        social: '“FOLLOW US” section with icons/links only — Twitter, Instagram, Facebook, YouTube. No embedded social feed.',
      },
    pillars: {
        tickets: 'Header ticket icon/link (“Tickets, Opens in new window”) and “Buy Tickets” in Quick Links plus “Buy Tickets” on live scoreboard events. No hero ticket promo; a lower rotating Slider includes “Secure Your Seats / TICKETS ON SALE”.',
        sportHub: 'First paint is a scoreboard strip, then a “Live Game Center” (Men’s Basketball vs UT Martin, 54-60, Live; Women’s Basketball vs UT Martin, 17-10, Live) above a “Content Waterfall” led by the “SIGNED” recruiting story. ESPN+ named only once, as an “ESPN+ FAQ” link under the Multimedia menu; “Salukis+” and “SIUSalukis.TV” are also named.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL: “SALUKIS UNLEASHED” is a top-navigation item; no NIL explanation or promotion appears in the homepage body.',
      },
    steal: 'The Live Game Center with live scores above the story waterfall — the games lead, the stories follow.',
  },
  // Evansville Purple Aces — id 309 (homepage capture only, Nov 20, 2026)
  309: {
    schoolId: 309,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No dedicated video section and no photo-gallery section (“video” matches are only the per-event “Live video” links).',
        photos: 'No photo-gallery section (0 “gallery” matches).',
        social: '“Aces Fan Zone” with All / Facebook / Twitter / Instagram filters — populated feed, with posts from “UE ATHLETICS” / “@UEATHLETICS”, plus a “LOAD MORE” button and “#ForTheAces” link. The batch’s only populated social feed.',
      },
    pillars: {
        tickets: '“TICKETS” is a main-header nav link; “Buy tickets” links appear per home calendar event. No ticket promo in the hero; a mid-page promo slider includes a ticket ad (“Tickets - Promo Slider”).',
        sportHub: 'Story-led carousel (first-paint headline is the WBB home-opener slide, rendered as a fragment). ESPN+ is not named anywhere; streaming appears only as generic “Live video” / “Live audio” links per calendar event.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL appears only as a “Name, Image and Likeness” link in the Athletics menu; “Support Your Sport” giving posts appear in the social feed.',
      },
    steal: 'The populated “Aces Fan Zone” feed — the batch’s only populated social feed, carrying giving posts (“Support Your Sport”) alongside game posts.',
  },
  // UIC Flames — id 310 (homepage capture only, Nov 20, 2026)
  310: {
    schoolId: 310,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No dedicated video section and no photo-gallery section (“video” matches are only the per-event “Live video” links).',
        photos: 'No photo-gallery section (0 “gallery” matches).',
        social: 'Icons/links only, in Quick Links — YouTube, X, and Instagram (no Facebook link observed). No embedded social feed.',
      },
    pillars: {
        tickets: '“TICKETS” is a main-header nav link; “Tickets” also appears in Quick Links, and “Buy tickets” links appear per home schedule event. Promo slides show a “Facilities Ad” and “Sparky’s Kids Club”; no ticket-specific hero promo.',
        sportHub: 'The hero is a static parallax graphic — large script “Flames” over a white Chicago skyline silhouette — and the “Main story” carousel region was empty even after loading. The first story below is “Women’s Basketball Hosts Ball State.” ESPN+ is not named anywhere; streaming is generic “Live video” links per schedule event.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is a single “NIL” link in a mid-page link list alongside “Facilities,” “Flames Leadership Institute,” and “Flames Athletic Fund”.',
      },
    steal: 'A brand-graphic hero (script “Flames” over a Chicago skyline) can carry the first paint — but only if the story carousel below it loads; UIC’s “Main story” region rendered empty.',
  },
  // Northern Iowa Panthers — id 311 (homepage capture only, Nov 20, 2026)
  311: {
    schoolId: 311,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“PANTHER MEDIA” section, populated on both tabs. Videos: 4 items, e.g. “Women’s Volleyball Press Conference: Nov. 17, 2026”, “Men’s Basketball Press Conference: Nov. 17, 2026”.',
        photos: '“PANTHER MEDIA” galleries: 4 items, e.g. “MBB vs. Lindenwood (2026-27)” Nov 17, 2026; “WRE at 2026 Grand View Open” Nov 14, 2026.',
        social: 'Header icons only — X/Twitter, Facebook, Instagram (3). No social feed section on the homepage.',
      },
    pillars: {
        tickets: 'Header “Tickets” button (purple, top right, beside Donate and Shop), plus a TICKETS dropdown (Football, Men’s/Women’s Basketball, Volleyball, Wrestling, Young Alumni Season Tickets, UNI Student Tickets, SeatGeek). No ticket headline in the hero.',
        sportHub: 'Image-only Promo carousel (1/3, 2/3, 3/3) with no headline text — first slide a wrestling action photo. Calendar “Live video” links exist with the provider unnamed; no streaming provider named. The homepage is gated behind a full-screen purple “2026 MVC VB Champions” splash (Continue to Home / Skip Permanently).',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is 1 mention only — “UNI Panthers NIL Marketplace” as a link in the FANS dropdown menu. Promo slots above the hero push “SUPPORT THE PANTHERS / JOIN THE EVER LOYAL CLUB”.',
      },
    steal: 'The “PANTHER MEDIA” section with videos and galleries both populated on one tabbed block — one media destination instead of two scattered sections.',
  },
  // Valparaiso Beacons — id 312 (homepage capture only, Nov 20, 2026)
  312: {
    schoolId: 312,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Videos section populated — “Valpo Men’s Basketball Postgame Press Conference: November 16 vs. CCSJ”, “Valpo Football Weekly: Week 12”, “Valpo Basketball Weekly - Courtney Boyd - Nov. 16, 2026”, plus two “valpoathletics is live!” entries; “More Videos” link present.',
        photos: 'No photo-gallery / Galleries / Photos section on the homepage — absent.',
        social: 'Header icons only — Instagram, Facebook, Twitter/X (3). No social feed section on the homepage; “Stay Connected To Valpo Athletics” is a menu link, not a feed.',
      },
    pillars: {
        tickets: 'No standalone header Tickets button. “TICKETS” is a header dropdown-menu button only (menu includes “2026-27 Season Ticket Updates”). No ticket promotion in the hero. The Promo rotator below the hero is commercial (BSN Sports/Nike; “2027 Arch Madness”).',
        sportHub: 'Story-led rotator — first slide “Seven Program Records on Day One of Magnus Cup for Swimming” (Men’s Swimming). “ESPN” appears once only, as a menu item “ESPN Valparaiso Productions” under INSIDE ATHLETICS. Calendar shows “Live Now — Women’s Basketball vs South Dakota” with a collapsed toggle for its links.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL: 0 mentions on the homepage.',
      },
    steal: 'Seven program records as the lead story — a meet recap framed as a record book, not a box score.',
  },
  // American Eagles — id 313 (homepage capture only, Nov 20, 2026)
  313: {
    schoolId: 313,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No standalone Video section — only the filtered Content Stream: 2 YouTube videos, “Men’s Basketball Highlights vs. Mary Baldwin” and “Men’s Basketball Postgame Press Conference vs. Mary Baldwin”, both November 19, 2026.',
        photos: 'No standalone Photo Gallery section — only the filtered Content Stream: 1 photo gallery, “2026 AU Basketball Tip-Off Dinner”, October 21, 2026.',
        social: 'Social is via Content Stream filters ALL / HEADLINES / PHOTOS / INSTAGRAM / VIDEOS, populated with Instagram posts (Bender Arena renovations; men’s basketball home opener, 2,431 fans) and YouTube posts, plus “Load More Social Media Posts”.',
      },
    pillars: {
        tickets: 'Header TICKETS link (nav: SPORTS, INSIDE ATHLETICS, RECRUITS, GIVING, FAN ZONE, TICKETS, SHOP). No hero ticket promo and no ticket promo in the content stream.',
        sportHub: 'No traditional hero carousel — the top red strip carries the slogan “CHARACTER FORGED THROUGH COMPETITION”, then a “CHAMPIONS FUND” banner, then the “#AUEAGLES” Content Stream led by the women’s basketball home-week story. No streaming section or Watch link in the homepage body; only a footer logo link “Patriot League ESPN”.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. The “CHAMPIONS FUND — SUPPORTING ALL STUDENT-ATHLETES” banner sits near the top of the page; NIL appears only as a sponsor tile — “AU Athletics NIL Store - Shop Now”.',
      },
    steal: 'The filtered #AUEAGLES content stream — headlines, photos, Instagram and videos under one set of filters, with “Load More Social Media Posts”.',
  },
  // Boston University Terriers — id 314 (homepage capture only, Nov 20, 2026)
  314: {
    schoolId: 314,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“Featured Videos” section populated with 4 highlights — Men’s Ice Hockey vs. Quinnipiac (11/18/26), Men’s Basketball vs. Dartmouth (11/15/26), Women’s Ice Hockey vs. Boston College (11/14/26), Men’s Basketball vs. Johnson & Wales (11/12/26) — with an “All Videos” link.',
        photos: 'No dedicated photo-gallery section; photos appear only in the hero and the Terrier Media Instagram feed.',
        social: 'Header icons for Instagram, Facebook, Twitter/X, YouTube and TikTok; a “Social Media Central 2025-26” promo tile; “Terrier Media” section populated with 6 Instagram posts by @buathletics (Nov 20, 20, 19, 17, 11, 10), filters All / Instagram only, and “Load More Posts”.',
      },
    pillars: {
        tickets: 'Header Tickets button in the red nav (with Support and Store), plus hero slide 2 “Purchase Tickets” for Men’s Basketball vs. Columbia, Sat. Nov 21, 12 PM. A Terrier Media Instagram post (Nov 19) promotes “$24 for 4 tickets, 4 foam fingers” for Women’s Basketball on Sun. Nov. 22.',
        sportHub: 'Gameday-hub hero — “Stories Slider” slide 1 is the women’s soccer NCAA Tournament preview with “Watch on ESPN+”, “Live Stats”, “Game Notes” and “NCAA Championship Central” links. ESPN+ is prominent in hero slides 1 and 2; ESPNU and NESN also appear in the rotator.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL: the word “NIL” does not appear in homepage text; “Terriers Unleashed” is a tile with no NIL wording.',
      },
    steal: 'The “$24 for 4 tickets, 4 foam fingers” Instagram deal for Women’s Basketball, and hero “Watch on ESPN+” links on the gameday preview slide.',
  },
  // Bucknell Bison — id 315 (homepage capture only, Nov 20, 2026)
  315: {
    schoolId: 315,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“BISON VIDEOS” (sport filter, “4 Filter videos loaded”): “Men’s Water Polo Hosting The MAWPC Championships” (Nov 19), “Patriot League Quarterfinal Preview 11-6-2026” (Men’s Soccer, Nov 6), “Loyola at Bucknell Volleyball Highlights 10-30-2026” (Oct 30); “ALL VIDEOS” link.',
        photos: '“BISON PHOTOS” (“4 Filter photos loaded”): Wrestling vs. LIU (Nov 20), Volleyball at Army, PL First Round (Nov 18), Men’s Basketball vs. Columbia (Nov 13), WBB vs. Fordham (Nov 11); “ALL GALLERIES” link.',
        social: 'Header icons for LinkedIn, Twitter/X, Facebook, Instagram and YouTube, plus menu social links. A dedicated “SOCIAL MEDIA” section is populated with 4 posts by bucknellbison, each with “Show More +”, and an “ALL POSTS” link.',
      },
    pillars: {
        tickets: 'No header Tickets button (header: SPORTS, MENU, DONATE). Tickets appear only inside MENU > FAN INFO > TICKETS & GEAR: “Buy M/W Basketball Tickets”, “Buy Football Tickets”, “Mobile Ticketing FAQs”. No hero ticket promo.',
        sportHub: 'Top promo rotator (giving campaign “Be the ’ray / FOR THE FUTURE OF BUCKNELL”, “SIDELINE EXCLUSIVE SHOP”, “Bison of the Week”) above the Top Stories lead. “Patriot League on ESPN+” is named in the nav menus; calendar events carry generic “Live video” links.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. The hero itself is a giving campaign (“Be the ’ray / FOR THE FUTURE OF BUCKNELL”); NIL is menu-only (“Name, Image & Likeness” under STUDENT-ATHLETES and RECRUITS).',
      },
    steal: 'The dedicated SOCIAL MEDIA section plus BISON PHOTOS galleries — social and photos as two named, populated sections, with the giving campaign leading the hero.',
  },
  // Colgate Raiders — id 316 (homepage capture only, Nov 20, 2026)
  316: {
    schoolId: 316,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“Videos — RAIDER REELS,” 5 videos dated Nov 19–20, 2026 (women’s hockey highlights/Raider Report, women’s basketball highlights/postgame, football preview at Bucknell).',
        photos: 'Photo galleries via Content Stream (2026 Hall of Honor) and a Photo Galleries link.',
        social: 'Footer icon links for X, Instagram, Facebook, YouTube, plus Subscribe, Photos, RSS, Shop, Tickets. Homepage “Content Stream / MEDIA CENTRAL” is populated, with All / YouTube / Instagram / Facebook / Galleries filters, a YouTube highlight (Women’s Hockey vs. Cornell, 11.20.26) and a Facebook post.',
      },
    pillars: {
        tickets: 'No standalone Tickets button in the header (header is Sports / Inside Athletics / Student-Athletes / Fans/Tickets / Give). Ticket promotion is via “Buy tickets” links on individual Events, a Tickets link in the footer icon row, and a “Tickets” item under Fans/Tickets. No hero ticket promo.',
        sportHub: '6-slide story carousel led by “RAIDERS FALL TO NO. 14 CORNELL ON THE ROAD” (women’s ice hockey). “Patriot League on ESPN+” in the Follow the Raiders menu, plus an ESPN+ icon/link beside Events/Results and “Colgate All-Access.” Below the hero, the brand statement reads “COLGATE UNIVERSITY ATHLETICS / EVERY FIELD, EVERY ARENA.”',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is named only in the Student-Athletes menu as “Name, Image & Likeness”.',
      },
    steal: 'The prompt first paint — the only one in the conference — and the populated MEDIA CENTRAL content stream with YouTube, Instagram, Facebook and Galleries filters.',
  },
  // Holy Cross Crusaders — id 317 (homepage capture only, Nov 20, 2026)
  317: {
    schoolId: 317,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'A “’Sader Stories Podcast” section (S8E7–S8E14) is present; no standalone audio player noted.',
        video: '“Videos — CRUSADERS ALL ACCESS” (Latest Videos / Features / Highlights), 5 videos Nov 10–18, 2026.',
        photos: '“CRUSADERS PHOTOS,” 5 galleries with counts 37, 72, 44, 27 and 222 photos.',
        social: 'No footer social-icon row and no social-feed section on the homepage. Social appears only as a “Follow Us” Quick Link and per-team Facebook/X/Instagram links in the Teams menu.',
      },
    pillars: {
        tickets: 'Header “Tickets” menu button; Quick Links “Buy Tickets”; promo rotator first slide “HALL OF FAME / Class of 2026 Induction Celebration | Nov. 21 / TICKETS ON SALE NOW!” plus “Hall of Fame Class of 2027 Nominations Open”.',
        sportHub: 'The whole site is gated behind a Rivalry Week splash — “RIVALRY WEEK / RAM-CRUSADER CUP / FORDHAM VS HOLY CROSS / SAT NOV 21, 12PM / FITTON FIELD” with “Continue to Full Site.” The full site opens on a scoreboard strip, Quick Links and a 3-up Promos rotator. Streaming is menu-named: “Watch Patriot League on ESPN,” “Watch Atlantic Hockey on FloSports,” “Watch Hockey East on ESPN+.”',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is comparatively prominent — an Athletics-menu “NAME, IMAGE & LIKENESS (NIL)” group: “NIL at Holy Cross,” “Mount St. James Collective,” “Student-Athlete Apparel (Athletic Solutions),” “Holy Cross Marketplace (Opendorse)”; the collective is also a footer sponsor.',
      },
    steal: 'The Rivalry Week splash gate — the whole site behind one game — and the Hall of Fame induction ticket promo in the rotator.',
  },
  // Lafayette Leopards — id 318 (homepage capture only, Nov 20, 2026)
  318: {
    schoolId: 318,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“LEOPARD VIDEOS,” 3 videos (Lehigh vs. Lafayette Swimming and Diving, 21 hours ago; Inside the Huddle: Lafayette Football vs. Lehigh, 2 days ago; Postgame: Men’s Basketball vs. Binghamton, 2 days ago).',
        photos: '“LEOPARD PHOTOS,” 3 galleries (Lafayette vs. Lehigh, 44 photos; Lafayette vs. Binghamton, 23 photos; Lafayette at Saint Peter’s, 6 photos).',
        social: '“LEOPARD INSTAGRAM” section is empty — heading plus a “Follow Us” link only, no posts. A “Follow Us / FOLLOW THE LEOPARDS” section below links to Instagram, Facebook, X and YouTube.',
      },
    pillars: {
        tickets: 'Header has a “FANS & TICKETS” button (not a standalone Tickets button). Tickets appear in the Follow the Leopards menu and under Fans & Tickets. No ticket promo was seen in the Promo A rotator during the visit.',
        sportHub: 'No traditional hero carousel. The page opens directly on “LEOPARD NEWS,” led by the Nov 17 football story “Rivalry 162 Brings the Leopards Back to College Hill” (Nov. 21, 12:30 p.m., Fisher Stadium, with “Live Video | ESPN+” / “Live Stats” / “Parking & Tailgating” / game notes). The schedule also shows an ACC Network (ACCNX) logo for Men’s Basketball at Syracuse.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is prominent on the homepage itself — a “Three boxes” tile labelled “NAME, IMAGE, LIKENESS / N.I.L.”; NIL also appears in the Student-Athletes menu.',
      },
    steal: 'The dedicated “NAME, IMAGE, LIKENESS / N.I.L.” homepage tile — the only school in the conference that puts NIL on the homepage itself.',
  },
  // Lehigh Mountain Hawks — id 319 (homepage capture only, Nov 20, 2026)
  319: {
    schoolId: 319,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Video present — Mountain Hawk Media videos (e.g. “MHT EP8 - Football”, Nov 20, 2026; “Football Preview vs Lafayette”, Nov 19) with “Load More”.',
        photos: 'A “Galleries” filter exists in Mountain Hawk Media, but no gallery item was visible in the initial set.',
        social: 'No dedicated social-feed section. “MOUNTAIN HAWK MEDIA” is a populated content stream (Instagram/Facebook posts, e.g. “MHT EP8 - Football”, Nov 20, 2026) with All Media / Instagram / Facebook / Videos / Galleries filters; footer has per-sport Facebook/X/Instagram links.',
      },
    pillars: {
        tickets: 'Header “TICKETS” button/menu, plus per-event “Buy Tickets” links (e.g. Women’s Basketball vs Towson, Nov 20; Volleyball PL Tournament Final, Nov 22). No hero ticket promo.',
        sportHub: 'No traditional hero carousel at the top — first paint shows the header followed directly by EVENTS and NEWS, led by the volleyball win over Bucknell. Event “Watch” links go to espn.com/watch (Patriot League catalog); a footer link reads “Patriot League on ESPN”. Mid-page Slideshow Promo: “LEARN. GROW. LEAD.” with “WE WILL RAISE CHAMPIONSHIP TROPHIES”.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL: none found on the homepage.',
      },
    steal: 'The Mountain Hawk Media filtered content stream — Instagram, Facebook, videos and galleries under one filter set, with the “LEARN. GROW. LEAD.” championship promo mid-page.',
  },
  // Loyola Maryland Greyhounds — id 320 (homepage capture only, Nov 20, 2026)
  320: {
    schoolId: 320,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“LOYOLA ON DEMAND” / “Loyola On Demand” with 6 items, all H2ounds swimming, dated 11.20.26 (“H2ounds Day 1 Finals”, “H2ounds Day 3 Finals”, “H2ounds Second Diving Session”, etc.).',
        photos: 'No gallery section on the homepage; “Photo Galleries” appears only as a MULTIMEDIA nav link.',
        social: 'A “SOCIAL” heading/section exists but is empty — no posts, icons or feed items visible in it (blank white space below the heading). Social links exist only in the per-sport nav menus and footer university links.',
      },
    pillars: {
        tickets: 'Header “Tickets” dropdown menu (Buy Tickets, Student & Employee Tickets, General Ticket Information, etc.). No hero ticket promo.',
        sportHub: 'Top Stories rotator led by “Women’s Hoops Welcomes Drexel for Victor Day” (Women’s Basketball, 11.20.26), with a scoreboard strip above the hero. “Patriot League Network on ESPN” is named in a banner and the MULTIMEDIA menu; “ESPN+” is not spelled out. No live-video link observed.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL: none found on the homepage.',
      },
    steal: 'Loyola On Demand’s 6 same-day swimming videos — a full day of one sport’s finals, published the same day.',
  },
  // Army Black Knights — id 321 (homepage capture only, Nov 20, 2026)
  321: {
    schoolId: 321,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“Black Knight Media” content stream (e.g. “Daryl Dixon Press Conference - Week 12 East Carolina”, “Cody Worley Press Conference - Week 12 East Carolina”, “2 SHORTHANDED GOALS, 1 PENALTY”, “Army Wrestling Pin”, Nov 18–19, 2026, with “Load More”).',
        photos: 'No gallery section on the homepage; “Photo Galleries” is only a nav link.',
        social: 'No social feed section on the homepage. Header has a “Toggle Social Media” control and the nav has a “Social Media Directory” link plus per-sport Twitter/Instagram links; footer has X/Facebook/Instagram/YouTube icon links only.',
      },
    pillars: {
        tickets: 'Prominent — header “Tickets” menu (Football, Wrestling, Hockey, Men’s & Women’s Basketball single-game/group/mini-plan links, 1-877-TIX-ARMY), ticket-ad banners above the hero (“2026 FOOTBALL VS. EAST CAROLINA SATURDAY, NOV. 21 • 12:00 PM • WEST POINT CLICK TO PURCHASE”; “2026-27 HOCKEY VS. RPI SATURDAY, NOV. 28 • 4:00 PM • WEST POINT CLICK TO PURCHASE”), and a Quick Links “Buy Tickets”.',
        sportHub: 'Top Stories rotator led by the men’s basketball road-trip preview; ticket-ad banners sit above the hero. A Slideshow Slider promo reads “Watch The Black Knights! / Our Home for Live Games / Watch on ESPN+” (link to patriotleague.tv); event Watch links go to the ESPN Patriot League catalog.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL: none found on the homepage.',
      },
    steal: 'Ticket-ad banners above the hero with a phone number (1-877-TIX-ARMY) — the ticket ask comes before the first story.',
  },
  // Navy Midshipmen — id 322 (homepage capture only, Nov 20, 2026)
  322: {
    schoolId: 322,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '“Videos / LATEST VIDEOS” with 6 populated items (“Naval Academy Service Assignment Day Class of 2027”; “Navy Football Media Zoom: Defensive Coordinator Eric Lewis (Memphis Week)”, “Giuseppe Sessi (Memphis Week)”, “Offensive Coordinator Drew Cronic (Memphis Week)”, “Braxton Woodson (Memphis Week)”; “Navy Sports Magazine - John Dutton - Sprint Football”), with “Load More” / “All Videos”. There is also a populated “PRESS LINKS” section (Annapolis Capital, Philadelphia Tribune, SB Nation, Nov 16–19, 2026).',
        photos: 'No gallery section on the homepage (no “gallery/photo” matches).',
        social: 'Header icon links only — X/Twitter, Instagram, Facebook, YouTube (top-right of the header). No social feed section on the homepage.',
      },
    pillars: {
        tickets: 'Header “TICKETS” dropdown menu, a “Buy Tickets” link on the hero story, and per-event “Tickets” links in the Schedule (e.g. Football vs Memphis, Nov 21, 12 Noon; Men’s Basketball vs Penn State Berks, Nov 24). No hero ticket promo banner.',
        sportHub: 'Top Stories rotator led by “Media Links and Videos for Friday” / “Friday in Navy Athletics” — a Friday media-links hub plus game stories. ESPN+ named in the footer Promo B slideshow; event “Live Video”/“Video” links go to espn.com/watch (e.g. Women’s Basketball vs North Carolina A&T, Football vs Memphis, Men’s Basketball at Rider).',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL: none found on the homepage.',
      },
    steal: 'The populated PRESS LINKS section — outside press (Annapolis Capital, Philadelphia Tribune, SB Nation, Nov 16–19) curated on the homepage, plus a “Friday in Navy Athletics” media-links hub.',
  },
  // Charleston Southern Buccaneers — id 323 (homepage capture only, Nov 20, 2026)
  323: {
    schoolId: 323,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Videos present and fresh — 5 videos, Nov 14–18, 2026 (e.g. "MBB Postgame: Coach Nimley vs Wofford 11/18/2026").',
        photos: 'Photo galleries present but stale — latest "MGOLF NCAA Winston-Salem Regional May 20," then Apr 6, Mar 5, Mar 3; no fall-2026 gallery.',
        social: 'Header icons for Facebook, X, Instagram, YouTube. The Instagram feed on the homepage is empty: "No posts available."',
      },
    pillars: {
        tickets: 'Header "Tickets" menu button; "Buy Tickets" in Fan Zone; "FB Season Tickets" ad tile below Instagram. No ticket promo in the hero.',
        sportHub: 'Lead story is a volleyball signing-class announcement; scoreboard has generic "Watch" links and an "Upcoming Broadcasts" ad tile. No streaming provider named.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent — no "NIL" in homepage text or in the menus checked.',
      },
    steal: 'Five fresh videos (Nov 14–18) on a page whose Instagram feed is empty — video, not the social feed, is the freshest thing here.',
  },
  // Gardner-Webb Runnin' Bulldogs — id 324 (homepage capture only, Nov 20, 2026)
  324: {
    schoolId: 324,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No Videos section on the homepage — absent.',
        photos: 'Photo galleries present and current-season: "Gardner-Webb WBB 2026-2027" (18 images), "Gardner-Webb Volleyball 2025," "GWU Football 2025."',
        social: 'Header Facebook / X / Instagram icons and Fan Zone social links. No social feed section on the homepage — absent, not empty.',
      },
    pillars: {
        tickets: 'Header "Tickets" pill link, plus "Tickets" in Quick Links; the first-visit splash itself is a season-ticket promo. No ticket promo in the hero.',
        sportHub: 'Lead NEWS story is a volleyball tournament victory; scoreboard has generic "Watch" links. ESPN+ is named only in the Fan Zone menu.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent — no "NIL" in homepage text or in the menus checked; an "Influxer" ad tile is not labelled NIL.',
      },
    steal: 'Current-season photo galleries on a page whose hero is black until the season-ticket splash is dismissed — galleries are the visual proof the hero is not.',
  },
  // High Point Panthers — id 325 (homepage capture only, Nov 20, 2026)
  325: {
    schoolId: 325,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'Fan Zone lists "LIVE AUDIO – MBB/WBB" and "TRIAD TALK NETWORK"; no audio player embedded on the homepage itself.',
        video: 'No Videos section and no Galleries section on the homepage — both absent.',
        photos: 'No photo-gallery section on the homepage; "PHOTO ARCHIVES" exists only as a Fan Zone menu link.',
        social: '"COLONELS SOCIAL" feed populated — Instagram/Facebook/YouTube filters, posts from @HPU_MBB, @HPUMENSLAX, @HPU_BASEBALL, @HPUWLAX, @HIGHPOINTVB, @HPUWBB, with "LOAD MORE POSTS." (The heading says Colonels on a Panthers site.)',
      },
    pillars: {
        tickets: 'Header "TICKETS" nav link; Tickets links also under each sport in the Sports menu. No ticket promo in the hero.',
        sportHub: 'Rotating Top Stories (volleyball tournament travel first); no provider named and no "Watch" links. Fan Zone lists "HPU SPORTS LINK" instead.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is present — "NAME, IMAGE, LIKENESS," "NIL GIFTS," and "ON POINT (NIL EXCHANGE)" in the menus, plus a dedicated homepage slideshow tile: "NIL Gifts — Supporting High Point University Student-Athletes — MAKE A CONTRIBUTION."',
      },
    steal: 'The dedicated "NIL Gifts" slideshow tile with a MAKE A CONTRIBUTION ask — NIL as a giving tile, not a buried menu link.',
  },
  // Longwood Lancers — id 326 (homepage capture only, Nov 20, 2026)
  326: {
    schoolId: 326,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Videos present and current — 5 videos, Nov 19–17, e.g. "Post Game (MBB): Head Coach Ronnie Thomas & Guard Jaylen Benard," "VIEW MORE VIDEOS."',
        photos: 'Photo slideshow present: "#HORSEPOWER" carousel at the bottom.',
        social: 'Populated. "Content Stream / SOCIAL MEDIA" with All/Facebook/Twitter/Instagram filters, posts Nov 20 and Nov 19, "LOAD MORE." Footer icons: X, Instagram, Facebook, YouTube.',
      },
    pillars: {
        tickets: 'Header "Tickets" menu, plus the full-width hero ticket banner above Top Stories: "2026-27 LONGWOOD BASKETBALL SINGLE-GAME TICKETS ON SALE NOW."',
        sportHub: 'Full-width single-game ticket banner above Top Stories; lead story below is men\'s basketball travel. ESPN+ is named only as "Longwood on ESPN+" in the Fan Zone menu.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is named only as "Athlete\'s Thread NIL Store" in the Tickets dropdown menu; no header link, tile, or dedicated section.',
      },
    steal: 'The full-width single-game ticket banner above Top Stories — the ticket ask is the first thing on the page, before any story.',
  },
  // Presbyterian Blue Hose — id 327 (homepage capture only, Nov 20, 2026)
  327: {
    schoolId: 327,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Videos present and current — 3 videos, Nov 20–18, "Load More Videos."',
        photos: 'No photo-gallery section named or present on the homepage.',
        social: 'Feed EMPTY / unrendered. "Blue Hose Media" showed only two hatched placeholder bars after ~18 seconds, with no posts. Footer social icons present: Instagram, Twitter, Facebook, YouTube.',
      },
    pillars: {
        tickets: 'Header "Tickets" menu, Quick Links "Purchase Tickets," and Promo Right rail "2026-27 Basketball Season Tickets."',
        sportHub: 'Rotating Top Stories; Quick Links tile "Watch PC - ESPN+." NIL is header-level — a top-navigation "NIL" link.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is header-level — a top-navigation "NIL" link (alongside Teams, Inside Athletics, Tickets, Scotsman Club, Camps, History).',
      },
    steal: 'NIL in the top navigation itself — one of only two schools in the conference with NIL on the homepage body.',
  },
  // Radford Highlanders — id 328 (homepage capture only, Nov 20, 2026)
  328: {
    schoolId: 328,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Featured Videos present, 6 videos, Nov 19–13.',
        photos: 'No standalone photo-gallery section; a Facilities Slider photo carousel (6 venues, e.g. Carilion Clinic Court at the Dedmon Center) is present, plus a Shop carousel.',
        social: 'Populated but Instagram-only and a week old — SOCIAL section, 5 Instagram posts, latest Nov 13, then Nov 11, Nov 11, Nov 5, Oct 31; "Follow us on Instagram" link.',
      },
    pillars: {
        tickets: 'Header "Tickets" button, Quick Links "Buy Tickets," and promo rotator slide 1/5 "Season Tickets Promo" below the Top Story.',
        sportHub: 'Gameday hub: countdown panel "Men\'s Basketball at Chattanooga" plus a large "UP NEXT" graphic and Top Story headline. ESPN+ badge on the hero Top Story card — the only ESPN+ placement in the homepage body in the conference.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent — no "NIL" in homepage text, and none appeared after opening the FANS, INSIDE ATHLETICS, and MAKE AN IMPACT menus.',
      },
    steal: 'The countdown panel + UP NEXT graphic gameday hub with an ESPN+ badge on the hero card — the conference\'s clearest gameday + streaming combination.',
  },
  // UNC Asheville Bulldogs — id 329 (homepage capture only, Nov 20, 2026)
  329: {
    schoolId: 329,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'Scoreboard entries have generic "Live Audio" links; no audio player embedded on the homepage itself.',
        video: 'Video section present but a single tile, "This Is UNC Asheville" (Learn More).',
        photos: 'No dedicated photo-gallery section on the homepage; Galleries is only a Bulldog Media filter.',
        social: 'Populated — "Bulldog Media" feed with 9 Instagram posts and a Load More button, filters All / YouTube / Instagram / Facebook / Galleries; per-sport Facebook/Twitter/Instagram links in the Sports menus and a Social Media Directory under Media; no social icons in the footer.',
      },
    pillars: {
        tickets: 'A TICKETS button in the blue header nav, plus "Buy Tickets" links in the scoreboard; no ticket promo in a hero (there is no hero).',
        sportHub: 'No hero rotator at all — a 14-event scoreboard strip sits above the nav and the page leads with "Featured News / Top Stories." Scoreboard entries have generic "Live Video" / "Live Audio" / "live Stats" links with no provider named.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is menu only — "UNC ASHEVILLE NIL MARKETPLACE" under the STUDENT-ATHLETES menu; no header link or dedicated tile.',
      },
    steal: 'The 14-event scoreboard strip leading a page with no hero rotator at all — the schedule is the hero.',
  },
  // USC Upstate Spartans — id 330 (homepage capture only, Nov 20, 2026)
  330: {
    schoolId: 330,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No Video section and no photo-gallery section on the homepage (only the Instagram feed and a STORE carousel of championship tees).',
        photos: 'No photo-gallery section on the homepage.',
        social: 'Populated Instagram only — "INSTAGRAM" section with 6 @upstatespartans posts (Nov 5–18), "Follow Us" and "Load More Instagram Posts"; Facebook / X / Instagram / YouTube icons sit in the header; no Facebook/X feed on the page.',
      },
    pillars: {
        tickets: 'A TICKETS dropdown in the green header nav, a "Buy Tickets" Quick Link, per-game "Buy Tickets" links in the schedule, and the top promo rotator is itself ticket-led ("USC UPSTATE BASKETBALL TICKETS ON SALE!" and "2027 HOME BASEBALL TICKETS ON SALE NOW!").',
        sportHub: 'Commercial on top, story-led below: a 4-tile top promo rotator leads with ticket offers, above the "Stories Grid." No provider named; schedule entries have generic "Watch video" links. A mid-page brand-slogan banner reads "CHAMPIONS PLAY HERE" / "Invest in Upstate student-athletes."',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is effectively absent — the only homepage text match is a "NIL Disclosure" link in the nav; no NIL tile, section, or header link.',
      },
    steal: 'The "CHAMPIONS PLAY HERE" brand-slogan banner paired with "Invest in Upstate student-athletes" — brand and giving in one line.',
  },
  // Winthrop Eagles — id 331 (homepage capture only, Nov 20, 2026)
  331: {
    schoolId: 331,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '"Latest Videos" leads with "25-26 Winthrop Eagles Year in Review" (6 months ago, stale as the lead video).',
        photos: '"Photo Galleries" is populated: "WBB vs. Johnson C. Smith" (20 photos, 10 days ago), "MBB vs. North Dakota" (22, 12 days ago), "WSOC vs. Longwood" (132, 2 months ago).',
        social: 'Empty — the "Social Media" section is a heading over a blank black band with no posts, feeds, or links in the page; only the header Facebook / X / Instagram / YouTube icons are present.',
      },
    pillars: {
        tickets: 'A Tickets dropdown in the maroon header nav, plus "Ticket Central" in Quick Links; no ticket promo in the hero (the Promo A slider is a "26-27 MEMBER GUIDE" Eagle Club rotator).',
        sportHub: 'Full-bleed "Top Stories" rotator above a scoreboard strip; scoreboard game links are collapsed toggles with no provider named.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is menu only — "Name Image and Likeness (NIL)", "Winthrop Eagle Exchange (NIL)" and "Official NIL Shop" appear in the nav menus; no dedicated homepage tile/section.',
      },
    steal: 'Populated photo galleries (newest 10 days ago) on a page whose lead video is 6 months old and whose social section is a blank black band — galleries carry the visual load.',
  },
  // Coppin State Eagles — id 332 (homepage capture only, Nov 20, 2026)
  332: {
    schoolId: 332,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'YouTube present (Season Ticket Promo; "COPPIN STATE HOMECOMING BASKETBALL 2025"; "COPPIN STATE WBB HITS RECORD 15TH 3-POINTER OF GAME VS. DSU").',
        photos: '"Photo Galleries" is a menu link only — no gallery preview on the homepage.',
        social: 'Populated "SOCIAL ZONE" with Instagram/Facebook filters, visible posts (e.g. "Introducing your Coppin State mens basketball team"), and "Load More Content." Social icons also in the header, footer, and sticky rail.',
      },
    pillars: {
        tickets: 'Header "TICKETS" menu, plus a "Coppin Basketball Season Tickets 2026-27" promo banner directly below the hero and a "SA BASKETBALL SEASON TICKET PROMO" video first in the YouTube carousel.',
        sportHub: '10-slide "Top Stories" rotator (volleyball quarterfinal sweep first). Streaming is the MEAC Network, named only in a social post ("watch it live on the MEAC Network!"); the header has a "WATCH/LISTEN" link and the schedule has Video links.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent — no "NIL" text found anywhere on the homepage.',
      },
    steal: 'The "Coppin Basketball Season Tickets 2026-27" promo banner directly below the hero — the ticket ask rides the story, not the hero.',
  },
  // Delaware State Hornets — id 333 (homepage capture only, Nov 20, 2026)
  333: {
    schoolId: 333,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No YouTube, video gallery, or photo gallery section named on the homepage — absent.',
        photos: 'No photo gallery section named on the homepage — absent.',
        social: 'A "Social Media" section lists six "@hornetsdsu" entries with a Facebook filter and "Load More," but post images/text did not render — the feed area was mostly blank white in the viewport.',
      },
    pillars: {
        tickets: 'Header "Tickets" dropdown; no ticket promo in the hero (only a small "KC" promo ad below the calendar).',
        sportHub: 'Single-story hero (volleyball 3-2 win to advance to the semi-finals). "Livestream" is in the Inside Athletics menu; the calendar has a "Live video" link for Men\'s Basketball vs Niagara, Nov 20, 7:00 PM. The MEAC Network appears only on the splash, not the homepage.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL appears only as "Name, Image, and Likeness (NIL)" in the Inside Athletics menu — not a header button.',
      },
    steal: 'A single-story hero with a 3–2 Final score bug — the result is the hero, no rotator needed.',
  },
  // Howard Bison — id 334 (homepage capture only, Nov 20, 2026)
  334: {
    schoolId: 334,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No YouTube, video gallery, or photo gallery section on the homepage — absent. "Bison-Stories" feature stories are present ("From the Windy City to The Mecca"; "Leaving No Doubt").',
        photos: 'No photo gallery section on the homepage — absent.',
        social: 'The "Social Posts" section is empty — heading only, no posts rendered in the DOM or viewport. Header social icons (Facebook, X, Instagram, YouTube) are present and link out.',
      },
    pillars: {
        tickets: 'Header "Tickets" button; no ticket promo in the hero.',
        sportHub: '3-slide "Top Stories" rotator above a gameday scoreboard strip (scoreboard showed "LIVE NOW!" Women\'s Basketball 34–35 vs George Washington). No ESPN+, livestream, or "watch" text found on the homepage; no streaming section named.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is prominent — "NIL" is a top-level header menu button, alongside Sports, Inside Athletics, Tickets, Fans, Support HU, Bison Express.',
      },
    steal: 'The top-level header NIL button — the most prominent NIL placement in the conference.',
  },
  // Morgan State Bears — id 335 (homepage capture only, Nov 20, 2026)
  335: {
    schoolId: 335,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No video tiles listed — YouTube is only a filter. A "Top Videos" section was not seen on this homepage.',
        photos: 'Photo galleries present (6 named, with "LOAD MORE").',
        social: 'A "Social Media Stream / MEDIA WALL" with All / Instagram / Twitter / Galleries / YouTube filters, but only photo-gallery tiles were listed (e.g. "Seahawks Invitational", "MSU vs. Coppin State", "MSU vs. Loyola Maryland"); no social posts were visible. Social icons in a sticky bottom bar and "#TheMorganWay" in the footer.',
      },
    pillars: {
        tickets: 'Header "TICKETS" menu present. No ticket promo in the hero; a "Morgan State Gear Shop Now" promo rotator sits below the media wall.',
        sportHub: 'Rotating "Top Stories" carousel (7 slides), headline on MEAC Championship history vs Norfolk State. No ESPN+ anywhere in homepage text; "Stream" occurs only in the heading "Social Media Stream." The scoreboard has no Watch links shown in text.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent — no "NIL" in homepage text.',
      },
    steal: 'Six named photo galleries with Load More — the gallery wall does the work the media wall does not.',
  },
  // Norfolk State Spartans — id 336 (homepage capture only, Nov 20, 2026)
  336: {
    schoolId: 336,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '"Top Videos" present but stale — all four videos dated May 15 (e.g. "Weekly Press Conference #2 | Evan Helfrich", "Michael Vick Weekly Press Conference #1").',
        photos: '"Latest photos" present and fresher (MBB vs Randolph College, Nov 4; 2026 HBCU National Tennis Championship, Sept 25; Football, Sept 18; Volleyball vs ODU, Sept 1). A "Spartan Spotlight" feature slideshow is present.',
        social: 'A "Content Stream / SPARTAN SOCIAL" heading is present, but no posts rendered in the section (empty — heading and a "Skip Content Stream" link only). Social icons in the header (Instagram, Facebook, X/Twitter, YouTube).',
      },
    pillars: {
        tickets: 'Header "TICKETS" menu present; ticket promo in the hero rotator ("2026 Single Game Tickets on Sale Now" / "Season tickets on sale now"); per-game "Buy tickets" links in the scoreboard (Football vs Howard, MBB vs UNC Wilmington, WBB vs Appalachian State). Also a Nov 16 story: "Norfolk State Ticket Block for 2027 MEAC Basketball Tournament On Sale Now".',
        sportHub: 'Gameday hub: a scoreboard strip across the top, a promo rotator, then the lead block "KNOW BEFORE YOU GO / FOOTBALL VS. HOWARD / SAT. NOV. 21 12 PM DICK PRICE STADIUM." Streaming is the MEAC Network — named in the Aug 26 Top Story, in a "MEAC Network" rotator ad, and via "Watch Live" links in the scoreboard. No ESPN+ mention.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent — no "NIL" in homepage text.',
      },
    steal: 'The "KNOW BEFORE YOU GO" gameday hub with per-game Buy tickets links in the scoreboard — gameday info and the ticket ask in the same strip.',
  },
  // North Carolina Central Eagles — id 337 (homepage capture only, Nov 20, 2026)
  337: {
    schoolId: 337,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: '"Live Audio/Video" is a Fan Zone footer-menu item; no audio player embedded on the homepage itself.',
        video: '"NCCU EAGLES VIDEOS": "NCCU FB Weekly Press Conference Week 13 vs MSU", "MBB vs VUL Postgame Highlights", "MBB vs Virginia-Lynchburg Postgame Interview", "VB vs Elon Postgame Interview".',
        photos: 'Photo galleries in Eagles Nest, e.g. "Football vs. Howard" (Oct 31, 2026), "Football vs. William & Mary" (Oct 10, 2026), "Football vs. East Carolina" (Sept 29, 2026).',
        social: '"NCCU EAGLES NEST" — populated. Instagram posts from @nccuathletics, e.g. "MATCH DAY: Postseason Mode - Activated! … Friday, Nov. 20, 2026 vs Delaware State (MEAC Quarterfinals)" and "Congrats to the Eagles\' All-MEAC volleyball honorees!", mixed with photo galleries and headlines; filters All / Twitter / Instagram / Galleries / Headlines.',
      },
    pillars: {
        tickets: 'Header "TICKETS" menu present, plus a sticky bottom bar with a "TICKETS" link and per-event "BUY TICKETS" links (Football vs Morgan State, MBB vs Carolina U). No ticket promo in the hero.',
        sportHub: 'Story hero (volleyball quarterfinal) over a volleyball action photo, with a scoreboard strip above the header. ESPN+ is named in the Top Stories list ("Wrap Up Road Stretch at UNCG — Women\'s Basketball / November 18, 2026 / ESPN+ / Live Stats"); "Watch Live" links appear per event in the scoreboard/events list.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is menu only, not a homepage tile/section — the "Inside Athletics" menu lists "Name, Image and Likeness (NIL)" and "Eagle Exchange".',
      },
    steal: 'The populated Eagles Nest feed (Instagram + galleries + headlines in one stream) with current video — the conference\'s liveliest single section.',
  },
  // South Carolina State Bulldogs — id 338 (homepage capture only, Nov 20, 2026)
  338: {
    schoolId: 338,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Video present and fresh — 4 items, Nov 9–16, 2026 ("Bulldog Press Conference Chennis Berry Week 13 11-16-26", "The Chennis Berry Show S03 E11", etc.).',
        photos: 'Photo galleries present, mixed — newest "MEAC Champions / THREE PEAT MEAC CHAMPIONS" (Football, Nov 14), then June 15, June 1 and May 19, 2026.',
        social: 'Feed populated (6 posts, with Load More), Instagram/Facebook/X/YouTube icons in the header and a SOCIAL MEDIA column. The MEAC volleyball All-Rookie post appears twice among the first three tiles.',
      },
    pillars: {
        tickets: 'Header TICKETS menu link, plus "Buy Season Tickets Now" in Quick Links. No ticket promo in the hero/Top Promo.',
        sportHub: '3-column Sidearm layout (events strip on top, Quick Links left, Top Promo + Top Stories centre, Social right). Hero is a football title story; one story thumbnail carried "WATCH LIVE ON THE MEAC NETWORK"; ESPN+ only in the collapsed FAN ZONE menu.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is named — "NIL Opportunities" in the visible QUICK LINKS sidebar and in the FAN ZONE menu. No dedicated tile/header placement.',
      },
    steal: 'The 3-column layout with Quick Links sidebar carrying "NIL Opportunities" and "Buy Season Tickets Now" in view at once.',
  },
  // Maryland Eastern Shore Hawks — id 339 (homepage capture only, Nov 20, 2026)
  339: {
    schoolId: 339,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Video present but stale — latest is May 2, 2026 ("Esteban Torres Interview (5/1/26)"), then Apr 30, Apr 18, Apr 17, 2026 (baseball/men\'s volleyball interviews, ~6.5 months old).',
        photos: 'Photo galleries: absent — no photo-galleries section on the homepage.',
        social: 'Feed empty/absent. "GET SOCIAL" shows only Twitter / Facebook / Instagram headings over a background photo — no posts rendered in that section. Social links also appear per team in the menus.',
      },
    pillars: {
        tickets: 'Header TICKETS link (plus Hometown Ticketing in the footer). No ticket promo in the hero.',
        sportHub: 'Story-led rotator (volleyball season finale first, then men\'s basketball). No ESPN+, MEAC Network, or other provider appears on the homepage or in the FAN ZONE or ATHLETICS menus; the FAN ZONE menu has only a generic "WATCH" link.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent — no "NIL" anywhere on the homepage or in the Fan Zone/Athletics menus.',
      },
    steal: 'The header brand slogan "HAWK ATHLETICS | #SOARABOVEANDBEYOND" — the brand line does the work the empty social section does not.',
  },
  // Grand Canyon Lopes — id 340 (homepage capture only, Nov 20, 2026)
  340: {
    schoolId: 340,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Video present via the social/media stream (video tiles "MSOC vs San Diego NCAA Tournament", "WBB at Santa Clara"); no standalone video-gallery section was observed.',
        photos: 'No standalone photo-gallery section; "Photo Galleries" is a Quick Link only.',
        social: 'Populated — SOCIAL section with Instagram/Facebook/YouTube posts (e.g. "Magic Strikes Again San Diego", "You get the picture."), All Media/Instagram/YouTube/Galleries/Facebook filters and "Load More"; Facebook/Instagram/Twitter icons in the menu.',
      },
    pillars: {
        tickets: 'Header TICKETS button (opens in new window) and a TICKETS menu item. No ticket promo in the hero; scoreboard has a Tickets link for WBB at SMU.',
        sportHub: 'Story hero ("Cardiac Lopes make NCAA magic at San Diego again") under a three-tile commercial strip (MW+ "STREAM LIVE GAMES / SUBSCRIBE NOW!", "GCU x JESUS WON", "SUBSCRIBE TO THE LOPES ON YouTube"). Featured Story: "MW+ launches as exclusive streaming home of GCU, MW".',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is named — "NIL Marketplace" in Quick Links, plus Opendorse profiles in "Meet the Lopes". Not in the header.',
      },
    steal: 'The three-tile promo strip (MW+ / "GCU x JESUS WON" / YouTube subscribe) — three asks, one strip, above the story.',
  },
  // San Jose State Spartans — id 341 (homepage capture only, Nov 20, 2026)
  341: {
    schoolId: 341,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'The app hero copy includes "LIVE IN-GAME AUDIO"; no audio player embedded on the homepage itself.',
        video: '"SPARTANS VIDEOS", 4 current videos dated Nov 18–19, 2026.',
        photos: 'Photo galleries: absent — no gallery/photo section or link was found.',
        social: 'Absent — no social feed and no social icons/links were found in the homepage text or footer. The only follow mechanism is the "KEEP UP WITH THE SPARTANS" newsletter signup.',
      },
    pillars: {
        tickets: 'Header TICKETS dropdown, plus header links "2026 FOOTBALL PROMOS" and "2026 BASKETBALL PROMOS"; the app hero copy includes "TICKETS", and the Football vs UNLV event has a Tickets link. No standalone hero ticket promo.',
        sportHub: 'Commercial/promo-led hero: an app-download banner ("THE OFFICIAL SAN JOSÉ STATE SPARTANS APP / DOWNLOAD NOW"), story carousel below it. MW+ has a dedicated "JOIN MW+ AND SUPPORT SJSU!" section with "Watch Now", plus FAN ZONE menu links "MW+" and "How To Watch MW+".',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL only in the FAN ZONE menu — "SJSU NIL Marketplace". Not on the homepage body, header or hero.',
      },
    steal: 'The dedicated "JOIN MW+ AND SUPPORT SJSU!" section — the stream pitch as its own section, not a tile.',
  },
  // Air Force Falcons — id 342 (homepage capture only, Nov 20, 2026)
  342: {
    schoolId: 342,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '"Falcon Videos", 5 videos including "Football Press Conference - November 17th, 2026".',
        photos: 'Photo galleries only via a FANS menu link ("Photo Galleries"); no photo-gallery section on the homepage.',
        social: 'Feed empty — "Falcon Social" sidebar has Instagram/Facebook toggle buttons and a heading "Air Force Academy Instagram", but no posts rendered in the DOM or visible area. Header has Instagram/Facebook/Twitter icons, and the TEAMS menu has per-team social links.',
      },
    pillars: {
        tickets: 'Header "Tickets" utility link and a main-nav TICKETS dropdown (Purchase Tickets, Football/Hockey/Basketball/Volleyball/Wrestling tickets, SeatGeek). Calendar has "Buy Tickets" for Football vs UTEP, Fri Nov 20, 6:00 PM MT. No ticket promo in the hero.',
        sportHub: '"Top Stories" rotator (men\'s water polo quarterfinal first). MW+ promo carousel tiles 1/9 and 6/9, "MW+ Streaming Now", plus FANS > Stay Connected links for "MW+" and "Air Force+". No ESPN+ named.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL absent — no "NIL" in the homepage text or in the FANS/DEPARTMENT menus checked.',
      },
    steal: 'The TICKETS dropdown that lists tickets by sport (Football/Hockey/Basketball/Volleyball/Wrestling) — one menu, every ticket door.',
  },
  // UC Davis Aggies — id 343 (homepage capture only, Nov 20, 2026)
  343: {
    schoolId: 343,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Video section present — 3 football videos, Nov. 9–16, 2026, with Load More.',
        photos: 'No dedicated photo-gallery section found.',
        social: 'Populated Tagboard embed (#GOAGS, ucdavismbb, ucdaviswbb, ucdavisfootball, etc.); Instagram/X/Facebook/YouTube icons in the header.',
      },
    pillars: {
        tickets: 'Header TICKETS nav dropdown (not a button); "Buy tickets" links in the schedule. No ticket promo in the hero/promo rotator (promo slide was Jr Aggie).',
        sportHub: 'Rotating Top Stories slider (women\'s basketball home game first). MW+ ad logo atop the Calendar, "Watch on MW+" under Fans, plus "How To Watch." No ESPN+.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL menu only — Inside Athletics > "Name, Image and Likeness (NIL)," plus "Aggie Leverage"; no homepage tile.',
      },
    steal: 'The populated Tagboard social embed (#GOAGS) — one embed carrying the whole social job.',
  },
  // Hawaii Rainbow Warriors — id 344 (homepage capture only, Nov 20, 2026)
  344: {
    schoolId: 344,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No dedicated video section found.',
        photos: 'Photo Gallery present — 6 galleries (e.g. "Football: UH vs. UNLV," "2026 NCAA Championship Match") with "VIEW ALL GALLERIES."',
        social: 'Social Zone populated — 2 posts visible plus "LOAD MORE CONTENT," All/Instagram filters.',
      },
    pillars: {
        tickets: 'Header TICKETS link, Quick Links Tickets, and the lead story/splash is the ticket promo: "2 FOR $30" football Senior Night vs. Sacramento St., Nov. 28, "\'OHANA PACKS" $99, basketball Pick & Roll "10 FOR $99 / 10 FOR $49."',
        sportHub: 'Commercial/promo-led: no traditional hero carousel; a Recent Results ticker sits above the header, and the lead Latest News story is the same ticket promo as the splash ("SCORE BIG WITH GREEN & BLACK FRIDAY TICKET OFFERS"). MW+ — "Watch on MW+" in Quick Links. NIL is in Quick Links: "\'Bows NIL."',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL on the homepage — Quick Links: "\'Bows NIL."',
      },
    steal: 'Green & Black Friday bundle pricing ("2 FOR $30" football Senior Night, "\'OHANA PACKS" $99, basketball "10 FOR $99 / 10 FOR $49") — priced bundles, not a generic ticket link.',
  },
  // UNLV Rebels — id 345 (homepage capture only, Nov 20, 2026)
  345: {
    schoolId: 345,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Featured Videos present — 4 videos, all dated Jul 31 (stale).',
        photos: 'No photo-gallery section on the homepage; "Photo Galleries" appears only as a Fans-menu link.',
        social: 'Feed absent and no header social icons; only a Quick Link "Follow on Social Media."',
      },
    pillars: {
        tickets: 'Header Tickets button (red pill), Quick Links "Buy Tickets," scoreboard "Buy Tickets" links, and the slideshow ticket promo ("FOOTBALL TICKETS NOW AVAILABLE!").',
        sportHub: 'Commercial/promo-led: lead NEWS article is the MW+ launch story ("UNLV Athletics Featured On New Mountain West Streaming Platform MW+," with "SUBSCRIBE TO MW+"), and the slideshow below is also promo ("FOOTBALL TICKETS NOW AVAILABLE!" and "WATCH THE REBELS ON MW+").',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL menu only — Fans > "Shop UNLV NIL Store" and About > "Name, Image & Likeness"; no homepage tile.',
      },
    steal: 'The red pill header Tickets button — the ticket ask is a colour, not a menu item.',
  },
  // Nevada Wolf Pack — id 346 (homepage capture only, Nov 20, 2026)
  346: {
    schoolId: 346,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Videos present — 4 items, e.g. "Behind the Mic: Herschel Turner\'s 72-yard TD run @ UTEP," indoor track facility tour.',
        photos: 'No photo-gallery section named on the homepage.',
        social: 'Feed effectively empty — footer has a "Twitter" tab, but its panel shows only a "Nevada Wolf Pack Athletics" header image, no tweets/posts. Facebook / Twitter / Instagram icon links are in the footer.',
      },
    pillars: {
        tickets: 'Header "TICKETS" menu, plus a Tickets-by-sport dropdown section on the page. No ticket promo in the hero; a "Nevada Football Single Game Tickets on Sale" video appears in the Videos section.',
        sportHub: 'Story-led rotating "Top Stories" carousel (women\'s swimming relay victories first). MW+ only — dedicated promo tile below the story carousel: "THE FUTURE HOME OF MW+"; header/menu also has "Subscribe to MW+". No ESPN+ named; no "Watch" link observed.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL absent — no "NIL" in homepage text or header menus (Sports, Tickets, Shop, This Is Nevada, Fan Zone, Support Nevada).',
      },
    steal: 'The "THE FUTURE HOME OF MW+" promo tile — the stream pitch as a coming-soon tile under the story carousel.',
  },
  // New Mexico Lobos — id 347 (homepage capture only, Nov 20, 2026)
  347: {
    schoolId: 347,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: '"VIDEOS" section, 7 items Nov 9–20, e.g. "Lobo Coaches Show: Episode 12 (11/18/26)" (Nov 20). Video thumbnails rendered as black/blank boxes in the screenshot, with several images still pending.',
        photos: 'No photo-gallery section named.',
        social: 'Absent — no social feed section and no social icons/links found in the header or footer as observed.',
      },
    pillars: {
        tickets: 'Header "TICKETS" menu and a teal "TICKETS" button top-right. No ticket promo in the hero.',
        sportHub: 'Commercial/promo-led: the top hero is an MW+ banner ("NEW STREAMING HOME OF LOBO ATHLETICS / STREAM LIVE GAMES • SUBSCRIBE NOW! / WATCH.THEMW.COM"), above a rotating story carousel. ESPN+ also named in the schedule (ESPN+ logo for MBB at Wichita State), and FS1 for football at Wyoming.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL absent — no "NIL" in homepage text; header menus are Sports, Inside Athletics, Tickets, Gameday, Lobo Club/Donate, Shop, Fans, Lobo TV, Student-Athletes.',
      },
    steal: 'The MW+ hero banner with a direct subscribe URL (WATCH.THEMW.COM) — the stream ask carries its own address.',
  },
  // UTEP Miners — id 348 (homepage capture only, Nov 20, 2026)
  348: {
    schoolId: 348,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Videos present but stale — "Miner Vision," 3 items: "Open Practice 8/15," "UTEP joins the Mountain West Conference | Press Conference," "Women\'s Clinic 2026."',
        photos: 'No photo-gallery section on the page body; "Photo Galleries" is named only as a navigation link.',
        social: 'Feed populated — "Content Stream" / "#PicksUp / MINER #MOMENTS" (WePlayed), with four Women\'s Volleyball clips dated Nov 6, 2026. Twitter/X, Facebook and Instagram icon links are in the header and footer.',
      },
    pillars: {
        tickets: 'Header "TICKETS" link and Quick Links "Tickets." No ticket promo in the hero; Promo A is a ticket/season-ticket promo lower on the page.',
        sportHub: 'Commercial/promo-led: hero is the MW+ graphic ("STREAM LIVE GAMES / SUBSCRIBE NOW!"), its story caption stale ("Mountain West Launches MW+ Streaming Platform Powered by Kiswe," dated Aug 10). Current story carousel below leads with rifle. MW+ in the hero, in Quick Links, and as Promo B. The CW is named for football vs. Air Force in More News.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL present — a top-level "NIL" link in the main header navigation (Sports, Tickets, Athletics, Fans, Shop, NIL, MAC), and "Name, Image, and Likeness (NIL)" in the footer/navigation text.',
      },
    steal: 'The top-level header NIL link — the only school in the conference with NIL in the header navigation.',
  },
  // Wyoming Cowboys — id 349 (homepage capture only, Nov 20, 2026)
  349: {
    schoolId: 349,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Video ageing — WYO-VISION latest Oct 6, slider Sep 24–Jul 28.',
        photos: 'No gallery section.',
        social: 'Populated — "#GOWYO ON INSTAGRAM" (4 posts, Nov 5–17).',
      },
    pillars: {
        tickets: 'Gold header button plus Buy Tickets links in the schedule.',
        sportHub: 'Commercial/promo-led: single promo "WYOMING BASKETBALL MINI PLANS ON SALE NOW"; lead story below it: "LIGHT UP LARADISE" (Nov 20 football vs New Mexico). MW+ — header logo, Jul 1 launch story, "Watch Cowboy Football on MW+". ESPN+ absent entirely.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL menu-only ("NIL – Wyoming Exchange").',
      },
    steal: 'The populated #GOWYO Instagram section — four recent posts carrying the social job on a promo-led page.',
  },
  // Abilene Christian Wildcats — id 350 (homepage capture only, Nov 20, 2026)
  350: {
    schoolId: 350,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Video fresh — YouTube grid, latest Nov 19 postgame.',
        photos: 'No gallery section on the homepage.',
        social: 'No embedded social feed — header icons only.',
      },
    pillars: {
        tickets: 'Header Tickets button, plus a football countdown with a buy-now link. No ticket promo in the hero (the hero is the sponsor ad).',
        sportHub: 'Commercial — the sole rotator slide is a sponsored ad ("RALLY CATS — CLICK HERE TO SIGN UP TODAY!", United Supermarkets), not a story. ESPN+ menu/footer only — no ESPN+ in the hero or homepage body.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent entirely — no "NIL" in homepage text or menus.',
      },
    steal: 'The football countdown with a buy-now link — the ticket ask rides the countdown, not the hero.',
  },
  // Austin Peay Governors — id 351 (homepage capture only, Nov 20, 2026)
  351: {
    schoolId: 351,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Video recent; photo galleries present and fresh.',
        photos: 'Photo galleries present and fresh.',
        social: '"#LETSGOPEAY" section is EMPTY — a Domino\'s ad only, no posts.',
      },
    pillars: {
        tickets: 'Header Tickets button. No ticket promo in the hero.',
        sportHub: 'Story / gameday hub: "No. 14 Austin Peay Set for Regular-Season Finale at Central Arkansas" with "Watch Live | ESPN+" in the hero itself — the most prominent ESPN+ placement in the conference.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is in the header nav — "NIL Stacheville Exchange" and "APSU NIL Merchandise".',
      },
    steal: '"Watch Live | ESPN+" inside the hero story itself — the stream link where the story is, not in a menu.',
  },
  // Eastern Kentucky Colonels — id 352 (homepage capture only, Nov 20, 2026)
  352: {
    schoolId: 352,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Video fresh — "EKU Sports Weekly Ep 13".',
        photos: 'No gallery section on the homepage.',
        social: '"Colonels Media" is populated; a "#GoBigE" section is heading-only, no posts.',
      },
    pillars: {
        tickets: 'Header "Buy Tickets" link, plus the ticket promo in the hero rotator ("EKU football single game tickets on sale now").',
        sportHub: 'Commercial — a Promo rotator leads, not a story (CG Bank ad first, then the football single-game ticket promo). ESPN+ menu-only — "COLONEL ALL ACCESS ESPN+"; no ESPN+ in the hero or homepage body.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent entirely — no "NIL" in homepage text or menus.',
      },
    steal: 'The ticket promo in the hero rotator — the story can wait until below the fold; the ticket offer leads.',
  },
  // Tarleton State Texans — id 353 (homepage capture only, Nov 20, 2026)
  353: {
    schoolId: 353,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'YouTube present (latest Nov 16 press conference).',
        photos: 'Photo galleries present but their images failed — text-only purple placeholders.',
        social: '"#TEXANNATION" is populated — 6 Facebook posts, dated 11/20.',
      },
    pillars: {
        tickets: 'Header Tickets link. No ticket promo in the hero.',
        sportHub: 'Story / gameday hub — badly broken: "Tarleton State plays for outright UAC title and perfect regular season on Saturday at North Alabama"; the rotator images failed (blank purple/white panels, 7 images unavailable). ESPN+ named only inside a story — no ESPN+ tile, badge, or menu link on the homepage.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is menu-only.',
      },
    steal: 'The populated #TEXANNATION Facebook feed (6 posts, same-day) on the most broken page in the conference — the feed works when the images do not.',
  },
  // Little Rock Trojans — id 354 (homepage capture only, Nov 20, 2026)
  354: {
    schoolId: 354,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No video or gallery section on the homepage.',
        photos: 'No video or gallery section on the homepage.',
        social: 'No social feed — footer icons only.',
      },
    pillars: {
        tickets: 'Header Tickets link, plus a mid-page "SECURE 2026-27 SEASON TICKETS!" banner.',
        sportHub: 'Story hero: 3-slide rotator, lead "MEN\'S BASKETBALL SECURES ROAD WIN AT JACKSONVILLE." ESPN+ named only as a per-event schedule link (wrestling vs Air Force).',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is absent entirely — no "NIL" anywhere on the homepage.',
      },
    steal: 'The clean, fast WMT build with a mid-page "SECURE 2026-27 SEASON TICKETS!" banner — the conference\'s cleanest load, and the ticket ask still gets a banner.',
  },
  // Central Arkansas Bears — id 355 (homepage capture only, Nov 20, 2026)
  355: {
    schoolId: 355,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No video or gallery section on the homepage.',
        photos: 'No video or gallery section on the homepage.',
        social: '"BEARS SOCIAL" is EMPTY — heading and a Skip link only, no posts.',
      },
    pillars: {
        tickets: 'Header Tickets button.',
        sportHub: 'Story hero ("SUGAR BEARS SUFFER SETBACK AGAINST TIGERS"). ESPN+ / ESPN3 menu-only. NIL is menu-only, including a "City of Conway-UCA NIL Program" link.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is menu-only, including a "City of Conway-UCA NIL Program" link.',
      },
    steal: 'The "City of Conway-UCA NIL Program" menu link — a town-and-gown NIL tie, even if it is only a menu link.',
  },
  // North Alabama Lions — id 356 (homepage capture only, Nov 20, 2026)
  356: {
    schoolId: 356,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'Video EMPTY — "There are currently no videos" under LION VIDEOS.',
        photos: 'A Photo Galleries heading with no galleries listed.',
        social: 'The Twitter section is a heading only — no feed content populated. Social links exist only in nav menus; no social icons in the footer.',
      },
    pillars: {
        tickets: 'Header "TICKETS" menu and per-event "Buy tickets" links. No ticket promo in the hero — the promo rotator is sponsor ads (Medical Associates, Bojangles, Renaissance Shoals, Coke).',
        sportHub: 'Story hero: 6-slide Top Stories rotator (men\'s basketball home stand first). ESPN+ named in the Content Stream banner ("College Basketball Live on ESPN+") and in the menu under Live Coverage > ESPN+; event rows also offer generic "Live video."',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is a header menu item, plus "Name, Image and Likeness (NIL)" under Inside Athletics > Student-Athletes.',
      },
    steal: 'The "College Basketball Live on ESPN+" Content Stream banner — the clearest streaming invitation in the conference.',
  },
  // UT Arlington Mavericks — id 357 (homepage capture only, Nov 20, 2026)
  357: {
    schoolId: 357,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'VIDEOS: 7 items, latest "MBB Highlights of 83-72 win over Southern Miss 11.17.26" (5h ago).',
        photos: 'GALLERIES: 3 shown, newest "UTA Baseball Golf Tournament" (230 images, Oct 19); the other two are "WAC ITF Day One/Two" from Feb 27–28 — stale.',
        social: 'Populated — "#BUCKEM" Instagram feed with 6 posts, Nov 16–19, @utamavs, with a "Load More Instagram Posts" button. Header icons for Facebook, Twitter (X), Instagram, YouTube.',
      },
    pillars: {
        tickets: 'Header "TICKETS" menu plus a header "Tickets" button; a ticket promo in the ad rotator below More News ("Buy tickets today web banner") and "Buy Tickets Today" in Quick Links.',
        sportHub: 'Story hero: a single Top Story (1/1, not a rotator) above a scoreboard strip, with GAME NOTES / Live Stats / Watch Live links. ESPN+ is NOT named anywhere on the homepage — only generic "Watch Live" / "Watch" links.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is a prominent header button, "NIL DEALS" (top right, with Shop / Donate / Partners buttons), not just a menu item.',
      },
    steal: 'The prominent "NIL DEALS" header button paired with fresh video (5 hours old) and a populated #BUCKEM Instagram feed — the conference\'s strongest NIL + video + social combination.',
  },
  // West Georgia Wolves — id 358 (homepage capture only, Nov 20, 2026)
  358: {
    schoolId: 358,
    audited: CAPTURE_ONLY_DATE,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 20 capture.',
        video: 'No dedicated video section (only per-event "Live video" links, one "Play Video" hero slide, and Live Video/Podcasts in the footer Multimedia menu).',
        photos: 'Photo Galleries are present and fresh: 6 galleries, Oct 24–Nov 14, 2026 (newest "FB vs North Alabama | Nov. 14th, 2026").',
        social: 'No social feed — absent. Only icon links in the header bar and footer ("Like us on Facebook," "Follow us on Instagram," "Follow us on Twitter," "Subscribe on YouTube").',
      },
    pillars: {
        tickets: 'Header "TICKETS" button, plus a "Ticket Central" ad tile directly under the hero.',
        sportHub: 'Story hero: 8-slide Top Stories / LATEST NEWS rotator, lead slide an academic volleyball award. A separate brand-slogan tile below the hero reads "Wolves Winning in the West." ESPN+ named in a promo tile/link below the hero — "Watch on ESPN+" — alongside a Ticket Central ad. A scoreboard strip sits above the header.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is footer-only — the word "NIL" does not appear on the homepage; only the footer Athletics menu link "Name, Image, and Likeness Information." No NIL in the header or as a tile.',
      },
    steal: 'The "Watch on ESPN+" promo tile beside a Ticket Central tile directly under the hero — stream and tickets side by side, plus fresh photo galleries (6, Oct 24–Nov 14) and the "Wolves Winning in the West" brand tile.',
  },
  // Utah State Aggies — id 359 (homepage capture only, Nov 14, 2026)
  359: {
    schoolId: 359,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Multimedia > LISTEN: \'Radio Network\' and \'Coaches Shows\'.',
        video: 'VIDEOS section; newest Oct 28, 2026 — \'Cameron Walker Post-Game Press Conference - Utah State 120, UC San Diego 82\' (dated 10/28/26 in the page, although the 120-82 game was Nov 13 — date looks wrong/stale).',
        photos: 'No gallery section on the homepage; only a link under Multimedia > CONNECT: \'Photo Galleries\'.',
        social: 'Header icons for Twitter and Instagram only (no Facebook/YouTube in header); Multimedia menu has a \'Social Media\' link. No embedded feed on the homepage.',
      },
    pillars: {
        tickets: 'Heavy/persistent — utility Tickets link, nav Tickets, football single-game-tickets hero promo, Buy Tickets toggles in the schedule.',
        sportHub: 'No top strip. Mid-page SCHEDULES carousel with results (Final Nov 13: volleyball 3-0 at Gonzaga, MBB 120-82 vs UC San Diego) and a \'Filter games by sport\' dropdown. Streaming: no platform named — generic \'Watch Live\' and \'Live Events\' links only.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. Donate utility link; Big Blue Club nav item and hero promo. NIL is not named anywhere on the homepage.',
      },
    steal: 'Themed-series in-page branding — the \'LONE STAR Series / U STATE VS. TCU\' right-rail treatment turns a single game into a named event.',
  },
  // Gonzaga Bulldogs — id 360 (homepage capture only, Nov 14, 2026)
  360: {
    schoolId: 360,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'No podcast/radio named on the homepage except Quick Link \'The Mark Few Show\' (opens in new window).',
        video: 'Videos section, 7 items; newest Nov 9, 2026 — \'Without Limits: 2026-27 Gonzaga Women\'s Basketball Episode 1\'.',
        photos: 'No gallery section or gallery link visible on the homepage.',
        social: 'Header icons Facebook, Twitter/X, Instagram, YouTube. No embedded feed — below Videos a full-width Spokane skyline band with a \'GONZAGA\' wordmark, an empty heading and a single clickable group: a brand/social banner with no feed content rendered.',
      },
    pillars: {
        tickets: 'Medium-heavy — persistent header Tickets button, \'Buy Tickets\' links in the schedule (MBB vs LSU Nov 14; WBB vs Montana Nov 18) and a \'Men\'s Basketball Season Ticket Waitlist\' Quick Link.',
        sportHub: 'No top strip. Mid-page \'Live Game Center\' directly under the hero (MBB vs LSU, live 20-15 at capture) plus a Schedule with Upcoming/Results tabs. Streaming: no platform named — generic \'Watch video\' only.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. Top-level nav item \'Zags Athletic Giving\'. NIL is not named on the homepage.',
      },
    steal: 'Priced, on-homepage Team Shop (including Pac-12 merch at $34.99/$43.99) plus a Live Game Center directly under the hero — commerce and live score without leaving the page.',
  },
  // Texas State Bobcats — id 361 (homepage capture only, Nov 14, 2026)
  361: {
    schoolId: 361,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: '\'LISTEN\' live-audio links per game (e.g. \'Live audio for Football vs Fresno State\') and an \'ALL PODCASTS\' link in On Demand.',
        video: '\'Texas State On Demand\' section with \'ALL VIDEOS\', \'ALL GALLERIES\', \'ALL PODCASTS\' links; no dates shown on the On Demand tiles in view.',
        photos: 'On Demand carousel includes gallery tiles and an \'ALL GALLERIES\' link. Newest gallery date visible: \'WGO Yvonne Chamness & Grace Quintanilla | May 7, 2026\' (over six months old).',
        social: 'Header FOLLOW button only (dropdown, not expanded); no header social icons and no embedded feed on the homepage.',
      },
    pillars: {
        tickets: 'Heavy/persistent — header TICKETS button, TICKETS link in the countdown, TICKETS on the gameday splash, and Buy tickets links per game in the schedule.',
        sportHub: 'Top LIVE strip (\'LIVE / Football / NOV 14, 2:30 PM / Texas State vs. Fresno State / FOLLOW LIVE\') plus a next-game countdown (vs Washington State, Nov 21) and a mid-page schedule with Upcoming/Results tabs and a Pac-12 standings table. Streaming: ESPN2 on the top story and \'ESPN Plus Live video\' for MBB at UTSA.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. Header DONATE button; Bobcat Club logo in the footer. NIL is a top-level nav item (NIL Player Shop, NIL Marketplace, NIL Program).',
      },
    steal: 'The gameday-hub stack — top LIVE strip + working next-game countdown + Pac-12 standings table on the homepage, and a top-level NIL nav (NIL Player Shop / NIL Marketplace / NIL Program).',
  },
  // Oregon State Beavers — id 362 (homepage capture only, Nov 14, 2026)
  362: {
    schoolId: 362,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: '\'Listen\' link on the WBB event; embedded \'Beaver Sports Podcast\' player (44:09, no date shown).',
        video: 'Videos present; newest dated Nov 13, 2026 (six shown, all Nov 13).',
        photos: '3 galleries named; newest \'Beaver Football vs Texas State\', 11/7/26.',
        social: 'No homepage social promotion at all — no header icons, no embedded feed, no mid-page section; \'Instagram\' and \'Follow\' return no matches on the page.',
      },
    pillars: {
        tickets: 'Nav item only + per-event \'Buy Tickets\' links; no persistent header Tickets button (Shop/Donate pills occupy the header instead).',
        sportHub: 'No top strip. Mid-page \'Schedule\' section with Upcoming/Results tabs (football at Boise State Nov 14, 3:00 PM; MBB \'vs Mississippi Valley State 11/13/2026 W 79-66\'). Streaming: no platform named in homepage text — only generic \'Watch\' links (\'USA SPORTS\' appears only inside the hero graphic image).',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. Header pill \'Our Beaver Nation - Donate\'. NIL is a top-level nav item plus ticker link \'Rev Share/NIL\'.',
      },
    steal: 'The orange promo ticker bar under the nav (\'Valley Challenge\', \'The WoodShop\', \'Gameday Promos!\', \'Dress Like The Beavs!\', \'WATCH: The Beaver Way\', \'Rev Share/NIL\'): one scannable line covering merch, experience, video and NIL.',
  },
  // Washington State Cougars — id 363 (homepage capture only, Nov 14, 2026)
  363: {
    schoolId: 363,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: '\'Listen\' links on football/WBB events; \'Cougar Football Hour\' listed Nov 18, 6:00 PM PST.',
        video: 'Videos present; newest \'WSU MBB: Sebastian Akins | Northwest TV Postgame Interview | 11/14/26\', November 14, 2026.',
        photos: '3 galleries named — \'2026 Night With Cougar Athletics\', \'Longisa Wins 1500m NCAA Championship\', \'NCAA Outdoor Track & Field Championships\' — no dates shown (the latter two are June-era NCAA track content).',
        social: 'No homepage social promotion at all — header shows only search and calendar icons; no embedded feed, no mid-page social section; \'Instagram\' returns no matches.',
      },
    pillars: {
        tickets: 'Heavy — \'TICKETS\' is a top-level nav item, plus two mid-page promo carousels (\'MEN\'S BASKETBALL SINGLE-GAME TICKETS\'; \'MEN\'S BASKETBALL VS. DUKE\' with \'Get Tickets\'), plus a \'Tickets\' link on every schedule event.',
        sportHub: 'Top strip directly under the nav — \'All Sports Schedule\' + sport filter, 30 events (live volleyball vs Oregon State Nov 14; football vs Colorado State Nov 14, 7:30 PM PST). Schedule rows bundle Watch / Tickets / Listen / Live Stats / Game Notes, a sponsor and a theme (\'Wazzu Whiteout\', \'Crimson Out\', \'Built In Bohler\'). Streaming: no platform named — per-event links read only \'Watch on\'.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. Top-level \'COUGAR ATHLETIC FUND\' nav item. NIL is a top-level nav item.',
      },
    steal: 'Schedule rows that bundle Watch / Tickets / Listen / Live Stats / Game Notes plus a sponsor and a theme name (\'Wazzu Whiteout\', \'Crimson Out\', \'Built In Bohler\') into a single gameday line, under a 30-event scoreboard strip.',
  },
  // Boise State Broncos — id 364 (homepage capture only, Nov 14, 2026)
  364: {
    schoolId: 364,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Quick Links list \'Bronco Radio Network\' and \'Bronco Sports Podcast Network\'; a \'Podcast\' section shows only the \'Bronco Sports Podcast graphic\' and \'View All Podcasts\' — no episode title or date on the homepage.',
        video: 'Videos present; live \'Bronco Tailgate Show\', November 14, 2026; newest recorded \'Boise State vs. Oakland Game Highlights - Nov. 11, 2026\'.',
        photos: '3 galleries named — \'Governor\'s Proclamation College GameDay\', \'VB: Utah State at Boise State\', \'FB: Broncos Blast Rams\' — no dates shown.',
        social: 'Mid-page \'Social Zone\' with Instagram/Facebook toggle buttons — but the feed is empty: \'There are no instagram posts\', with a \'Load more content\' button.',
      },
    pillars: {
        tickets: 'Heaviest of the three — persistent header \'Tickets\' link, 5 of 10 hero slides ticket-led, \'Buy Tickets\' in Quick Links, plus a Fanatics merchandise ad.',
        sportHub: 'Top strip — \'Calendar\' with Events/Results toggle and a sport filter (FB 11.14.26 4 p.m. vs Oregon State; WSOC at #1 Utah State; MBB vs Nebraska Nov 15). Streaming: \'Broncos All-Access\' named in Quick Links; the live item is labelled only \'Watch / Live / Bronco Tailgate Show\'.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. Header \'Donate\' link + Quick Links \'Donate\'. NIL is not named on the homepage (Quick Links lists \'BroncoPRO\' with no expansion shown, so it is not claimed here as the NIL program).',
      },
    steal: 'The \'Quick Links\' utility rail beside the lead story (app, All-Access, radio, podcast network, BroncoPRO, stadium, tickets, donate) and making the gameday Availability Report the lead story.',
  },
  // Colorado State Rams — id 365 (homepage capture only, Nov 14, 2026)
  365: {
    schoolId: 365,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: '\'Podcasts\' link and \'Varsity Network App\' under GAME DAY > MEDIA, plus \'Live audio\' links in the Calendar.',
        video: 'RamVision; newest Nov. 11, 2026 — all three shown are Nov. 11 (\'Rams Win, You Win | 11.09.26\', \'Rams Win, You Win | 11.07.26\', \'Postgame Press Conference | Colorado State Football 11.08.26\').',
        photos: 'No gallery module on the homepage; only a \'Photo Galleries\' link under GAME DAY > MEDIA in the nav.',
        social: 'No homepage social promotion — no header icons, no embedded feed, no mid-page social section; only a \'Stay Connected\' link under MORE+.',
      },
    pillars: {
        tickets: 'Nav item only — no persistent colored header ticket button. Tickets recur as \'Buy tickets\' links in the Calendar and in a rotating promo banner below the hero (\'PURCHASE TICKETS\').',
        sportHub: 'No top strip. A right-rail \'CALENDAR\' (sponsored by Bank of Colorado) beside the hero, with Events/Results tabs (Nov. 14: MBB vs Loyola Chicago 11:30 a.m., volleyball at San Diego State 1:00 PM, football at Washington State 8:30 PM). Streaming: CBS Sports Network named in the hero graphic; otherwise generic \'Live video\' links. RamVision says \'WATCH ON YouTube\'.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. RAM CLUB top-level nav (\'Join Ram Club\', \'Membership Drive\', \'Pac-Mentality: $12 Membership\') and a \'Support CSU\' link under MORE+. NIL is a top-level nav item (\'NIL at CSU\', \'NIL Marketplace\', \'Athletes Thread\', \'Colorado State NIL Store\').',
      },
    steal: 'The right-rail Calendar beside the hero, giving today\'s games with Watch/Listen/Stats/Buy links per event in one glance.',
  },
  // Fresno State Bulldogs — id 366 (homepage capture only, Nov 14, 2026)
  366: {
    schoolId: 366,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: '\'Podcasts\' Quick Link and the Content Stream podcasts (\'THE PAWD\'), newest Nov. 5, 2026: \'THE PAWD: CHECKERBOARD CHATS (EZEKIEL AVIT, JAYON FARRAR)\'.',
        video: '\'BULLDOG MOMENTS\' (WePlayed highlights/playlists); newest Nov. 7, 2026 — all five shown are 2026/11/07.',
        photos: 'No gallery displayed on the homepage; only a \'Galleries\' filter button in the Content Stream and a \'Photo Galleries\' link in the hamburger menu.',
        social: 'No header icons and no embedded social feed. Only a \'Team Social Media Accounts\' link in the hamburger menu, and a mid-page \'Content Stream\' (\'BULLDOG BORN. BULLDOG BRED.\') which at capture showed only podcasts.',
      },
    pillars: {
        tickets: 'Persistent white \'Tickets\' button in the header, plus \'Buy Tickets\' links inside Calendar events and a Tickets menu in the hamburger nav.',
        sportHub: 'No top strip. Mid-page left column: \'Live Game Center\' — live at capture, \'Women\'s Basketball versus NAU\', \'42\' to \'34\' (\'Live Now!\') — plus a \'SCHEDULE\' Calendar with Upcoming/Results tabs. Streaming: no platform named in text; only generic \'Video for Women\'s Volleyball at Boise State\' and \'Game Center\' links.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. Header \'Donate\' link, hero slide \'Support Your \'Dogs\' (Bulldog Foundation), and Bulldog Foundation menu item \'Make a New Donation\'. NIL is a header link and Quick Link \'559 Exchange: NIL @ Fresno State\'.',
      },
    steal: 'The Live Game Center card (live score plus a red \'Game Center\' button) and the podcast-first Content Stream (\'BULLDOG BORN. BULLDOG BRED.\').',
  },
  // San Diego State Aztecs — id 367 (homepage capture only, Nov 14, 2026)
  367: {
    schoolId: 367,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: '\'San Diego Sports 760\' radio links (football, MBB) and \'Spanish Radio\' (football).',
        video: '\'TOP VIDEOS\', 5 items; newest Nov. 13, 2026: \'Behind the Baseline - Ep. 4\' (Women\'s Basketball) and \'Take Flight S03 Ep2\' (Men\'s Basketball).',
        photos: 'No gallery section or link — the word \'Galleries\' does not appear on the homepage.',
        social: 'No homepage social promotion — no header icons, no embedded feed, no mid-page social section; neither \'Social\' nor \'Instagram\' appears in the page text.',
      },
    pillars: {
        tickets: 'Heaviest of the three — persistent header \'Tickets\' link, a TICKETS nav dropdown, hero slides 1–3 all selling tickets, and per-event \'Tickets - SDSU vs. …\' links in Recent Events.',
        sportHub: 'No top strip. A \'RECENT EVENTS\' section lower down lists events with times but no live scores (Nov. 14 volleyball vs Colorado State, men\'s soccer at Oregon State, football vs Utah State 6:30 PM PST). Streaming: no platform named in text — generic \'Watch\' links; the only broadcast named is \'KUSI-CW\' for MBB vs New Mexico State.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. The word \'Donate\' does not appear on the homepage; giving is via the \'AZTEC CLUB\' nav only. NIL is a top-level nav item (\'AZTEC NIL\').',
      },
    steal: 'The \'RECENT EVENTS\' utility list with per-event Watch / Live Stats / Tickets / Radio / Preview / Program links, and the Pac-12 \'A New Chapter Begins\' hero slide as the cleanest conference-relaunch statement of the three.',
  },
  // Davidson Wildcats — id 368 (homepage capture only, Nov 14, 2026)
  368: {
    schoolId: 368,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: '\'Radio Network\' link in nav, plus \'Listen to audio\' links for men\'s basketball in the scoreboard. No podcast named.',
        video: 'Videos present; newest Nov 10, \'WEEK 12: INSIDE THE FILM ROOM w/ Davidson Head Coach Saj Thakkar presented by Atrium Health\' (6 videos, Nov 2–10).',
        photos: 'Galleries present; newest Nov 12, \'Will DuBose\'s Retirement Ceremony\' (12 images); 6 galleries, Nov 7–12.',
        social: 'Header icons (Facebook, Twitter/X, Instagram, YouTube) plus a dedicated \'Social Media\' section with All/Instagram/Facebook filters and embedded posts dated Nov 13, Nov 11 and Nov 9, with \'Load More Posts\'.',
      },
    pillars: {
        tickets: 'Nav item only (\'Tickets\' dropdown); header pills are Donate and Shop. A \'BB Ticket Ad\' in a mid-page promo carousel.',
        sportHub: 'Mid-page horizontal \'Scoreboard Slider\' directly below the hero — 8 events, sport filter, \'View Calendar\'; finals Nov 11–14 and upcoming Nov 14–17, with Watch/Listen/Stats/Recap/Box Score links. Streaming: no platform named — generic Watch video links only.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. Red \'Donate\' pill in the header (opens in new window). NIL is a link in the collapsed top-nav dropdowns.',
      },
    steal: 'Dedicated, dated Social Media, Photo Galleries and Wildcat Videos sections with counts and filters, which keep the homepage feeling current even below the hero.',
  },
  // Duquesne Dukes — id 369 (homepage capture only, Nov 14, 2026)
  369: {
    schoolId: 369,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Top-level \'Watch/Listen\' nav item, plus Listen links in the hero and schedule.',
        video: 'Videos present; newest (only video shown in the videos region): \'FOOTBALL POSTGAME: COACH SCHMITT (VS. MERCYHURST — 11.14.26)\', 38m ago.',
        photos: 'Galleries present; newest Nov 11, \'WOMEN\'S BASKETBALL VS. MARIST\' (33 images); 10 galleries, Oct 24–Nov 11.',
        social: 'Instagram only. No social icons in the header; a dedicated \'instagram\' section with \'Follow Us\', 6 embedded @GODUQUESNE posts (Oct 28–Nov 11) and \'Load More Instagram Posts\'.',
      },
    pillars: {
        tickets: 'Persistent header button AND hero-led. Header ticket-icon \'Tickets\' link, a \'TICKETS\' nav dropdown, a tickets link in the hero, \'Buy Tickets\' in the schedule, a \'Ticket Central\' quick link, and a promo carousel with \'Basketball Single-Game Tickets\' and \'FOOTBALL SEASON TICKETS\'.',
        sportHub: 'Right-rail \'SCHEDULE\' panel beside the hero, Upcoming/Results tabs, sport filter, 5 upcoming events (WVB at George Mason Nov 14, 3:00 p.m.; MBB vs Binghamton Nov 14, 7:30 p.m.). Streaming: ESPN+ — named in the hero overlay chip, in Quick Links (\'Watch ESPN+\'), and as a sponsor logo in the footer carousel.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. \'Support the Dukes\' top-level nav dropdown, plus Quick Links \'Duquesne Athletic Fund\'. NIL is a \'NIL Store\' in the mid-page Quick Links row.',
      },
    steal: 'The gameday-hub hero: one preview story carrying date/time, tickets, Watch/Listen/Live Stats, Media Center and Digital Program in a single block, paired with a right-rail Upcoming/Results schedule.',
  },
  // Fordham Rams — id 370 (homepage capture only, Nov 14, 2026)
  370: {
    schoolId: 370,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: '\'WFUVSports\' top-level nav link (Fordham\'s radio station) and \'Live audio\' links for women\'s basketball in the schedule. No podcast named.',
        video: 'Video present — newest Nov 13, the Bodija men\'s-basketball video tile in Top Stories. There is NO standalone videos section on the homepage.',
        photos: 'No on-page gallery section and no gallery items shown; \'Photo Galleries\' exists only as a link in a nav dropdown.',
        social: 'Header and footer icons only (Facebook, Instagram, Twitter/X, YouTube). No social feed or social section on the homepage.',
      },
    pillars: {
        tickets: 'Nav item only. \'Tickets\' is a plain link in the nav; no header ticket button and no ticket CTA in the hero or schedule.',
        sportHub: 'Mid-page vertical \'Schedule\' list below the parallax brand band (\'New York is my campus / Fordham is my school.\'), Events/Results tabs, 6 events Nov 14–19, all away, with Live video / Live audio / Live stats links. No results shown in the default view. Streaming: ESPN+ — in nav-dropdown links \'Atlantic 10 on ESPN+\' and \'Patriot League on ESPN+\'.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. Outlined \'Donate\' button (dropdown) in the header. NIL is in a nav dropdown: \'Fordham and NIL (Name, Image and Likeness)\' and \'Fordham NIL Policy\'.',
      },
    steal: 'The 5-tile Top Stories grid plus the full-width parallax brand line \'New York is my campus / Fordham is my school.\', which delivers a brand statement without a separate brand hero.',
  },
  // George Mason Patriots — id 371 (homepage capture only, Nov 14, 2026)
  371: {
    schoolId: 371,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: '\'Live audio\' links inside scoreboard game toggles; no podcast or radio section.',
        video: '\'Videos\' section; newest: \'PatriotVision Post Game Extra, Women\'s Volleyball vs. Duquesne, 11/13/26\' (also \'NOVA\'s Team All Access, Episode 14\' and an auto-playing \'My NIL Success Story\' video).',
        photos: 'No photo-gallery section on the homepage.',
        social: 'No social feed or section. Only small Facebook, X and Instagram icons tucked inside the INSIDE ATHLETICS nav dropdown (next to \'BRAND GUIDE\').',
      },
    pillars: {
        tickets: 'Nav item only (TICKETS in the main nav, plus a \'BUY TICKETS\' link in the scoreboard\'s left column). No persistent header ticket button.',
        sportHub: 'Top strip — a horizontal scoreboard carousel above the green header, showing live/final games (women\'s volleyball vs Duquesne LIVE; women\'s basketball vs North Carolina Central LIVE, 63–40), with sport filter and \'FULL SCHEDULE\'. Streaming: no platform named — generic \'Live video\' / \'Live audio\' / \'Live stats\' links only.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. PATRIOT CLUB in the main nav (giving/membership hub); no separate Donate button. NIL is a top-level nav link, plus a \'My NIL Success Story\' video.',
      },
    steal: 'The \'Patriots of the Week\' awards rail: a cheap, sponsor-friendly way to put individual athletes (not just teams) on the homepage.',
  },
  // George Washington Revolutionaries — id 372 (homepage capture only, Nov 14, 2026)
  372: {
    schoolId: 372,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'No podcast or radio links; there is a \'Broadcast Schedule\' link and \'Watch on ESPN+\'.',
        video: '\'LATEST VIDEOS\' section; newest: \'GW Men\'s Basketball vs. Harvard (Post-Game Press Conference) Nov 13\'.',
        photos: '\'LATEST PHOTOS\' — \'2026 Georgeys\', Baseball, Apr 28, with \'View Gallery\' and \'See All\'.',
        social: 'A \'STAY CONNECTED\' box in the right rail with Facebook, Twitter, Instagram and YouTube icons, plus per-sport Facebook/Twitter/Instagram links inside the SPORTS mega-menu.',
      },
    pillars: {
        tickets: 'Nav item only (TICKETS in the main nav, gold text; its dropdown lists season tickets, flex plans and single-game tickets). No persistent header ticket button.',
        sportHub: 'Top strip — a horizontal carousel of game cards at the top of the main content (Nov 13 finals: MBB vs Harvard 85–57, WVB vs Loyola Chicago 3–2; Nov 14 WBB vs Long Island 5:30 p.m.), each with media-overlay toggles and a navy \'Full Schedule\' button. Streaming: ESPN+ (\'Watch on ESPN+\' in the Fan Zone multimedia links) and Monumental Sports Network (headline: \'Monumental Sports Network to Broadcast Nine More GW Basketball Games in 2026-27\').',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. BUFF & BLUE FUND is a top-level nav item; a \'Supporting GW Student-Athletes / Support the Buff & Blue Fund today / Give Now\' box in the right rail, and a second \'Give to the Buff and Blue Fund\' parallax banner lower down. NIL is a top-level nav link.',
      },
    steal: 'The scoreboard carousel with per-game media-overlay toggles and a \'Full Schedule\' button: it turns the results strip into a gameday hub rather than a static ticker.',
  },
  // La Salle Explorers — id 373 (homepage capture only, Nov 14, 2026)
  373: {
    schoolId: 373,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'No podcast, radio or audio links on the homepage.',
        video: 'No video section on the homepage at all.',
        photos: 'No photo-gallery section on the homepage.',
        social: 'Footer social icons (Instagram, Facebook, Twitter, YouTube) beside the copyright line, plus a \'#GoExplorers\' Content Stream region mid-page — which rendered as a blank white box on load (no posts visible).',
      },
    pillars: {
        tickets: 'Persistent header button — gold \'Tickets\' pill button (with a ticket icon) in the header, plus a giant mid-page \'SEASON TICKETS ON SALE NOW / CLICK HERE TO RESERVE THE BEST SEATS IN THE HOUSE!\' banner.',
        sportHub: 'Top strip — a horizontal scoreboard carousel below the header (Nov 13: women\'s cross country 12th of 28, men\'s cross country 11th of 26 at NCAA Mid-Atlantic Regional; Nov 14 rowing and swimming), with a sport filter and \'View Full Schedule\'. Streaming: no platform named — scoreboard game toggles are generic buttons with no Watch/live-video links shown.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. Persistent gold \'Give\' pill button in the header (with a gift icon), next to Tickets. NIL is a top-level nav link.',
      },
    steal: 'The paired gold \'Tickets\' and \'Give\' pill buttons pinned in the header: the clearest ticket/giving call-to-action of the three, visible on every scroll position of the header.',
  },
  // Loyola Chicago Ramblers — id 374 (homepage capture only, Nov 14, 2026)
  374: {
    schoolId: 374,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: '\'Rambler Roundtable Podcast\' (text found on page) and a Varsity Network / Rambler Sports Network ad, \'LOYOLA MEN\'S BASKETBALL LISTEN ALL SEASON! WWW.RAMBLERSN.COM.\'',
        video: '\'Videos\' section, lead \'LOYOLA vs. WEST GEORGIA | The Cinematic Highlights\'; no dates shown on any video tile.',
        photos: 'No gallery/photo section or link found on the homepage.',
        social: '\'Content Stream\' section headed \'#LOYOLA RAMBLERS\' with \'LIKE US\' and two \'FOLLOW US\' links — but the feed tiles themselves were blank/empty white space in every view.',
      },
    pillars: {
        tickets: 'Nav item only (\'TICKETS\' dropdown in the maroon header bar; no persistent ticket button, no buy links in the scoreboard strip).',
        sportHub: 'Top strip — above the nav, showing Nov 14 men\'s volleyball at Lewis; Nov 17, 11 a.m., women\'s basketball at Illinois State; Nov 18, 7 p.m., men\'s basketball vs Wichita State, with \'Live video\'/\'Live stats\' links and a \'SEE SCHEDULE\' button. Streaming: no platform named — generic \'Live video\' links only.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. \'GIVE\' is a top-level nav link, plus a \'SUPPORT\' dropdown (Loyola Athletic Fund, Champions Club). NIL is in the SUPPORT dropdown: \'Name, Image, and Likeness Hub.\'',
      },
    steal: 'The top-strip next-games bar above the nav (date, opponent, time on three upcoming games with live links), the cheapest possible way to make \'what\'s next\' visible on every screen without surrendering the hero to it.',
  },
  // Saint Bonaventure Bonnies — id 375 (homepage capture only, Nov 14, 2026)
  375: {
    schoolId: 375,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'A \'Podcasts\' section: \'Bonaventure Baseball Rundown with Coach Razz (5/6/26),\' \'The Bonnies Breakaway - Spring Season Finale 2026,\' plus April 2026 episodes and a \'More Podcasts\' button.',
        video: '\'Video\' section, newest dated Nov 13: \'MBB | St. Bonaventure 88, Cornell 64 - Highlights\' (Nov 13), plus two Nov 12 press conferences, with a \'View All Videos on YouTube\' link.',
        photos: '\'Photos\' section: \'MBB | Win vs. Cornell (11/11/26),\' \'WBB | Win vs. Mercyhurst (11/11/26),\' \'WBB | vs. D\'Youville (11/4/26),\' \'MXC | 2026 A10 Championship (10/31/26),\' plus \'View All Photo Galleries.\'',
        social: 'Header icons top-right (Facebook, Twitter/X, Instagram, Watch) AND a full mid-page \'#Unfurl\' social feed with Instagram/Facebook filter buttons, posts from \'@GoBonnies\' and a \'Load More Social Posts\' button.',
      },
    pillars: {
        tickets: 'Nav item only (\'Tickets\' in the header; no persistent ticket button), reinforced by the Basketball Flex Packs banner ad.',
        sportHub: 'Right rail — \'Calendar\' rail with Upcoming/Results tabs; live at capture: \'Live Now — Men\'s Basketball vs Lafayette, 34–23,\' then Nov 19 swimming at Magnus Cup and basketball at Buffalo. Streaming: no platform named — a generic \'Watch\' icon link in the header only.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. \'Support Bona\'s\' is a top-level nav link, plus a \'Basketball Excellence Fund\' banner ad at the top of the page. NIL is in nav dropdowns: \'Bona\'s Exchange (NIL Registry)\' and \'Shop NIL Merchandise.\'',
      },
    steal: 'The right-rail Calendar with a \'Live Now\' score (34–23 vs Lafayette at capture) plus Upcoming/Results tabs, which keeps a live game visible while the reader scrolls the news.',
  },
  // Saint Joseph's Hawks — id 376 (homepage capture only, Nov 14, 2026)
  376: {
    schoolId: 376,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'A \'PODCASTS\' link in a nav dropdown, plus Live audio links for men\'s basketball games in the Events list.',
        video: 'No video section or video tiles on the homepage; only per-game \'Live video\' links in Events.',
        photos: '\'Photo Galleries\' section with \'VIEW ALL GALLERIES\': \'MEN\'S BASKETBALL ALUMNI EVENT — MBB | 10.10.26,\' \'2026 SAINT JOSEPH\'S WBB GOLF OUTING — WBB | 10.07.26,\' \'WELCOME BACK SAMUEL GOMPERS SCHOOL — ATH | 08.24.26,\' \'SOFTBALL FIELD AND LOCKER ROOM — SB | 08.08.26.\'',
        social: 'Header icons only — Instagram, Facebook, Twitter/X circles at the top right of the crimson header bar; no social feed or social section on the homepage.',
      },
    pillars: {
        tickets: 'Nav item only at header level (\'TICKETS\'), BUT the strongest in-page ticket presence of the three in its batch: the mid-page Events list carries a \'Buy tickets\' link on every home game entry.',
        sportHub: 'Mid-page — an \'Events\' list (with a \'CHOOSE SPORT\' filter and \'COMPOSITE SCHEDULE\' link) directly under Top Stories: Sat., Nov. 14, 6:30 PM MBB vs Penn; Sun., Nov. 15, 2:00 PM WBB at Drexel; Tue., Nov. 17, 7:00 PM MBB vs Wagner — each with Live audio (men\'s basketball only), Live video, Live stats and, for home games, Buy tickets. No scores shown. Streaming: no platform named — generic \'Live video\' links only.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. \'SUPPORT\' top-level nav, plus \'DONATION REQUESTS\' under Inside Athletics > Marketing. NIL is in the INSIDE ATHLETICS dropdown: \'NAME, IMAGE, AND LIKENESS (NIL).\'',
      },
    steal: 'The mid-page Events hub: a filterable, five-game schedule where every row carries Live audio / Live video / Live stats / Buy tickets, making the homepage itself the gameday action page rather than a news page with a ticket link.',
  },
  // Richmond Spiders — id 377 (homepage capture only, Nov 14, 2026)
  377: {
    schoolId: 377,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: '\'Live audio\' links in the scoreboard (Football vs Lehigh Nov 14; MBB at Virginia Tech Nov 16); no podcast or radio section.',
        video: '\'Watch / LATEST VIDEOS\' with a Richmond YouTube link; newest shown \'November 13, 2026 Southern Illinois Postgame,\' then Nov 12 WBB highlights and postgame vs Old Dominion.',
        photos: 'No gallery section or link on the homepage.',
        social: 'No social presence on the homepage — no social icons, feed or social section anywhere, including the footer.',
      },
    pillars: {
        tickets: 'Persistent header button — TICKETS is a text nav item in the red header, plus \'Buy Tickets\' first in the Quick Links panel.',
        sportHub: 'Top strip — a horizontal carousel (Nov 8–19) above the hero, with finals and scores (e.g. Nov 12 MBB 70–80 at Southern Illinois; Nov 12 WBB 90–67 over Old Dominion) and upcoming games (Nov 14 football vs #15/17 Lehigh 2:00 PM), a sport filter, and per-game Live video / Live audio / Live stats / Box Score links. Streaming: no platform named — generic \'Live video\' links only; \'SpiderTV\' appears as an in-house Quick Link.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. SUPPORT in the header nav. NIL is in the promo slider: \'Connect Directly With a Spider / SPIDERS NIL MARKETPLACE / Visit the Marketplace,\' plus an \'ATHLETE\'S THREAD STORE\' slide.',
      },
    steal: 'The Quick Links panel (Buy Tickets, Game Day at Robins Center, Game Day at Robins Stadium, SpiderShop, SpiderTV): a single scannable block that answers every fan\'s \'what do I need for Saturday\' question.',
  },
  // VCU Rams — id 378 (homepage capture only, Nov 14, 2026)
  378: {
    schoolId: 378,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: '\'Listen / Live audio for Men\'s Basketball at Santa Clara on November 19, 2026\'; no podcast named.',
        video: '\'WATCH CENTER\' YouTube section; newest \'Official VCU Health Jersey Patch Reveal,\' November 13, then WBB postgame presser vs Virginia Tech (Nov 12) and MBB press conferences vs NJIT (Nov 11, 10, 9).',
        photos: 'No photo-gallery section on the homepage.',
        social: 'Heavy and woven in. Top black bar has Facebook, X, Instagram, YouTube, Watch, Monitor and Stats icons beside \'#LetsGoVCU.\' Mid-page \'Content Stream / STAY CONNECTED / Follow Us on Social Media #LetsGoVCU\' embeds actual posts with All/Twitter/Instagram/Facebook filters. Footer repeats \'Follow Us On Social Media:\' with Facebook, Twitter, Instagram, YouTube links.',
      },
    pillars: {
        tickets: 'Persistent header — Tickets is a top-level nav item AND a ticket icon button in the gold header bar (alongside Donate and Shop icon buttons); a social post also pushes \'get your tickets at VCUTix.com.\'',
        sportHub: 'Mid-page schedule list — \'Events/Results / SCHEDULE / Cheer on Your Favorite Team,\' Nov 16–23 upcoming games only (Nov 16 WBB vs NC Central; Nov 19 MBB at Santa Clara 10:30 p.m.), with Live video / Listen links for the Santa Clara game. No scores or results are shown despite the \'Events/Results\' heading, and there is no top scoreboard strip. Streaming: no platform named — generic \'Live video\' / \'Listen\' links only.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. \'Ram Athletic Fund\' top-level nav item, a Donate (gift) icon button in the header, and a \'Ram Athletic Fund Events\' promo below the Awards section. NIL is never mentioned — the word NIL appears nowhere in the homepage text or nav.',
      },
    steal: 'The gold header\'s compact ticket/donate/shop icon row plus the \'#LetsGoVCU\' social top bar: giving, tickets and shop are always one click away without crowding the nav.',
  },
  // Saint Louis Billikens — id 379 (homepage capture only, Nov 14, 2026)
  379: {
    schoolId: 379,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Live audio for MBB vs High Point, and \'BILLIKENS PODCAST\' in the FAN ZONE menu.',
        video: 'Video present, no date shown — YouTube-filtered items in the #Billikens stream: \'WSOC: Billikens vs. Rhode Island (A10)\' and \'MBB: Billikens vs. Northern Kentucky\'.',
        photos: 'A Photos/Galleries filter in the #Billikens stream.',
        social: 'Header icons (Facebook, Twitter/X, Instagram, top right) AND a large mid-page \'#BILLIKENS\' content stream with All/Twitter/Instagram/Facebook/Photos/YouTube filters, @SLUBILLIKENS and BILLIKEN ATHLETICS posts, and a LOAD MORE button.',
      },
    pillars: {
        tickets: 'Nav item only (TICKETS is a plain link in the blue nav) PLUS a \'Buy tickets\' link on every game card in the schedule strip — the strongest game-level ticket push of the three in its batch.',
        sportHub: 'Mid-page horizontal \'Billiken Schedule\' strip, upcoming only (5 games, Nov 14–19: MSOC vs Fordham Sat 11/14 4 PM, WSOC vs Dayton Sun 11/15 noon, MBB vs High Point Sun 11/15 2 PM), each with Live video/stats (+ Live audio for MBB) and Buy tickets; sponsored by US Bank. No scores shown. Streaming: ESPN2 — in \'MBB PREVIEW: BILLS HOST HIGH POINT SUNDAY ON ESPN2\'; otherwise generic \'Live video\' links.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. DONATE is a top-level nav item, plus BILLIKEN CLUB is a top-level nav item. NIL is a \'NIL STORE\' under the SHOP dropdown.',
      },
    steal: 'Per-game \'Buy tickets\' links inside every schedule card, which turns the schedule itself into the ticket funnel.',
  },
  // Dayton Flyers — id 380 (homepage capture only, Nov 14, 2026)
  380: {
    schoolId: 380,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Live audio links in the scoreboard (MBB, WBB); no podcast named.',
        video: 'Video present only via the social stream, no date shown — \'On this episode of Flyers Weekly, @daytonflyersfb QB Bryce Schondelmyer joins the show…\'. No dedicated video section or YouTube filter.',
        photos: 'No photo-gallery section — the #GOFLYERS stream filters are only All/Instagram/Twitter/Facebook.',
        social: 'No header social icons; social lives in a lower-mid-page \'#GOFLYERS\' content stream (All/Instagram/Twitter/Facebook filters, @daytonflyers and @WeAreUD posts, Load More) plus the hero\'s \'FOLLOW US TODAY\' promo slide.',
      },
    pillars: {
        tickets: 'Nav item only — TICKETS is a plain nav link; unlike SLU, the scoreboard cards have NO buy-tickets links (only Live video/stats/audio). Weakest ticket push of the three in its batch.',
        sportHub: 'Mid-page \'Scoreboard\' / \'FLYEREVENTS\' carousel, upcoming only, no scores: MBB vs Cincinnati NOV 14, 7:30 P.M.; WSOC at Saint Louis NOV 15, 1:00 PM; WBB vs Western Michigan NOV 15, 1:00 PM; each with Live video/stats/audio links. Streaming: ESPN+ — the Top Stories lead WBB item links \'Live Video (ESPN+)\'; scoreboard links are generic \'Live video\'.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. GIVE NOW is a top-level nav item (rightmost), plus \'Athletics Excellence Fund\' in Inside Athletics. NIL is \'Name, Image and Likeness\' under INSIDE ATHLETICS (spelled out; the acronym \'NIL\' does not appear).',
      },
    steal: 'The embedded mid-page FLYERE-NEWS email signup form, placed between the scoreboard and the social stream — the only direct email-capture element on any of the three homepages.',
  },
  // Rhode Island Rams — id 381 (homepage capture only, Nov 14, 2026)
  381: {
    schoolId: 381,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Live audio links in the Events cards (e.g. MBB vs Princeton); no podcast named.',
        video: 'No on-demand video section or dated video item; only \'Live video\' links for upcoming games (and \'Video Board Announcements & Messages\' as a Fans-menu item).',
        photos: 'No photo-gallery section on the homepage.',
        social: 'Header icons only — Facebook, Instagram, Twitter/X and YouTube at top right. No social feed or stream section anywhere on the homepage.',
      },
    pillars: {
        tickets: 'Nav item only — TICKETS is a plain nav link; Events cards have NO buy-tickets links (only Live audio/video/stats). A \'Mobile Ticketing\' promo slide appears in the lower promo carousel.',
        sportHub: 'Mid-page tabbed EVENTS / RESULTS module — the only one of the three in its batch showing final scores. EVENTS (upcoming): MBB vs Princeton Sun Nov 15, 2:00 PM; WBB Tue Nov 17. RESULTS (finals, Nov 14): WBB Rams 51 at St. John\'s 68; Football Rams 16 vs Towson 19; VB Rams 1 vs Saint Louis 3 — each with recap and boxscore links. Streaming: FloCollege — footer logo only; event links are generic \'Live video\'.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. DONATE is a top-level nav item (second item). NIL is \'Name, Image, & Likeness (NIL)\' under STUDENT-ATHLETES > Current Student-Athletes.',
      },
    steal: 'The tabbed EVENTS/RESULTS module that puts final scores with recap/boxscore links on the homepage — the only results-forward scoreboard of the three.',
  },
  // Troy Trojans — id 382 (homepage capture only, Nov 14, 2026)
  382: {
    schoolId: 382,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: '\'Trojan Talk\' podcast section (e.g. \'Inside Troy Cross Country with Brian Cunningham - 11/9/26\'), \'Podcasts\' and \'Radio Affiliates\' in Fan Zone, \'Live Audio,\' and an audio icon in the header.',
        video: '\'Trojans All-Access\', newest Nov. 13, 2026 (four videos that date, incl. \'Adam Howard Postgame (NC State)\').',
        photos: '\'Photo Galleries\', newest Nov. 11, 2026 (\'Troy at Miss State gallery,\' WBB). Note: \'Troy vs. LMU gallery\' (MBB, Nov. 10, 2026) appears twice.',
        social: 'Header utility-bar icons (Facebook, X, Instagram, YouTube), repeated in the footer, plus a mid-page \'Social Zone\' heading with the same icons and an OpenDorse link, and a \'Trojans #moments\' label; no embedded social posts were visible.',
      },
    pillars: {
        tickets: 'Persistent header button — \'Tickets\' link in the grey utility bar, plus a TICKETS top-nav item, \'Purchase Tickets!\' in Quick Links, and a \'Buy tickets\' link in the calendar for MBB vs CSUN.',
        sportHub: 'Right rail — \'Calendar\' with Events/Results tabs; shows upcoming events (date/time/location, teams, Watch/Listen/Live Stats, one Buy tickets link). No scores visible in the Events view. Streaming: no platform named — generic \'Watch\'/\'Listen Live\'/\'Live Stats\' links only.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. GIVING nav item, Trojan Warrior Club (Fan Zone + ad tile), \'Donate to the Trojans\' in Quick Links, and a \'FOOTBALL EXCELLENCE FUND — DONATE\' ad. NIL is a top-level nav item (Marketplace, NIL Policies & Opportunities, Athletes Thread).',
      },
    steal: 'The paired \'Trojan Talk\' podcast + \'Trojans All-Access\' video rows, both dated within a day of the visit (Nov. 9–13) — the only homepage that feels current in audio/video.',
  },
  // Louisiana Ragin' Cajuns — id 383 (homepage capture only, Nov 14, 2026)
  383: {
    schoolId: 383,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Minimal — only a \'Live Audio\' link for the Nov. 16 WBB game in the calendar; no podcast or radio section.',
        video: 'No dedicated video section on the homepage; only \'Live Video\' links inside the calendar.',
        photos: 'No homepage gallery section; \'Photo Galleries\' exists only as a Fans-nav link.',
        social: 'A dedicated mid-page \'Social\' section with \'Show All / Instagram / Facebook\' filters and embedded posts (e.g. \'Ragin\' Cajuns Volleyball moves into double figures in SBC wins with a sweep of the Chants!\') and a \'load more\' button; Quick Links also has Follow/Like links for Twitter, Facebook, Instagram. No social icons in the header.',
      },
    pillars: {
        tickets: 'Nav item only — \'Tickets\' is a plain top-nav item (dropdown: Ticket Central, Cajuns Account, sport tickets, SeatGeek), plus a rotating ad banner \'2026-27 MEN\'S BASKETBALL SINGLE GAME TICKETS on sale now.\' No persistent header ticket button.',
        sportHub: 'Right rail — \'Calendar\' with Events/Results tabs (sponsored by Super 1 Foods); shows upcoming events (Nov. 13 men\'s tennis at Samford Hidden Dual, Nov. 14 2 p.m. volleyball vs Coastal Carolina, Nov. 16 6:30 p.m. WBB at UTSA) with Live Video/Live Stats/Live Audio links. Streaming: no platform named — generic \'Live Video\' only.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. RCAF is a top-nav item (RCAF Website, Invest Now, Champions Fund), plus \'Cajuns Edge Fund\' and \'RCAF Ad\' banner slides. NIL is \'Name, Image and Likeness (NIL)\' under Athletics Dept., \'Krewe Allons Collective\' and \'Louisiana UnLimited\' under Fans.',
      },
    steal: 'The filterable embedded Social feed (Show All / Instagram / Facebook) with a load-more button — the only homepage where social is actual content rather than icons.',
  },
  // Louisiana–Monroe Warhawks — id 384 (homepage capture only, Nov 14, 2026)
  384: {
    schoolId: 384,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Minimal — only live-audio icons per event in the schedule; no podcast or radio section.',
        video: 'No dedicated video section on the homepage.',
        photos: 'No homepage gallery section; \'Photo Galleries\' exists only under Fans.',
        social: 'Footer icons only (Facebook, X, Instagram; the YouTube icon renders as a broken/missing glyph with the word \'Youtube\'), plus a mid-page \'#TheBestIsOnTheBayou\' section that is EMPTY — grey band, heading, two blank divider lines and a \'LOAD MORE +\' button, with no posts.',
      },
    pillars: {
        tickets: 'Nav item only — plain \'TICKETS\' top-nav item; no persistent header ticket button (the gold button in the nav is DONATE, not tickets). Tickets run via Vivenu (a Vivenu sponsor logo and a \'vivenu How-To Guide\' appear).',
        sportHub: 'LEFT rail — \'Events\'/\'Results\' tabs beside the hero; shows upcoming events (Sat, Nov. 14, 7 p.m. CT/6 p.m. MT, MBB at Grand Canyon; Mon, Nov. 16, 5 p.m., WBB vs Arkansas-Pine Bluff) with live audio/video/stats icons. A live \'Next Game\' countdown strip sits above it. Streaming: \'Watch on: MW+\' for the MBB game at Grand Canyon (the only named streaming platform on any of the three homepages in its batch).',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. A gold DONATE button in the main nav, plus an ATHLETIC FOUNDATION nav item and a Donor Guidebook link. NIL is not named in the nav or anywhere on the homepage.',
      },
    steal: 'The live \'Next Game\' countdown strip — the clearest gameday urgency on any of the three homepages.',
  },
  // South Alabama Jaguars — id 385 (homepage capture only, Nov 14, 2026)
  385: {
    schoolId: 385,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: '\'Live audio\' for Football vs Troy (Nov 14) in the scoreboard toggle, and \'Jags Live\' videos. No podcast or radio station named on the homepage.',
        video: 'Videos present; newest shown Nov 13: \'Men\'s Hoops Earns Nice Neutral Court Win over Loyola-Marymount\' (JagNationTV). Also \'ON TO THE FINALS\' (Nov 12, shown twice) and \'Jags Live 11.11\' / \'Jags Live! - 11.11.26\' (Nov 12, shown twice).',
        photos: '4 galleries in the Content Stream: \'FB VS Louisiana\' (Nov 7), \'MBB vs Jax State\' (Nov 5), \'MBB vs Ohio\' (Nov 2), \'Football Vs LA Tech\' (Oct 31).',
        social: 'Header and footer icons for Facebook, X/Twitter, Instagram, JagNationTV (YouTube), plus RSS and Email; a \'Content Stream\' with filter buttons All / Galleries / Twitter / Instagram / Facebook / YouTube — but the grid shown was galleries and videos, with no embedded social posts visible; \'#OURCITY\' appears in the header and as a large parallax footer section.',
      },
    pillars: {
        tickets: 'Nav item only. \'Tickets\' is a plain word in the header nav; no persistent ticket button, no hero ticket CTA, no ticket quick link.',
        sportHub: 'Top strip. A horizontal schedule carousel across the very top, 6 upcoming events Nov 14–19 (e.g. Nov 14, 5 p.m. CT MBB vs North Texas; Nov 14, 6 p.m. football vs Troy), with \'+\' toggles revealing \'Live stats\' / \'Live audio\' links and a \'Full Schedule\' link. No scores — all upcoming. Streaming: no platform named — generic Watch links only (in fact no Watch link at all in the two expanded games checked).',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. \'Donate\' as a top-level nav item only; no fund/Club name and no giving section in the homepage body. NIL is never named — the word NIL does not appear in the visible homepage text or nav.',
      },
    steal: 'The single mixed Content Stream with All / Galleries / Twitter / Instagram / Facebook / YouTube filters, so galleries, video and social live in one scrollable feed rather than four separate sections.',
  },
  // Southern Miss Golden Eagles — id 386 (homepage capture only, Nov 14, 2026)
  386: {
    schoolId: 386,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'An embedded \'Inside Southern Miss Athletics\' Apple Podcasts player (\'Sports • Updated Weekly\', \'Play, Latest Episode\'), \'Learfield Radio Affiliates\' under Inside Athletics > Fans, an Audio link for each event in the EVENTS rail, and a \'Listen for Football\' link.',
        video: 'Videos present; newest shown Nov 9, 2026: \'Anderson Weekly Press Conference – The Louisiana Tech Game\'. Also Nov 6, 2026 \'Southern Miss vs JMU - Postgame Press Conference\' and Nov 2, 2026 \'Blake Anderson Press Conferene - JMU Game\' [sic — \'Conferene\'].',
        photos: 'Galleries present: \'Mens BB vs JSU\' (Nov 11, 2026), \'Women\'s Basketball vs Mississippi Valley\' (Nov 9, 2026), \'Volleyball vs South Alabama\' (Nov 7, 2026), \'Football vs James Madison\' (Nov 5, 2026), \'Pete Taylor Park Renderings - 10/27/26\' (Oct 27, 2026).',
        social: 'A dedicated \'Southern Mississippi Social Media\' section with All / Facebook / Instagram filters and embedded posts (e.g. \'Honoring all who served. Thank you, veterans, for your service, sacrifice, and dedication. #VeteransDay #SMTTT\' from southernmissathletics), with a \'Load More posts\' button. Per-sport Facebook/Twitter/Instagram links also sit in the SPORTS menu. No social icons were seen in the header/footer.',
      },
    pillars: {
        tickets: 'Persistent header. \'TICKETS\' is a top-level header nav dropdown, backed by a mid-page Quick Link \'Season Tickets on Sale Now\' and a deep Tickets submenu (Buy Now per sport, Seat Maps, Per-Seat Model & Priority Points, Group Sales, Student Tickets, Premium Seating).',
        sportHub: 'Left rail. An \'EVENTS\' panel at left with Upcoming (default) / Recent Results tabs, a \'Choose a Sport\' filter, and 5 events loaded (women\'s soccer Nov 14 TBD vs Championship Game; football Nov 14, 4 pm at Louisiana Tech; WBB Nov 16, 6 p.m. vs Jacksonville State). Each has a media toggle with Video / Audio / Stats links. Streaming: ESPN+ — homepage text includes \'Watch (ESPN+) for Football on Nov 13, 2026\'.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. \'ATHLETIC FOUNDATION\' is a top-level nav item (in gold), \'M-Club\' is a header button, a Quick Link reads \'Join the Eagle Club\', and a \'DONATE NOW\' submenu lists Eagle Club, Sports Clubs, Athletic Facilities, M-Club, Athletic Endowments. NIL is a top-level nav button, with submenu link \'To The Top Exchange\'.',
      },
    steal: 'The five-item QUICK LINKS strip (\'Get the Official Gameday App\', \'Shop the Latest Gear\', \'Join the Eagle Club\', \'Season Tickets on Sale Now\', \'Facilities\') as a single conversion row under the hero.',
  },
  // Appalachian State Mountaineers — id 387 (homepage capture only, Nov 14, 2026)
  387: {
    schoolId: 387,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: '\'NOTHIN\' BUT AN APP STATE PODCAST\' (MORE/FAN ZONE), \'App State Sports Network\' (FAN ZONE), Audio link on the football scoreboard card.',
        video: '\'APP STATE VIDEOS\' section; featured \'App State vs Miami-OH - Cure Bowl,\' plus \'App State @ James Madison\' and \'\'HOME\' - App State Football.\' No dates shown on any video.',
        photos: '\'PHOTO GALLERIES,\' six items, newest \'MBB: App State-Charlotte,\' plus \'SOC: App State vs Old Dominion 11.11.26,\' \'MBB: App State-Auburn,\' \'SOC: App State vs Louisiana 11.9.2026,\' wrestling and football galleries.',
        social: 'Facebook, Twitter and Instagram icons in the top bar and again in the footer, plus a Galleries icon; no social feed or social section on the homepage body. Video items carry \'Share on: FACEBOOK / TWITTER\' buttons.',
      },
    pillars: {
        tickets: 'Nav item only — \'TICKETS\' in the black header bar; a rich ticket dropdown (2026 football single-game home/away, wrestling single-match and season, men\'s/women\'s basketball season and single-game, SeatGeek resale) plus a mid-page \'26-27 MBB Season Tickets\' ad. No ticket CTA in the hero.',
        sportHub: 'Top strip (horizontal carousel under the header): \'MBBALL NOV 13 Final App State 66 Charlotte 60\'; WSOC Nov 9 Sun Belt Conference; \'WVBALL NOV 14 @ 3:00 PM ET App State vs Troy\'; \'FOOTBALL NOV 14 @ 6 P.M. App State vs Marshall,\' with Recap/Boxscore/Video/Stats/Audio links. Streaming: no platform named — generic Watch/Video links only; its own \'APPVISION\' brand is a nav item.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. \'GIVE NOW\' top-nav item and \'MAF\' (Mountaineer Athletic Fund) top-nav item; \'Donation Requests\' under FAN ZONE. NIL is a link under the INSIDE ATHLETICS dropdown.',
      },
    steal: 'The \'Next Game\' box paired with its per-sport ticket dropdown — a single, glanceable next-fixture card plus season/single-game ticket links broken out by sport.',
  },
  // Arkansas State Red Wolves — id 388 (homepage capture only, Nov 14, 2026)
  388: {
    schoolId: 388,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Per-game \'Live audio\' links only; no podcast or radio brand named on the homepage.',
        video: 'No video section on the homepage; only per-game \'Live video\' links in the scoreboard/Events list. No video date shown.',
        photos: 'No photo-galleries section on the homepage.',
        social: 'The most social-forward of the three in its batch — X, Facebook and Instagram icons in the red header bar, plus a full mid-page \'SOCIAL MEDIA / Content Stream\' section with All / Twitter / Instagram filter buttons and live posts (\'Final. #WolvesUp,\' \'Trey Owens reaches the end zone on 4th down…,\' \'On to Foley! #WolvesUp\') and a \'Load More\' button.',
      },
    pillars: {
        tickets: 'Persistent header nav item (\'Tickets\' in the red bar) reinforced by \'Buy tickets\' links on individual games in the scoreboard and in the \'RED WOLVES SCHEDULE\' Events list (e.g., MBB vs Dillard Nov 14, WBB vs Jackson State Nov 17). Not hero-led.',
        sportHub: 'Top strip (above the header, with \'All Sports\' filter and a red \'Full Schedule\' button): VB Nov 13 Final 3–0 vs James Madison; VB Nov 14 Final 3–0 vs James Madison; Football Nov 14 12:00 PM (CT) at Coastal Carolina; MBB Nov 14 7 p.m. vs Dillard (LA), each with Story/Boxscore or Live audio/video/stats/Buy tickets. Streaming: \'ESPN+\' — named in story titles (\'Game Notes: A-State vs Dillard (La.) (Nov. 14 | 7 p.m. | ESPN+)\').',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. \'Donate\' top-nav item; Red Wolves Foundation logo in the sponsor slider below the social section. NIL is an \'NIL Shop\' in the Shop dropdown.',
      },
    steal: 'The filtered \'Content Stream\' social section (All / Twitter / Instagram) embedded mid-page — it makes the homepage feel live on a Saturday in a way static headlines do not.',
  },
  // Coastal Carolina Chanticleers — id 389 (homepage capture only, Nov 14, 2026)
  389: {
    schoolId: 389,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Per-game \'Listen to audio\' link (MBB at Wisconsin, Nov 15); no podcast or radio brand named.',
        video: '\'Videos Grid\' plus \'MORE VIDEOS\' (10 items). Newest video shown: \'WBB Postgame Presser - Jacksonville,\' NOV 11; next newest \'MBB Postgame Presser - USC Upstate,\' NOV 9. All videos are postgame pressers (Oct 10–Nov 11).',
        photos: 'No photo-galleries section on the homepage.',
        social: 'No social presence visible on the homepage — no social icons in the header or footer and no social feed/section; the only social trace is a \'Coastal Carolina Athletics on Instagram\' label in the page data, with no visible placement in the rendered header, body or footer.',
      },
    pillars: {
        tickets: 'Hero-led — the entire hero is ticket sales, backed by a teal \'Tickets\' pill button in the header, a \'Buy Tickets\' item in the Quick Links bar, and ticket/parking links under the lead story. The strongest ticket push of the three in its batch.',
        sportHub: 'Top strip (slider above the header, \'Choose Sport\' filter, \'View Calendar\' link, 8 events): MBB Nov 12 Final 103–54 vs Virginia University of Lynchburg; XC Nov 13 NCAA Southeast Regionals; WVB Nov 13 Final 0–3 at Louisiana; Football Nov 14 Final Coastal 28, Arkansas State 21; WBB Nov 15 2 p.m. at ETSU — with Recap/Box Score/Watch video/Listen to audio/Stats links. Streaming: no platform named — generic \'Watch video\' links only.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. Via \'CAF\' (Chanticleer Athletic Foundation) as a top-level nav button; no \'Donate\' wording in the header. NIL is \'NIL →\' in the Quick Links bar directly under the header, one of only five quick links.',
      },
    steal: 'The Quick Links bar — Calendar / Buy Tickets / Download Mobile App / Subscribe To CC Brew / NIL in one strip directly under the header — a compact way to surface the five actions that matter most.',
  },
  // Georgia Southern Eagles — id 390 (homepage capture only, Nov 14, 2026)
  390: {
    schoolId: 390,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'WATCH/LISTEN nav implies it, but no radio/podcast link or label is visible in the homepage body.',
        video: 'Top Video \'GS FOOTBALL WEEKLY PRESS CONFERENCE (11-09-2026)\', Nov 9, 2026; VIDEOS carousel newest \'Georgia Southern vs. Marshall Highlights (11/8/26)\', Nov 7.',
        photos: 'PHOTO GALLERIES, newest \'26FB: GS vs Marshall (11-8-26)\', 94 images, Nov 7.',
        social: 'No social presence — no social icons, links or feed anywhere on the homepage, including the footer.',
      },
    pillars: {
        tickets: 'Hero-led + nav item. Season tickets dominate the hero; TICKETS is also a top-nav dropdown.',
        sportHub: 'Mid-page. A \'Live Game Center\' card shows the live game \'Football at Georgia State, Winning, 17 to 14\' (started 3:30 PM Nov 14), followed by a SCHEDULE list (Upcoming/Results tabs, 8 events loaded) and a Countdown to \'Swimming and Diving vs Gamecock Invite\' (2 days, 17 hrs at time of visit). Streaming: no platform named in homepage text — generic \'WATCH/LISTEN\' nav only; \'ESPN+\' appears only as small print inside the live-game promo graphic, not as a named homepage link.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. \'GIVE NOW\' link in the header (opens in new window) plus \'Ath. Foundation\' nav link; the hero rotator also carries an Erk/foundation promo. NIL is not named in the top-level nav or anywhere in the homepage body.',
      },
    steal: 'The Live Game Center paired with a live Countdown timer to the next event, and the on-page STORE with visible prices ($18–$44) that turns merch into homepage content rather than just a link.',
  },
  // Georgia State Panthers — id 391 (homepage capture only, Nov 14, 2026)
  391: {
    schoolId: 391,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'An \'Audio\' link on the live football card, and \'Panther Insider Podcast - Episode 148\' (Oct 13) inside PantherVision.',
        video: '\'PantherVision\' section, Now Playing \'PRESSER: GSU Press Conference | 11.10.26\', November 10, 2026; next \'CINEMATIC RECAP: GSU vs. Appalachian State | 11.07.26\', Nov 7.',
        photos: 'No photo-galleries section on the homepage (sections are Stories, PantherVision, Schedule, Panther Social).',
        social: '\'Panther Social\' heading near the bottom, but it renders as an EMPTY section — a blank white band with no icons, handles or feed posts visible. No social icons in the header or footer either.',
      },
    pillars: {
        tickets: 'Persistent header button — \'Tickets\' is a top-right header button (opens in new window) AND a nav item; \'Buy Tickets\' also appears on the women\'s basketball schedule card.',
        sportHub: 'Mid-page schedule carousel (no top strip, no scores). Four game cards: Football Sat Nov 14 \'LIVE NOW\' vs Georgia Southern (Audio / Watch Live / Live Stats / GAME NOTES); MBB Sun Nov 15 1:00 PM vs Norfolk State; WBB Sun Nov 15 2:00 PM at Georgia Tech (Buy Tickets / Game Notes PDF); Volleyball Thu Nov 19 at Sun Belt Conference Championship. Streaming: no platform named — generic \'Watch Live\' links only.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. \'Donate\' top-right header button (opens in new window) plus the \'Panther Athletic Club\' top-level nav item. NIL is not named in the top-level nav or homepage body.',
      },
    steal: 'The PantherVision filter tabs (Highlights / Press Conferences / Features / Practice Reports / Uniform Reveals / Podcast / Postgame) with a \'Now Playing\' label, the best video organization of the three.',
  },
  // James Madison Dukes — id 392 (homepage capture only, Nov 14, 2026)
  392: {
    schoolId: 392,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Minimal — a \'Listen\' link on the women\'s basketball story only; no podcast/radio section on the homepage.',
        video: '\'YouTube / ALL-ACCESS\' section, newest \'JMU Football | Billy Napier Postgame Press Conference vs. UConn - Nov. 14, 2026\', November 14, 2026; next two are Nov 11 women\'s basketball press conferences.',
        photos: '\'Galleries / PHOTO\', newest \'Dukes Defeat Navy 77-61\' (Women\'s Basketball | November 11, 2026); then \'Dukes Celebrate Senior Day with 3-0 Royal Rivalry Sweep\' (Volleyball, Nov 7) and \'Dukes Fall on the Road to #23 Kentucky\' (Men\'s Basketball, Nov 6).',
        social: 'The most social-forward of the three in its batch — a Facebook/X/Instagram/YouTube icon row under the left nav (plus per-sport Facebook/Twitter/Instagram links inside the SPORTS menu), and a footer row labeled \'Follow Us On Social Media:\' with Facebook, Twitter, Instagram and YouTube links.',
      },
    pillars: {
        tickets: 'Nav item only — TICKETS is a left-rail nav item; tickets also appear per-event (\'Buy Tickets\' on the Nov 15 basketball scoreboard cards, \'Tickets\' link on the women\'s basketball story) and in Quick Links (\'2026 JMU Football Single Game Tickets\', \'2026-2027 JMU Basketball Season Tickets\').',
        sportHub: 'Top strip — a \'CALENDAR\' scoreboard carousel sits above the nav, with 10 events: finals with scores (e.g. football at UConn, Final, 22–46; women\'s soccer vs No. 5 South Alabama, Loss 1–2 OT; volleyball at Arkansas State, 0–3, set scores shown) and upcoming games with times and Buy Tickets links. Each card expands to Story/Box Score/Game Center. Streaming: ESPN+ — named repeatedly and priced: \'Watch: ESPN+ ($)\' on the women\'s and men\'s basketball stories, plus a promo rotator card \'Watch the Dukes on ESPN+\'.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. DONATE nav item, plus Quick Links \'Make Your 2026 Duke Club Proud & True Gift!\' and \'Support the Student-Athlete Enhancement Fund!\'. NIL is not named in the top-level nav or homepage body, and the INSIDE ATHLETICS dropdown contains no NIL item.',
      },
    steal: 'The top-of-page CALENDAR scoreboard strip that shows finals with scores and upcoming games with per-event Buy Tickets links, putting results and ticketing above the fold at once.',
  },
  // Louisiana Tech Bulldogs — id 393 (homepage capture only, Nov 14, 2026)
  393: {
    schoolId: 393,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Podcasts section (\'Tech Drive Podcast\'): \'Jalyen Fenner | Ep. 48\', MBB, Nov 11; \'Mike McConathy | Ep. 47\', Oct 28; \'Paulina Avalos | Ep. 46\', BOWL, Oct 14. No radio link seen.',
        video: '\'LA Tech All-Access\'; newest \'Scott Mattera Postgame Presser | Southern Miss M1\', Sep 25.',
        photos: '\'Latest Photos\'; newest \'MBB vs. LSU\', Nov 9, 34 images.',
        social: 'No social presence — no social icons, feed, or section found on the homepage.',
      },
    pillars: {
        tickets: 'Persistent header button (Tickets in the navy header), plus \'Buy Tickets\' in the scoreboard\'s football slide and a \'2026-27 Basketball Single Game Tickets\' banner in the 11-slide promo rotator.',
        sportHub: 'Top strip slider, 10 events — Nov 13 finals (bowling, volleyball) and upcoming Nov 14 football vs Southern Miss 4 PM, MBB at Nicholls 7:00 p.m. CT, WBB at #21 Ole Miss Nov 15 2 p.m.; sport filter included. Streaming: no platform named — generic Watch links only (header \'Watch\' opens a new window).',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. Header Donate button; Quick Links \'One More Campaign\' and \'CHAMP Fund\'; full-width \'What\'s Your One More\' promo with \'Join the Campaign\'. NIL is an \'LA Tech Student-Athlete NIL Store\' link in the nav menus, plus Quick Links \'CHAMP Fund | Enhanced Student Athlete Benefits\'.',
      },
    steal: 'The right-rail Podcasts + Quick Links pairing — dated Tech Drive Podcast episodes beside the CHAMP Fund giving link gives the news page a second audio/giving lane without cluttering the hero.',
  },
  // Marshall Thundering Herd — id 394 (homepage capture only, Nov 14, 2026)
  394: {
    schoolId: 394,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'No podcast or radio links found on the homepage.',
        video: 'Videos; newest \'Marshall MBB: HC Jackson Postgame (at Youngstown State)\', November 14, 2PM (today). Also a \'HERD #moments\' WePlayed highlights/playlists section (Nov 9).',
        photos: 'No dedicated photo-gallery section on the homepage; \'Galleries\' exists only as a Multimedia nav link.',
        social: 'Left-rail \'Social Media\' section with \'Toggle Instagram\' and \'Toggle Facebook\' buttons and \'Load More posts\' (a feed). Per-team Facebook/Twitter/Instagram links also sit inside the Sports dropdowns.',
      },
    pillars: {
        tickets: 'Hero-led — TICKETS is one of the three hero tiles, plus a Tickets nav dropdown (Buy Tickets, Student Tickets, Ticket Information, Football Group Tickets, Football Season Tickets, \'SeatGeek: Buy and Sell\', Football Parking, Seating Charts) and Quick Links \'Tickets\'.',
        sportHub: 'Left-rail Calendar, not a top strip — Upcoming Events / Recent Results tabs. Upcoming: Football Nov 14, 6 PM vs App State; WBB Nov 15, 3 p.m. at #5/#5 Duke; MBB Nov 17, 7:00 p.m. vs ETSU. Streaming: ESPN+ — named in the Multimedia nav and on the Top Story image.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. Big Green nav item; hero tile \'GIVE NOW\'; Quick Links \'Support The Herd\'. NIL is not named on the homepage (closest are \'Herd Exchange\' and \'The Player Shop\', neither labelled NIL on the page).',
      },
    steal: 'The three-tile hero — Tickets / App / Give turns the most valuable first screen into three clear actions instead of one story.',
  },
  // Old Dominion Monarchs — id 395 (homepage capture only, Nov 14, 2026)
  395: {
    schoolId: 395,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Radio only — \'ESPN Sports Radio 94.1 - ODU vs. Longwood\' in the Schedule; no podcast found.',
        video: '\'Latest Videos\'; newest \'November 13, 2026: Volleyball: Louisiana-Monroe vs. Old Dominion: Recap\' (Nov 13, 2026).',
        photos: 'No gallery section or link found on the homepage.',
        social: '\'#ODUSPORTS\' section near the footer, \'presented by\' an ABMG logo — a social feed that was hidden after declining cookies. Footer nav also has a \'Social Media\' link.',
      },
    pillars: {
        tickets: 'Hero-led — the promo strip is ticket offers; TICKETS is a top-level nav dropdown; per-game \'Tickets - ODU vs. Longwood\' links in the Schedule.',
        sportHub: 'Mid-page Schedule (no top strip, no live scores) — Nov 14 MBB vs Longwood 4:00 PM EST, W Soccer vs South Alabama 8:00 PM EST; Nov 15 WBB vs Virginia 2:00 PM EST; Nov 17 W Tennis at NCAA Individual Championships. Games list ESPN+, radio, live-stats, and tickets links where applicable. Streaming: ESPN+ — \'ESPN+ - ODU vs. Longwood\' and \'ESPN+ - ODU vs. South Alabama\'.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. ODAF is a top-level nav link; \'BECOME AN ODAF MEMBER!\' promo with \'Donate Now!\'. NIL does not appear on the homepage.',
      },
    steal: 'Per-game Schedule rows — one line per game with ESPN+, radio, live stats, and tickets links is the most gameday-useful scoreboard of the three, despite the site\'s speed problems.',
  },
  // Canisius Golden Griffins — id 396 (homepage capture only, Nov 14, 2026)
  396: {
    schoolId: 396,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 14 capture — no podcast or radio link in the menus or on the page.',
        video: 'Videos section with filters (Latest Videos, Full Game Archive, Game Replays, Highlights, Interviews, Previews); newest \'Canisius Volleyball vs. Marist\', November 7.',
        photos: 'No gallery section on the homepage itself; a Photo Galleries link sits in the MULTIMEDIA menu.',
        social: 'Mid-page SOCIAL MEDIA content stream only (no header icons) — embedded X posts from @gogriffs and Facebook posts from @GoGriffs, with a Load More Posts button.',
      },
    pillars: {
        tickets: 'TICKETS is a top-level nav item whose dropdown holds a single \'Ticket Office\' link. No header button, no hero ticket push, no ticket links in the events calendar.',
        sportHub: 'Top Stories rotator plus a mid-page EVENTS CALENDAR (four upcoming events, no scores) with generic Watch Live and Stats links; MAAC.tv is named in the MULTIMEDIA menu.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is menu-only (Canisius NIL Policy, Golden Guild collective, NIL Assist, NILGo); SUPPORT is a top-level menu with the 2026 More Than A Game Campaign.',
      },
    steal: 'The mid-page embedded social stream with a Load More button — social as on-page content, not just header icons — even with the thinnest ticket presence in the conference.',
  },
  // Fairfield Stags — id 397 (homepage capture only, Nov 14, 2026)
  397: {
    schoolId: 397,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 14 capture — no podcast or radio link; Stags Sports Network is video/live broadcast.',
        video: 'StagsSportsNetwork / Latest Videos, with \'Live on ESPN\' and \'Live on Stags Sports Network\' links; newest listed is the 2025-26 Season Highlight (Apr 27), ahead of newer Oct items — the sort looks off.',
        photos: 'No photo-gallery section on the homepage and no galleries link in the menus checked.',
        social: 'Social icons in the black header bar (Facebook, X, YouTube, Instagram) and a mid-page #WeAreStags content stream with All/Instagram filters and a Load More button.',
      },
    pillars: {
        tickets: 'Tickets is a top-level nav link, the hero carries a Tickets button, scoreboard cards carry Buy tickets links, and a Purchase Tickets promo sits in the Promo Rotator.',
        sportHub: 'Gameday-hub hero: next-game headline with Tickets / ESPN+ / International Broadcast / Live Stats / Game Notes in one action row, above a top scoreboard strip with a final score and three Buy tickets links.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL is in the Athletics menu (Fairfield NIL Policy, Stags Exchange); \'Friends of Athletics\' is a top-level nav item.',
      },
    steal: 'The gameday-hub hero action row — Tickets / ESPN+ / International Broadcast / Live Stats / Game Notes on the next-game headline — so a fan never has to hunt for the game.',
  },
  // Iona Gaels — id 398 (homepage capture only, Nov 14, 2026)
  398: {
    schoolId: 398,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Yes — \'In the Arena with Kevin Spies & Dan Geriot\', Episodes 1 and 2 (men\'s basketball podcast), found in the Gaels Social feed; no podcast link in the menus.',
        video: 'Videos section; newest \'Iona Swim & Dive vs Monmouth (11.7.26)\'.',
        photos: 'Dedicated Photo Galleries section with a rotator — first shown \'2024 MAAC MSOC Championship\'.',
        social: 'Social icons in the gold header bar and a mid-page GAELS SOCIAL stream with All/Facebook/Instagram/YouTube filters and a Load More button; the posts shown were all YouTube videos.',
      },
    pillars: {
        tickets: 'TICKETS is a top-level nav item and every game card in the scoreboard strip carries its own Tickets link (home games).',
        sportHub: 'Five upcoming games fill the top scoreboard strip with Stats / Video / Tickets links, plus a live Countdown module to Women\'s Basketball vs Hofstra; the hero is a recruiting-signing story wrapped in a \'WELCOME TO GAEL NATION\' brand graphic.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. NIL sits under SUPPORT (GAELFUSE, GaelsNation NIL Collective, Opendorse); SUPPORT is a top-level menu with Give Now.',
      },
    steal: 'The live countdown module to the next home game, placed right under the top stories — it turns the schedule into a ticking event.',
  },
  // Manhattan Jaspers — id 399 (homepage capture only, Nov 14, 2026)
  399: {
    schoolId: 399,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 14 capture — no podcast or radio links found.',
        video: 'Video section; newest Nov 13, \'WVB vs. Rider\'.',
        photos: 'Galleries with visible dates — newest \'11/04 - WSOC vs Iona\' (Nov 9).',
        social: 'No social icons, feed or section anywhere on the homepage.',
      },
    pillars: {
        tickets: 'TICKETS is a plain top-nav link; Buy tickets links also appear inside schedule cards for home games. No hero ticket CTA, no distinct button.',
        sportHub: '12-slide Top Stories rotator fills the first viewport, with a mid-page SCHEDULE strip (Events/Results tabs) below it; streaming is generic \'Live video\' only, no platform named.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. DONATE is a top-nav link; NIL is absent — no NIL text found on the homepage.',
      },
    steal: 'A tabbed Videos & Photos module with a sport filter and visible dates (newest Nov 13) — recency is obvious at a glance.',
  },
  // Marist Red Foxes — id 400 (homepage capture only, Nov 14, 2026)
  400: {
    schoolId: 400,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 14 capture — no podcast or radio links found.',
        video: 'Video section; newest Nov 11 (two items), including \'Metro Men\'s Soccer Semifinals (International)\'.',
        photos: 'Galleries; newest Nov 2, \'Marist HOF Class of 2026 - Ceremony\' and group photos.',
        social: 'Facebook/Instagram/X icons top-right in the header and a dedicated RED FOXES SOCIAL section with Facebook, Instagram and Twitter tabs — though the Facebook panel showed only a heading, no posts.',
      },
    pillars: {
        tickets: 'Buy Tickets on the lead hero slide, plus Tickets in the top nav (dropdown); no distinct persistent header button.',
        sportHub: 'Schedule strip above the hero (\'RED FOXES SCHEDULE\'), and the lead hero slide is a game preview carrying Buy Tickets / Watch (ESPN+) / Live Stats / Game Notes.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. \'Give\' is a top-nav link; NIL is absent — no NIL text found on the homepage.',
      },
    steal: 'Put the schedule strip above the hero and make the lead hero slide a game preview carrying Buy Tickets + Watch (ESPN+) in one card.',
  },
  // Merrimack Warriors — id 401 (homepage capture only, Nov 14, 2026)
  401: {
    schoolId: 401,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Yes — \'Audio\' links in the schedule (WIH vs Northeastern, Nov 14 and Nov 20); no podcast is named.',
        video: 'WARRIOR VIDEOS, 4 tiles, but no date is shown on any video tile.',
        photos: 'No on-page gallery grid — only a \'Photo Galleries\' link in the FAN ZONE > MULTIMEDIA menu.',
        social: 'Header icons only (Facebook, Twitter, Instagram, YouTube) plus per-team links in the SPORTS dropdown and a Social Media Directory in FAN ZONE; no social feed on the homepage.',
      },
    pillars: {
        tickets: 'A white angled TICKETS button (ticket icon) in the navy header, next to DONATE — it sits in the sticky header and stayed visible while scrolling; Tickets links also appear in schedule cards.',
        sportHub: 'Mid-page schedule carousel below the hero with a sport filter, showing upcoming games and Nov 13 finals with scores, plus Story/Boxscore/Stats/Video/Audio/Tickets icon links per game; NEC Front Row is named only in a menu.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. Persistent header DONATE button plus INSIDE ATHLETICS > SUPPORT (The Warrior Fund); NIL is absent — no NIL text found.',
      },
    steal: 'Make TICKETS (and DONATE) distinct angled buttons in a sticky header so they never scroll away.',
  },
  // Mount St. Mary's Mountaineers — id 402 (homepage capture only, Nov 14, 2026)
  402: {
    schoolId: 402,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 14 capture — no podcast or radio links seen.',
        video: '\'Mount Athletics Video\'; newest dated video \'Women\'s Basketball Postgame Presser: Mount vs. UAlbany 11/8/2026\'.',
        photos: 'No homepage gallery module; only a \'Mount Athletics Photos\' link in the Fan Center menu.',
        social: '\'Social Media\' section mid-page with three large link tiles only — Instagram \'FOLLOW US\', Twitter \'FOLLOW US\', Facebook \'LIKE US\'. No embedded posts or feed.',
      },
    pillars: {
        tickets: 'Persistent header icon button only (\'Tickets\', ticket icon, top right, alongside Donate Now / Watch / Jungle Store). No Tickets nav item and no hero ticket CTA.',
        sportHub: 'Top scoreboard strip above the hero with a Filter by sport — MBB Nov 13 at Virginia Tech (L 62-82), WBB Nov 14 vs Bucknell, MBB Nov 17 vs Marist — above a rotating Top Stories carousel.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. Persistent header \'Donate Now\' icon button; NIL is in the Athletics dropdown (\'Name, Image and Likeness\').',
      },
    steal: 'A sport-filterable scoreboard strip at the very top of the page, above the hero, so results are visible before any story.',
  },
  // Niagara Purple Eagles — id 403 (homepage capture only, Nov 14, 2026)
  403: {
    schoolId: 403,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 14 capture — no podcast or radio links seen.',
        video: '\'Niagara Sports Network\'; newest \'Jason Lammers Postgame vs. Holy Cross 11.13.26\'.',
        photos: 'Social section has a Galleries filter and a gallery card (\'WLAX vs. Central Michigan\'); also a Galleries link in the Inside Athletics menu.',
        social: 'Embedded multi-platform feed — \'Social\' section with All / Twitter / Instagram / Facebook / Galleries filters, real post cards from @nupurpleeagles, and a Load More Social Posts button.',
      },
    pillars: {
        tickets: 'Persistent header nav item — \'Tickets\' dropdown button in the purple header, alongside Shop, Live and Donate. Not hero-led.',
        sportHub: 'Right-rail Events tab beside the hero (Trending / Events), showing Nov 14 finals with scores and upcoming games, with a Full Calendar link; streaming is a generic \'Live\' nav link, no platform named.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. Persistent header \'Donate\' button; NIL is in Inside Athletics (Name, Image, and Likeness Policy; Fly Purple Eagles NIL Collective).',
      },
    steal: 'A Trending/Events tabbed right rail that doubles as the scoreboard, plus a filtered embedded social feed (All / Twitter / Instagram / Facebook / Galleries) instead of bare social icons.',
  },
  // Quinnipiac Bobcats — id 404 (homepage capture only, Nov 14, 2026)
  404: {
    schoolId: 404,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Yes — \'The ROAR Podcast\' (Nov 3, in All-Access), \'Listen Live\' and \'Audio Archive\' in the Multimedia menu, and \'Listen\' links on scoreboard events.',
        video: '\'All-Access\'; newest \'Highlights: Men\'s Basketball at Vermont (11/8/26)\', dated Nov 9.',
        photos: 'No gallery module on the homepage body itself; a \'Photo Galleries\' link sits in the Multimedia menu.',
        social: 'Instagram-only embedded feed — \'Social Media\' section, Instagram filter only, 6 posts from @quathletics (Nov 2–13), with a Load More Posts button; header also carries Facebook / X / Instagram / YouTube icons.',
      },
    pillars: {
        tickets: 'Hero-led and persistent — \'Tickets\' top-level nav dropdown, a ticket-icon chip on the lead hero tile, \'Buy Tickets\' links on upcoming scoreboard events, and a \'Tickets\' footer ad. Strongest ticket push of its batch.',
        sportHub: '5-tile Stories Top Grid led by a next-game preview with a next-game chip (opponent, date/time, ticket icon), with a scoreboard slider immediately below it (8 events, finals with scores and upcoming with Recap / Box Score / Buy Tickets / Watch / Listen / Stats links); ESPN+ is named in the Multimedia menu.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. \'Support\' is a top-level nav item (Bobcat Challenge, Blue & Gold Society, Make a Gift); NIL is in the Athletics menu, plus an Opendorse footer ad.',
      },
    steal: 'Embed a next-game chip (opponent logo, date/time, ticket icon) directly in the lead hero tile, so the top story is also the ticket CTA.',
  },
  // Rider Broncs — id 405 (homepage capture only, Nov 14, 2026)
  405: {
    schoolId: 405,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Yes — \'Podcasts\' in the Multimedia menu.',
        video: '\'Videos\' section (Videos/Galleries tabs); newest \'Broncs All-Access: Episode 5\' (Nov 11, 2026).',
        photos: 'Galleries tab in the same section; newest \'Men\'s Soccer vs Quinnipiac\' (Sep 19, 2026, 18 images).',
        social: 'Header Facebook / X / Instagram icon buttons, plus a mid-page \'Social Media\' / \'#GoBroncs\' section — that section was blank/empty (white space, no posts visible) when viewed.',
      },
    pillars: {
        tickets: 'Tickets is a plain top-nav item, reinforced by a \'Ticket Information\' promo tile at the top of the page and \'Buy tickets\' links inside each game in the right-rail schedule.',
        sportHub: 'Rotating Top Stories hero cycling story photos and in-image gameday graphics, with a right-rail Events Calendar (Upcoming / Results tabs) beside it; ESPN is named in the Multimedia menu as \'Broncs on ESPN\', per-game links are generic \'Live video\'.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. \'Support Us\' is a top-level nav item (Make a Gift, Broncs Athletic Fund); NIL is front-page — a MOGL NIL PLATFORM promo tile is one of the three promos at the top of the homepage.',
      },
    steal: 'Put the NIL platform (MOGL) in a homepage promo tile at the very top — NIL as a front-page story rather than a buried menu link.',
  },
  // Sacred Heart Pioneers — id 406 (homepage capture only, Nov 14, 2026)
  406: {
    schoolId: 406,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 14 capture — no podcast or radio link in the ATHLETICS or FAN ZONE menus.',
        video: '\'PIONEER VIDEOS\' section — but the rail is ~6 months stale: newest shown is \'Sacred Heart v Fairfield\' (Baseball), May 16, with the next four all baseball from May 15 back to Apr 26.',
        photos: '\'GALLERIES\' section; newest \'Women\'s Basketball vs Northeastern\' (Nov 11, 108 images).',
        social: 'Header Facebook / Twitter / Instagram / TikTok icons, plus a dedicated INSTAGRAM section near the bottom with \'@shubigred\' and three dated posts (Nov 13, Nov 12, Nov 11) with a Follow Us link.',
      },
    pillars: {
        tickets: 'Persistent header button — white \'Tickets\' button in the red header (with Shop and Donate beside it), plus a QUICK LINKS block with Football Single Game Tickets, Men\'s Hockey Single Game Tickets and Basketball Season Tickets, and Buy Tickets icons on schedule events.',
        sportHub: 'Left-rail SCHEDULE (Upcoming / Results tabs) beside the hero, 5 events for Nov 14, each with Buy Tickets / Watch video / Stats icons; ESPN+ and FloHockey are named under Fan Zone > WATCH.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. Persistent white \'Donate\' button in the header plus \'Give to Athletics\' in the ATHLETICS menu; NIL is a link in the ATHLETICS dropdown.',
      },
    steal: 'The equal-weight header trio — Tickets / Shop / Donate as identical white buttons — plus a QUICK LINKS ticket block: commerce unmissable without hijacking the hero.',
  },
  // Saint Peter's Peacocks — id 407 (homepage capture only, Nov 14, 2026)
  407: {
    schoolId: 407,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Yes — \'Peacock Podcast\' in the FANS dropdown under WATCH/LISTEN.',
        video: '\'Videos\' / \'PEACOCKS DIGITAL NETWORK\' section (VB vs Fairfield, VB vs Sacred Heart, WSOC vs Quinnipiac, MSOC vs Mount St. Mary\'s); no dates are shown on any homepage video.',
        photos: 'No dated gallery section on the homepage itself; a \'Galleries\' filter sits in the Content Stream and a Galleries icon sits in the header.',
        social: '\'Content Stream\' section headed \'#STRUTUP\' with All / Instagram / Facebook / Galleries filters, showing populated posts from @spuathletics and @SPUAthletics, with a LOAD MORE button; plus header and footer social icons.',
      },
    pillars: {
        tickets: '\'TICKETS\' is one of the six top-nav items; no persistent header ticket button and no Buy Tickets links in the scoreboard.',
        sportHub: 'An explicit \'Top scoreboard\' across the very top of the page with FULL SCHEDULE and FILTER BY SPORT — Nov 13 finals with scores and Nov 14–15 upcoming games, each expanding to Story recap / Boxscore / Live video / Live stats; streaming is generic \'Live video\' only.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. \'GIVE\' is a top-level nav item plus a Donate icon in the secondary icon bar; NIL is in the FANS dropdown (\'Peacock Feathers NIL\').',
      },
    steal: 'The top-strip scoreboard above the header, so results and \'what\'s on today\' are the first thing a visitor sees, plus the populated #STRUTUP social stream woven into the page body.',
  },
  // Siena Saints — id 408 (homepage capture only, Nov 14, 2026)
  408: {
    schoolId: 408,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'No podcast or radio station/section named on the homepage in the Nov 14 capture; audio is per-game only — \'Listen Live\' / \'Live audio\' links for Men\'s Basketball vs Brown and Women\'s Basketball at New Haven in the scoreboard.',
        video: '\'All-Access\' section with a Filter By Sport dropdown; newest dated video \'Volleyball: Siena 3, Merrimack 2 (11-13-26)\'.',
        photos: '\'Photo Galleries\'; newest \'WBB at Syracuse (11-11-26)\', then Men\'s Basketball at Dayton (11/10/26).',
        social: 'No persistent social icons in header or footer; a grid icon opens a social overlay (Facebook, Twitter, Instagram, YouTube, newsletter). Mid-page Instagram and Facebook sections are both empty: \'There are currently no Instagram posts available.\' / \'There are currently no Facebook posts available.\'',
      },
    pillars: {
        tickets: 'Persistent header button, icon-only — a ticket icon in the top-right green diagonal utility strip alongside Donate, Shop and Watch, staying visible on scroll; the scoreboard also gives Tickets links for both basketball games.',
        sportHub: 'Top scoreboard strip (4 games: two Nov 14 finals with scores, MBB vs Brown 7 PM, WBB at New Haven Nov 15), each basketball game expanding to Listen Live / Watch / Stats / Tickets; the hero is a single men\'s-basketball game preview (tonight, 7 PM, MVP Arena). ESPN logo/link sits in the scoreboard strip.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. DONATE is a main-nav item plus a gift icon in the utility strip and a \'BUILDING BETTER SAINTS — Donate to Saints Athletics Today!\' slideshow slide; NIL is absent — no NIL text anywhere on the homepage.',
      },
    steal: 'The sticky gameday + commerce strip — keep the scoreboard and icon-only Donate/Tickets/Shop/Watch pinned on scroll — plus a four-action game row (Listen / Watch / Stats / Tickets) on every upcoming game.',
  },
  // UNC Wilmington Seahawks — id 409 (homepage capture only, Nov 14, 2026)
  409: {
    schoolId: 409,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'No podcast or radio links by name on the homepage in the Nov 14 capture; only \'Live audio\' links in the scoreboard for the two men\'s basketball games.',
        video: '\'SEAHAWK DIGITAL NETWORK\' under a Videos heading, 4 tiles; newest 11-11-26, \'UNCW MBB Highlights vs Kent State\'.',
        photos: '\'Photo Galleries\' / \'LATEST PHOTOS\', 6 galleries; newest \'Pics from the home finale\' (Swimming & Diving, November 3).',
        social: 'A \'SOCIAL MEDIA\' heading mid-page with a large blank white space beneath it — no icons, handles, posts or feed loaded, observed across multiple scrolls and waits.',
      },
    pillars: {
        tickets: 'Persistent header button — \'TICKETS\' top-right in the navy header, alongside a TICKETS menu section (BUY TICKETS, Seating Charts, SeatGeek); a \'$10 Tickets\' link also appears inside a hero slide.',
        sportHub: 'Top SCHEDULE/RESULTS scoreboard strip above the header with a LIVE flag and per-event Live stats/video/audio links; the hero is a full-width championship celebration photo (women\'s soccer, first CAA title since 2009). FloSports is a footer logo only.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. DONATE button in the header plus a SEAHAWK CLUB menu section (Give Now, Membership, Champions Circle); NIL is menu-only (\'FLIGHT/NIL Comprehensive Program\').',
      },
    steal: 'The top SCHEDULE/RESULTS scoreboard strip with a LIVE flag and per-event Live stats/video/audio links, putting the next game above the brand.',
  },
  // Campbell Fighting Camels — id 410 (homepage capture only, Nov 14, 2026)
  410: {
    schoolId: 410,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Yes — a PODCASTS CAROUSEL (\'Tales from the Creek\', \'Camel Call\' episodes) plus \'Listen Live\' audio for football in the scoreboard.',
        video: 'VIDEOS CAROUSEL (4 items, incl. \'Tales from the Creek | Badie Clark\'); no dates are displayed on any video.',
        photos: 'PHOTOS CAROUSEL, 4 galleries — \'Badie Clark, Jr. Soccer Photos (1984-86)\' (28 images) and others — plus a WePlayed \'#moments\' module.',
        social: 'Header icons (Instagram, Facebook, X, YouTube) plus a large mid-page SOCIAL section: Instagram/Facebook filters, @gocamels feed (6 posts) with a \'Load More Social Posts\' button.',
      },
    pillars: {
        tickets: 'TICKETS is a plain-text main-nav item, reinforced by rotating promo ads above the nav (\'Football vs. Monmouth\', \'2026-27 Basketball Tickets\') and ticket links inside the scoreboard.',
        sportHub: 'Top scoreboard strip under the sticky header: Nov 13–14 volleyball finals with scores, football at Elon, WBB vs Furman, wrestling (Live) — per-game Watch/Listen/Stats/Tickets links; FloSports is a footer logo only.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. FIGHTING CAMEL CLUB is a top-level nav item (the giving club); NIL is absent — the word NIL does not appear, closest is \'Fighting Camels Exchange\'.',
      },
    steal: 'The social section pairing the @gocamels feed with ticket-led posts (\'One Ticket. Two Games.\' / \'CAMELS WIN. YOU WIN.\' discount code) — social posts that sell the next game.',
  },
  // College of Charleston Cougars — id 411 (homepage capture only, Nov 14, 2026)
  411: {
    schoolId: 411,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Yes — \'On the Prawl with Charleston Athletics\', the official podcast (\'Available on Spotify, Apple Music, or wherever you listen\'), plus a Listen pill button in the header.',
        video: 'No video section or video carousel on the homepage in the Nov 14 capture; only Watch/Listen pill buttons in the header and a \'Watch Live on FloSports.TV\' quick link.',
        photos: 'No photo-gallery section; the only imagery feed is the Instagram section.',
        social: 'Header icons (Facebook, X, Instagram, YouTube) plus a \'#TheCollege\' section mid-page: @cofcsports Instagram feed, 6 posts, newest November 2, with \'Load More Instagram Posts\' and a Follow Us link.',
      },
    pillars: {
        tickets: 'Tickets dropdown in the nav plus Quick Links (\'Men\'s Basketball Season Tickets\', \'Mobile Ticket Assistance\') and a Featured graphic reading \'2026-27 SEASON TICKETS SOLD OUT\'.',
        sportHub: 'Top \'Scoreboard (Slider)\' above the main nav with a sport filter, 8 events (WBB loss at Cal, volleyball vs Campbell, men\'s soccer at Hofstra 5 PM), plus a View Calendar link; the hero is today\'s championship game paired with a live countdown (ticking down to kickoff).',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. CAF (Charleston Athletic Fund) is a top-level nav link, plus the STARR Fund in Quick Links (\'STUDENT-ATHLETE RECRUITMENT AND RETENTION FUND\'); NIL is absent — the word NIL does not appear.',
      },
    steal: 'Pair the hero (today\'s championship game) with a live countdown and quick links — the countdown makes the game feel imminent, not just scheduled.',
  },
  // William & Mary Tribe — id 412 (homepage capture only, Nov 14, 2026)
  412: {
    schoolId: 412,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 14 capture — no podcast or radio links found.',
        video: 'No video section or video carousel on the homepage in the Nov 14 capture; only a generic \'Watch Live\' quick link.',
        photos: 'No photo-gallery section on the homepage.',
        social: 'No social icons in the header, no social feed, no social section anywhere on the homepage.',
      },
    pillars: {
        tickets: 'Persistent header button — \'Buy Tickets\' icon link in the sticky header (always visible) plus a Tickets nav item, a promo banner above the hero (\'MINI PLANS AVAILABLE NOW\') and Quick Links \'Purchase Tickets\'. The strongest ticket push of its batch.',
        sportHub: 'Right-rail Calendar module beside the hero (Upcoming Events / Recent Results tabs) with a Composite Calendar button; hero is a Top Story feature carousel. FloSports/FloCollege are footer logos only.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. WMAF (William & Mary Athletic Foundation) is a top-level nav dropdown, plus a \'Donate Now\' icon link in the header; NIL is in Quick Links (\'NIL: Green & Gold Program\').',
      },
    steal: 'The four circular header icon buttons (Buy Tickets, Donate Now, Shop, search) — commerce as a compact, always-visible utility row rather than a nav sprawl.',
  },
  // Drexel Dragons — id 413 (homepage capture only, Nov 14, 2026)
  413: {
    schoolId: 413,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 14 capture — no podcast or radio links found.',
        video: '\'Dragons All-Access.\', 3 videos, no dates shown on any.',
        photos: 'No gallery/photo section or \'Gallery\' text found on the homepage.',
        social: 'Dedicated \'Follow The Dragons.\' section with Instagram/Facebook tabs and a Facebook Feed, plus \'FOLLOW ON TWITTER\' and \'FOLLOW ON INSTAGRAM\' links; no social icons in the header.',
      },
    pillars: {
        tickets: 'TICKETS in the top nav, a ticket icon in the header utility row, and \'Tickets\' first in the mid-page \'Quick Links.\' list. No hero ticket CTA, no persistent ticket button.',
        sportHub: 'Right-rail \'Dragons Calendar.\' (Upcoming Events / Recent Results tabs) beside the Top Stories; a \'BIGGER. BETTER. BIG 5\' ad banner sits above the hero. Flo College is a footer logo only; on-page links are generic \'Live Stats\' / \'Live Coverage\'.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. Top-nav \'Donate\' (Make A Gift, Dragon Club, Forever Dragons Society) and \'Donate\' 2nd in Quick Links; NIL is in the Athletics and Fans dropdowns.',
      },
    steal: 'Lead the page with the city rivalry — the \'BIGGER. BETTER. BIG 5\' banner above the hero sells the Philadelphia Big 5 before any single story does.',
  },
  // Elon Phoenix — id 414 (homepage capture only, Nov 14, 2026)
  414: {
    schoolId: 414,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'No podcast/radio show on the homepage in the Nov 14 capture; per-game \'Listen\' live-audio links appear in the scoreboard for Football, WBB and MBB.',
        video: '\'PHOENIX VIDEO\', 4 videos, month/day only, no year shown; newest by date shown is August 25 (\'Elon Athletics: Phoenix Mascot Reveal\').',
        photos: 'No photo galleries on the homepage.',
        social: 'X, Instagram, Facebook and YouTube icons in the top-right of the maroon header, plus a \'#ELONSTORIES\' features section and a weekly newsletter signup; no embedded social feed on the homepage.',
      },
    pillars: {
        tickets: 'Persistent header nav item — \'TICKETS\' is 2nd of 7 top-nav items and stays visible in the pinned maroon header. No hero ticket CTA.',
        sportHub: 'Top scoreboard slider above the header with a sport filter and FULL CALENDAR: 11/13 finals with scores (XC regionals, MBB Chattanooga 77–Elon 70) and upcoming football vs #16 Campbell, WBB at Wake Forest, MBB at South Carolina; streaming is generic \'WATCH\' links only.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. \'PHOENIX CLUB\' and \'PHOENIX RISING\' are top-level nav items (giving club + campaign); NIL STORE is a main-nav item.',
      },
    steal: 'Treat the new visual identity as content — the Phoenix Video rail leads with the mascot reveal and the new identity film, so a rebrand gets watched, not just announced.',
  },
  // Hampton Pirates — id 415 (homepage capture only, Nov 14, 2026)
  415: {
    schoolId: 415,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 14 capture — no podcast or radio links.',
        video: '\'PIRATE VIDEOS\', 3 press-conference videos, newest Nov 11 (\'Hampton Football | Van Malone and Xavier Brookins Press Conference | North Carolina A&T\'). All press conferences, no feature video.',
        photos: 'No photo galleries on the homepage.',
        social: 'Facebook, X/Twitter, Instagram, YouTube icons in the blue header; a mid-page rotator includes a \'Stay Connected\' banner. No embedded social feed on the homepage.',
      },
    pillars: {
        tickets: 'TICKETS is a top-nav button (3rd of 8); \'Buy Tickets\' also appears inside the scoreboard for the MBB at Navy game. No hero ticket CTA.',
        sportHub: 'Top \'Scoreboard (Slider)\' with a sport filter and View Calendar, 8 events — finals (WBB 103–43 vs Apprentice, MBB 67–56, VB 0–3 vs UNCW twice) and upcoming football vs N.C. A&T, MBB at Navy, WBB vs Norfolk State; the page opens with the scoreboard, then a NEWS grid whose lead story functions as the hero. FloCollege/Monumental is named on the lead article image.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. Top-level \'INVEST\' nav item (giving framed as investment); NIL is under the Student-Athletes dropdown (\'NIL/Student-Athlete Resources\').',
      },
    steal: 'Frame giving as investment — a top-level \'INVEST\' nav item instead of \'Donate\' — and open the page with the scoreboard, then let the news grid do the hero\'s job.',
  },
  // Hofstra Pride — id 416 (homepage capture only, Nov 14, 2026)
  416: {
    schoolId: 416,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 14 capture — \'Blue & Gold Weekly - Episode 12\' is a video, not a podcast/radio link.',
        video: '\'Hofstra Sports Media\' section; newest videos dated November 13 (\'MBB: Hofstra Highlights vs. Iona (11/13/26)\').',
        photos: '\'Latest photos,\' 6 galleries, newest \'MBB: Hofstra vs. Iona (11/13/26)\'.',
        social: 'No social icons, feed or section on the homepage itself; only a \'Hofstra Athletics Social Media Directory\' link inside the INSIDE ATHLETICS dropdown.',
      },
    pillars: {
        tickets: 'Persistent header button — ticket icon in the top bar, plus a TICKETS item in the expanded MENU.',
        sportHub: 'Top slot is a FloCollege promo ad, above the Top Stories; below it a horizontal, sport-filterable scoreboard strip of today\'s/tomorrow\'s games (no scores shown). The top story is a men\'s basketball overtime win on Banner Night.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. Header gift icon (Donate) and PRIDE CLUB in the menu; NIL is in the INSIDE ATHLETICS dropdown (\'Pride of Long Island NIL Exchange\').',
      },
    steal: 'Put the streaming offer on top — the FloCollege promo ad (\'WATCH EVERY GAME / EXCLUSIVE HOFSTRA ALUMNI DISCOUNT OFFER!\') owns the first slot, so the subscription is the hero.',
  },
  // Monmouth Hawks — id 417 (homepage capture only, Nov 14, 2026)
  417: {
    schoolId: 417,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Yes — the two radio broadcasts listed under \'LATEST VIDEO\' (\'Monmouth Men\'s Basketball at Quinnipiac Radio\', Nov 12); no separate podcast link.',
        video: 'Yes in name only — the \'LATEST VIDEO\' section\'s newest items are actually radio audio; no true video thumbnails were shown in that section.',
        photos: '\'LATEST PHOTOS,\' newest \'Football vs. Merrimack 11/14/26\' (dated today) and \'Women\'s Basketball vs. Bryant & Stratton\' (Nov 13).',
        social: 'A dedicated \'HAWKS INSTAGRAM\' section mid-page with three @muhawks posts (Nov 11, Nov 7, Nov 6), plus footer Twitter/Instagram/Facebook icons and a newsletter email signup.',
      },
    pillars: {
        tickets: 'Persistent header button — a ticket icon in the top bar (with Calendar and Shop icons); no Tickets item in the main nav.',
        sportHub: 'No full-width hero banner at all — the page opens straight into a \'LATEST NEWS\' 2x2 story grid beside the right-rail HAWKS SCHEDULE (Upcoming/Results tabs, sport filter); scores also appear inline on the news cards (125–31, 74–70). Streaming is generic; FloSports is a footer logo only.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. Support menu (Make A Gift, Blue/White Club, Hawk Excellence Fund); NIL is under Support (\'Hawk Excellence Fund - NIL\').',
      },
    steal: 'Skip the hero banner entirely — open straight into a 2x2 story grid beside the schedule rail, with scores printed on the news cards themselves.',
  },
  // North Carolina A&T Aggies — id 418 (homepage capture only, Nov 14, 2026)
  418: {
    schoolId: 418,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Yes — \'AGGIES FOOTBALL LISTEN LIVE\' / \'A&T Radio\' promo at the top.',
        video: '\'NCATAGGIESTV\'; newest video \'2026 A&T Football vs. Elon GHOE,\' November 1.',
        photos: 'Photo Gallery buttons on top stories and a Galleries filter in the Content Stream.',
        social: 'A full \'#AGGIEPRIDE\' Content Stream section with All/Instagram/YouTube/Galleries/Facebook filters and @ncatsuaggies posts, plus a \'Load More\' button.',
      },
    pillars: {
        tickets: 'Persistent header button — a gold \'Tickets\' pill in the top bar; \'Ticket Center\' also appears in Quick Links and \'Ticket Information\' in the About menu.',
        sportHub: 'Right-rail Schedule (Events/Results tabs, sport filter), Nov 13–18 fixtures (Football at Hampton Nov 14, 1 P.M.; Volleyball at Hofstra); the top slot (\'Top Promo\') holds two ads: \'ALL AGGIES ALL IN\' (giving) and \'AGGIES FOOTBALL LISTEN LIVE\'. No scores shown in the Events view.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. Giving is the most prominent element: \'Donate to AAF\' is a top-level nav item, \'ALL AGGIES ALL IN\' is the lead promo, \'Aggies Give\' is in Quick Links; NIL is absent — no NIL mention observed.',
      },
    steal: 'Make giving the hero — a \'Donate to AAF\' top-nav item plus an \'ALL AGGIES ALL IN\' lead promo — and give the social stream (#AGGIEPRIDE) a full mid-page block.',
  },
  // Northeastern Huskies — id 419 (homepage capture only, Nov 14, 2026)
  419: {
    schoolId: 419,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Live audio only on the homepage in the Nov 14 capture — a \'Live audio\' link for Men\'s Ice Hockey at UConn in the schedule; no podcast or radio section/link found.',
        video: '\'Latest Videos\' — three videos, all dated November 13, all Hall of Fame features; \'View More Videos\' link.',
        photos: 'No gallery section or link on the homepage; none in the Fan Central menu.',
        social: 'Icon links only, no feed or section — Facebook, Instagram, X/Twitter, YouTube icons at top right of the white header, repeated in the footer; Fan Central also has a \'Social Media\' link.',
      },
    pillars: {
        tickets: '\'TICKETS\' is a plain text item in the red top nav (opens in a new window); the only other ticket prompt is a \'Buy tickets\' link inside the schedule for Men\'s Ice Hockey at UConn.',
        sportHub: 'No single hero banner — the top of the page is a 5-story grid (one large lead story left, four smaller right), led by a pro-alumnus star story (Cam Schlittler, AL Cy Young); a mid-page schedule carousel follows, with Men\'s Ice Hockey at UConn flagged \'Live Now\'. FloCollege is a footer logo only.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. \'GIVING\' is a top-nav item (opens in a new window); NIL is in the Inside Athletics menu (\'NIL Policy\').',
      },
    steal: 'Lead with a pro-alumnus star story — the Cy Young winner, not the next game — and let a 5-story grid, not a hero banner, fill the first screen.',
  },
  // Stony Brook Seawolves — id 420 (homepage capture only, Nov 14, 2026)
  420: {
    schoolId: 420,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'No podcast or radio link found on the homepage in the Nov 14 capture; only the Unmute Audio toggle on the featured video.',
        video: 'Yes — a full-width \'Featured Video\' is the hero (with Unmute Audio and Pause Video controls), plus a second video in the \'Long Islands Team\' section; no video date was displayed anywhere.',
        photos: 'No gallery section or link on the homepage; none in the Fan Zone or Inside Athletics menus.',
        social: 'Footer icon links only — Twitter, Instagram, Facebook, YouTube in the footer; no social icons in the header, no feed or social section in the body.',
      },
    pillars: {
        tickets: 'Persistent — \'Tickets\' in the main nav, \'TICKETS\' in the utility bar, and a ticket icon in the fixed left rail. Strongest ticket presence of its batch.',
        sportHub: 'Video-led story hero (volleyball clinches a CAA tournament berth), then a mid-page Scoreboard (Nov 14 football final with a Boxscore link; Nov 15 WBB and Nov 17 MBB upcoming with Live video / Live stats links); a dark-blue vertical icon rail on the left edge stays fixed while scrolling, with icons for menu, search, shop, watch, donate, contact and tickets. FloSports is named in the Fan Zone menu (\'Watch on FloSports\').',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. \'Donate\' in the main nav and \'DONATE\' in the utility bar; NIL is unusually prominent — top-level \'NIL Merchandise\', \'Seawolves Exchange\' and an NIL item in Inside Athletics.',
      },
    steal: 'The fixed left icon rail (menu, search, shop, watch, donate, contact, tickets) — a whole second nav that never scrolls away — and a video-led hero with Unmute/Pause controls.',
  },
  // Towson Tigers — id 421 (homepage capture only, Nov 14, 2026)
  421: {
    schoolId: 421,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Live audio only on the homepage in the Nov 14 capture — \'Live audio\' links for Men\'s Basketball vs UMBC in the scoreboard; no podcast or radio section/link found.',
        video: '\'VIDEOS / TOWSON SPORTS NETWORK\', three videos, all dated 6.8.26 — about five months stale on Nov 14.',
        photos: 'No gallery section or link on the homepage; none in the Sports, Fan Central, Support or About menus.',
        social: 'No social icons, feed or social section anywhere on the homepage; the only YouTube presence is a \'Towson Sports Network - YouTube\' text link in the Fan Central menu.',
      },
    pillars: {
        tickets: '\'TICKETS\' in the black top nav, reinforced by \'Buy tickets\' links in the scoreboard for both basketball games and a right-rail promo tile \'BUY TICKETS HERE!\'.',
        sportHub: 'Full-width SCOREBOARD strip above the main nav (MBB vs UMBC 11.14.26 7:30 p.m., WBB vs UMBC 11.15.26, swimming at Patriot Invitational), with Live audio / Live video / Live stats / Buy tickets links per game; below it a TOP STORIES 5-tile grid. FloSports - CAA is in the Fan Central menu; TowsonSportsNetwork.tv is also named.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. \'SUPPORT\' is a top-nav item opening a Tiger Athletic Fund menu, plus a right-rail \'CLICK TO DONATE\' tile; NIL is in the Support menu (\'NAME, IMAGE, LIKENESS — Towson NIL Home Page\').',
      },
    steal: 'A permanent commercial column on the right — \'CLICK TO DONATE\' / \'BUY TICKETS HERE!\' / \'SHOP NOW\' / \'TOWSON GAMEDAY APP\' tiles beside the stories — so the ask never leaves the first screen.',
  },
  // East Carolina Pirates — id 422 (homepage capture only, Nov 14, 2026)
  422: {
    schoolId: 422,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 14 capture — no podcast or radio link in homepage text; the Watch/Listen menu did not expand to verify.',
        video: 'Video section; newest \'11/13/26 Inside Pirate Athletics\' (Nov 13).',
        photos: 'Galleries; newest \'Fall Scrimmage\' (Aug 15 — ~3 months stale).',
        social: 'Header social icons (Facebook, X, Instagram, YouTube) plus a homepage \'#GoPirates\' Instagram feed section — 3 posts (Nov 14, Nov 13, Nov 13) from @Ecuathletics, with a Follow Us link. The only one of its batch with an on-page social feed.',
      },
    pillars: {
        tickets: 'Persistent header button — gold \'Tickets\' pill in the header, plus a \'Buy Tickets\' quick link.',
        sportHub: 'No scoreboard — no top strip or right rail; instead a mid-page Schedule carousel (Upcoming/Results tabs): Football at Charlotte Nov 14, 1:00 PM; MBB vs Delaware State Nov 14, 4:00 PM. ESPN+ is named once in page text. The hero is a concert (Kenny Chesney, May 1), not a game.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. Pirate Club (giving club) is a gold pill in the header; no separate Donate button. NIL is absent — \'NIL\' does not appear in homepage text.',
      },
    steal: 'The embedded #GoPirates Instagram feed on the homepage — the only one of its batch that turns social into on-page content instead of footer icons.',
  },
  // Florida Atlantic Owls — id 423 (homepage capture only, Nov 14, 2026)
  423: {
    schoolId: 423,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Yes — \'The Paradise Pod with AD Josh McCowan: Ep 2\' (hero slide + FAUSPORTS.TV) and Live Audio links in the scoreboard (Football at Tulsa).',
        video: 'FAUSPORTS.TV section (4 videos: \'Paradise Pod, Ep. 2\', MBB/WBB postgame pressers, \'Inside the Owls\' Burrow S11, E13\'); no dates are shown on the video cards.',
        photos: 'Galleries; newest \'VB vs. East Carolina (Nov. 13)\', 25 photos; also MBB vs. William & Mary, WBB vs. South Alabama (65 photos), \'Owlflics of the Week (11/10/26)\'.',
        social: 'No social icons or feed on the page body; only per-sport Facebook/Twitter/Instagram links buried inside the collapsed SPORTS menu (plus General links in the FANS menu).',
      },
    pillars: {
        tickets: 'TICKETS is a top-level nav menu, plus small ticket / $ / cart icons at the far right of the header and a Ticket Office link; season-ticket promos (football, MBB, WBB) appear in a mid-page promo carousel. No persistent gold ticket button.',
        sportHub: 'Top scoreboard strip, filterable by sport (\'Choose Sport\'), 15 events loaded, finals and upcoming with Live Video / Live Stats / Live Audio links per event (Football at Tulsa Nov 14, 7:15 p.m. ET; WBB at FGCU, Final, Loss 51–86); the hero counts down to kickoff (Game 10 at Tulsa). Streaming is the school\'s own FAUSPORTS.TV hub; no external platform is named.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. SUPPORT is a top-level menu, a Donate link ($ icon, top right), and a \'Competitive Excellence Fund\' slide in the promo carousel; NIL is absent — \'NIL\' does not appear in homepage text.',
      },
    steal: 'The filterable top scoreboard strip with per-event Live Video/Stats/Audio links — the best \'what\'s on today\' at a glance — paired with a countdown-to-kickoff hero.',
  },
  // Rice Owls — id 424 (homepage capture only, Nov 14, 2026)
  424: {
    schoolId: 424,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Yes — \'Rice Unfiltered Podcast\' in QUICK LINKS and in FANS > MEDIA (with Live Audio and Official YouTube Channel), plus Live Audio links in the Events rail.',
        video: 'Video in the mixed THE LATEST feed; newest dated item \'Rice Volleyball vs Charlotte 11/13/2026\'.',
        photos: 'Galleries via the All Galleries link and the mixed THE LATEST feed.',
        social: 'Footer only — Twitter, Instagram and Facebook icons in the footer; per-sport social links inside the SPORTS menu. No homepage social feed or section.',
      },
    pillars: {
        tickets: 'Persistent header — TICKETS top-level nav menu plus a ticket icon at top right plus \'Purchase Tickets\' in the QUICK LINKS row.',
        sportHub: 'Right-rail \'Live Game Center\' card (Football vs Tulane, Tied 3–3, Live, started 3:30 PM) above an EVENTS calendar rail with Upcoming/Results tabs and Live video/audio/stats links; the hero is a rotating Top Stories slider. ESPN+ gets the most prominent callout of its batch — a \'Watch Rice Owls on ESPN+\' banner under the nav.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. OWL CLUB is a top-level nav item plus a Donate (gift) icon in the header and a \'Rice Owl Club — Support World Class Student-Athletes — Give Today!\' banner; NIL is in the ATHLETICS menu (\'Name, Image, and Likeness\') — the only one of its batch naming NIL in nav.',
      },
    steal: 'The right-rail Live Game Center card + Events calendar with live-media links — a game in progress is impossible to miss without crowding the hero.',
  },
  // Temple Owls — id 425 (homepage capture only, Nov 14, 2026)
  425: {
    schoolId: 425,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Yes — \'Listen Live on OwlSports.com\' and \'Listen to Our Podcast\' (Quick Links); Listen link on the Football Game Guide card.',
        video: 'No video section/player on the homepage in the Nov 14 capture; only \'OwlsTV\' links in nav dropdowns and \'Watch Live on ESPN+\' in Quick Links.',
        photos: '\'Photo Gallery\' link on the lead football story and \'Photo Galleries\' in the Fan Zone menu.',
        social: 'Footer only — Twitter/X, Facebook and Instagram pill buttons in the maroon footer; plus per-sport social links inside SPORTS dropdowns and a Social Media link in Fan Zone. No social feed/section on the page body.',
      },
    pillars: {
        tickets: 'Persistent header button — white pill \'TICKETS\' top-right (with SHOP and DONATE), visible on scroll; plus \'Tickets on Sale Now\' in Quick Links and Tickets in Fan Zone. Strongest ticket push of its batch.',
        sportHub: 'Top scoreboard strip above the header (\'Select Sport to filter scores\'), Nov 8–15 results/upcoming (e.g. WBB Temple 93, FINAL, Saint Joseph\'s 83), each with Story / Box Score links; below it a story waterfall led by \'Temple Football Ousted by UAB\' (Temple 10, UAB 36, Final). ESPN+ is named in Quick Links.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. Header DONATE button, Temple Owl Club nav, \'Make a Donation\' and \'Join the Owl Club\' in Quick Links; NIL is a top-level nav item (\'TEMPLE NIL\': Built on Broad, Temple Owls Exchange, Owl Elite Fund, TUFF Fund, NIL Policy).',
      },
    steal: 'The persistent header TICKETS / SHOP / DONATE trio plus a filterable top scoreboard strip — tickets and scores stay one click away on every scroll position.',
  },
  // Tulane Green Wave — id 426 (homepage capture only, Nov 14, 2026)
  426: {
    schoolId: 426,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'No audio player noted on the homepage in the Nov 14 capture — no podcast/radio/listen link in homepage text.',
        video: '\'Featured Videos\' section (6 videos); newest \'Track Kat Klash Houston Texas 2026 Day 2\' (7h ago, Nov 14).',
        photos: 'No photo-gallery link found in the homepage body/footer text.',
        social: 'No social icons, feed or social section anywhere in the homepage body or footer.',
      },
    pillars: {
        tickets: '\'Tickets\' is a top-level nav dropdown; plus \'Buy Tickets\' in Quick Links and per-event Buy Tickets links in the Schedule. No persistent header ticket button.',
        sportHub: 'First content is the \'Live Game Center\' bar for the game in progress (Football at Rice, 3–3 Live), above the Top Headlines carousel; a mid-page Schedule (Upcoming/Results tabs, 6 events) plus a Countdown to Women\'s Volleyball vs Rice (0 days, 21 hrs). No top scoreboard strip; streaming is generic \'Watch video\' links only.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. Quick Links \'Donate To The Green Wave Club\', Featured Content \'Green Wave Club — Give Now\' and \'Green Wave Talent Fund — Donate Today\'; NIL is in Quick Links (\'Green Wave NIL\', \'Green Wave Talent Fund\') and a Featured Content card (\'Support Tulane NIL\').',
      },
    steal: 'Pair a Live Game Center bar with a countdown to the next home event — \'now\' and \'next\' are the first thing a visitor sees — and give merch homepage space with an embedded Spirit Shop (10 priced products, $29.99–$130).',
  },
  // UAB Blazers — id 427 (homepage capture only, Nov 14, 2026)
  427: {
    schoolId: 427,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Yes — QuickLinks \'The Inferno Podcast\'.',
        video: 'Yes, via the social wall only — no standalone video section; newest \'UAB Football | The Rewind: Game 9 vs Charlotte\' (no date shown), newest explicitly dated \'UAB Football Press Conference | 11/9/26\'.',
        photos: 'No photo-gallery link found in homepage text.',
        social: 'Yes — the only one of its batch with a homepage social section: \'Social Media\' with a \'Wall\' and All / Facebook / YouTube filter buttons, showing YouTube video thumbnails and a \'Load More\' button.',
      },
    pillars: {
        tickets: '\'Tickets\' top-level dropdown (2026-27 Ticket Guide, Buy Tickets) plus QuickLinks \'Purchase Tickets\'. No persistent header ticket button.',
        sportHub: 'No top strip — mid-page \'Blazers Calendar\' (Events/Results tabs, Nov 13–21) plus score bugs embedded in story cards; the hero is a \'New Blazers BOWL ELIGIBLE\' Top Promos banner over a 3-column Stories grid. No streaming platform is named.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. Giving is the most prominent of its batch — \'Give Now\' is a top-level nav item, \'Blazer Boosters\' is a top-level nav dropdown, QuickLinks has \'Join Blazer Boosters\'; NIL is in the Shop menu only (Campus Ink NIL, Influxer, Athlete\'s Thread — NIL merch).',
      },
    steal: 'Use the social wall as the video hub (YouTube thumbnails with filters) instead of a separate video section, and put \'Give Now\' in the top nav so giving is a primary action.',
  },
  // Memphis Tigers — id 428 (homepage capture only, Nov 14, 2026)
  428: {
    schoolId: 428,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Yes — an \'Inside Memphis Athletics Podcast\' embedded player on the homepage (25:40 episode) plus a \'Memphis Tiger Network\' link in Fan Zone.',
        video: '\'Tiger Video\'; newest Nov 13, 2026 (several Nov 12 press conferences, e.g. \'Football: Charles Huff Press Conference - November 12, 2026\').',
        photos: 'No galleries section on the homepage.',
        social: 'Footer icon row only — X, Instagram, Facebook, YouTube beside the copyright line; Facebook/Instagram/Twitter/YouTube links also in the Fan Zone menu and per-sport links in the Sports menu. No social feed or section on the homepage body.',
      },
    pillars: {
        tickets: '\'Tickets\' in the main nav plus a ticket icon at the header right, reinforced by two ticket-offer slides in the promo rotator. No pill/button treatment.',
        sportHub: 'Rotating Top Stories image carousel (lead: Memphis #15 vs Vanderbilt) with a smaller 5-slide promo rotator above it (tickets / rewards / fund / shop); right-rail Events panel (Upcoming/Recent Results tabs) beside Top Stories, plus a mid-page Event Countdown to kickoff at Navy. ESPN is named in the top headline (\'against No. 10 Louisville on ESPN\'); all other Watch links are generic.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. \'Donate\' is a nav item plus a gift icon in the header (Memphis Athletics Fund, 901 Competitive Excellence Fund, Tiger Leadership Circle); NIL is absent — the word NIL appears nowhere, though per-sport Opendorse links exist inside the Sports menu.',
      },
    steal: 'The \'Behind the Stripes\' athlete-story rail plus the \'This is our city.\' / \'This is Memphis\' parallax — the only real brand/storytelling space in the batch; it gives the page a voice beyond scores and tickets.',
  },
  // Charlotte 49ers — id 429 (homepage capture only, Nov 14, 2026)
  429: {
    schoolId: 429,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Yes, radio only — \'Gameday Internet Radio\' in Quick Links and an \'Internet Radio\' link in the Top Story game center; no podcast named.',
        video: '\'Videos\'; newest Nov 13 (\'Charlotte Men\'s Basketball: App State Post Game Press Conference\'); 8 videos listed, oldest Nov 3.',
        photos: '\'Galleries\'; newest \'Football at UAB\' Nov 7 (22 images); all 6 galleries are football.',
        social: 'No social icons, links, feed or section anywhere on the homepage.',
      },
    pillars: {
        tickets: 'Persistent header button — dark-green pill buttons in the header for Tickets, Donate and Shop; \'Buy Tickets\' is also the first Quick Link; a 4-slide promo rotator is entirely ticket offers and a second 9-slide mid-page promo rotator is mostly ticket offers too.',
        sportHub: 'Top \'Scoreboard (Slider)\' above the nav, 8 events with a sport filter: 4 finals with scores and 4 upcoming (Football vs East Carolina Nov 14, 1:00 p.m.); the Top Story is today\'s game presented as a full game center (Purchase Tickets / Watch (ESPN+) / Internet Radio / Live Stats / Alumni Tailgate Tickets / Weekly Press Conference / Game Notes). The hero image carries no headline text — only an ESPN+ logo and a \'Sat. Nov 14 / 1:00 p.m.\' chip.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. Donate pill button in the header; \'Support\' nav item; a 49er Club promo in the mid-page rotator and \'Join the 49er Club\' in Quick Links. NIL is absent — not found anywhere on the homepage.',
      },
    steal: 'The Top Story game center — Purchase Tickets / Watch (ESPN+) / Internet Radio / Live Stats / Tailgate / Notes in one place — plus an embedded priced Store on the homepage (four Nike items, $31.98–$69.98).',
  },
  // North Texas Mean Green — id 430 (homepage capture only, Nov 14, 2026)
  430: {
    schoolId: 430,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Yes — \'Podcasts\' link in the FANS menu, \'Mean Green Sports Network\', \'The Varsity Network\' in Quick Links, and Live audio links on each schedule event.',
        video: '\'VIDEOS\'; newest Nov 10, 2026 (\'Neal Brown Weekly Press Conference vs. UTSA | Mean Green FB\').',
        photos: 'No galleries section on the homepage.',
        social: 'Text links only — X, Instagram, Facebook, YouTube as plain text links in the QUICK LINKS panel; per-team links inside the TEAMS menu. No social icons, feed or section.',
      },
    pillars: {
        tickets: 'Persistent header button — lime-green \'Buy Tickets\' pill in the header plus a \'TICKETS\' nav item; a two-slide ticket promo rotator at the top; \'Buy tickets\' links on individual schedule events; \'Buy Tickets\' in Quick Links.',
        sportHub: 'Right-rail SCHEDULE panel beside Top Stories (Upcoming Events/Recent Results tabs): WBB vs Incarnate Word 2 PM, MBB vs South Alabama 5 PM, Football at UTSA 8:00 PM, each with Live audio / Live video / Live stats links and Buy tickets links on two of them. ESPN+ is named in Quick Links. Note: meangreensports.com with no trailing slash redirected to /feature/gameday-2026, which rendered essentially blank (footer only); the trailing-slash URL loads the real homepage.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. \'GIVING\' is a nav item (opens in a new window) and \'Mean Green Athletic Fund\' is in Quick Links; NIL is in the ATHLETICS menu (\'Name, Image & Likeness\') — the only one of its batch naming it.',
      },
    steal: 'Per-event action rows in the schedule rail (Live audio / Live video / Live stats / Buy tickets on every upcoming event) — the scoreboard becomes a conversion tool, not a display.',
  },
  // South Florida Bulls — id 431 (homepage capture only, Nov 14, 2026)
  431: {
    schoolId: 431,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Yes — an \'AUDIO\' section, newest \'CONDENSED GAME: SOUTH FLORIDA 14, BOWLING GREEN\' (Nov 9), and a \'Podcast List\'; \'Bull Speed Ahead Podcast\' in the nav dropdown and \'Bulls Unlimited (Audio Channel)\' in Quick Links.',
        video: 'Yes, but minimal — one \'Play video\' button on the Memphis football story (Nov 13); no dedicated video section and no video date shown.',
        photos: '\'BULLS PHOTOS\', newest \'SOUTH FLORIDA VS. MEMPHIS\' FB, 50 images, Nov 13; more galleries Nov 12, Nov 8, Nov 6, Nov 2.',
        social: 'An \'INSTAGRAM\' section near the bottom — 3 posts, \'@USFATHLETICS\', dated Nov 13, Nov 12, Nov 12, with a \'Load More Instagram Posts\' button; plus \'Follow the Bulls\' in QUICK LINKS. No header social icons seen.',
      },
    pillars: {
        tickets: 'Hero-led — the entire 7-slide hero rotator is ticket ads (2027 football season tickets for the new stadium, MBB/WBB single-game and flex plans); TICKETS is also a top-nav dropdown, but there is no standalone/persistent header ticket button.',
        sportHub: 'No score strip/rail — instead a mid-page right-rail CALENDAR (Upcoming/Results tabs, 5 events loaded): Nov 14 MBB vs Coppin State 2:00 PM and others, each with Tickets / Watch / Listen / Stats links; no scores shown. No \'ESPN\' text anywhere on the homepage.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. DONATE is a top-nav dropdown; \'Bulls Club\' is in QUICK LINKS. NIL is absent — \'NIL\' appears nowhere in visible homepage text.',
      },
    steal: 'Sell the future, not just today — the hero rotator sells 2027 season tickets for a stadium opening in 2027 (\'THE FUTURE IS COMING\'), turning a building that does not exist yet into the ticket story.',
  },
  // UTSA Roadrunners — id 432 (homepage capture only, Nov 14, 2026)
  432: {
    schoolId: 432,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Yes, per-event only — a \'Listen\' link for Women\'s Basketball vs Louisiana and a \'Ticket 760\' (radio) link for football in the Schedule; no podcast section.',
        video: 'Yes, by link only — a \'Watch Videos\' link in the Latest News header; no video items or video dates are shown on the homepage.',
        photos: 'No galleries/photo section observed on the homepage.',
        social: 'No social icons, feed or social section anywhere on the homepage.',
      },
    pillars: {
        tickets: 'Hero-led — the top banner is a ticket sale (\'UTSA FOOTBALL TICKETS ON SALE NOW / NOVEMBER 14 HOMECOMING / NOVEMBER 27 SENIOR DAY\'); Tickets is also a plain top-nav link, not a distinct button.',
        sportHub: 'Top scoreboard strip above the header showing upcoming games only (no scores in the visible strip): Nov 14 North Texas vs UTSA Football 8:00 PM CST, plus volleyball, MBB and more, each with a Links bar; directly below the hero is a large \'UTSA vs. North Texas Game Day Guide\' feature. ESPN+, ESPNU and ESPN2 are named in the Schedule — the only school in the conference naming a streamer in body copy.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. \'Support\' is in the top nav; the \'BOLD CHAMPIONS\' section. NIL surfaces only as a \'NIL GEAR\' tile in the Online Store section.',
      },
    steal: 'A dedicated \'Game Day Guide\' feature directly under the hero, turning the next game into a single, findable hub instead of scattering gameday links through nav menus.',
  },
  // Tulsa Golden Hurricane — id 433 (homepage capture only, Nov 14, 2026)
  433: {
    schoolId: 433,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Yes — a \'Podcasts\' section for the \'Eye of the Hurricane Podcast\' (4 tiles, \'All Podcasts\' link), plus CONNECT > LISTEN links (podcast, Hurricane Radio Affiliates, \'Listen on Varsity\', Radio Shows).',
        video: '\'Tulsa All Access Videos\' (Hurricane Vision); newest Nov 12, 2026: \'WBB | Angie Nelp Post OSU\' and \'MBB | Eric Konkol Post ORU\'.',
        photos: '\'Galleries\': \'FB - at Tulane\' (Nov 7, 2026), \'FB vs. Army\' (Oct 23, 2026), \'FB at Rice\' (Oct 17, 2026).',
        social: 'Footer icon links only — Twitter, Facebook and Instagram at the bottom, plus a Quick Links item \'FOLLOW US ON SOCIAL MEDIA\' and per-sport links inside the SPORTS menu. No social feed or social section on the homepage.',
      },
    pillars: {
        tickets: 'Hero-led — two of the three hero tiles are single-ticket sales (basketball, football); TICKETS is also a top-nav dropdown, but there is no standalone ticket button. (There IS a gold pill \'Shop\' button in the header — merch, not tickets.)',
        sportHub: 'Top scoreboard strip above the header showing BOTH results with scores and upcoming games (10 events loaded, sport filter): M Soccer Nov 11 Tulsa 1–0 Memphis, MBB 80–71 Oral Roberts, WBB 64–62 Oklahoma State, plus Football vs FAU Nov 14, 6:15 p.m. The headline story is a schedule change (\'SCHEDULE UPDATE\') blown up as the largest editorial element. Only \'The American Digital Network\' is named for streaming.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. \'SUPPORT TU\' is a top-nav dropdown (\'Give Today\', \'Golden Hurricane Champions Fund\'); NIL is absent — \'NIL\' appears nowhere in visible homepage text.',
      },
    steal: 'A top scoreboard strip that shows real scores alongside upcoming games — the only one in its batch to do both — plus the \'Tulsa Highlights\' carousel (The University / Campus Life / The American / Traditions / The City / Academics), which sells the school and the conference, not just tickets.',
  },
  // Wichita State Shockers — id 434 (homepage capture only, Nov 14, 2026)
  434: {
    schoolId: 434,
    audited: CAPTURE_ONLY_DATE_NOV14,
    media: {
        audio: 'Yes — \'Roundhouse podcast with Bob Hull on Shocker basketball\' in Videos; \'RH: PODCAST WITH GABI MAAS ON SHOCKER VOLLEYBALL\' (Nov. 11, 2026) in The Roundhouse; MULTIMEDIA lists \'Coaches Show Podcasts\' and \'Shocker HD Audio Streaming\'.',
        video: 'Video section; newest \'Wichita State MBB: Paul Mills Media Availability (Nov. 13, 2026)\', followed by postgame press conferences from Nov. 11 and Nov. 4.',
        photos: '\'Photo Galleries\' is in the MULTIMEDIA nav menu, but there is no photo-gallery section on the homepage body itself.',
        social: 'A dedicated Instagram section mid-page (right rail under Latest Headlines, headed \'Instagram\' / \'SOCIAL FEED\') showing three @goshockers posts with a \'Load More Instagram posts\' button; no social icons in the footer.',
      },
    pillars: {
        tickets: 'Persistent header button and hero-led — yellow \'TICKETS\' link fixed in the black header top-right, plus a \'Tickets\' per-sport dropdown in the scoreboard bar, plus the hero ticket banner, plus ticket links under FANS.',
        sportHub: 'Top scoreboard strip above the header with a \'Choose Sport\' filter and Full Calendar link — a Live Women\'s Basketball game vs. UC Riverside (Nov. 14, 2:00 P.M.) whose expanded toggle offers Live audio / Live video / Live stats, plus finals (Women\'s Bowling 1029 vs. Quincy 945); the lead story is today\'s MBB preview (\'SHOCKERS PLAY AUSTIN PEAY AT KOCH ARENA\'). No streaming platform is named anywhere.',
        roster: 'Roster pages were not part of this homepage capture — no live notes yet.',
        giving: 'Giving pages were not part of this homepage capture — no live notes yet. Donate appears in three places: a Donate dropdown in the scoreboard bar (Shocker Pride Fund, Shocker Way Fund), the SUPPORT nav (SASO, Donate Now), and a mid-page SASO parallax band; NIL is a top-level nav item (Info, Contribute, NIL Store, Shocker NIL Exchange).',
      },
    steal: 'A branded long-form vertical (\'The Roundhouse\') given its own homepage section with podcast, previews and features, plus NIL as a top-level nav item with its own dropdown — NIL as a first-class destination, not a footer link.',
  },
}

export function getLiveNotes(schoolId) {
  return liveNotes[schoolId] || null
}
