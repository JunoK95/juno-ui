import { Input } from '../index'
import type { InputIntent } from '../index'
import s from '../App.module.scss'

const intents: InputIntent[] = ['default', 'danger', 'success', 'warning']

const intentHints: Record<InputIntent, string> = {
  default: 'Helper text goes here.',
  danger:  'That email is already in use.',
  success: 'Username is available!',
  warning: 'Your password is weak.',
}

export function InputPage() {
  return (
    <>
      <h1 className={s.pageTitle}>Input</h1>
      <p className={s.pageDesc}>Accepts text input from the user.</p>

      <div className={s.section}>
        <p className={s.sectionTitle}>Sizes</p>
        <div className={s.canvas}>
          <Input size="sm" placeholder="Small" style={{ width: '200px' }} />
          <Input size="md" placeholder="Medium" style={{ width: '200px' }} />
          <Input size="lg" placeholder="Large" style={{ width: '200px' }} />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Intents</p>
        <div className={s.canvas} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          {intents.map(intent => (
            <Input
              key={intent}
              intent={intent}
              label={intent.charAt(0).toUpperCase() + intent.slice(1)}
              hint={intentHints[intent]}
              placeholder="Enter a value…"
              style={{ width: '280px' }}
            />
          ))}
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Disabled</p>
        <div className={s.canvas}>
          <Input disabled label="Email" placeholder="you@example.com" style={{ width: '240px' }} />
          <Input disabled intent="danger" label="With intent" placeholder="you@example.com" style={{ width: '240px' }} />
        </div>
      </div>
    </>
  )
}
