import type { InputHTMLAttributes, ReactNode } from 'react'
import styles from './Input.module.scss'

export type InputSize = 'sm' | 'md' | 'lg'
export type InputIntent = 'default' | 'danger' | 'success' | 'warning'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: InputSize
  intent?: InputIntent
  label?: string
  hint?: string
  iconLeft?: ReactNode
  iconRight?: ReactNode
  onClickIconLeft?: () => void
  onClickIconRight?: () => void
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
  iconLeft,
  iconRight,
  onClickIconLeft,
  onClickIconRight,
  id,
  className,
  style,
  ...props
}: InputProps) {
  const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

  const inputClass = [
    styles.input,
    styles[size],
    iconLeft  && styles.withIconLeft,
    iconRight && styles.withIconRight,
  ].filter(Boolean).join(' ')

  return (
    <div
      className={[styles.wrapper, intentClass[intent], className].filter(Boolean).join(' ')}
      style={style}
    >
      {label && <label className={styles.label} htmlFor={inputId}>{label}</label>}
      <div className={styles.inputWrap}>
        {iconLeft && (
          onClickIconLeft
            ? <button type="button" className={[styles.iconSlot, styles.iconSlotLeft, styles.iconSlotBtn].join(' ')} onClick={onClickIconLeft} tabIndex={-1}>{iconLeft}</button>
            : <span className={[styles.iconSlot, styles.iconSlotLeft].join(' ')}>{iconLeft}</span>
        )}
        <input id={inputId} className={inputClass} {...props} />
        {iconRight && (
          onClickIconRight
            ? <button type="button" className={[styles.iconSlot, styles.iconSlotRight, styles.iconSlotBtn].join(' ')} onClick={onClickIconRight} tabIndex={-1}>{iconRight}</button>
            : <span className={[styles.iconSlot, styles.iconSlotRight].join(' ')}>{iconRight}</span>
        )}
      </div>
      {hint && <p className={styles.hint}>{hint}</p>}
    </div>
  )
}
