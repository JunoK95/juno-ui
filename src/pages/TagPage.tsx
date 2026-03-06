import { useState } from 'react'
import { Tag } from '../index'
import type { TagIntent, TagVariant } from '../index'
import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

const intents: TagIntent[]  = ['default', 'primary', 'danger', 'success', 'warning']
const variants: TagVariant[] = ['subtle', 'solid', 'outline']

const initialTags = ['React', 'TypeScript', 'SCSS', 'Vite', 'Testing']

export function TagPage() {
  const [tags, setTags] = useState(initialTags)

  return (
    <>
      <PageHeader title="Tag" desc="Labels content with optional removal." storybook="components-tag" />

      <div className={s.section}>
        <p className={s.sectionTitle}>Variants × Intents</p>
        {variants.map(variant => (
          <div key={variant} className={s.canvas}>
            <span className={s.canvasLabel}>{variant}</span>
            {intents.map(intent => (
              <Tag key={intent} variant={variant} intent={intent}>{intent}</Tag>
            ))}
          </div>
        ))}
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Dismissible</p>
        <div className={s.canvas} style={{ gap: '8px' }}>
          {tags.map(tag => (
            <Tag key={tag} onRemove={() => setTags(ts => ts.filter(t => t !== tag))}>{tag}</Tag>
          ))}
          {tags.length === 0 && (
            <button
              style={{ fontSize: '12px', color: 'var(--color-text-muted)', background: 'none', border: 'none', cursor: 'pointer' }}
              onClick={() => setTags(initialTags)}
            >
              Reset
            </button>
          )}
        </div>
      </div>
    </>
  )
}
