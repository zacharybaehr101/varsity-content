// Verification for the mobile hamburger nav (node scripts/test-mobile-nav.mjs).
//
// Static checks on Navbar.jsx / Navbar.module.css — the nav is a UI
// component, so these guard the structure and the breakpoint rules rather
// than rendering it:
//
// - A hamburger button exists with aria-expanded, aria-controls pointing
//   at the menu id, and an Open/Close menu label.
// - The menu closes on route change and on Escape, and every menu link
//   closes it on click.
// - The mobile menu lists all 6 routes plus both CTAs and keeps the
//   My Ideas count badge.
// - The desktop links + CTAs are hidden at <=768px; the hamburger and
//   the dropdown panel are shown there instead.
// - The old shrink-to-fit rules (max-width 640px, smaller links) are gone:
//   they were the bug — 6 links + 2 CTAs wrapped to two lines and cut
//   the red button off the edge on a phone.
//
// If the nav changes, these fail loudly on purpose.

import { readFileSync } from 'node:fs'

let passed = 0
let failed = 0
function check(name, actual, expected) {
  const ok = actual === expected
  if (ok) passed += 1
  else failed += 1
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name} — got ${JSON.stringify(actual)}, want ${JSON.stringify(expected)}`)
}

const jsx = readFileSync(new URL('../src/components/Navbar.jsx', import.meta.url), 'utf8')
const css = readFileSync(new URL('../src/components/Navbar.module.css', import.meta.url), 'utf8')

// --- button -----------------------------------------------------------------
check('hamburger button exists', jsx.includes('styles.hamburger'), true)
check('button has aria-expanded', jsx.includes('aria-expanded={menuOpen}'), true)
check('button has aria-controls mobile-nav-menu', jsx.includes('aria-controls="mobile-nav-menu"'), true)
check('button label toggles Open/Close menu', jsx.includes("aria-label={menuOpen ? 'Close menu' : 'Open menu'}"), true)
check('button has three bars (spans)', (jsx.match(/<span \/>/g) || []).length >= 3, true)
check('button toggles menuOpen', jsx.includes('setMenuOpen(!menuOpen)'), true)

// --- closing behaviour --------------------------------------------------------
check('menu closes on route change', jsx.includes('useEffect(() => { setMenuOpen(false) }, [loc.pathname])'), true)
check('Escape key closes the menu', jsx.includes("e.key === 'Escape'") && jsx.includes('keydown'), true)
check('menu links close on click', (jsx.match(/onClick=\{closeMenu\}/g) || []).length >= 6, true)

// --- menu contents ------------------------------------------------------------
const menu = jsx.slice(jsx.indexOf('id="mobile-nav-menu"'))
for (const route of ['"/"', '"/index"', '"/ideas"', '"/news"', '"/my-ideas"', '"/pricing"']) {
  check(`mobile menu links to ${route}`, menu.includes(`to=${route}`), true)
}
check('mobile menu keeps the My Ideas badge', menu.includes('styles.badge'), true)
check('mobile menu has both CTAs', menu.includes('Free Access') && menu.includes('Scout — $39'), true)

// --- CSS breakpoint -------------------------------------------------------------
check('no 640px shrink rules remain', css.includes('640px'), false)
check('768px breakpoint exists', css.includes('@media (max-width: 768px)'), true)
const mobile = css.slice(css.indexOf('@media (max-width: 768px)'))
check('desktop links hidden at <=768px', /\.links,\s*\.cta\s*\{\s*display: none;/.test(mobile), true)
check('hamburger shown at <=768px', /\.hamburger\s*\{\s*display: flex;/.test(mobile), true)
check('menu is an absolute dropdown under the bar', mobile.includes('position: absolute') && mobile.includes('top: 100%'), true)
check('menu opens via display block', mobile.includes('.mobileMenuOpen') && mobile.includes('display: block'), true)
check('open hamburger becomes an X', css.includes('.hamburgerOpen span:nth-child(1)') && css.includes('rotate(45deg)'), true)
check('menu links have 44px-scale tap targets', /padding: 12px 20px/.test(mobile), true)
check('active page marked with a left bar in the menu', mobile.includes('border-left: 3px solid var(--brand)'), true)

// --- desktop unchanged -----------------------------------------------------------
check('desktop links row still exists', jsx.includes('className={styles.links}'), true)
check('desktop CTA row still exists', jsx.includes('className={styles.cta}'), true)
check('hamburger hidden by default (desktop)', /\.hamburger \{\s*display: none;/.test(css), true)
check('mobile menu hidden by default (desktop)', /\.mobileMenu \{\s*display: none;/.test(css), true)

console.log(`\n${passed} passed, ${failed} failed`)
process.exit(failed ? 1 : 0)
