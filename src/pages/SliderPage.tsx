import { useState } from 'react'
import { Slider } from '../index'
import type { SliderIntent } from '../index'
import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

const intents: SliderIntent[] = ['default', 'primary', 'danger', 'success', 'warning']

export function SliderPage() {
  const [value, setValue]   = useState(40)
  const [v1, setV1]         = useState(5)
  const [v2, setV2]         = useState(500)
  const [v3, setV3]         = useState(0)

  return (
    <>
      <PageHeader title="Slider" desc="A range input for selecting a numeric value." storybook="components-slider" />

      <div className={s.section}>
        <p className={s.sectionTitle}>Default</p>
        <div className={s.canvas} style={{ flexDirection: 'column' }}>
          <Slider value={value} onChange={setValue} label="Value" showValue />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Sizes</p>
        <div className={s.canvas} style={{ flexDirection: 'column', gap: 20 }}>
          <Slider size="sm" value={value} onChange={setValue} label="Small"  showValue />
          <Slider size="md" value={value} onChange={setValue} label="Medium" showValue />
          <Slider size="lg" value={value} onChange={setValue} label="Large"  showValue />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Intents</p>
        <div className={s.canvas} style={{ flexDirection: 'column', gap: 20 }}>
          {intents.map(intent => (
            <Slider
              key={intent}
              intent={intent}
              value={value}
              onChange={setValue}
              label={intent.charAt(0).toUpperCase() + intent.slice(1)}
              showValue
            />
          ))}
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Custom range & step</p>
        <div className={s.canvas} style={{ flexDirection: 'column', gap: 20 }}>
          <Slider value={v1} onChange={setV1} min={0}    max={10}   step={1}  label="0 – 10 (step 1)"      showValue />
          <Slider value={v2} onChange={setV2} min={0}    max={1000} step={50} label="0 – 1000 (step 50)"   showValue />
          <Slider value={v3} onChange={setV3} min={-100} max={100}  step={10} label="−100 – 100 (step 10)" showValue />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Disabled</p>
        <div className={s.canvas} style={{ flexDirection: 'column' }}>
          <Slider value={60} onChange={() => {}} label="Disabled" showValue disabled />
        </div>
      </div>
    </>
  )
}
