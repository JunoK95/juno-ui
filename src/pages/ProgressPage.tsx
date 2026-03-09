import { Progress } from '../index'
import type { ProgressIntent } from '../index'
import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

const intents: ProgressIntent[] = ['default', 'primary', 'danger', 'success', 'warning']

export function ProgressPage() {
  return (
    <>
      <PageHeader title="Progress" desc="A bar indicating completion progress." storybook="components-progress" />

      <div className={s.section}>
        <p className={s.sectionTitle}>Sizes</p>
        <div className={s.canvas} style={{ flexDirection: 'column', gap: 12 }}>
          <Progress value={60} size="sm" />
          <Progress value={60} size="md" />
          <Progress value={60} size="lg" />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Intents</p>
        <div className={s.canvas} style={{ flexDirection: 'column', gap: 12 }}>
          {intents.map(intent => (
            <Progress key={intent} value={55} intent={intent} label={intent.charAt(0).toUpperCase() + intent.slice(1)} showValue />
          ))}
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Values</p>
        <div className={s.canvas} style={{ flexDirection: 'column', gap: 12 }}>
          <Progress value={0}   label="0%"   showValue />
          <Progress value={25}  label="25%"  showValue />
          <Progress value={50}  label="50%"  showValue />
          <Progress value={75}  label="75%"  showValue />
          <Progress value={100} label="100%" showValue />
        </div>
      </div>
    </>
  )
}
