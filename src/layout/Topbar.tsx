import type { Palette, Theme } from '../nav'
import { Switch } from '../components/Switch'
import s from '../App.module.scss'

interface TopbarProps {
  theme: Theme
  onChangeTheme: (t: Theme) => void
  onMenuToggle: () => void
  palette: Palette
  onChangePalette: (p: Palette) => void
}

const palettes: Palette[] = ['default', 'warm', 'dim', 'mono', 'pastel', 'vibrant', 'muted', 'grayscale']

export function Topbar({ theme, onChangeTheme, onMenuToggle, palette, onChangePalette }: TopbarProps) {
  return (
    <div className={s.topbar}>
      <button className={s.menuButton} onClick={onMenuToggle} aria-label="Toggle menu">
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
          <rect y="0"    width="16" height="1.5" rx="0.75" fill="currentColor" />
          <rect y="5.25" width="16" height="1.5" rx="0.75" fill="currentColor" />
          <rect y="10.5" width="16" height="1.5" rx="0.75" fill="currentColor" />
        </svg>
      </button>

      <select
        className={s.paletteSelect}
        value={palette}
        onChange={e => onChangePalette(e.target.value as Palette)}
        aria-label="Color palette"
      >
        {palettes.map(p => (
          <option key={p} value={p}>
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </option>
        ))}
      </select>

      <div className={s.themeSwitch}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
          style={{ color: theme === 'light' ? 'var(--color-primary)' : 'var(--color-text-muted)', transition: 'color 0.2s ease' }}>
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1"  x2="12" y2="3"  stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="4.22" y1="4.22"  x2="5.64" y2="5.64"  stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="1"  y1="12" x2="3"  y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <Switch
          size="sm"
          checked={theme === 'dark'}
          onChange={e => onChangeTheme(e.target.checked ? 'dark' : 'light')}
          aria-label="Toggle dark mode"
        />
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
          style={{ color: theme === 'dark' ? 'var(--color-primary)' : 'var(--color-text-muted)', transition: 'color 0.2s ease' }}>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      </div>
    </div>
  )
}
