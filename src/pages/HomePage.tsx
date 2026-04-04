import { Link } from 'react-router-dom'
import s from '../App.module.scss'

const KOFI_URL = 'https://ko-fi.com/junok'

const stats = [
  { num: '26', label: 'components' },
  { num: '11', label: 'palettes' },
  { num: '4',  label: 'intents' },
  { num: '2',  label: 'themes' },
]

const features = [
  {
    title: 'Token-based theming',
    desc: 'Every color is a CSS custom property. Swap palettes at runtime with a single data attribute — no rebuild needed.',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
  },
  {
    title: 'Dark & light mode',
    desc: 'Both themes included. Respects prefers-color-scheme and can be overridden at any time.',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
    ),
  },
  {
    title: 'TypeScript first',
    desc: 'Fully typed props, variants, and intents. Definitions are bundled — no @types package required.',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="3"/>
        <path d="M14 10h-1.5a1.5 1.5 0 0 0 0 3H14a1.5 1.5 0 0 1 0 3H12" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <line x1="9" y1="9" x2="9" y2="19" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="7" y1="9" x2="11" y2="9" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Semantic intents',
    desc: 'Primary, danger, success, and warning intent props on every component — consistent feedback across the UI.',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
]

export function HomePage() {
  return (
    <div className={s.home}>
      <div className={s.homeGlow} aria-hidden="true" />

      <span className={s.homeBadge}>v0.4.1</span>
      <h1 className={s.homeTitle}>juno-ui</h1>
      <p className={s.homeSubtitle}>
        A minimal, themeable React component library built with CSS custom
        properties. Supports light and dark mode out of the box.
      </p>

      <div className={s.homeActions}>
        <Link to="/intro" className={s.homeCta}>Get started →</Link>
        <a
          href="https://github.com/JunoK95/juno-ui"
          target="_blank"
          rel="noreferrer"
          className={s.homeCtaSecondary}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          GitHub
        </a>
      </div>

      <div className={s.homeStats}>
        {stats.map(stat => (
          <div key={stat.label} className={s.homeStat}>
            <span className={s.homeStatNum}>{stat.num}</span>
            <span className={s.homeStatLabel}>{stat.label}</span>
          </div>
        ))}
      </div>

      <div className={s.homeFeatureGrid}>
        {features.map(f => (
          <div key={f.title} className={s.homeFeature}>
            <div className={s.homeFeatureIcon}>{f.icon}</div>
            <p className={s.homeFeatureTitle}>{f.title}</p>
            <p className={s.homeFeatureDesc}>{f.desc}</p>
          </div>
        ))}
      </div>

      <div className={s.homeDonate}>
        <p className={s.homeDonateText}>
          juno-ui is free and open source, built in spare time.
          If it saves you some, consider buying me a coffee.
        </p>
        <a href={KOFI_URL} target="_blank" rel="noopener noreferrer" className={s.homeDonateLink}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          Support this project
        </a>
      </div>
    </div>
  )
}
