import { useState } from 'react'
import { Select } from '../index'
import type { SelectIntent } from '../index'
import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

const intents: SelectIntent[] = ['default', 'danger', 'success', 'warning']

const intentHints: Record<SelectIntent, string> = {
  default: 'Choose an option.',
  danger:  'Please select a valid option.',
  success: 'Great choice!',
  warning: 'Double-check your selection.',
}

const roleOptions = [
  { value: 'admin', label: 'Admin' },
  { value: 'editor', label: 'Editor' },
  { value: 'viewer', label: 'Viewer' },
]

const tagOptions = [
  { value: 'design',     label: 'Design' },
  { value: 'frontend',   label: 'Frontend' },
  { value: 'backend',    label: 'Backend' },
  { value: 'devops',     label: 'DevOps' },
  { value: 'mobile',     label: 'Mobile' },
  { value: 'security',   label: 'Security' },
]

export function SelectPage() {
  const [tags, setTags] = useState<string[]>([])

  return (
    <>
      <PageHeader title="Select" desc="Lets users choose from a list of options." storybook="components-select" />

      <div className={s.section}>
        <p className={s.sectionTitle}>Sizes</p>
        <div className={s.canvas}>
          <Select size="sm" options={roleOptions} placeholder="Small…"  style={{ width: '160px' }} />
          <Select size="md" options={roleOptions} placeholder="Medium…" style={{ width: '160px' }} />
          <Select size="lg" options={roleOptions} placeholder="Large…"  style={{ width: '160px' }} />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Intents</p>
        <div className={s.canvas} style={{ flexDirection: 'column', alignItems: 'stretch' }}>
          {intents.map(intent => (
            <Select
              key={intent}
              intent={intent}
              label={intent.charAt(0).toUpperCase() + intent.slice(1)}
              hint={intentHints[intent]}
              options={roleOptions}
              placeholder="Select a role…"
              style={{ width: '100%' }}
            />
          ))}
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Disabled</p>
        <div className={s.canvas}>
          <Select disabled label="Role" options={roleOptions} placeholder="Select…" style={{ width: '200px' }} />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Multi-select</p>
        <div className={s.canvas} style={{ flexDirection: 'column', alignItems: 'stretch' }}>
          <Select
            multiple
            label="Tags"
            hint={tags.length > 0 ? `${tags.length} tag${tags.length > 1 ? 's' : ''} selected` : 'Choose one or more tags.'}
            options={tagOptions}
            placeholder="Select tags…"
            multiValue={tags}
            onMultiChange={setTags}
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </>
  )
}
