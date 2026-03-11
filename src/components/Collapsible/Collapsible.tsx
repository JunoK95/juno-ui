import type { ReactNode } from 'react'
import { useState } from 'react'
import styles from './Collapsible.module.scss'

export interface CollapsibleProps {
  trigger:        ReactNode
  children:       ReactNode
  defaultOpen?:   boolean
  open?:          boolean
  onOpenChange?:  (open: boolean) => void
  unstyled?:      boolean
  disabled?:      boolean
  className?:     string
}

export function Collapsible({
  trigger,
  children,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
  unstyled = false,
  disabled = false,
  className,
}: CollapsibleProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen)
  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : internalOpen

  function toggle() {
    if (disabled) return
    if (isControlled) {
      onOpenChange?.(!open)
    } else {
      setInternalOpen(o => !o)
      onOpenChange?.(!open)
    }
  }

  return (
    <div className={[
      styles.collapsible,
      unstyled ? styles.unstyled : '',
      open      ? styles.open     : '',
      disabled  ? styles.disabled  : '',
      className,
    ].filter(Boolean).join(' ')}>
      <button
        type="button"
        className={styles.trigger}
        onClick={toggle}
        aria-expanded={open}
        disabled={disabled}
      >
        <span className={styles.triggerContent}>{trigger}</span>
        <svg className={styles.chevron} width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className={styles.body}>
        <div className={styles.bodyInner}>
          <div className={styles.bodyContent}>{children}</div>
        </div>
      </div>
    </div>
  )
}
