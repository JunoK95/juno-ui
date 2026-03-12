import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

const typefaces = [
  {
    label: 'Sans-serif',
    name: 'System UI',
    stack: 'system-ui, -apple-system, sans-serif',
    mono: false,
  },
  {
    label: 'Monospace',
    name: 'Monospace',
    stack: 'ui-monospace, monospace',
    mono: true,
  },
]

const alphabet = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz 0123456789'

const typeScale = [
  { name: 'display',   size: '56px', weight: '800', tracking: '-0.04em', lh: '1.05',  sample: 'The quick brown fox' },
  { name: 'h1',        size: '32px', weight: '700', tracking: '-0.02em', lh: '1.2',   sample: 'The quick brown fox jumps' },
  { name: 'h2',        size: '24px', weight: '700', tracking: '-0.02em', lh: '1.3',   sample: 'The quick brown fox jumps over' },
  { name: 'h3',        size: '20px', weight: '600', tracking: '0',       lh: '1.35',  sample: 'The quick brown fox jumps over the lazy dog' },
  { name: 'h4',        size: '16px', weight: '600', tracking: '0',       lh: '1.4',   sample: 'The quick brown fox jumps over the lazy dog' },
  { name: 'body-lg',   size: '16px', weight: '400', tracking: '0',       lh: '1.65',  sample: 'The quick brown fox jumps over the lazy dog' },
  { name: 'body',      size: '14px', weight: '400', tracking: '0',       lh: '1.6',   sample: 'The quick brown fox jumps over the lazy dog' },
  { name: 'body-sm',   size: '13px', weight: '400', tracking: '0',       lh: '1.55',  sample: 'The quick brown fox jumps over the lazy dog' },
  { name: 'label',     size: '12px', weight: '500', tracking: '0',       lh: '1.4',   sample: 'The quick brown fox jumps over the lazy dog' },
  { name: 'caption',   size: '11px', weight: '400', tracking: '0',       lh: '1.4',   sample: 'The quick brown fox jumps over the lazy dog' },
  { name: 'overline',  size: '11px', weight: '600', tracking: '0.07em',  lh: '1.4',   sample: 'THE QUICK BROWN FOX' },
  { name: 'code',      size: '13px', weight: '400', tracking: '0',       lh: '1.6',   sample: 'const x = "hello world"', mono: true },
]

const weights = [
  { label: 'Regular',    value: '400' },
  { label: 'Medium',     value: '500' },
  { label: 'Semibold',   value: '600' },
  { label: 'Bold',       value: '700' },
  { label: 'Extrabold',  value: '800' },
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

export function TypographyPage() {
  return (
    <>
      <PageHeader
        title="Typography"
        desc="The type scale, weights, and text color tokens used across the library."
        storybook="theme-typography"
      />

      <div className={s.section}>
        <p className={s.sectionTitle}>Typefaces</p>
        <div className={s.typefaceGrid}>
          {typefaces.map(f => (
            <div key={f.label} className={s.typefaceCard}>
              <p className={s.typefaceName}>{f.label}</p>
              <p
                className={s.typefaceDisplay}
                style={{ fontFamily: f.stack }}
              >
                {f.name}
              </p>
              <p className={s.typefaceStack}>{f.stack}</p>
              <p
                className={s.typefaceAlphabet}
                style={{ fontFamily: f.stack }}
              >
                {alphabet}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Type scale</p>
        <div className={s.typeScale}>
          {typeScale.map(t => (
            <div key={t.name} className={s.typeRow}>
              <div className={s.typeMeta}>
                <span className={s.typeMetaName}>{t.name}</span>
                <span className={s.typeMetaInfo}>{t.size} / {t.weight}</span>
              </div>
              <span
                className={s.typeSample}
                style={{
                  fontSize: t.size,
                  fontWeight: t.weight,
                  letterSpacing: t.tracking,
                  lineHeight: t.lh,
                  fontFamily: t.mono ? 'ui-monospace, monospace' : undefined,
                }}
              >
                {t.sample}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Font weights</p>
        <div className={s.typeWeightGrid}>
          {weights.map(w => (
            <div key={w.value} className={s.typeWeightCard}>
              <span className={s.typeWeightSample} style={{ fontWeight: w.value }}>Ag</span>
              <span className={s.typeWeightLabel}>{w.label}<br />{w.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Text colors</p>
        <div className={s.typeColorRows}>
          {colorTokens.map(c => (
            <div key={c.token} className={s.typeColorRow}>
              <span className={s.typeColorMeta}>{c.label}</span>
              <span
                className={s.typeColorSample}
                style={{ color: `var(${c.token})` }}
              >
                The quick brown fox jumps over the lazy dog
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
