import { Spinner } from '../index'
import type { SpinnerIntent } from '../index'
import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

const intents: SpinnerIntent[] = ['default', 'primary', 'danger', 'success', 'warning']

export function SpinnerPage() {
  return (
    <>
      <PageHeader title="Spinner" desc="An animated loading indicator." storybook="components-spinner" />

      <div className={s.section}>
        <p className={s.sectionTitle}>Sizes</p>
        <div className={s.canvas} style={{ gap: 20 }}>
          <Spinner size="sm" intent="primary" />
          <Spinner size="md" intent="primary" />
          <Spinner size="lg" intent="primary" />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Intents</p>
        <div className={s.canvas} style={{ gap: 16 }}>
          {intents.map(intent => (
            <Spinner key={intent} intent={intent} />
          ))}
        </div>
      </div>
    </>
  )
}
