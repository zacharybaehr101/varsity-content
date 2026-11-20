import { useState, useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { schools } from '../data/schools'
import { getLiveNotes } from '../data/liveNotes'
import IdeaSaveButton from '../components/IdeaSaveButton'
import { ideaFromEvidence } from '../lib/ideas'
import { emphasisFor, pillarSignals, ideasFromSchool } from '../lib/schoolPage'
import {
  loadSaved, toggleSave, addChecklistItem, IDEAS_CHANGED_EVENT,
} from '../lib/myIdeas'
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

const PILLAR_ORDER = ['tickets', 'sportHub', 'roster', 'giving']

export default function SchoolDetail() {
  const { id } = useParams()
  const school = schools.find(s => s.id === parseInt(id))
  const [savedKeys, setSavedKeys] = useState(() => new Set(loadSaved().map(s => s.ideaKey)))
  const [gapAdded, setGapAdded] = useState(false)
  const [compareId, setCompareId] = useState('')

  useEffect(() => {
    const refresh = () => setSavedKeys(new Set(loadSaved().map(s => s.ideaKey)))
    window.addEventListener(IDEAS_CHANGED_EVENT, refresh)
    return () => window.removeEventListener(IDEAS_CHANGED_EVENT, refresh)
  }, [])

  // Reset the compare picker when navigating between schools.
  useEffect(() => { setCompareId(''); setGapAdded(false) }, [id])

  if (!school) return <Navigate to="/index" />

  const div = DIV_COLORS[school.div] || DIV_COLORS['Division I']
  const initials = getInitials(school.name)
  const emphasis = emphasisFor(school)
  const pillars = pillarSignals(school)
  const live = getLiveNotes(school.id)
  const schoolIdeas = ideasFromSchool(school)
  const compareSchool = compareId
    ? schools.find(s => s.id === parseInt(compareId))
    : null
  const compareEmphasis = compareSchool ? emphasisFor(compareSchool) : null

  // One idea per editorial block, derived from the block's own text.
  const blockIdea = (text, source) => ideaFromEvidence(school, text, source)
  const loveIdea = blockIdea(school.loveFull || school.love, 'What We Love')
  const strengthsIdea = blockIdea(school.strengthsFull || school.strengths, 'Strengths')
  const areasIdea = blockIdea(school.areasFull || school.areas, 'Areas of Opportunity')

  const handleToggleSave = (idea) => {
    const { saved } = toggleSave(idea)
    setSavedKeys(new Set(saved.map(s => s.ideaKey)))
  }

  const handleAddGap = () => {
    addChecklistItem({
      label: `Fix: ${school.areas}`,
      source: 'gap',
      schoolId: school.id,
      ideaKey: areasIdea.ideaKey,
    })
    setGapAdded(true)
  }

  // The idea itself is the clickable save: a quiet lightbulb, not a button
  // that outshines the idea. Same toggle behavior, smaller footprint.
  const saveBtn = (idea) => (
    <IdeaSaveButton
      saved={savedKeys.has(idea.ideaKey)}
      onToggle={() => handleToggleSave(idea)}
    />
  )

  // Every value here is the Sheet's own — no hardcoded audit values.
  // (Has Live Scoreboard and Lazy Loading are still uniform across the
  // set; that is what the Sheet says, not a code default.)
  const fields = [
    ['Conference', school.conf],
    ['Division', school.div],
    ['CMS Provider', school.cms],
    ['Primary URL', school.url],
    ['Nav Item Count', school.navCount],
    ['Hero Asset', school.heroAssetType || '—'],
    ['Hero Narrative', school.hero],
    ['Has Live Scoreboard', school.hasScoreboard ? 'Yes' : 'No'],
    ['Scoreboard Position', school.scoreboardPosition || '—'],
    ['Streaming Platform', school.streaming],
    ['Has NIL Link', school.hasNIL ? 'Yes' : 'No'],
    ['Has Tickets CTA', school.hasTickets ? 'Yes' : 'No'],
    ['Has Live Stream Link', school.hasLiveStream ? 'Yes' : 'No'],
    ['Gender Representation', school.genderBalance || '—'],
    ['Mobile Sticky Tickets', school.mobileSticky || '—'],
    ['Lazy Loading Issues', school.lazyLoading || '—'],
    ['Photo Galleries', school.hasGalleries ? 'Yes' : 'No'],
    ['Video Highlights', school.hasVideo ? 'Yes' : 'No'],
    ['Capture Date', school.captureDate || '—'],
  ]

  const compareRows = compareSchool ? [
    ['Hero copy', school.heroCopy || '—', compareSchool.heroCopy || '—'],
    ['Top headline', school.headline || '—', compareSchool.headline || '—'],
    ['Emphasis', emphasis.theme, compareEmphasis.theme],
    ['Ticket weight', school.ticketWeight || '—', compareSchool.ticketWeight || '—'],
    ['Streaming', school.streaming || '—', compareSchool.streaming || '—'],
    ['Nav items', String(school.navCount), String(compareSchool.navCount)],
    ['CMS', school.cms, compareSchool.cms],
  ] : []

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
            <div className={styles.captureLine}>
              Homepage captured {school.captureDate || '2026-06-03'} · audit of the live site as it stood that day
            </div>
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

            {/* IN THEIR OWN WORDS — the words first, the grid second */}
            <div className={styles.wordsSection}>
              <div className={styles.sectionKicker}>In their own words</div>
              <blockquote className={styles.heroQuote}>
                “{emphasis.heroCopy || emphasis.headline}”
              </blockquote>
              <div className={styles.headlineLine}>
                Top headline: <strong>{emphasis.headline}</strong>
                {emphasis.headlineCategory ? ` · ${emphasis.headlineCategory}` : ''}
              </div>
              <div className={styles.chipRow}>
                <span className={styles.chip}>Narrative: {emphasis.narrative}</span>
                {emphasis.headlineTone ? <span className={styles.chip}>Tone: {emphasis.headlineTone}</span> : null}
              </div>
              <p className={styles.emphasisLine}>
                <strong>This homepage emphasizes: {emphasis.theme}.</strong> {emphasis.line}
              </p>
            </div>

            <div className={styles.analysisBlock}>
              <div className={styles.blockHeader}>
                <h2 className={styles.blockTitle}>What We Love</h2>
                <span className={styles.blockSave}>{saveBtn(loveIdea)}</span>
              </div>
              <p className={styles.blockText}>{school.love}</p>
            </div>

            <div className={styles.analysisBlock}>
              <div className={styles.blockHeader}>
                <h2 className={styles.blockTitle}>Strengths & Highlights</h2>
                <span className={styles.blockSave}>{saveBtn(strengthsIdea)}</span>
              </div>
              <p className={styles.blockText}>{school.strengths}</p>
            </div>

            <div className={styles.analysisBlock} style={{borderLeftColor: '#d4820a'}}>
              <div className={styles.blockHeader}>
                <h2 className={styles.blockTitle}>Areas of Opportunity</h2>
                <span className={styles.blockSave}>{saveBtn(areasIdea)}</span>
              </div>
              <p className={styles.blockText}>{school.areas}</p>
              <div className={styles.blockActions}>
                <button
                  className={styles.gapBtn}
                  onClick={handleAddGap}
                  disabled={gapAdded}
                >
                  {gapAdded ? '✓ Added to checklist' : '＋ Add this gap to my checklist'}
                </button>
              </div>
            </div>

            {/* MEDIA & SOCIAL */}
            <div className={styles.sectionCard}>
              <div className={styles.sectionKicker}>Media & social</div>
              <h2 className={styles.sectionTitle}>How the site uses audio, video & photos</h2>
              <div className={styles.factGrid}>
                <div className={styles.factItem}>
                  <span className={styles.factLabel}>Video highlights</span>
                  <span className={styles.factValue}>{school.hasVideo ? 'Yes' : 'No'}</span>
                </div>
                <div className={styles.factItem}>
                  <span className={styles.factLabel}>Photo galleries</span>
                  <span className={styles.factValue}>{school.hasGalleries ? 'Yes' : 'No'}</span>
                </div>
                <div className={styles.factItem}>
                  <span className={styles.factLabel}>Streaming platform</span>
                  <span className={styles.factValue}>{school.streaming}</span>
                </div>
                <div className={styles.factItem}>
                  <span className={styles.factLabel}>Hero asset</span>
                  <span className={styles.factValue}>{school.heroAssetType}</span>
                </div>
              </div>
              {live ? (
                <div className={styles.liveBlock}>
                  <div className={styles.liveLabel}>Live notes · audited {live.audited}</div>
                  <dl className={styles.liveList}>
                    <div><dt>Audio</dt><dd>{live.media.audio}</dd></div>
                    <div><dt>Video</dt><dd>{live.media.video}</dd></div>
                    <div><dt>Photos</dt><dd>{live.media.photos}</dd></div>
                    <div><dt>Social on the page</dt><dd>{live.media.social}</dd></div>
                  </dl>
                </div>
              ) : (
                <p className={styles.noteLine}>
                  Media notes above are from the June 3, 2026 capture. A live media check hasn&apos;t been run for this school yet.
                </p>
              )}
            </div>

            {/* FOUR PILLARS */}
            <div className={styles.sectionCard}>
              <div className={styles.sectionKicker}>The four pillars</div>
              <h2 className={styles.sectionTitle}>Tickets, sport hub, roster, giving</h2>
              <p className={styles.noteLine}>
                {live
                  ? `Live pillar notes below — audited ${live.audited}.`
                  : 'Pillar signals below are from the June 3, 2026 capture. A full live pillar audit hasn\u2019t been run for this school yet.'}
              </p>
              <div className={styles.pillarGrid}>
                {PILLAR_ORDER.map((key) => {
                  const pillar = pillars[key]
                  const liveNote = live ? live.pillars[key] : null
                  return (
                    <div key={key} className={styles.pillarCard}>
                      <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                      {pillar.facts.map((f) => (
                        <div key={f.label} className={styles.pillarFact}>
                          <span>{f.label}</span>
                          <strong>{f.value}</strong>
                        </div>
                      ))}
                      <p className={styles.pillarNote}>{pillar.note}</p>
                      {liveNote ? <p className={styles.pillarLive}>{liveNote}</p> : null}
                    </div>
                  )
                })}
              </div>
              {live ? (
                <p className={styles.stealLine}>
                  <strong>Steal this:</strong> {live.steal}
                </p>
              ) : null}
            </div>

            {/* IDEAS FROM THIS SCHOOL */}
            <div className={styles.sectionCard}>
              <div className={styles.sectionKicker}>Ideas from this school</div>
              <h2 className={styles.sectionTitle}>Stealable, traced to this page</h2>
              {schoolIdeas.map((idea) => (
                <div key={idea.ideaKey} className={styles.ideaCard}>
                  <div className={styles.ideaTop}>
                    <div className={styles.ideaAngle}>{idea.angle}</div>
                    {saveBtn(idea)}
                  </div>
                  <blockquote className={styles.ideaEvidence}>“{idea.evidence}”</blockquote>
                  <div className={styles.ideaSource}>{idea.evidenceSource} · captured {idea.captureDate}</div>
                  <p className={styles.ideaSteal}>{idea.stealIt}</p>
                </div>
              ))}
              <p className={styles.noteLine}>
                More ideas from this school and others live on the <Link to="/ideas" className={styles.inlineLink}>Get Ideas</Link> page.
              </p>
            </div>

            {/* COMPARE */}
            <div className={styles.sectionCard}>
              <div className={styles.sectionKicker}>Compare</div>
              <h2 className={styles.sectionTitle}>Put this school next to another</h2>
              <p className={styles.noteLine}>
                Pick a school. Same fields, side by side — no verdict, no ranking. The differences are the point.
              </p>
              <select
                className={styles.compareSelect}
                value={compareId}
                onChange={(e) => setCompareId(e.target.value)}
                aria-label="Compare with another school"
              >
                <option value="">Choose a school to compare…</option>
                {[...schools]
                  .filter(s => s.id !== school.id)
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map(s => (
                    <option key={s.id} value={s.id}>{s.name} · {s.conf}</option>
                  ))}
              </select>
              {compareSchool ? (
                <table className={styles.compareTable}>
                  <thead>
                    <tr>
                      <th></th>
                      <th>{school.name}</th>
                      <th>{compareSchool.name}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compareRows.map(([label, a, b]) => (
                      <tr key={label}>
                        <td className={styles.compareLabel}>{label}</td>
                        <td>{a}</td>
                        <td>{b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : null}
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
