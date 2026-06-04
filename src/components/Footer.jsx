import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logoMark}>
            <span className={styles.logoV}>V</span>
            <span className={styles.logoC}>C</span>
          </div>
          <div>
            <div className={styles.name}>VARSITY CONTENT</div>
            <div className={styles.tagline}>The Collegiate Athletics UX Index</div>
          </div>
        </div>

        <div className={styles.cols}>
          <div className={styles.col}>
            <div className={styles.colHead}>Product</div>
            <Link to="/index" className={styles.colLink}>The Index</Link>
            <Link to="/pricing" className={styles.colLink}>Pricing</Link>
            <Link to="/pricing" className={styles.colLink}>Free Access</Link>
          </div>
          <div className={styles.col}>
            <div className={styles.colHead}>Coverage</div>
            <Link to="/index?div=Division+I" className={styles.colLink}>Division I</Link>
            <Link to="/index?div=Division+II" className={styles.colLink}>Division II</Link>
            <Link to="/index?div=Division+III" className={styles.colLink}>Division III</Link>
            <Link to="/index?div=NAIA" className={styles.colLink}>NAIA</Link>
          </div>
          <div className={styles.col}>
            <div className={styles.colHead}>Conferences</div>
            <Link to="/index?conf=Big+Ten" className={styles.colLink}>Big Ten</Link>
            <Link to="/index?conf=ACC" className={styles.colLink}>ACC</Link>
            <Link to="/index?conf=SEC" className={styles.colLink}>SEC</Link>
            <Link to="/index?conf=Big+12" className={styles.colLink}>Big 12</Link>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© 2026 VarsityContent.com — Independent editorial. Not affiliated with the NCAA or any athletic conference.</span>
        <div className={styles.bottomLinks}>
          <span className={styles.stat}>141 Schools</span>
          <span className={styles.stat}>10 Conferences</span>
          <span className={styles.stat}>26 Data Fields</span>
        </div>
      </div>
    </footer>
  )
}
