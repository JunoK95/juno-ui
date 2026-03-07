import type { Palette, Theme } from '../nav'
import s from '../App.module.scss'

interface TopbarProps {
  theme: Theme
  onChangeTheme: (t: Theme) => void
  onMenuToggle: () => void
  palette: Palette
  onChangePalette: (p: Palette) => void
}

const themes: { value: Theme; label: string }[] = [
  { value: 'light', label: '☀️ Light' },
  { value: 'dark',  label: '🌙 Dark' },
]

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

      <select
        className={s.paletteSelect}
        value={theme}
        onChange={e => onChangeTheme(e.target.value as Theme)}
        aria-label="Color theme"
      >
        {themes.map(t => (
          <option key={t.value} value={t.value}>{t.label}</option>
        ))}
      </select>
    </div>
  )
}
