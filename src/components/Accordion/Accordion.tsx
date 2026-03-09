import type { ReactNode } from 'react'
import { useState } from 'react'
import styles from './Accordion.module.scss'

export interface AccordionItem {
  title:    string
  content:  ReactNode
  disabled?: boolean
}

export interface AccordionProps {
  items:      AccordionItem[]
  multiple?:  boolean
  className?: string
}

export function Accordion({ items, multiple = false, className }: AccordionProps) {
  const [open, setOpen] = useState<Set<number>>(new Set())

  function toggle(i: number) {
    setOpen(prev => {
      const next = new Set(prev)
      if (next.has(i)) {
        next.delete(i)
      } else {
        if (!multiple) next.clear()
        next.add(i)
      }
      return next
    })
  }

  return (
    <div className={[styles.accordion, className].filter(Boolean).join(' ')}>
      {items.map((item, i) => {
        const isOpen = open.has(i)
        return (
          <div
            key={i}
            className={[styles.item, isOpen ? styles.open : '', item.disabled ? styles.disabled : ''].filter(Boolean).join(' ')}
          >
            <button
              className={styles.trigger}
              onClick={() => !item.disabled && toggle(i)}
              aria-expanded={isOpen}
              disabled={item.disabled}
            >
              <span className={styles.triggerLabel}>{item.title}</span>
              <svg className={styles.chevron} width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className={styles.body}>
              <div className={styles.bodyInner}>{item.content}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
