# Type scale, no-emoji, lightbulb-save build — 2026-11-14

Zachary's feedback on the live site (esp. /school/1): font too small
throughout, remove screenshot references, no emojis, the "Save this idea"
button outshone the idea itself, and the margins were the same color as the
background so the body was hard to scan (ParishVox does this better).

## What changed

1. **Type scale up, site-wide.** Every small font-size in the 10 CSS
   modules bumped ~2px (body copy 13–15px → 15–17px, labels 11–12px →
   13–14px). Body base is now 16px/1.6. School page hero quote 28→32px
   (26px mobile). 186 sizes bumped, no display sizes changed.
2. **Page surround vs content panel (ParishVox-style).** `body` is now a
   deeper warm tone (`--page: #e9e2d2`, matching ParishVox's `#e7dfcf`
   surround); every page's main container is a light panel — white card,
   1px border, 12px radius, soft shadow — so the eye can track where the
   body starts and ends. Applied to SchoolDetail, Home, Index, Ideas,
   News, My Ideas, Pricing. Full-bleed dark headers and nav/footer are
   untouched.
3. **Screenshot references removed.** The whole screenshot placeholder
   block is gone from SchoolDetail (label, file name, placeholder, note)
   plus its CSS; the `getSchoolImage` helper and its comments are gone
   from SchoolCard (it was unused — the card shows initials, never an
   image). The `screenshotFile` data field stays in schools.js as part of
   the capture record; nothing displays it.
4. **No emojis.** Removed: 🔒 ⭐ ⚠ on SchoolCard, 🏟 📊 ✍️ 📥 feature
   icons on Home (replaced with a small red square marker), 💡 🏟 on
   Ideas, 📰 on News, 💡 ✅ 🎉 on My Ideas, 🔓 🏟 on Index, ⭐ 💪 ⚠
   block icons on SchoolDetail. Plain text glyphs (✓ ✕ ＋ ← →) are kept —
   they are typographic UI symbols, not emoji.
5. **Save is now a clickable lightbulb.** New shared component
   `src/components/IdeaSaveButton.jsx` (inline SVG bulb, no emoji):
   a quiet 20px outline bulb in muted grey, top-right of each idea /
   in the block header on school pages, gold on hover, filled gold +
   a small "Saved" label when saved. Used in SchoolDetail (3 analysis
   blocks + idea cards), Ideas, and News. The "Add this gap to my
   checklist" button is now a quiet text link so it doesn't compete
   either.

## Tests

- Build passes (568kB).
- test-school-page 188/188 (was 184/184; the old
  `page wires school.screenshotFile` assertion was replaced by
  `page has no screenshot references` + `page uses the lightbulb save
  button` checks, plus 3 checks for the key fix below).
- test-my-ideas 23/23, test-news 38/38, test-mobile-nav 30/30,
  test-ideas chips pass.
- Visual check done locally with headless Chromium (the remote browser
  could not reach the localhost preview, and the localtunnel died):
  panel vs surround reads clearly, type is larger throughout, one click
  lights exactly one bulb, no screenshot mention, no emoji.

## Follow-up fix found by the visual check (same day)

Clicking one lightbulb lit two blocks: all three school-page blocks
share the fallback angle "From the audit", and the idea key was
`{schoolId}-{slug(angle)}`, so all three shared one key. Fixed in
`src/lib/ideas.js`: `ideaFromEvidence` now keys on
`{schoolId}-{slug(source)}-{slug(angle)}` (e.g.
`1-what-we-love-from-the-audit`), and `getIdeaByKey` parses the source
prefix so minimal saves with new-format keys still migrate to the right
block; legacy keys (`1-from-the-audit`) still resolve as before.
`ideasFromSchool` in `src/lib/schoolPage.js` now dedupes on the evidence
text instead of the key — Nebraska's hero copy and headline are the same
words, and key-based dedupe would have shown the same quote twice.
Verified: one click lights exactly 1 bulb; Nebraska still shows 1 idea
card; 192 ideas across all schools, max 2 per school.
