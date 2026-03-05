import { useState } from 'react'
import { Button } from './index'
import type { ButtonIntent, ButtonVariant } from './index'
import s from './playground.module.scss'

type Theme = 'light' | 'dark'

const intents: ButtonIntent[] = ['default', 'primary', 'danger', 'success', 'warning']
const variants: ButtonVariant[] = ['solid', 'outline', 'ghost']

export default function App() {
  const [theme, setTheme] = useState<Theme>('light')

  return (
    <div data-theme={theme}>
      <div className={s.root}>
        <header className={s.header}>
          <div>
            <h1>juno-ui-library</h1>
            <p>Component playground</p>
          </div>
          <button className={s.themeToggle} onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
            {theme === 'light' ? 'Dark' : 'Light'} mode
          </button>
        </header>

        <section className={s.section}>
          <p className={s.sectionTitle}>Button — variant × intent</p>
          {variants.map(variant => (
            <div key={variant} className={s.row}>
              <span className={s.label}>{variant}</span>
              {intents.map(intent => (
                <Button key={intent} variant={variant} intent={intent}>{intent}</Button>
              ))}
            </div>
          ))}
        </section>

        <section className={s.section}>
          <p className={s.sectionTitle}>Button — sizes</p>
          <div className={s.row}>
            <Button intent="primary" size="sm">Small</Button>
            <Button intent="primary" size="md">Medium</Button>
            <Button intent="primary" size="lg">Large</Button>
          </div>
        </section>

        <section className={s.section}>
          <p className={s.sectionTitle}>Button — disabled</p>
          <div className={s.row}>
            {intents.map(intent => (
              <Button key={intent} intent={intent} disabled>{intent}</Button>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
