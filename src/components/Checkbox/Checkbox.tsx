import type { CSSProperties, InputHTMLAttributes } from 'react'
import styles from './Checkbox.module.scss'

export type CheckboxSize = 'sm' | 'md' | 'lg'
export type CheckboxIntent = 'default' | 'primary' | 'danger' | 'success' | 'warning'

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  size?: CheckboxSize
  intent?: CheckboxIntent
  label?: string
  hint?: string
  style?: CSSProperties
}

const intentClass: Record<CheckboxIntent, string> = {
  default: styles.intentDefault,
  primary: styles.intentPrimary,
  danger:  styles.intentDanger,
  success: styles.intentSuccess,
  warning: styles.intentWarning,
}

export function Checkbox({
  size = 'md',
  intent = 'default',
  label,
  hint,
  id,
  className,
  style,
  ...props
}: CheckboxProps) {
  const checkId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

  return (
    <div
      className={[styles.wrapper, intentClass[intent], className].filter(Boolean).join(' ')}
      style={style}
    >
      <label className={styles.row} htmlFor={checkId}>
        <input
          type="checkbox"
          id={checkId}
          className={[styles.checkbox, styles[size]].join(' ')}
          {...props}
        />
        {label && <span className={styles.labelText}>{label}</span>}
      </label>
      {hint && <p className={styles.hint}>{hint}</p>}
    </div>
  )
}
