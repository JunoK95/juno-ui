import { Tooltip, Button } from '../index'
import type { TooltipSide } from '../index'
import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

const sides: TooltipSide[] = ['top', 'bottom', 'left', 'right']

export function TooltipPage() {
  return (
    <>
      <PageHeader title="Tooltip" desc="Contextual labels that appear on hover." storybook="components-tooltip" />

      <div className={s.section}>
        <p className={s.sectionTitle}>Sides</p>
        <div className={s.canvas} style={{ gap: 24, justifyContent: 'center', padding: '40px 24px' }}>
          {sides.map(side => (
            <Tooltip key={side} content={`${side.charAt(0).toUpperCase() + side.slice(1)} tooltip`} side={side}>
              <Button size="sm" variant="outline">{side}</Button>
            </Tooltip>
          ))}
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Rich content</p>
        <div className={s.canvas} style={{ gap: 16, justifyContent: 'center', padding: '40px 24px' }}>
          <Tooltip content="Copy to clipboard" side="top">
            <Button size="sm" intent="primary">Copy</Button>
          </Tooltip>
          <Tooltip content="This action cannot be undone" side="bottom">
            <Button size="sm" intent="danger" variant="outline">Delete</Button>
          </Tooltip>
        </div>
      </div>
    </>
  )
}
