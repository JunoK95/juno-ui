import { useState } from 'react'
import { Stepper, Button } from '../index'
import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

const steps = [
  { label: 'Account', description: 'Create your account' },
  { label: 'Profile', description: 'Set up your profile' },
  { label: 'Review', description: 'Confirm your details' },
]

export function StepperPage() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <>
      <PageHeader title="Stepper" desc="Guides users through a multi-step process." storybook="components-stepper" />

      <div className={s.section}>
        <p className={s.sectionTitle}>Horizontal</p>
        <div className={s.canvas} style={{ flexDirection: 'column', alignItems: 'stretch', gap: '16px' }}>
          <Stepper steps={steps} activeStep={activeStep} />
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button size="sm" variant="outline" onClick={() => setActiveStep(a => Math.max(0, a - 1))} disabled={activeStep === 0}>
              Back
            </Button>
            <Button size="sm" onClick={() => setActiveStep(a => Math.min(steps.length, a + 1))} disabled={activeStep === steps.length}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Vertical</p>
        <div className={s.canvas}>
          <Stepper steps={steps} activeStep={1} orientation="vertical" />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>All completed</p>
        <div className={s.canvas}>
          <Stepper steps={steps} activeStep={steps.length} />
        </div>
      </div>
    </>
  )
}
