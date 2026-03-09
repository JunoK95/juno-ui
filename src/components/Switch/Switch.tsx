import type { CSSProperties, InputHTMLAttributes } from 'react'
import styles from './Switch.module.scss'

export type SwitchSize   = 'sm' | 'md' | 'lg'
export type SwitchIntent = 'default' | 'primary' | 'danger' | 'success' | 'warning'

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  size?:   SwitchSize
  intent?: SwitchIntent
  label?:  string
  style?:  CSSProperties
}

const intentClass: Record<SwitchIntent, string> = {
  default: styles.intentDefault,
  primary: styles.intentPrimary,
  danger:  styles.intentDanger,
  success: styles.intentSuccess,
  warning: styles.intentWarning,
}

export function Switch({
  size   = 'md',
  intent = 'default',
  label,
  id,
  className,
  style,
  ...props
}: SwitchProps) {
  const switchId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

  return (
    <div
      className={[styles.wrapper, intentClass[intent], className].filter(Boolean).join(' ')}
      style={style}
    >
      <label className={styles.row} htmlFor={switchId}>
        <span className={[styles.track, styles[size]].join(' ')}>
          <input
            type="checkbox"
            role="switch"
            id={switchId}
            className={styles.input}
            {...props}
          />
          <span className={styles.thumb} />
        </span>
        {label && <span className={styles.labelText}>{label}</span>}
      </label>
    </div>
  )
}
