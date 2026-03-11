import type { CSSProperties } from 'react'
import styles from './Slider.module.scss'

export type SliderSize   = 'sm' | 'md' | 'lg'
export type SliderIntent = 'default' | 'primary' | 'danger' | 'success' | 'warning'

export interface SliderProps {
  value?:      number
  onChange?:   (value: number) => void
  min?:        number
  max?:        number
  step?:       number
  size?:       SliderSize
  intent?:     SliderIntent
  label?:      string
  showValue?:  boolean
  disabled?:   boolean
  className?:  string
}

const intentClass: Record<SliderIntent, string> = {
  default: styles.intentDefault,
  primary: styles.intentPrimary,
  danger:  styles.intentDanger,
  success: styles.intentSuccess,
  warning: styles.intentWarning,
}

export function Slider({
  value    = 50,
  onChange,
  min      = 0,
  max      = 100,
  step     = 1,
  size     = 'md',
  intent   = 'primary',
  label,
  showValue,
  disabled = false,
  className,
}: SliderProps) {
  const clamped = Math.min(max, Math.max(min, value))
  const pct     = max === min ? 0 : ((clamped - min) / (max - min)) * 100

  const cls = [styles.wrapper, intentClass[intent], disabled ? styles.disabled : '', className].filter(Boolean).join(' ')

  return (
    <div className={cls}>
      {(label || showValue) && (
        <div className={styles.row}>
          {label     && <span className={styles.label}>{label}</span>}
          {showValue && <span className={styles.valueLabel}>{clamped}</span>}
        </div>
      )}
      <input
        type="range"
        className={[styles.input, styles[size]].join(' ')}
        min={min}
        max={max}
        step={step}
        value={clamped}
        disabled={disabled}
        onChange={e => onChange?.(Number(e.target.value))}
        style={{ '--sl-pct': `${pct}%` } as CSSProperties}
        aria-valuenow={clamped}
        aria-valuemin={min}
        aria-valuemax={max}
      />
    </div>
  )
}
