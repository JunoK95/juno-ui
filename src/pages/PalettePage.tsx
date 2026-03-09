import { Badge, Button, Alert } from '../index'
import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

const intentSlots = [
  { key: 'main',         label: 'main' },
  { key: 'hover',        label: 'hover' },
  { key: 'subtle',       label: 'subtle' },
  { key: 'subtle-hover', label: 'subtle-hover' },
  { key: 'border',       label: 'border' },
  { key: 'fg',           label: 'fg' },
] as const

const intents = ['primary', 'danger', 'success', 'warning'] as const

function intentVar(intent: string, slot: string) {
  if (slot === 'main') return `--color-${intent}`
  return `--color-${intent}-${slot}`
}

export function PalettePage() {
  return (
    <>
      <PageHeader
        title="Palette"
        desc="Themed color palettes — switch via the selector in the top bar."
        storybook="components-badge"
      />

      <div className={s.section}>
        <p className={s.sectionTitle}>Intent colors</p>
        <div className={s.canvas} style={{ flexDirection: 'column', gap: 12, alignItems: 'stretch' }}>
          {/* Header row */}
          <div style={{ display: 'flex', gap: 8 }}>
            <span style={{ width: 72, flexShrink: 0 }} />
            {intentSlots.map(slot => (
              <p key={slot.key} style={{ flex: 1, margin: 0, fontSize: 11, color: 'var(--color-text-muted)', fontFamily: 'ui-monospace, monospace', textAlign: 'center' }}>
                {slot.label}
              </p>
            ))}
          </div>
          {intents.map(intent => (
            <div key={intent} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <span className={s.canvasLabel} style={{ width: 72, flexShrink: 0 }}>{intent}</span>
              {intentSlots.map(slot => {
                const cssVar = intentVar(intent, slot.key)
                return (
                  <div
                    key={slot.key}
                    title={cssVar}
                    style={{
                      flex: 1,
                      height: 28,
                      borderRadius: 5,
                      background: `var(${cssVar})`,
                      border: '1px solid rgba(0,0,0,0.08)',
                    }}
                  />
                )
              })}
            </div>
          ))}
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Badges</p>
        <div className={s.canvas} style={{ gap: 8 }}>
          {intents.map(intent => (
            <Badge key={intent} intent={intent}>{intent}</Badge>
          ))}
          {intents.map(intent => (
            <Badge key={intent + '-solid'} variant="solid" intent={intent}>{intent}</Badge>
          ))}
          {intents.map(intent => (
            <Badge key={intent + '-outline'} variant="outline" intent={intent}>{intent}</Badge>
          ))}
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Buttons</p>
        <div className={s.canvas} style={{ gap: 8, flexWrap: 'wrap' }}>
          {intents.map(intent => (
            <Button key={intent} intent={intent}>{intent}</Button>
          ))}
          {intents.map(intent => (
            <Button key={intent + '-outline'} variant="outline" intent={intent}>{intent}</Button>
          ))}
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Alerts</p>
        <div className={s.canvas} style={{ flexDirection: 'column', gap: 8 }}>
          {intents.map(intent => (
            <Alert key={intent} intent={intent} title={intent.charAt(0).toUpperCase() + intent.slice(1)}>
              This is a {intent} alert using the current palette.
            </Alert>
          ))}
        </div>
      </div>
    </>
  )
}
