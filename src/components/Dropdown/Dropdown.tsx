import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import styles from './Dropdown.module.scss'

export type DropdownItem =
  | { type?: 'item';    label: string; onClick?: () => void; icon?: ReactNode; disabled?: boolean; shortcut?: string }
  | { type:  'divider' }
  | { type:  'label';  label: string }

export interface DropdownProps {
  trigger:    ReactNode
  items:      DropdownItem[]
  align?:     'start' | 'end'
  className?: string
}

export function Dropdown({ trigger, items, align = 'start', className }: DropdownProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function onMousedown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onMousedown)
    return () => document.removeEventListener('mousedown', onMousedown)
  }, [open])

  useEffect(() => {
    if (!open) return
    function onKeydown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeydown)
    return () => document.removeEventListener('keydown', onKeydown)
  }, [open])

  return (
    <div ref={ref} className={[styles.wrapper, className].filter(Boolean).join(' ')}>
      <div className={styles.triggerWrap} onClick={() => setOpen(o => !o)}>
        {trigger}
      </div>

      {open && (
        <div className={[styles.menu, align === 'end' ? styles.alignEnd : styles.alignStart].join(' ')}>
          {items.map((item, i) => {
            if (item.type === 'divider') {
              return <div key={i} className={styles.divider} />
            }
            if (item.type === 'label') {
              return <div key={i} className={styles.groupLabel}>{item.label}</div>
            }
            return (
              <button
                key={i}
                className={styles.menuItem}
                disabled={item.disabled}
                onClick={() => {
                  item.onClick?.()
                  setOpen(false)
                }}
              >
                {item.icon && <span className={styles.icon}>{item.icon}</span>}
                <span className={styles.itemLabel}>{item.label}</span>
                {item.shortcut && <span className={styles.shortcut}>{item.shortcut}</span>}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
