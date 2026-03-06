import type { CSSProperties, SelectHTMLAttributes } from 'react'
import styles from './Select.module.scss'

export type SelectSize = 'sm' | 'md' | 'lg'
export type SelectIntent = 'default' | 'danger' | 'success' | 'warning'

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  size?: SelectSize
  intent?: SelectIntent
  label?: string
  hint?: string
  options: SelectOption[]
  placeholder?: string
  style?: CSSProperties
}

const intentClass: Record<SelectIntent, string> = {
  default: styles.intentDefault,
  danger:  styles.intentDanger,
  success: styles.intentSuccess,
  warning: styles.intentWarning,
}

export function Select({
  size = 'md',
  intent = 'default',
  label,
  hint,
  id,
  options,
  placeholder,
  className,
  style,
  ...props
}: SelectProps) {
  const selectId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

  return (
    <div
      className={[styles.wrapper, intentClass[intent], className].filter(Boolean).join(' ')}
      style={style}
    >
      {label && <label className={styles.label} htmlFor={selectId}>{label}</label>}
      <div className={styles.selectWrap}>
        <select id={selectId} className={[styles.select, styles[size]].join(' ')} {...props}>
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <svg className={styles.arrow} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {hint && <p className={styles.hint}>{hint}</p>}
    </div>
  )
}
