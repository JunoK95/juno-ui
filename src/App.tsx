import { useLayoutEffect, useState } from 'react'
import { Button } from './index'
import type { ButtonIntent, ButtonVariant } from './index'
import s from './playground.module.scss'

type Theme = 'light' | 'dark'
type Page = 'button'

const intents: ButtonIntent[] = ['default', 'primary', 'danger', 'success', 'warning']
const variants: ButtonVariant[] = ['solid', 'outline', 'ghost']

const nav: { label: string; id: Page | null }[] = [
  { label: 'Button', id: 'button' },
  { label: 'Input', id: null },
  { label: 'Select', id: null },
  { label: 'Checkbox', id: null },
]

const navDisplay: { label: string; id: Page | null }[] = [
  { label: 'Badge', id: null },
  { label: 'Avatar', id: null },
  { label: 'Tag', id: null },
]

const navFeedback: { label: string; id: Page | null }[] = [
  { label: 'Alert', id: null },
  { label: 'Toast', id: null },
]

function ButtonPage() {
  return (
    <>
      <h1 className={s.pageTitle}>Button</h1>
      <p className={s.pageDesc}>Triggers an action or event.</p>

      <div className={s.section}>
        <p className={s.sectionTitle}>Variants × Intents</p>
        {variants.map(variant => (
          <div key={variant} className={s.canvas}>
            <span className={s.canvasLabel}>{variant}</span>
            {intents.map(intent => (
              <Button key={intent} variant={variant} intent={intent}>{intent}</Button>
            ))}
          </div>
        ))}
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Sizes</p>
        <div className={s.canvas}>
          <Button intent="primary" size="sm">Small</Button>
          <Button intent="primary" size="md">Medium</Button>
          <Button intent="primary" size="lg">Large</Button>
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Disabled</p>
        <div className={s.canvas}>
          {intents.map(intent => (
            <Button key={intent} intent={intent} disabled>{intent}</Button>
          ))}
        </div>
      </div>
    </>
  )
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  )
  const [page, setPage] = useState<Page>('button')

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div className={s.layout}>
      <aside className={s.sidebar}>
        <div className={s.sidebarHeader}>
          <p className={s.logo}>juno-ui</p>
          <p className={s.logoSub}>playground</p>
        </div>

        <nav className={s.navSection}>
          <p className={s.navLabel}>Inputs</p>
          {nav.map(({ label, id }) => (
            <button
              key={label}
              className={`${s.navItem} ${id === page ? s.navActive : ''} ${!id ? s.navDisabled : ''}`}
              onClick={() => id && setPage(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        <nav className={s.navSection}>
          <p className={s.navLabel}>Display</p>
          {navDisplay.map(({ label, id }) => (
            <button
              key={label}
              className={`${s.navItem} ${!id ? s.navDisabled : ''}`}
              onClick={() => id && setPage(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        <nav className={s.navSection}>
          <p className={s.navLabel}>Feedback</p>
          {navFeedback.map(({ label, id }) => (
            <button
              key={label}
              className={`${s.navItem} ${!id ? s.navDisabled : ''}`}
              onClick={() => id && setPage(id)}
            >
              {label}
            </button>
          ))}
        </nav>
      </aside>

      <div className={s.main}>
        <div className={s.topbar}>
          <button
            className={s.themeToggle}
            onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>

        <div className={s.content}>
          {page === 'button' && <ButtonPage />}
        </div>
      </div>
    </div>
  )
}
