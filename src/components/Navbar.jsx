import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { savedCount, IDEAS_CHANGED_EVENT } from '../lib/myIdeas'
import styles from './Navbar.module.css'

export default function Navbar() {
  const loc = useLocation()
  const active = (path) => loc.pathname === path ? styles.active : ''
  const [ideaCount, setIdeaCount] = useState(() => savedCount())
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const refresh = () => setIdeaCount(savedCount())
    refresh()
    window.addEventListener(IDEAS_CHANGED_EVENT, refresh)
    window.addEventListener('storage', refresh)
    return () => {
      window.removeEventListener(IDEAS_CHANGED_EVENT, refresh)
      window.removeEventListener('storage', refresh)
    }
  }, [loc.pathname])

  // The mobile menu must never stay open after navigation.
  useEffect(() => { setMenuOpen(false) }, [loc.pathname])

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!menuOpen) return undefined
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          <div className={styles.logoMark}>
            <span className={styles.logoV}>V</span>
            <span className={styles.logoC}>C</span>
          </div>
          <div className={styles.logoWords}>
            <span className={styles.logoVarsity}>VARSITY</span>
            <span className={styles.logoContent}>CONTENT</span>
          </div>
        </Link>

        {/* Links — desktop */}
        <div className={styles.links}>
          <Link to="/" className={`${styles.link} ${active('/')}`}>Home</Link>
          <Link to="/index" className={`${styles.link} ${active('/index')}`}>The Index</Link>
          <Link to="/ideas" className={`${styles.link} ${active('/ideas')}`}>Get Ideas</Link>
          <Link to="/news" className={`${styles.link} ${active('/news')}`}>News</Link>
          <Link to="/my-ideas" className={`${styles.link} ${active('/my-ideas')}`}>
            My Ideas{ideaCount > 0 && <span className={styles.badge}>{ideaCount}</span>}
          </Link>
          <Link to="/pricing" className={`${styles.link} ${active('/pricing')}`}>Pricing</Link>
        </div>

        {/* CTA — desktop */}
        <div className={styles.cta}>
          <Link to="/pricing" className={styles.ctaFree}>Free Access</Link>
          <Link to="/pricing" className={styles.ctaPaid}>Scout — $39</Link>
        </div>

        {/* Hamburger — mobile only (shown by CSS at ≤768px) */}
        <button
          type="button"
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu — a dropdown under the bar, mobile only */}
      <div
        id="mobile-nav-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
      >
        <Link to="/" className={`${styles.mobileLink} ${active('/')}`} onClick={closeMenu}>Home</Link>
        <Link to="/index" className={`${styles.mobileLink} ${active('/index')}`} onClick={closeMenu}>The Index</Link>
        <Link to="/ideas" className={`${styles.mobileLink} ${active('/ideas')}`} onClick={closeMenu}>Get Ideas</Link>
        <Link to="/news" className={`${styles.mobileLink} ${active('/news')}`} onClick={closeMenu}>News</Link>
        <Link to="/my-ideas" className={`${styles.mobileLink} ${active('/my-ideas')}`} onClick={closeMenu}>
          My Ideas{ideaCount > 0 && <span className={styles.badge}>{ideaCount}</span>}
        </Link>
        <Link to="/pricing" className={`${styles.mobileLink} ${active('/pricing')}`} onClick={closeMenu}>Pricing</Link>
        <div className={styles.mobileCta}>
          <Link to="/pricing" className={styles.ctaFree} onClick={closeMenu}>Free Access</Link>
          <Link to="/pricing" className={styles.ctaPaid} onClick={closeMenu}>Scout — $39</Link>
        </div>
      </div>
    </nav>
  )
}
