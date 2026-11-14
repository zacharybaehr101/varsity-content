import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  loadSaved, updateSavedIdea, removeSavedIdea,
  loadChecklist, addChecklistItem, toggleChecklistItem, removeChecklistItem,
  clearDone, addKit, addIdeaToChecklist, STARTER_KITS,
  IDEAS_CHANGED_EVENT, CHECKLIST_CHANGED_EVENT,
} from '../lib/myIdeas'
import styles from './MyIdeas.module.css'

const STATUSES = ['saved', 'doing', 'done']
const STATUS_LABEL = { saved: 'Saved', doing: 'Doing', done: 'Done' }

export default function MyIdeas() {
  const [saved, setSaved] = useState(loadSaved)
  const [checklist, setChecklist] = useState(loadChecklist)
  const [customLabel, setCustomLabel] = useState('')
  const [kitNotice, setKitNotice] = useState('')
  const [ideaNotice, setIdeaNotice] = useState('')

  useEffect(() => {
    const refreshSaved = () => setSaved(loadSaved())
    const refreshChecklist = () => setChecklist(loadChecklist())
    window.addEventListener(IDEAS_CHANGED_EVENT, refreshSaved)
    window.addEventListener(CHECKLIST_CHANGED_EVENT, refreshChecklist)
    return () => {
      window.removeEventListener(IDEAS_CHANGED_EVENT, refreshSaved)
      window.removeEventListener(CHECKLIST_CHANGED_EVENT, refreshChecklist)
    }
  }, [])

  const doneCount = checklist.filter((i) => i.done).length

  const handleKit = (kitId) => {
    const { added } = addKit(kitId)
    setChecklist(loadChecklist())
    setKitNotice(
      added > 0
        ? `Added ${added} item${added === 1 ? '' : 's'} from the ${STARTER_KITS[kitId].title}.`
        : `All ${STARTER_KITS[kitId].title} items are already on your checklist.`
    )
  }

  const handleIdeaToChecklist = (idea) => {
    const { added } = addIdeaToChecklist(idea)
    setChecklist(loadChecklist())
    setIdeaNotice(
      added > 0
        ? `Added ${added} step${added === 1 ? '' : 's'} to your checklist.`
        : 'Those steps are already on your checklist.'
    )
  }

  const handleAddCustom = (e) => {
    e.preventDefault()
    if (!customLabel.trim()) return
    setChecklist(addChecklistItem({ label: customLabel, source: 'custom' }))
    setCustomLabel('')
  }

  const setStatus = (ideaKey, status) => {
    setSaved(updateSavedIdea(ideaKey, { status }))
  }

  const setNotes = (ideaKey, notes) => {
    setSaved(updateSavedIdea(ideaKey, { notes }))
  }

  const removeIdea = (ideaKey) => {
    if (window.confirm('Remove this idea from My Ideas?')) {
      setSaved(removeSavedIdea(ideaKey))
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.eyebrow}>Get It Done · 2026 Edition</div>
          <h1 className={styles.title}>My Ideas</h1>
          <p className={styles.sub}>
            The ideas you saved from the index, and the checklist that turns
            them into shipped work. Every idea is traced to the school it
            came from.
          </p>
          <div className={styles.summary}>
            <span><strong>{saved.length}</strong> saved idea{saved.length === 1 ? '' : 's'}</span>
            <span><strong>{doneCount}</strong> of <strong>{checklist.length}</strong> checklist items done</span>
            <Link to="/ideas" className={styles.summaryLink}>Find more ideas →</Link>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <p className={styles.storageNote}>
          Saved in this browser only — ideas and checklist items live in
          localStorage until an account / sync feature is added.
        </p>

        {/* SAVED IDEAS */}
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <div className={styles.eyebrow}>Saved Ideas</div>
            <h2 className={styles.h2}>Your idea list</h2>
          </div>

          {saved.length === 0 && (
            <div className={styles.empty}>
              <div className={styles.emptyText}>
                Nothing saved yet. Go find an idea worth stealing.
              </div>
              <Link to="/ideas" className={styles.emptyBtn}>Get ideas →</Link>
              <Link to="/news" className={styles.emptyBtn}>Browse the feature-story feed →</Link>
            </div>
          )}

          <div className={styles.list}>
            {saved.map((idea) => (
              <article key={idea.ideaKey} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.angle}>{idea.angle}</span>
                  {idea.effort && <span className={styles.effort}>Effort: {idea.effort}</span>}
                  <span className={`${styles.statusBadge} ${styles[idea.status] || ''}`}>
                    {STATUS_LABEL[idea.status] || 'Saved'}
                  </span>
                </div>
                {idea.schoolName ? (
                  <Link to={`/school/${idea.schoolId}`} className={styles.schoolName}>
                    {idea.schoolName}
                  </Link>
                ) : (
                  <div className={styles.schoolName}>Saved idea</div>
                )}
                {(idea.division || idea.conference) && (
                  <div className={styles.meta}>
                    {[idea.division, idea.conference].filter(Boolean).join(' · ')}
                  </div>
                )}
                {idea.unresolved ? (
                  <p className={styles.unresolved}>
                    Saved idea — details unavailable. The school or idea it
                    came from is no longer in the index.
                  </p>
                ) : (
                  <>
                    {idea.evidence && (
                      <blockquote className={styles.evidence}>
                        “{idea.evidence}”
                        {idea.sourceField && <footer>— {idea.sourceField}, captured 2026-06-03</footer>}
                      </blockquote>
                    )}
                    {idea.stealIt && (
                      <p className={styles.steal}><strong>Steal it:</strong> {idea.stealIt}</p>
                    )}
                  </>
                )}
                <label className={styles.fieldLabel}>
                  Status
                  <select
                    className={styles.select}
                    value={idea.status || 'saved'}
                    onChange={(e) => setStatus(idea.ideaKey, e.target.value)}
                  >
                    {STATUSES.map((s) => (
                      <option key={s} value={s}>{STATUS_LABEL[s]}</option>
                    ))}
                  </select>
                </label>
                <label className={styles.fieldLabel}>
                  Notes
                  <textarea
                    className={styles.notes}
                    placeholder="What will you do with this one?"
                    value={idea.notes || ''}
                    onChange={(e) => setNotes(idea.ideaKey, e.target.value)}
                    rows={2}
                  />
                </label>
                <div className={styles.cardActions}>
                  {!idea.unresolved && (
                    <button
                      className={styles.actionBtn}
                      onClick={() => handleIdeaToChecklist(idea)}
                    >
                      ＋ Add to checklist
                    </button>
                  )}
                  {idea.schoolId && (
                    <Link to={`/school/${idea.schoolId}`} className={styles.schoolLink}>
                      View school →
                    </Link>
                  )}
                  <button
                    className={styles.removeBtn}
                    onClick={() => removeIdea(idea.ideaKey)}
                  >
                    Remove
                  </button>
                </div>
              </article>
            ))}
          </div>
          {ideaNotice && <p className={styles.notice}>{ideaNotice}</p>}
        </section>

        {/* CHECKLIST */}
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <div className={styles.eyebrow}>Get It Done</div>
            <h2 className={styles.h2}>My checklist</h2>
            <p className={styles.sectionSub}>
              {doneCount} of {checklist.length} done
              {checklist.length > 0 && doneCount === checklist.length && ' — all done'}
            </p>
          </div>

          <div className={styles.kitRow}>
            {Object.values(STARTER_KITS).map((kit) => (
              <button key={kit.id} className={styles.kitBtn} onClick={() => handleKit(kit.id)}>
                ＋ Add starter kit: {kit.title}
              </button>
            ))}
            {doneCount > 0 && (
              <button className={styles.clearBtn} onClick={() => setChecklist(clearDone())}>
                Clear done ({doneCount})
              </button>
            )}
          </div>
          {kitNotice && <p className={styles.notice}>{kitNotice}</p>}

          {checklist.length === 0 && (
            <div className={styles.empty}>
              <div className={styles.emptyText}>
                Your checklist is empty. Add a starter kit above, or save an
                idea and turn it into steps.
              </div>
            </div>
          )}

          <ul className={styles.checklist}>
            {checklist.map((item) => (
              <li key={item.id} className={`${styles.checkItem} ${item.done ? styles.done : ''}`}>
                <label className={styles.checkLabel}>
                  <input
                    type="checkbox"
                    checked={item.done}
                    onChange={() => setChecklist(toggleChecklistItem(item.id))}
                  />
                  <span className={styles.checkText}>{item.label}</span>
                </label>
                <span className={styles.checkMeta}>
                  {item.source === 'starter' && item.kit && `Starter kit · ${STARTER_KITS[item.kit]?.title || item.kit}`}
                  {item.source === 'idea' && item.schoolId && (
                    <Link to={`/school/${item.schoolId}`}>From a saved idea →</Link>
                  )}
                  {item.source === 'gap' && item.schoolId && (
                    <Link to={`/school/${item.schoolId}`}>Gap on school page →</Link>
                  )}
                  {item.source === 'custom' && 'Custom'}
                  <button
                    className={styles.removeBtn}
                    onClick={() => setChecklist(removeChecklistItem(item.id))}
                    aria-label="Remove checklist item"
                  >
                    ✕
                  </button>
                </span>
              </li>
            ))}
          </ul>

          <form className={styles.addForm} onSubmit={handleAddCustom}>
            <input
              type="text"
              className={styles.addInput}
              placeholder="Add your own checklist item…"
              value={customLabel}
              onChange={(e) => setCustomLabel(e.target.value)}
              aria-label="Add your own checklist item"
            />
            <button type="submit" className={styles.addBtn}>Add</button>
          </form>
        </section>
      </div>
    </div>
  )
}
