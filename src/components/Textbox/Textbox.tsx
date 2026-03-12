import type { CSSProperties, TextareaHTMLAttributes } from 'react'
import styles from './Textbox.module.scss'

export type TextboxSize   = 'sm' | 'md' | 'lg'
export type TextboxIntent = 'default' | 'danger' | 'success' | 'warning'
export type TextboxResize = 'none' | 'vertical' | 'horizontal' | 'both'

export interface TextboxProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  size?:       TextboxSize
  intent?:     TextboxIntent
  label?:      string
  hint?:       string
  rows?:       number
  resize?:       TextboxResize
  showCount?:    boolean
  textareaStyle?: CSSProperties
}

const intentClass: Record<TextboxIntent, string> = {
  default: styles.intentDefault,
  danger:  styles.intentDanger,
  success: styles.intentSuccess,
  warning: styles.intentWarning,
}

export function Textbox({
  size      = 'md',
  intent    = 'default',
  label,
  hint,
  rows      = 3,
  resize        = 'vertical',
  showCount     = false,
  id,
  className,
  style,
  textareaStyle,
  maxLength,
  value,
  ...props
}: TextboxProps) {
  const textareaId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)
  const count      = typeof value === 'string' ? value.length : 0
  const showFooter = hint || (showCount && maxLength !== undefined)

  return (
    <div
      className={[styles.wrapper, intentClass[intent], className].filter(Boolean).join(' ')}
      style={style}
    >
      {label && <label className={styles.label} htmlFor={textareaId}>{label}</label>}

      <textarea
        id={textareaId}
        className={[styles.textarea, styles[size]].join(' ')}
        rows={rows}
        maxLength={maxLength}
        value={value}
        style={{ resize, ...textareaStyle }}
        {...props}
      />

      {showFooter && (
        <div className={styles.footer}>
          {hint
            ? <p className={styles.hint}>{hint}</p>
            : <span />
          }
          {showCount && maxLength !== undefined && (
            <span className={styles.count}>{count}/{maxLength}</span>
          )}
        </div>
      )}
    </div>
  )
}
