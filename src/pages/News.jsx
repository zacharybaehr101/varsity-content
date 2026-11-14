// News — an RSS-style feed of FEATURE stories only (not game stories,
// not previews), so busy sports marketers can get story ideas.
//
// v1 honesty note, shown on the page: this is a curated snapshot feed
// from the June 2026 captures, NOT live RSS. There is no live feed in the
// repo and no backend; live RSS is a v2 aggregator (see NEWS_BUILD.md).
// Each item is one school's best feature-like headline from the capture,
// classified by src/lib/news.js. No story dates, URLs, authors, or
// excerpts are invented — the only links are to the school's detail page
// and the school's own site. Sorted A–Z by school: there are no story
// dates in the captures, so nothing is sorted by recency.

import { useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { schools } from '../data/schools'
import { buildNewsFeed, newsCounts, CAPTURE_DATE } from '../lib/news'
import { ideaFromEvidence } from '../lib/ideas'
import { loadSaved, toggleSave as toggleSaveIdea, IDEAS_CHANGED_EVENT } from '../lib/myIdeas'
import IdeaSaveButton from '../components/IdeaSaveButton'
import styles from './News.module.css'

const PAGE_SIZE = 12

const divisions = ['Division I', 'Division II', 'Division III', 'NAIA']

export default function News() {
  const feed = useMemo(() => buildNewsFeed(schools), [])
  const counts = useMemo(() => newsCounts(schools), [])
  const sports = useMemo(
    () => [...new Set(feed.filter((i) => i.kind === 'feature').map((i) => i.sport))].sort(),
    [feed]
  )
  const conferences = useMemo(
    () => [...new Set(schools.map((s) => s.conf))].sort(),
    []
  )

  const [query, setQuery] = useState('')
  const [sport, setSport] = useState('')
  const [div, setDiv] = useState('')
  const [conf, setConf] = useState('')
  const [includeAnnouncements, setIncludeAnnouncements] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const [saved, setSaved] = useState(loadSaved)

  useEffect(() => {
    const refresh = () => setSaved(loadSaved())
    window.addEventListener(IDEAS_CHANGED_EVENT, refresh)
    return () => window.removeEventListener(IDEAS_CHANGED_EVENT, refresh)
  }, [])

  const savedKeys = new Set(saved.map((s) => s.ideaKey))

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return feed.filter((item) => {
      if (item.kind === 'feature') {
        // always shown
      } else if (item.kind === 'announcement' && includeAnnouncements) {
        // shown only with the toggle on
      } else {
        return false
      }
      if (sport && item.sport !== sport) return false
      if (div && item.division !== div) return false
      if (conf && item.conference !== conf) return false
      if (q) {
        const hay = `${item.title} ${item.schoolName} ${item.sport} ${item.reason}`.toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    })
  }, [feed, query, sport, div, conf, includeAnnouncements])

  const visible = showAll ? results : results.slice(0, PAGE_SIZE)
  const hasFilters = query || sport || div || conf

  const clearFilters = () => {
    setQuery('')
    setSport('')
    setDiv('')
    setConf('')
    setShowAll(false)
  }

  const handleSave = (item) => {
    const idea = ideaFromEvidence(item.school, item.title, item.evidenceSource)
    const { saved: next } = toggleSaveIdea(idea)
    setSaved(next)
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.eyebrow}>The Feature Feed · June 2026 Captures</div>
          <h1 className={styles.title}>Feature stories, not game stories</h1>
          <p className={styles.sub}>
            One feature story per school, picked from the June 2026 captures —
            awards, record chases, coach stories, profiles, and title runs.
            No game recaps, no previews. Steal the angle for your next story.
          </p>
          <p className={styles.honestNote}>
            A snapshot feed, not live RSS: these are the headlines as captured on
            June 3, 2026. Live RSS is planned — see the build note for why it
            needs a server first.
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <p className={styles.captureNote}>
          {counts.feature} feature stories from {counts.total} schools — plus{' '}
          {counts.announcement} announcements, {counts.preview} previews and{' '}
          {counts.game} game stories held out of this feed. Sorted A–Z by school:
          the captures carry no story dates, so nothing here is sorted by recency.
        </p>

        {/* TOOLBAR */}
        <div className={styles.toolbar}>
          <div className={styles.toolbarLeft}>
            <input
              type="text"
              className={styles.search}
              placeholder="Search stories or schools..."
              value={query}
              onChange={(e) => { setQuery(e.target.value); setShowAll(false) }}
              aria-label="Search stories"
            />
            <select className={styles.select} value={sport} onChange={(e) => setSport(e.target.value)}>
              <option value="">All Sports</option>
              {sports.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <select className={styles.select} value={div} onChange={(e) => setDiv(e.target.value)}>
              <option value="">All Divisions</option>
              {divisions.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
            <select className={styles.select} value={conf} onChange={(e) => setConf(e.target.value)}>
              <option value="">All Conferences</option>
              {conferences.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            {hasFilters && (
              <button className={styles.clearBtn} onClick={clearFilters}>
                Clear ✕
              </button>
            )}
          </div>
          <div className={styles.toolbarRight}>
            <span className={styles.resultCount}>
              <strong>{results.length}</strong> {results.length === 1 ? 'story' : 'stories'}
            </span>
          </div>
        </div>

        <label className={styles.toggle}>
          <input
            type="checkbox"
            checked={includeAnnouncements}
            onChange={(e) => { setIncludeAnnouncements(e.target.checked); setShowAll(false) }}
          />
          <span>
            Include announcements ({counts.announcement}) — ticket on-sales,
            schedule releases, and signings. Idea-worthy, just not features.
          </span>
        </label>

        {results.length === 0 && (
          <div className={styles.empty}>
            <div className={styles.emptyText}>
              No feature stories match those filters. Try clearing a filter,
              or tick “Include announcements”.
            </div>
            <button className={styles.moreBtn} onClick={clearFilters}>Clear filters</button>
          </div>
        )}

        <div className={styles.list}>
          {visible.map((item) => {
            // ideaFromEvidence derives the same ideaKey My Ideas stores,
            // so the button can tell whether this story is already saved.
            const ideaKey = ideaFromEvidence(item.school, item.title, item.evidenceSource).ideaKey
            const isSaved = savedKeys.has(ideaKey)
            return (
            <article key={item.id} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.sportTag}>{item.sport}</span>
                {item.kind === 'announcement' && (
                  <span className={styles.kindTag}>Announcement</span>
                )}
                <span className={styles.reason}>{item.reason}</span>
              </div>
              <h2 className={styles.headline}>{item.title}</h2>
              <div className={styles.meta}>
                {item.schoolName} · {item.division} · {item.conference}
              </div>
              <p className={styles.why}>
                <strong>Why a {item.kind === 'announcement' ? 'story idea' : 'feature'}:</strong>{' '}
                {item.reason}. Source: {item.evidenceSource}, captured {item.captureDate}.
              </p>
              <div className={styles.cardActions}>
                <IdeaSaveButton
                  saved={isSaved}
                  onToggle={() => handleSave(item)}
                />
                <Link to={`/school/${item.schoolId}`} className={styles.schoolLink}>
                  View school →
                </Link>
                <a
                  href={`https://${item.url}`}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.schoolLink}
                >
                  {item.url} ↗
                </a>
              </div>
            </article>
            )
          })}
        </div>

        {results.length > PAGE_SIZE && (
          <div className={styles.moreCta}>
            <button className={styles.moreBtn} onClick={() => setShowAll((v) => !v)}>
              {showAll ? 'Show fewer' : `Show all ${results.length} stories`}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
