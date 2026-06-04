import { Link } from 'react-router-dom'
import { schools } from '../data/schools'
import SchoolCard from '../components/SchoolCard'
import styles from './Home.module.css'

const FEATURED = schools.slice(0, 3)

const STATS = [
  { num: '141+', label: 'Schools Audited' },
  { num: '10', label: 'Conferences' },
  { num: '26', label: 'Data Fields' },
  { num: '2026', label: 'Index Year' },
]

const CONF_HIGHLIGHTS = [
  { name: 'Big Ten', count: schools.filter(s => s.conf === 'Big Ten').length, div: 'Division I' },
  { name: 'SEC', count: schools.filter(s => s.conf === 'SEC').length, div: 'Division I' },
  { name: 'ACC', count: schools.filter(s => s.conf === 'ACC').length, div: 'Division I' },
  { name: 'Big 12', count: schools.filter(s => s.conf === 'Big 12').length, div: 'Division I' },
  { name: 'Big East', count: schools.filter(s => s.conf === 'Big East').length, div: 'Division I' },
  { name: 'MIAA', count: schools.filter(s => s.conf === 'MIAA').length, div: 'Division II' },
]

export default function Home() {
  return (
    <div className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroImg}>
          <img src="/hero.png" alt="Varsity Content — Collegiate Athletics UX" />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroEyebrow}>The Definitive Resource · Est. 2026</div>
          <h1 className={styles.heroTitle}>
            Varsity<br /><span>Content</span>
          </h1>
          <p className={styles.heroSub}>
            Independent UX audits of 141+ collegiate athletics websites.<br />
            From Power 4 to NAIA — every school, honestly graded.
          </p>
          <div className={styles.heroCtas}>
            <Link to="/index" className={styles.heroPrimary}>Explore the Index</Link>
            <Link to="/pricing" className={styles.heroSecondary}>View Pricing</Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className={styles.statsBar}>
        {STATS.map(s => (
          <div key={s.label} className={styles.stat}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      <div className={styles.container}>

        {/* WHAT IS THIS */}
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <div className={styles.eyebrow}>About the Index</div>
            <h2 className={styles.h2}>What is Varsity Content?</h2>
          </div>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <p>Varsity Content is the only independent, data-driven audit of collegiate athletics websites across all divisions and associations. We analyze every major element — CMS platform, navigation architecture, NIL integration, streaming discoverability, hero content strategy, and UX discipline — and distill it into actionable intelligence.</p>
              <p style={{marginTop: 16}}>Whether you're a digital agency pitching an athletic department, a solo consultant tracking conference rivals, or an AD benchmarking your own site, Varsity Content gives you the competitive intelligence you need — without hiring a research team.</p>
            </div>
            <div className={styles.aboutFeatures}>
              {[
                ['🏟', 'CMS Provider Data', 'Know exactly who powers every site — Sidearm, WMT, PrestoSports and beyond.'],
                ['📊', '26 Tracked Fields', 'From hero narrative type to NIL link placement and streaming platform.'],
                ['✍️', 'Editorial Analysis', 'UX critique written by practitioners, not algorithms.'],
                ['📥', 'Data Export', 'CSV and tab-delimited export for agencies and research teams.'],
              ].map(([icon, title, desc]) => (
                <div key={title} className={styles.feature}>
                  <span className={styles.featureIcon}>{icon}</span>
                  <div>
                    <div className={styles.featureTitle}>{title}</div>
                    <div className={styles.featureDesc}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONFERENCE GRID */}
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <div className={styles.eyebrow}>Coverage</div>
            <h2 className={styles.h2}>Conferences in the Index</h2>
          </div>
          <div className={styles.confGrid}>
            {CONF_HIGHLIGHTS.map(c => (
              <Link key={c.name} to={`/index?conf=${encodeURIComponent(c.name)}`} className={styles.confCard}>
                <div className={styles.confName}>{c.name}</div>
                <div className={styles.confCount}>{c.count} schools</div>
                <div className={styles.confDiv}>{c.div}</div>
              </Link>
            ))}
            <Link to="/index" className={`${styles.confCard} ${styles.confCardMore}`}>
              <div className={styles.confName}>+ More</div>
              <div className={styles.confCount}>All conferences</div>
              <div className={styles.confDiv}>D-II · D-III · NAIA</div>
            </Link>
          </div>
        </section>

        {/* FEATURED SCHOOLS */}
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <div className={styles.eyebrow}>Featured Audits</div>
            <h2 className={styles.h2}>From the Index</h2>
            <Link to="/index" className={styles.sectionLink}>See all 141 schools →</Link>
          </div>
          <div className={styles.cardList}>
            {FEATURED.map(school => (
              <SchoolCard key={school.id} school={school} locked={false} />
            ))}
          </div>
          <div className={styles.moreCta}>
            <Link to="/index" className={styles.moreBtn}>Browse All Schools</Link>
          </div>
        </section>

        {/* PRICING TEASER */}
        <section className={styles.pricingTeaser}>
          <div className={styles.pricingTeaserInner}>
            <div className={styles.eyebrow} style={{color: 'rgba(255,255,255,0.5)'}}>Unlock the Full Index</div>
            <h2 className={styles.pricingTeaserTitle}>Built for Agencies,<br />Consultants & Athletic Departments</h2>
            <p className={styles.pricingTeaserSub}>Free access gives you the directory. Scout and Agency unlock the full editorial analysis, comparison tools, and data export.</p>
            <div className={styles.pricingTeaserBtns}>
              <Link to="/pricing" className={styles.pricingTeaserPrimary}>See Pricing</Link>
              <Link to="/index" className={styles.pricingTeaserSecondary}>Browse Free First</Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
