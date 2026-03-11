import type { ReactNode } from 'react'
import { useState } from 'react'
import { Collapsible } from '../Collapsible'
import styles from './Accordion.module.scss'

export interface AccordionItem {
  title:     string
  content:   ReactNode
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
      {items.map((item, i) => (
        <div key={i} className={[styles.item, i === items.length - 1 ? styles.last : ''].filter(Boolean).join(' ')}>
          <Collapsible
            trigger={item.title}
            open={open.has(i)}
            onOpenChange={() => toggle(i)}
            disabled={item.disabled}
            unstyled
          >
            {item.content}
          </Collapsible>
        </div>
      ))}
    </div>
  )
}
