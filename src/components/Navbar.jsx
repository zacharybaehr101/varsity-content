import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  const loc = useLocation()
  const active = (path) => loc.pathname === path ? styles.active : ''

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <div className={styles.logoMark}>
            <span className={styles.logoV}>V</span>
            <span className={styles.logoC}>C</span>
          </div>
          <div className={styles.logoWords}>
            <span className={styles.logoVarsity}>VARSITY</span>
            <span className={styles.logoContent}>CONTENT</span>
          </div>
        </Link>

        {/* Links */}
        <div className={styles.links}>
          <Link to="/" className={`${styles.link} ${active('/')}`}>Home</Link>
          <Link to="/index" className={`${styles.link} ${active('/index')}`}>The Index</Link>
          <Link to="/pricing" className={`${styles.link} ${active('/pricing')}`}>Pricing</Link>
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <Link to="/pricing" className={styles.ctaFree}>Free Access</Link>
          <Link to="/pricing" className={styles.ctaPaid}>Scout — $39</Link>
        </div>
      </div>
    </nav>
  )
}
