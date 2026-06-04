import { Link } from 'react-router-dom'
import styles from './SchoolCard.module.css'

const DIV_COLORS = {
  'Division I': { bg: '#1a1a2e', color: '#a8c8ff', label: 'D-I' },
  'Division II': { bg: '#162032', color: '#7ec8e3', label: 'D-II' },
  'Division III': { bg: '#1a2e1a', color: '#8fd68a', label: 'D-III' },
  'NAIA': { bg: '#2e1f00', color: '#F7B731', label: 'NAIA' },
}

function getInitials(name) {
  return name.split(' ').filter(w => w.length > 2).slice(0, 2).map(w => w[0]).join('')
}

// Try to find a screenshot image based on the school's URL/name pattern
function getSchoolImage(school) {
  // Virginia has a specific screenshot we have
  if (school.url && school.url.includes('virginia')) {
    return '/screenshots/virginiasports.png'
  }
  return null
}

export default function SchoolCard({ school, locked, index }) {
  const div = DIV_COLORS[school.div] || DIV_COLORS['Division I']
  const initials = getInitials(school.name)

  return (
    <div className={styles.card}>
      {/* Left: Analysis */}
      <div className={styles.left}>
        <div className={styles.name}>{school.name}</div>
        <div className={styles.meta}>
          <span className={styles.divBadge} style={{ background: div.bg, color: div.color }}>
            {div.label}
          </span>
          <span className={styles.confBadge}>{school.conf}</span>
          <span className={styles.cmsBadge}>{school.cms}</span>
          <span className={styles.navBadge}>
            <span className={styles.navNum}>{school.navCount}</span> nav
          </span>
        </div>

        {locked ? (
          <div className={styles.locked}>
            <div className={styles.lockedIcon}>🔒</div>
            <div className={styles.lockedText}>Deep-dive analysis locked</div>
            <Link to="/pricing" className={styles.unlockBtn}>
              Unlock with Scout — $39/mo ↗
            </Link>
          </div>
        ) : (
          <>
            <div className={styles.love}>
              <span className={styles.loveLabel}>⭐ What We Love</span>
              <p>{school.love}</p>
            </div>
            <div className={styles.areas}>
              <span className={styles.areasLabel}>⚠ Areas of Opportunity</span>
              <p>{school.areas}</p>
            </div>
            <Link to={`/school/${school.id}`} className={styles.detailBtn}>
              Full Analysis →
            </Link>
          </>
        )}
      </div>

      {/* Right: School card */}
      <div className={styles.right}>
        {/* Logo / initials box */}
        <div className={styles.logoBox}>
          <div className={styles.initials} style={{ color: div.color }}>
            {initials}
          </div>
        </div>

        <div className={styles.schoolName}>{school.name}</div>

        <div className={styles.infoRows}>
          <div className={styles.infoRow}>
            <span className={styles.infoKey}>Division</span>
            <span className={styles.infoVal}>{school.div}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoKey}>Conference</span>
            <span className={styles.infoVal}>{school.conf}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoKey}>CMS</span>
            <span className={styles.infoVal}>{school.cms}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoKey}>NIL</span>
            <span className={styles.infoVal}>{school.hasNIL ? '✓ Yes' : '— No'}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoKey}>Streaming</span>
            <span className={styles.infoVal}>{school.streaming}</span>
          </div>
        </div>

        <a
          href={`https://${school.url}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.visitLink}
        >
          Visit Site ↗
        </a>
      </div>
    </div>
  )
}
