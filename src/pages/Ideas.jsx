import { useState, useMemo, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { schools } from '../data/schools'
import { searchIdeas, SUGGESTED_CHIPS, CAPTURE_DATE } from '../lib/ideas'
import { loadSaved, toggleSave as toggleSaveIdea, IDEAS_CHANGED_EVENT } from '../lib/myIdeas'
import IdeaSaveButton from '../components/IdeaSaveButton'
import styles from './Ideas.module.css'

const PAGE_SIZE = 12

const divisions = ['Division I', 'Division II', 'Division III', 'NAIA']
const conferences = [...new Set(schools.map(s => s.conf))].sort()

export default function Ideas() {
  const [params, setParams] = useSearchParams()
  const [query, setQuery] = useState(params.get('q') || '')
  const [div, setDiv] = useState(params.get('div') || '')
  const [conf, setConf] = useState(params.get('conf') || '')
  const [saved, setSaved] = useState(loadSaved)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    setQuery(params.get('q') || '')
  }, [params])

  useEffect(() => {
    const refresh = () => setSaved(loadSaved())
    window.addEventListener(IDEAS_CHANGED_EVENT, refresh)
    return () => window.removeEventListener(IDEAS_CHANGED_EVENT, refresh)
  }, [])

  const results = useMemo(
    () => searchIdeas(query, { division: div, conference: conf, list: schools }),
    [query, div, conf]
  )
  const visible = showAll ? results : results.slice(0, PAGE_SIZE)
  const savedKeys = new Set(saved.map(s => s.ideaKey))

  const runSearch = (q) => {
    setQuery(q)
    setShowAll(false)
    const next = {}
    if (q) next.q = q
    if (div) next.div = div
    if (conf) next.conf = conf
    setParams(next, { replace: true })
  }

  const toggleSave = (idea) => {
    const { saved } = toggleSaveIdea(idea)
    setSaved(saved)
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.eyebrow}>Steal What Works · 2026 Edition</div>
          <h1 className={styles.title}>What do you need ideas for?</h1>
          <p className={styles.sub}>
            Ask in plain words. Every idea below is traced to a real school in the
            index, a real June 2026 capture, and the exact words on that school's homepage.
          </p>
          <form
            className={styles.promptBox}
            onSubmit={(e) => { e.preventDefault(); runSearch(query) }}
          >
            <input
              type="text"
              className={styles.promptInput}
              placeholder="e.g. I need ideas on student ticket sales"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="What do you need ideas for?"
            />
            <button type="submit" className={styles.promptBtn}>Get ideas →</button>
          </form>
          <div className={styles.chips}>
            {SUGGESTED_CHIPS.map(c => (
              <button key={c.label} className={styles.chip} onClick={() => runSearch(c.query)}>
                {c.label}
              </button>
            ))}
          </div>
          {saved.length > 0 && (
            <div className={styles.savedLink}>
              <Link to="/my-ideas">
                {saved.length} saved idea{saved.length === 1 ? '' : 's'} — View My Ideas →
              </Link>
            </div>
          )}
          <div className={styles.savedLink}>
            <Link to="/news">Browse the feature-story feed →</Link>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <p className={styles.captureNote}>
          Ideas from June {CAPTURE_DATE.slice(0, 4)} captures — patterns hold, specific on-sale dates may be stale.
        </p>

        {query && (
          <div className={styles.toolbar}>
            <div className={styles.toolbarLeft}>
              <select className={styles.select} value={div} onChange={(e) => setDiv(e.target.value)}>
                <option value="">All Divisions</option>
                {divisions.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
              <select className={styles.select} value={conf} onChange={(e) => setConf(e.target.value)}>
                <option value="">All Conferences</option>
                {conferences.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              {(div || conf) && (
                <button className={styles.clearBtn} onClick={() => { setDiv(''); setConf('') }}>
                  Clear ✕
                </button>
              )}
            </div>
            <div className={styles.toolbarRight}>
              <span className={styles.resultCount}>
                <strong>{results.length}</strong> idea{results.length === 1 ? '' : 's'}
              </span>
            </div>
          </div>
        )}

        {!query && (
          <div className={styles.empty}>
            <div className={styles.emptyText}>
              Try a prompt above — or ask for anything your department is working on this week.
            </div>
          </div>
        )}

        {query && results.length === 0 && (
          <div className={styles.empty}>
            <div className={styles.emptyText}>No ideas matched that yet. Try one of the example prompts above.</div>
          </div>
        )}

        {visible.length > 0 && (
          <div className={styles.list}>
            {visible.map(idea => (
              <article key={idea.id} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.angle}>{idea.angle}</span>
                  {idea.effort && <span className={styles.effort}>Effort: {idea.effort}</span>}
                </div>
                <Link to={`/school/${idea.schoolId}`} className={styles.schoolName}>
                  {idea.name}
                </Link>
                <div className={styles.meta}>
                  {idea.division} · {idea.conference} · {idea.cms} · {idea.url}
                </div>
                <blockquote className={styles.evidence}>
                  “{idea.evidence}”
                  <footer>— {idea.evidenceSource}, captured {idea.captureDate}</footer>
                </blockquote>
                <p className={styles.steal}>
                  <strong>Steal it:</strong> {idea.stealIt}
                </p>
                <div className={styles.cardActions}>
                  <IdeaSaveButton
                    saved={savedKeys.has(idea.ideaKey)}
                    onToggle={() => toggleSave(idea)}
                  />
                  <Link to={`/school/${idea.schoolId}`} className={styles.schoolLink}>
                    View school →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {results.length > PAGE_SIZE && (
          <div className={styles.moreCta}>
            <button className={styles.moreBtn} onClick={() => setShowAll(v => !v)}>
              {showAll ? 'Show fewer' : `Show all ${results.length} ideas`}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
