import { useState } from 'react'
import { Textbox } from '../index'
import type { TextboxIntent } from '../index'
import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

const intents: TextboxIntent[] = ['default', 'danger', 'success', 'warning']

const intentHints: Record<TextboxIntent, string> = {
  default: 'Helper text goes here.',
  danger:  'This field has an error.',
  success: 'Saved successfully.',
  warning: 'Double-check this value.',
}

export function TextboxPage() {
  const [counted, setCounted] = useState('')

  return (
    <>
      <PageHeader
        title="Textbox"
        desc="A multiline text input for longer-form content."
        storybook="components-textbox"
      />

      <div className={s.section}>
        <p className={s.sectionTitle}>Sizes</p>
        <div className={s.canvas} style={{ flexDirection: 'column', alignItems: 'stretch' }}>
          <Textbox size="sm" placeholder="Small" rows={2} />
          <Textbox size="md" placeholder="Medium" rows={2} />
          <Textbox size="lg" placeholder="Large" rows={2} />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Intents</p>
        <div className={s.canvas} style={{ flexDirection: 'column', alignItems: 'stretch' }}>
          {intents.map(intent => (
            <Textbox
              key={intent}
              intent={intent}
              label={intent.charAt(0).toUpperCase() + intent.slice(1)}
              hint={intentHints[intent]}
              placeholder="Write something…"
            />
          ))}
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Character count</p>
        <div className={s.canvas} style={{ flexDirection: 'column', alignItems: 'stretch' }}>
          <Textbox
            label="Bio"
            hint="Tell us about yourself."
            placeholder="Write your bio…"
            maxLength={200}
            showCount
            value={counted}
            onChange={e => setCounted(e.target.value)}
          />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Resize</p>
        <div className={s.canvas} style={{ flexDirection: 'column', alignItems: 'stretch' }}>
          <Textbox label="Vertical (default)" resize="vertical"   placeholder="Drag bottom-right to resize…" />
          <Textbox label="None"               resize="none"       placeholder="Fixed size" />
          <Textbox label="Both"               resize="both"       placeholder="Resize freely…" />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Disabled</p>
        <div className={s.canvas} style={{ flexDirection: 'column', alignItems: 'stretch' }}>
          <Textbox disabled label="Notes" defaultValue="This field is disabled." resize="none" />
          <Textbox disabled intent="danger" label="With intent" placeholder="Disabled with intent" resize="none" />
        </div>
      </div>
    </>
  )
}
