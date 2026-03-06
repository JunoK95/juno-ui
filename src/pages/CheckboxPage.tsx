import { Checkbox } from '../index'
import type { CheckboxIntent } from '../index'
import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

const intents: CheckboxIntent[] = ['default', 'primary', 'danger', 'success', 'warning']

export function CheckboxPage() {
  return (
    <>
      <PageHeader title="Checkbox" desc="Allows users to select one or more items." storybook="components-checkbox" />

      <div className={s.section}>
        <p className={s.sectionTitle}>Sizes</p>
        <div className={s.canvas}>
          <Checkbox size="sm" label="Small"  defaultChecked />
          <Checkbox size="md" label="Medium" defaultChecked />
          <Checkbox size="lg" label="Large"  defaultChecked />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Intents</p>
        <div className={s.canvas} style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}>
          {intents.map(intent => (
            <Checkbox key={intent} intent={intent} label={intent.charAt(0).toUpperCase() + intent.slice(1)} defaultChecked />
          ))}
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>With hint</p>
        <div className={s.canvas} style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '12px' }}>
          <Checkbox label="Send me product updates" hint="We'll email you about new features." defaultChecked />
          <Checkbox intent="danger" label="Delete my account" hint="This action cannot be undone." />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Disabled</p>
        <div className={s.canvas} style={{ gap: '16px' }}>
          <Checkbox disabled label="Unchecked" />
          <Checkbox disabled label="Checked" defaultChecked />
        </div>
      </div>
    </>
  )
}
