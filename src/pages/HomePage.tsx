import { Link } from 'react-router-dom'
import s from '../App.module.scss'

export function HomePage() {
  return (
    <div className={s.home}>
      <span className={s.homeBadge}>v0.1.0</span>
      <h1 className={s.homeTitle}>juno-ui</h1>
      <p className={s.homeSubtitle}>
        A minimal, themeable React component library built with CSS custom
        properties. Supports light and dark mode out of the box.
      </p>
      <div className={s.homeActions}>
        <Link to="/ui/button" className={s.homeCta}>Browse components →</Link>
        <a
          href="https://github.com/JunoK95/juno-ui"
          target="_blank"
          rel="noreferrer"
          className={s.homeCtaSecondary}
        >
          GitHub
        </a>
      </div>
    </div>
  )
}
