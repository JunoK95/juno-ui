import { useState } from 'react'
import { Alert } from '../index'
import type { AlertIntent } from '../index'
import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

const intents: AlertIntent[] = ['default', 'primary', 'danger', 'success', 'warning']

const messages: Record<AlertIntent, { title: string; body: string }> = {
  default: { title: 'Heads up',  body: 'You can change your settings in the account page.' },
  primary: { title: 'Info',      body: 'Your plan renews in 3 days.' },
  danger:  { title: 'Error',     body: 'Failed to save changes. Please try again.' },
  success: { title: 'Success',   body: 'Your changes have been saved successfully.' },
  warning: { title: 'Warning',   body: 'You are approaching your storage limit.' },
}

export function AlertPage() {
  const [dismissed, setDismissed] = useState<AlertIntent[]>([])

  return (
    <>
      <PageHeader title="Alert" desc="Communicates status or feedback inline." storybook="components-alert" />

      <div className={s.section}>
        <p className={s.sectionTitle}>Intents</p>
        <div className={s.canvas} style={{ flexDirection: 'column', alignItems: 'stretch', gap: '8px' }}>
          {intents.map(intent => (
            <Alert key={intent} intent={intent} title={messages[intent].title}>
              {messages[intent].body}
            </Alert>
          ))}
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Dismissible</p>
        <div className={s.canvas} style={{ flexDirection: 'column', alignItems: 'stretch', gap: '8px' }}>
          {intents.filter(i => !dismissed.includes(i)).map(intent => (
            <Alert key={intent} intent={intent} title={messages[intent].title} onDismiss={() => setDismissed(d => [...d, intent])}>
              {messages[intent].body}
            </Alert>
          ))}
          {dismissed.length === intents.length && (
            <button
              style={{ fontSize: '12px', color: 'var(--color-text-muted)', background: 'none', border: 'none', cursor: 'pointer', alignSelf: 'flex-start' }}
              onClick={() => setDismissed([])}
            >
              Reset
            </button>
          )}
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Without title</p>
        <div className={s.canvas} style={{ flexDirection: 'column', alignItems: 'stretch', gap: '8px' }}>
          <Alert intent="success">Your profile has been updated.</Alert>
          <Alert intent="danger">Something went wrong. Please try again.</Alert>
        </div>
      </div>
    </>
  )
}
