import { Separator } from '../index'
import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

export function SeparatorPage() {
  return (
    <>
      <PageHeader title="Separator" desc="A visual divider between sections, optionally with a label." storybook="components-separator" />

      <div className={s.section}>
        <p className={s.sectionTitle}>Horizontal</p>
        <div className={s.canvas} style={{ flexDirection: 'column', gap: 16 }}>
          <span style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>Above the line</span>
          <Separator />
          <span style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>Below the line</span>
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>With label</p>
        <div className={s.canvas} style={{ flexDirection: 'column', gap: 16 }}>
          <Separator label="OR" />
          <Separator label="Section title" />
          <Separator label="Continue" />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Vertical</p>
        <div className={s.canvas} style={{ alignItems: 'stretch', gap: 16, height: 48 }}>
          <span style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>Left</span>
          <Separator orientation="vertical" />
          <span style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>Center</span>
          <Separator orientation="vertical" />
          <span style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>Right</span>
        </div>
      </div>
    </>
  )
}
