import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { schools } from '../data/schools'
import SchoolCard from '../components/SchoolCard'
import styles from './Index.module.css'

const FREE_UNLOCKS = 3
const PAGE_SIZE = 10

const conferences = [...new Set(schools.map(s => s.conf))].sort()
const divisions = ['Division I', 'Division II', 'Division III', 'NAIA']
const cmsProviders = [...new Set(schools.map(s => s.cms))].sort()

export default function Index() {
  const [params, setParams] = useSearchParams()
  const [search, setSearch] = useState('')
  const [conf, setConf] = useState(params.get('conf') || '')
  const [div, setDiv] = useState(params.get('div') || '')
  const [cms, setCms] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    setConf(params.get('conf') || '')
    setDiv(params.get('div') || '')
  }, [params])

  const filtered = useMemo(() => {
    return schools.filter(s => {
      if (conf && s.conf !== conf) return false
      if (div && s.div !== div) return false
      if (cms && s.cms !== cms) return false
      if (search && !s.name.toLowerCase().includes(search.toLowerCase()) &&
          !s.conf.toLowerCase().includes(search.toLowerCase())) return false
      return true
    })
  }, [conf, div, cms, search])

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const pageSlice = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const handleFilter = (setter) => (e) => {
    setter(e.target.value)
    setPage(1)
  }

  const clearFilters = () => {
    setConf(''); setDiv(''); setCms(''); setSearch(''); setPage(1)
  }

  const hasFilters = conf || div || cms || search

  return (
    <div className={styles.page}>

      {/* PAGE HEADER */}
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.eyebrow}>2026 Edition</div>
          <h1 className={styles.title}>The Varsity Content Index</h1>
          <p className={styles.sub}>
            Independent UX audits of {schools.length} collegiate athletics websites.
            Free users see 3 full profiles/month — unlock all with Scout or Agency.
          </p>
        </div>
      </div>

      <div className={styles.container}>

        {/* TOOLBAR */}
        <div className={styles.toolbar}>
          <div className={styles.toolbarLeft}>
            <input
              type="text"
              className={styles.search}
              placeholder="Search schools or conferences..."
              value={search}
              onChange={handleFilter(setSearch)}
            />
            <select className={styles.select} value={conf} onChange={handleFilter(setConf)}>
              <option value="">All Conferences</option>
              {conferences.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <select className={styles.select} value={div} onChange={handleFilter(setDiv)}>
              <option value="">All Divisions</option>
              {divisions.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
            <select className={styles.select} value={cms} onChange={handleFilter(setCms)}>
              <option value="">All CMS</option>
              {cmsProviders.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            {hasFilters && (
              <button className={styles.clearBtn} onClick={clearFilters}>
                Clear ✕
              </button>
            )}
          </div>
          <div className={styles.toolbarRight}>
            <span className={styles.resultCount}>
              <strong>{filtered.length}</strong> schools
            </span>
          </div>
        </div>

        {/* FREE NOTICE */}
        <div className={styles.freeNotice}>
          <span className={styles.freeNoticeText}>
            🔓 Showing <strong>{Math.min(FREE_UNLOCKS, filtered.length)} free</strong> full profiles this session.
          </span>
          <a href="/pricing" className={styles.freeNoticeLink}>Unlock all with Scout →</a>
        </div>

        {/* SCHOOL LIST */}
        {filtered.length === 0 ? (
          <div className={styles.empty}>
            <div className={styles.emptyIcon}>🏟</div>
            <div className={styles.emptyText}>No schools match your filters.</div>
            <button className={styles.emptyBtn} onClick={clearFilters}>Clear filters</button>
          </div>
        ) : (
          <div className={styles.list}>
            {pageSlice.map((school, idx) => {
              const globalIdx = (page - 1) * PAGE_SIZE + idx
              return (
                <SchoolCard
                  key={school.id}
                  school={school}
                  locked={globalIdx >= FREE_UNLOCKS}
                />
              )
            })}
          </div>
        )}

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              className={styles.pageBtn}
              onClick={() => { setPage(p => Math.max(1, p - 1)); window.scrollTo(0, 0) }}
              disabled={page === 1}
            >
              ‹ Prev
            </button>
            {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
              let p
              if (totalPages <= 7) p = i + 1
              else if (page <= 4) p = i + 1
              else if (page >= totalPages - 3) p = totalPages - 6 + i
              else p = page - 3 + i
              return (
                <button
                  key={p}
                  className={`${styles.pageBtn} ${p === page ? styles.pageBtnActive : ''}`}
                  onClick={() => { setPage(p); window.scrollTo(0, 0) }}
                >
                  {p}
                </button>
              )
            })}
            <button
              className={styles.pageBtn}
              onClick={() => { setPage(p => Math.min(totalPages, p + 1)); window.scrollTo(0, 0) }}
              disabled={page === totalPages}
            >
              Next ›
            </button>
            <span className={styles.pageInfo}>Page {page} of {totalPages}</span>
          </div>
        )}

      </div>
    </div>
  )
}
