import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Tag.module.scss'

export type TagVariant = 'solid' | 'subtle' | 'outline'
export type TagIntent = 'default' | 'primary' | 'danger' | 'success' | 'warning'

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: TagVariant
  intent?: TagIntent
  onRemove?: () => void
  children: ReactNode
}

const intentClass: Record<TagIntent, string> = {
  default: styles.intentDefault,
  primary: styles.intentPrimary,
  danger:  styles.intentDanger,
  success: styles.intentSuccess,
  warning: styles.intentWarning,
}

export function Tag({
  variant = 'subtle',
  intent = 'default',
  onRemove,
  onClick,
  className,
  children,
  ...props
}: TagProps) {
  const clickable = !!onClick
  const classes = [styles.tag, intentClass[intent], styles[variant], clickable ? styles.clickable : '', className]
    .filter(Boolean).join(' ')

  function handleKeyDown(e: React.KeyboardEvent<HTMLSpanElement>) {
    if (clickable && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      onClick?.(e as unknown as React.MouseEvent<HTMLSpanElement>)
    }
  }

  return (
    <span
      className={classes}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      {...props}
    >
      {children}
      {onRemove && (
        <button className={styles.remove} onClick={onRemove} aria-label="Remove" type="button">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M1.5 1.5l7 7M8.5 1.5l-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      )}
    </span>
  )
}
