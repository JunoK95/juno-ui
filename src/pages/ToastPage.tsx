import { Toast } from '../index'
import type { ToastIntent } from '../index'
import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

const intents: ToastIntent[] = ['default', 'primary', 'danger', 'success', 'warning']

const messages: Record<ToastIntent, { title: string; desc: string }> = {
  default: { title: 'Notification',     desc: 'You have a new message.' },
  primary: { title: 'Update available', desc: 'Version 2.0 is ready to install.' },
  danger:  { title: 'Upload failed',    desc: 'The file exceeds the 10 MB limit.' },
  success: { title: 'Saved',            desc: 'Your changes were saved successfully.' },
  warning: { title: 'Low storage',      desc: 'You are using 90% of your storage.' },
}

export function ToastPage() {
  return (
    <>
      <PageHeader title="Toast" desc="Transient notifications shown to the user." storybook="components-toast" />

      <div className={s.section}>
        <p className={s.sectionTitle}>Intents</p>
        <div className={s.canvas} style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
          {intents.map(intent => (
            <Toast key={intent} intent={intent} title={messages[intent].title} description={messages[intent].desc} />
          ))}
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Dismissible</p>
        <div className={s.canvas} style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
          {intents.map(intent => (
            <Toast key={intent} intent={intent} title={messages[intent].title} description={messages[intent].desc} onDismiss={() => {}} />
          ))}
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Title only</p>
        <div className={s.canvas} style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
          <Toast intent="success" title="Changes saved" />
          <Toast intent="danger"  title="Failed to connect" />
        </div>
      </div>
    </>
  )
}
