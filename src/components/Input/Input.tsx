import type { InputHTMLAttributes } from 'react'
import styles from './Input.module.scss'

export type InputSize = 'sm' | 'md' | 'lg'
export type InputIntent = 'default' | 'danger' | 'success' | 'warning'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: InputSize
  intent?: InputIntent
  label?: string
  hint?: string
}

const intentClass: Record<InputIntent, string> = {
  default: styles.intentDefault,
  danger:  styles.intentDanger,
  success: styles.intentSuccess,
  warning: styles.intentWarning,
}

export function Input({
  size = 'md',
  intent = 'default',
  label,
  hint,
  id,
  className,
  ...props
}: InputProps) {
  const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

  return (
    <div className={[styles.wrapper, intentClass[intent], className].filter(Boolean).join(' ')}>
      {label && <label className={styles.label} htmlFor={inputId}>{label}</label>}
      <input id={inputId} className={[styles.input, styles[size]].join(' ')} {...props} />
      {hint && <p className={styles.hint}>{hint}</p>}
    </div>
  )
}
