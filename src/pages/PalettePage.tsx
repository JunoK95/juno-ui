import { useRef, useState } from 'react'
import { Badge, Button, Alert } from '../index'
import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

function rgbToHex(rgb: string): string {
  const m = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
  if (!m) return rgb
  return '#' + [m[1], m[2], m[3]].map(n => parseInt(n).toString(16).padStart(2, '0')).join('')
}

function ColorSwatch({ cssVar, border }: { cssVar: string; border?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [hex, setHex] = useState<string | null>(null)

  return (
    <div style={{ position: 'relative', flex: 1 }}>
      <div
        ref={ref}
        onMouseEnter={() => {
          if (ref.current) setHex(rgbToHex(getComputedStyle(ref.current).backgroundColor))
        }}
        onMouseLeave={() => setHex(null)}
        style={{
          height: 28,
          borderRadius: 5,
          background: `var(${cssVar})`,
          border: border ?? '1px solid rgba(128,128,128,0.2)',
        }}
      />
      {hex && (
        <div style={{
          position: 'absolute',
          bottom: 'calc(100% + 5px)',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'var(--color-text)',
          color: 'var(--color-bg)',
          fontSize: 11,
          fontFamily: 'ui-monospace, monospace',
          padding: '3px 7px',
          borderRadius: 4,
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          zIndex: 10,
        }}>
          {hex}
        </div>
      )}
    </div>
  )
}

const surfaceTokens = [
  { label: 'bg',             var: '--color-bg' },
  { label: 'surface',        var: '--color-surface' },
  { label: 'border',         var: '--color-border' },
  { label: 'border-strong',  var: '--color-border-strong' },
  { label: 'subtle',         var: '--color-subtle' },
  { label: 'text',           var: '--color-text' },
  { label: 'text-secondary', var: '--color-text-secondary' },
  { label: 'text-muted',     var: '--color-text-muted' },
] as const

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
        <p className={s.sectionTitle}>Surface & foreground</p>
        <div className={s.canvas} style={{ flexDirection: 'column', gap: 8, alignItems: 'stretch' }}>
          {surfaceTokens.map(token => (
            <div key={token.var} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className={s.canvasLabel} style={{ width: 72, flexShrink: 0 }}>{token.label}</span>
              <ColorSwatch cssVar={token.var} />
            </div>
          ))}
        </div>
      </div>

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
                return <ColorSwatch key={slot.key} cssVar={cssVar} border="1px solid rgba(0,0,0,0.08)" />
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
