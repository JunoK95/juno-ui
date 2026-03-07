import type { ReactNode } from 'react'
import styles from './Tabs.module.scss'

export type TabsVariant = 'underline' | 'pill'

export interface TabItem {
  value: string
  label: ReactNode
}

export interface TabsProps {
  items: TabItem[]
  value: string
  onChange: (value: string) => void
  variant?: TabsVariant
}

export function Tabs({ items, value, onChange, variant = 'underline' }: TabsProps) {
  return (
    <div className={[styles.tabs, styles[variant]].join(' ')} role="tablist">
      {items.map(item => (
        <button
          key={item.value}
          role="tab"
          aria-selected={item.value === value}
          className={[styles.tab, item.value === value ? styles.active : ''].filter(Boolean).join(' ')}
          onClick={() => onChange(item.value)}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}
