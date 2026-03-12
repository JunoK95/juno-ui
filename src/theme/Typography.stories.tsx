import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Theme/Typography',
}

export default meta
type Story = StoryObj

// ─── Shared data ──────────────────────────────────────────────────────────────

const typeScale = [
  { name: 'display',  size: '56px', weight: '800', tracking: '-0.04em', lh: '1.05' },
  { name: 'h1',       size: '32px', weight: '700', tracking: '-0.02em', lh: '1.2'  },
  { name: 'h2',       size: '24px', weight: '700', tracking: '-0.02em', lh: '1.3'  },
  { name: 'h3',       size: '20px', weight: '600', tracking: '0',       lh: '1.35' },
  { name: 'h4',       size: '16px', weight: '600', tracking: '0',       lh: '1.4'  },
  { name: 'body-lg',  size: '16px', weight: '400', tracking: '0',       lh: '1.65' },
  { name: 'body',     size: '14px', weight: '400', tracking: '0',       lh: '1.6'  },
  { name: 'body-sm',  size: '13px', weight: '400', tracking: '0',       lh: '1.55' },
  { name: 'label',    size: '12px', weight: '500', tracking: '0',       lh: '1.4'  },
  { name: 'caption',  size: '11px', weight: '400', tracking: '0',       lh: '1.4'  },
  { name: 'overline', size: '11px', weight: '600', tracking: '0.07em',  lh: '1.4'  },
  { name: 'code',     size: '13px', weight: '400', tracking: '0',       lh: '1.6', mono: true },
]

const weights = [
  { label: 'Regular',   value: '400' },
  { label: 'Medium',    value: '500' },
  { label: 'Semibold',  value: '600' },
  { label: 'Bold',      value: '700' },
  { label: 'Extrabold', value: '800' },
]

const colorTokens = [
  { token: '--color-text',           label: 'text' },
  { token: '--color-text-secondary', label: 'text-secondary' },
  { token: '--color-text-muted',     label: 'text-muted' },
  { token: '--color-primary',        label: 'primary' },
  { token: '--color-danger',         label: 'danger' },
  { token: '--color-success',        label: 'success' },
  { token: '--color-warning',        label: 'warning' },
]

const cell: React.CSSProperties = {
  fontFamily: 'ui-monospace, monospace',
  fontSize: 11,
  color: 'var(--color-text-muted)',
}

// ─── Stories ──────────────────────────────────────────────────────────────────

function TypeScaleRender() {
  return (
    <div style={{ border: '1px solid var(--color-border)', borderRadius: 10, overflow: 'hidden' }}>
      {typeScale.map((t, i) => (
        <div
          key={t.name}
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 20,
            padding: '16px 20px',
            borderBottom: i < typeScale.length - 1 ? '1px solid var(--color-border)' : undefined,
          }}
        >
          <div style={{ width: 90, flexShrink: 0 }}>
            <div style={cell}>{t.name}</div>
            <div style={{ ...cell, color: 'var(--color-border-strong)', marginTop: 2 }}>
              {t.size} / {t.weight}
            </div>
          </div>
          <span style={{
            fontSize: t.size,
            fontWeight: t.weight,
            letterSpacing: t.tracking,
            lineHeight: t.lh,
            fontFamily: t.mono ? 'ui-monospace, monospace' : undefined,
            color: 'var(--color-text)',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            flex: 1,
          }}>
            {t.mono ? 'const x = "hello world"' : 'The quick brown fox jumps over the lazy dog'}
          </span>
        </div>
      ))}
    </div>
  )
}

export const Default:   Story = { render: () => <TypeScaleRender /> }
export const TypeScale: Story = { render: () => <TypeScaleRender /> }

export const Weights: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
      {weights.map(w => (
        <div key={w.value} style={{
          padding: '20px',
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 10,
          minWidth: 100,
        }}>
          <div style={{ fontSize: 32, fontWeight: w.value, color: 'var(--color-text)', lineHeight: 1, marginBottom: 10 }}>
            Ag
          </div>
          <div style={cell}>{w.label}</div>
          <div style={{ ...cell, color: 'var(--color-border-strong)' }}>{w.value}</div>
        </div>
      ))}
    </div>
  ),
}

export const TextColors: Story = {
  render: () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: '24px',
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 10,
    }}>
      {colorTokens.map(c => (
        <div key={c.token} style={{ display: 'flex', alignItems: 'baseline', gap: 20 }}>
          <span style={{ ...cell, width: 140, flexShrink: 0 }}>{c.label}</span>
          <span style={{ fontSize: 15, color: `var(${c.token})` }}>
            The quick brown fox jumps over the lazy dog
          </span>
        </div>
      ))}
    </div>
  ),
}

export const Typefaces: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
      {[
        { label: 'Sans-serif', name: 'System UI', stack: 'system-ui, -apple-system, sans-serif' },
        { label: 'Monospace',  name: 'Monospace', stack: 'ui-monospace, monospace' },
      ].map(f => (
        <div key={f.label} style={{
          padding: 24,
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 10,
          overflow: 'hidden',
        }}>
          <div style={{ ...cell, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>
            {f.label}
          </div>
          <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1, color: 'var(--color-text)', fontFamily: f.stack, marginBottom: 14 }}>
            {f.name}
          </div>
          <div style={{ ...cell, marginBottom: 18 }}>{f.stack}</div>
          <div style={{ fontSize: 13, color: 'var(--color-text-secondary)', fontFamily: f.stack, lineHeight: 1.7, wordBreak: 'break-all' }}>
            AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz 0123456789
          </div>
        </div>
      ))}
    </div>
  ),
}
