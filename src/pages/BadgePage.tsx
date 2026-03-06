import { Badge } from '../index'
import type { BadgeIntent, BadgeVariant } from '../index'
import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

const intents: BadgeIntent[]  = ['default', 'primary', 'danger', 'success', 'warning']
const variants: BadgeVariant[] = ['subtle', 'solid', 'outline']

export function BadgePage() {
  return (
    <>
      <PageHeader title="Badge" desc="Highlights a status, count, or category." storybook="components-badge" />

      <div className={s.section}>
        <p className={s.sectionTitle}>Variants × Intents</p>
        {variants.map(variant => (
          <div key={variant} className={s.canvas}>
            <span className={s.canvasLabel}>{variant}</span>
            {intents.map(intent => (
              <Badge key={intent} variant={variant} intent={intent}>{intent}</Badge>
            ))}
          </div>
        ))}
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Common uses</p>
        <div className={s.canvas} style={{ gap: '8px' }}>
          <Badge intent="success">Active</Badge>
          <Badge intent="danger">Deprecated</Badge>
          <Badge intent="warning">Beta</Badge>
          <Badge intent="primary">New</Badge>
          <Badge>Draft</Badge>
          <Badge variant="solid"   intent="primary">v2.0</Badge>
          <Badge variant="outline" intent="danger">Breaking</Badge>
        </div>
      </div>
    </>
  )
}
