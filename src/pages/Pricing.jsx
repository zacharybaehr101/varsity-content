import styles from './Pricing.module.css'

const TIERS = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    desc: 'For curious staff, students & casual researchers',
    ideal: 'Athletic department staffers, students, casual researchers',
    cta: 'Start Free',
    ctaStyle: 'outline',
    features: [
      'Full school directory (141+ schools)',
      'High-level checklist data for all schools',
      '3 deep-dive profile unlocks per month',
      'Top nav count overview',
      'CMS provider identification',
      'Surface-level editorial summary',
      'Web view only — no export',
    ],
    locked: [
      'Full UX editorial analysis',
      'School comparison tool',
      'Data export (CSV / tab-delimited)',
      'API access',
    ],
  },
  {
    name: 'Scout',
    price: '$39',
    period: '/month',
    desc: 'Solo consultants, NIL agents & individual athletic departments',
    ideal: 'Solo sports marketing consultants, NIL agents, individual ADs tracking rivals',
    cta: 'Start Scout',
    ctaStyle: 'primary',
    featured: true,
    badge: 'Most Popular',
    features: [
      '30 deep-dive profile unlocks per month',
      'Full UX editorial analysis (love, strengths, opportunities)',
      '2–3 school comparison tool',
      'CSV export up to 25 rows per month',
      'Basic filter capabilities (conf, division, CMS)',
      'Hero narrative & scoreboard position data',
      'NIL & streaming platform tracking',
    ],
    locked: [
      'Unlimited unlocks',
      '6+ school matrix comparison',
      'Unlimited CSV & tab-delimited export',
      'Full API access',
      'Team seats',
      'Quarterly trend trackers',
    ],
  },
  {
    name: 'Agency',
    price: '$129',
    period: '/month',
    desc: 'Digital agencies, web firms & conference offices',
    ideal: 'Digital sports marketing agencies, web design firms pitching colleges, SaaS companies',
    cta: 'Start Agency',
    ctaStyle: 'dark',
    features: [
      'Unlimited deep-dive profile unlocks',
      'Full 6+ school comparison matrix',
      'Filter by Conference, Division, or CMS',
      'Unlimited CSV & tab-delimited export',
      'Full programmatic API access',
      '3 team seats included',
      'Quarterly trend trackers (signing day, graduation)',
      'Direct blueprint copy/paste blocks',
      'Priority support',
    ],
    locked: [],
  },
]

const FAQ = [
  ['What is Varsity Content?', 'Varsity Content is an independent editorial index that audits the UX and digital content strategy of 141+ collegiate athletics websites — from Power 4 programs to NAIA schools. Every audit covers 26 data fields plus qualitative editorial analysis.'],
  ['How is this different from just visiting the websites myself?', 'We\'ve done the work of visiting, capturing, and structuring every site into a consistent framework. Agencies and consultants use us to skip weeks of manual research. The editorial analysis distills practitioner-level UX critique you\'d otherwise pay a consultant to produce.'],
  ['Can I cancel anytime?', 'Yes — all plans are month-to-month. Cancel before your next billing date and you won\'t be charged again.'],
  ['Is there a free trial for Scout or Agency?', 'The Free tier gives you a permanent look at the index with 3 full unlocks per month. We don\'t currently offer time-limited trials for paid plans, but the Free tier should give you a clear sense of the product.'],
  ['How often is the index updated?', 'Schools are re-audited on a rolling basis. The 2026 index captures was completed in June 2026. Agency subscribers get access to quarterly trackers showing how sites change over time.'],
  ['Who is this built for?', 'Digital agencies pitching athletic departments, solo sports marketing consultants, NIL agents evaluating programs, athletic directors benchmarking their own site, and SaaS companies building tools for collegiate athletics.'],
]

export default function Pricing() {
  return (
    <div className={styles.page}>

      <div className={styles.header}>
        <div className={styles.eyebrow}>Transparent Pricing</div>
        <h1 className={styles.title}>Pick Your Plan</h1>
        <p className={styles.sub}>Start free. Upgrade when you need the depth.</p>
      </div>

      <div className={styles.container}>

        {/* TIER CARDS */}
        <div className={styles.tiers}>
          {TIERS.map(t => (
            <div key={t.name} className={`${styles.tier} ${t.featured ? styles.tierFeatured : ''}`}>
              {t.badge && <div className={styles.badge}>{t.badge}</div>}
              <div className={styles.tierName}>{t.name}</div>
              <div className={styles.tierPrice}>
                {t.price}<span>{t.period}</span>
              </div>
              <p className={styles.tierDesc}>{t.desc}</p>

              <button className={`${styles.cta} ${styles[`cta_${t.ctaStyle}`]}`}>
                {t.cta}
              </button>

              <div className={styles.featureList}>
                {t.features.map(f => (
                  <div key={f} className={styles.featureItem}>
                    <span className={styles.checkYes}>✓</span>
                    <span>{f}</span>
                  </div>
                ))}
                {t.locked.map(f => (
                  <div key={f} className={`${styles.featureItem} ${styles.featureLocked}`}>
                    <span className={styles.checkNo}>✕</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className={styles.idealFor}>
                <span className={styles.idealLabel}>Ideal for:</span>
                <span className={styles.idealText}>{t.ideal}</span>
              </div>
            </div>
          ))}
        </div>

        {/* COMPARISON TABLE */}
        <section className={styles.section}>
          <h2 className={styles.h2}>Feature Comparison</h2>
          <div className={styles.table}>
            <div className={`${styles.tableRow} ${styles.tableHead}`}>
              <div className={styles.tableFeature}>Feature</div>
              <div className={styles.tableCell}>Free</div>
              <div className={styles.tableCell}>Scout</div>
              <div className={styles.tableCell}>Agency</div>
            </div>
            {[
              ['School directory access', '✓', '✓', '✓'],
              ['Deep-dive profile unlocks', '3 / mo', '30 / mo', 'Unlimited'],
              ['Full UX editorial analysis', '✕', '✓', '✓'],
              ['School comparison tool', '✕', '2–3 schools', '6+ schools'],
              ['Data export', '✕', '25 rows / mo', 'Unlimited'],
              ['API access', '✕', '✕', '✓'],
              ['Quarterly trend trackers', '✕', '✕', '✓'],
              ['Team seats', '1', '1', '3'],
              ['Copy/paste blueprint blocks', '✕', '✕', '✓'],
              ['Priority support', '✕', '✕', '✓'],
            ].map(([feature, free, scout, agency]) => (
              <div key={feature} className={styles.tableRow}>
                <div className={styles.tableFeature}>{feature}</div>
                <div className={styles.tableCell} style={{ color: free === '✕' ? '#ccc' : 'var(--ink)' }}>{free}</div>
                <div className={styles.tableCell} style={{ color: scout === '✕' ? '#ccc' : 'var(--ink)' }}>{scout}</div>
                <div className={styles.tableCell} style={{ color: agency === '✕' ? '#ccc' : 'var(--ink)', fontWeight: agency !== '✕' ? 700 : 400 }}>{agency}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.section}>
          <h2 className={styles.h2}>Frequently Asked Questions</h2>
          <div className={styles.faq}>
            {FAQ.map(([q, a]) => (
              <div key={q} className={styles.faqItem}>
                <div className={styles.faqQ}>{q}</div>
                <div className={styles.faqA}>{a}</div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
