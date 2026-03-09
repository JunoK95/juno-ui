import { Switch } from '../index'
import type { SwitchIntent } from '../index'
import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

const intents: SwitchIntent[] = ['default', 'primary', 'danger', 'success', 'warning']

export function SwitchPage() {
  return (
    <>
      <PageHeader title="Switch" desc="A toggle control for binary on/off settings." storybook="components-switch" />

      <div className={s.section}>
        <p className={s.sectionTitle}>Sizes</p>
        <div className={s.canvas} style={{ gap: 20 }}>
          <Switch size="sm" label="Small"  defaultChecked />
          <Switch size="md" label="Medium" defaultChecked />
          <Switch size="lg" label="Large"  defaultChecked />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Intents</p>
        <div className={s.canvas} style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 10 }}>
          {intents.map(intent => (
            <Switch key={intent} intent={intent} label={intent.charAt(0).toUpperCase() + intent.slice(1)} defaultChecked />
          ))}
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>States</p>
        <div className={s.canvas} style={{ gap: 20 }}>
          <Switch label="Off" />
          <Switch label="On" defaultChecked />
          <Switch label="Disabled off" disabled />
          <Switch label="Disabled on"  disabled defaultChecked />
        </div>
      </div>
    </>
  )
}
