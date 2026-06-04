import { useParams, Link, Navigate } from 'react-router-dom'
import { schools } from '../data/schools'
import styles from './SchoolDetail.module.css'

const DIV_COLORS = {
  'Division I': { bg: '#1a1a2e', color: '#a8c8ff', label: 'D-I' },
  'Division II': { bg: '#162032', color: '#7ec8e3', label: 'D-II' },
  'Division III': { bg: '#1a2e1a', color: '#8fd68a', label: 'D-III' },
  'NAIA': { bg: '#2e1f00', color: '#F7B731', label: 'NAIA' },
}

function getInitials(name) {
  return name.split(' ').filter(w => w.length > 2).slice(0, 2).map(w => w[0]).join('')
}

export default function SchoolDetail() {
  const { id } = useParams()
  const school = schools.find(s => s.id === parseInt(id))

  if (!school) return <Navigate to="/index" />

  const div = DIV_COLORS[school.div] || DIV_COLORS['Division I']
  const initials = getInitials(school.name)

  const fields = [
    ['Conference', school.conf],
    ['Division', school.div],
    ['CMS Provider', school.cms],
    ['Primary URL', school.url],
    ['Nav Item Count', school.navCount],
    ['Hero Asset', 'Image'],
    ['Hero Narrative', school.hero],
    ['Has Live Scoreboard', 'Yes'],
    ['Scoreboard Position', 'Top'],
    ['Streaming Platform', school.streaming],
    ['Has NIL Link', school.hasNIL ? 'Yes' : 'No'],
    ['Has Tickets CTA', school.hasTickets ? 'Yes' : 'No'],
    ['Has Live Stream Link', school.hasLiveStream ? 'Yes' : 'No'],
    ['Gender Representation', 'Balanced'],
    ['Mobile Sticky Tickets', 'Yes'],
    ['Lazy Loading Issues', 'No'],
  ]

  const prevSchool = schools.find(s => s.id === school.id - 1)
  const nextSchool = schools.find(s => s.id === school.id + 1)

  return (
    <div className={styles.page}>

      {/* BREADCRUMB */}
      <div className={styles.breadcrumb}>
        <div className={styles.breadcrumbInner}>
          <Link to="/" className={styles.breadLink}>Home</Link>
          <span className={styles.breadSep}>›</span>
          <Link to="/index" className={styles.breadLink}>Index</Link>
          <span className={styles.breadSep}>›</span>
          <span>{school.name}</span>
        </div>
      </div>

      {/* SCHOOL HEADER */}
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.logoBox}>
            <span className={styles.initials} style={{ color: div.color }}>{initials}</span>
          </div>
          <div className={styles.headerText}>
            <div className={styles.headerMeta}>
              <span className={styles.divBadge} style={{ background: div.bg, color: div.color }}>
                {div.label}
              </span>
              <span className={styles.confBadge}>{school.conf}</span>
            </div>
            <h1 className={styles.schoolName}>{school.name}</h1>
            <a
              href={`https://${school.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.urlLink}
            >
              {school.url} ↗
            </a>
          </div>
          <div className={styles.headerActions}>
            <a
              href={`https://${school.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.visitBtn}
            >
              Visit Site ↗
            </a>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>

          {/* MAIN ANALYSIS */}
          <div className={styles.main}>

            <div className={styles.analysisBlock}>
              <div className={styles.blockHeader}>
                <span className={styles.blockIcon}>⭐</span>
                <h2 className={styles.blockTitle}>What We Love</h2>
              </div>
              <p className={styles.blockText}>{school.love}</p>
            </div>

            <div className={styles.analysisBlock}>
              <div className={styles.blockHeader}>
                <span className={styles.blockIcon}>💪</span>
                <h2 className={styles.blockTitle}>Strengths & Highlights</h2>
              </div>
              <p className={styles.blockText}>{school.strengths}</p>
            </div>

            <div className={styles.analysisBlock} style={{borderLeftColor: '#d4820a'}}>
              <div className={styles.blockHeader}>
                <span className={styles.blockIcon}>⚠</span>
                <h2 className={styles.blockTitle}>Areas of Opportunity</h2>
              </div>
              <p className={styles.blockText}>{school.areas}</p>
            </div>

            {/* SCREENSHOT PLACEHOLDER */}
            <div className={styles.screenshotBox}>
              <div className={styles.screenshotLabel}>Homepage Screenshot · Captured 2026-06-03</div>
              <div className={styles.screenshotPlaceholder}>
                <span className={styles.screenshotInitials}>{initials}</span>
                <span className={styles.screenshotUrl}>{school.url}</span>
              </div>
            </div>

          </div>

          {/* SIDEBAR */}
          <div className={styles.sidebar}>

            <div className={styles.dataCard}>
              <div className={styles.dataCardTitle}>Data Fields</div>
              {fields.map(([k, v]) => (
                <div key={k} className={styles.dataRow}>
                  <span className={styles.dataKey}>{k}</span>
                  <span className={styles.dataVal}
                    style={{ color: v === 'Yes' ? '#2a8a4a' : v === 'No' ? '#c0392b' : 'var(--ink)' }}
                  >{v}</span>
                </div>
              ))}
            </div>

            <div className={styles.exportCard}>
              <div className={styles.exportTitle}>Export This Record</div>
              <p className={styles.exportDesc}>Download raw data for this school as CSV or tab-delimited text.</p>
              <Link to="/pricing" className={styles.exportBtn}>Unlock Export — Scout $39/mo</Link>
            </div>

          </div>

        </div>

        {/* NAV BETWEEN SCHOOLS */}
        <div className={styles.schoolNav}>
          {prevSchool ? (
            <Link to={`/school/${prevSchool.id}`} className={styles.schoolNavBtn}>
              ← {prevSchool.name}
            </Link>
          ) : <span />}
          <Link to="/index" className={styles.schoolNavIndex}>Back to Index</Link>
          {nextSchool ? (
            <Link to={`/school/${nextSchool.id}`} className={styles.schoolNavBtn}>
              {nextSchool.name} →
            </Link>
          ) : <span />}
        </div>

      </div>
    </div>
  )
}
