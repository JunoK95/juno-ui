import { Button } from '../index'
import type { ButtonIntent, ButtonVariant } from '../index'
import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

const intents: ButtonIntent[] = ['default', 'primary', 'danger', 'success', 'warning']
const variants: ButtonVariant[] = ['solid', 'outline', 'ghost']

export function ButtonPage() {
  return (
    <>
      <PageHeader title="Button" desc="Triggers an action or event." storybook="components-button" />

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
