import type { Theme } from '../nav'
import s from '../App.module.scss'

interface TopbarProps {
  theme: Theme
  onToggleTheme: () => void
  onMenuToggle: () => void
}

export function Topbar({ theme, onToggleTheme, onMenuToggle }: TopbarProps) {
  return (
    <div className={s.topbar}>
      <button className={s.menuButton} onClick={onMenuToggle} aria-label="Toggle menu">
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
          <rect y="0"    width="16" height="1.5" rx="0.75" fill="currentColor" />
          <rect y="5.25" width="16" height="1.5" rx="0.75" fill="currentColor" />
          <rect y="10.5" width="16" height="1.5" rx="0.75" fill="currentColor" />
        </svg>
      </button>

      <button className={s.themeToggle} onClick={onToggleTheme}>
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </div>
  )
}
