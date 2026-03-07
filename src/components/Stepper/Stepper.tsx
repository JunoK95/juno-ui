import styles from './Stepper.module.scss'

export interface StepItem {
  label: string
  description?: string
}

export interface StepperProps {
  steps: StepItem[]
  activeStep: number
  orientation?: 'horizontal' | 'vertical'
}

export function Stepper({ steps, activeStep, orientation = 'horizontal' }: StepperProps) {
  return (
    <div className={[styles.stepper, styles[orientation]].join(' ')}>
      {steps.map((step, i) => {
        const isCompleted = i < activeStep
        const isActive = i === activeStep
        const isLast = i === steps.length - 1
        const state = isCompleted ? 'completed' : isActive ? 'active' : 'pending'

        return (
          <div key={i} className={[styles.step, styles[state]].join(' ')}>
            <div className={styles.stepTrack}>
              <div className={styles.indicator}>
                {isCompleted ? (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <span>{i + 1}</span>
                )}
              </div>
              {!isLast && (
                <div className={[styles.connector, isCompleted ? styles.connectorDone : ''].filter(Boolean).join(' ')} />
              )}
            </div>
            <div className={styles.stepContent}>
              <p className={styles.label}>{step.label}</p>
              {step.description && <p className={styles.desc}>{step.description}</p>}
            </div>
          </div>
        )
      })}
    </div>
  )
}
