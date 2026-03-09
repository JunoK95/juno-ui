import styles from './Spinner.module.scss'

export type SpinnerSize   = 'sm' | 'md' | 'lg'
export type SpinnerIntent = 'default' | 'primary' | 'danger' | 'success' | 'warning'

export interface SpinnerProps {
  size?:      SpinnerSize
  intent?:    SpinnerIntent
  className?: string
}

const intentClass: Record<SpinnerIntent, string> = {
  default: styles.intentDefault,
  primary: styles.intentPrimary,
  danger:  styles.intentDanger,
  success: styles.intentSuccess,
  warning: styles.intentWarning,
}

export function Spinner({ size = 'md', intent = 'default', className }: SpinnerProps) {
  const cls = [styles.spinner, styles[size], intentClass[intent], className].filter(Boolean).join(' ')
  return <span className={cls} role="status" aria-label="Loading" />
}
