# Mobile hamburger nav — build note

Built 2026-11-14 in the local clone `~/workspace/varsity-content-build`,
uncommitted working-tree changes. NOT merged. Stacks on the school-page
branch; pushed as draft PR #5.

## The bug (from Zachary's phone screenshot, 2026-11-14)

The navbar had 6 links + 2 CTAs in one row. The old mobile CSS (max-width
640px) only shrank things — hid the logo words and "Free Access", tightened
padding — but the row still didn't fit a phone: links wrapped to two lines
("THE INDEX", "GET IDEAS", "MY IDEAS" stacked) and the red "Scout — $39"
button was cut off at the right edge.

## What changed (`src/components/Navbar.jsx`, `Navbar.module.css`)

- **Breakpoint is now 768px** (was 640px of shrinking). At ≤768px the
  desktop links row and the desktop CTA row are `display: none`.
- **Hamburger button** (right side, after the logo): 44×44px tap target,
  three CSS bars, no emoji. When open the bars morph into an X.
  `aria-expanded`, `aria-controls="mobile-nav-menu"`, and an
  Open/Close menu label.
- **Dropdown panel** under the bar (absolute, top: 100%, full width, white,
  shadow, bottom border): all 6 links stacked, 12px/20px padding (44px-scale
  tap targets), dividers between them, active page marked with a red left
  bar instead of the desktop bottom border. Both CTAs sit at the bottom of
  the menu — Free Access and Scout — $39 side by side, full width.
- **My Ideas count badge is kept** in the mobile menu.
- **Closing behaviour:** menu closes on any link tap, on route change
  (effect on `loc.pathname`), and on Escape. The menu is `display: none`
  by default outside the media query, so it can never leak onto desktop
  even if the open state is true during a resize.
- **Desktop is unchanged** — same row, same links, same CTAs above 768px.
  The logo words stay visible on mobile now (there's room once the row
  is gone).

## Verification
- `node scripts/test-mobile-nav.mjs` — **30 passed, 0 failed.** Guards the
  button/ARIA wiring, the close-on-navigate and Escape behaviour, all 6
  routes + both CTAs + badge in the menu, the 768px rules, and that the
  old 640px shrink rules are gone.
- Existing suites still pass: ideas, my-ideas (23), news (31),
  school-page (98).
- `npm run build` passes.
- CSS-class check: all 22 classes used by Navbar.jsx resolve in the
  stylesheet.
- NOT verified in a rendered browser (same standing caveat as the earlier
  builds): no agent has opened the menu on a real phone viewport yet.
  Zachary's screenshot is the evidence the old layout broke; the fix
  should be eyeballed on his phone after deploy.

## Deliberately not done
- No push / merge yet at build time (push is a separate step).
- No full-screen overlay menu — a dropdown under the sticky bar is enough
  for 6 links + 2 CTAs, and it keeps the page visible behind it.
- No body-scroll lock — the panel is a dropdown, not an overlay.
