import styles from './IdeaSaveButton.module.css'

// The save affordance for an idea: a quiet clickable lightbulb, not a
// button that outshines the idea itself. Outline bulb when unsaved, filled
// gold bulb + a small "Saved" note when saved. No emoji — inline SVG.
export default function IdeaSaveButton({ saved, onToggle, label = 'Save this idea' }) {
  return (
    <button
      type="button"
      className={`${styles.bulbBtn} ${saved ? styles.saved : ''}`}
      onClick={onToggle}
      aria-pressed={saved}
      aria-label={saved ? 'Saved to My Ideas — tap to remove' : label}
      title={saved ? 'Saved to My Ideas — tap to remove' : label}
    >
      <svg
        className={styles.bulb}
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill={saved ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
      {saved ? <span className={styles.savedLabel}>Saved</span> : null}
    </button>
  )
}
