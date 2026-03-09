import styles from './Progress.module.scss'

export type ProgressSize   = 'sm' | 'md' | 'lg'
export type ProgressIntent = 'default' | 'primary' | 'danger' | 'success' | 'warning'

export interface ProgressProps {
  value:       number
  size?:       ProgressSize
  intent?:     ProgressIntent
  label?:      string
  showValue?:  boolean
  className?:  string
}

const intentClass: Record<ProgressIntent, string> = {
  default: styles.intentDefault,
  primary: styles.intentPrimary,
  danger:  styles.intentDanger,
  success: styles.intentSuccess,
  warning: styles.intentWarning,
}

export function Progress({
  value,
  size   = 'md',
  intent = 'primary',
  label,
  showValue,
  className,
}: ProgressProps) {
  const clamped = Math.min(100, Math.max(0, value))

  const cls = [styles.wrapper, intentClass[intent], className].filter(Boolean).join(' ')

  return (
    <div className={cls}>
      {(label || showValue) && (
        <div className={styles.row}>
          {label     && <span className={styles.label}>{label}</span>}
          {showValue && <span className={styles.value}>{clamped}%</span>}
        </div>
      )}
      <div
        className={[styles.track, styles[size]].join(' ')}
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className={styles.fill} style={{ width: `${clamped}%` }} />
      </div>
    </div>
  )
}
