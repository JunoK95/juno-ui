import type { ReactNode } from 'react'
import styles from './Tooltip.module.scss'

export type TooltipSide = 'top' | 'bottom' | 'left' | 'right'

export interface TooltipProps {
  content:    ReactNode
  side?:      TooltipSide
  children:   ReactNode
  className?: string
}

const sideClass: Record<TooltipSide, string> = {
  top:    styles.top,
  bottom: styles.bottom,
  left:   styles.left,
  right:  styles.right,
}

export function Tooltip({ content, side = 'top', children, className }: TooltipProps) {
  return (
    <span className={[styles.wrapper, className].filter(Boolean).join(' ')}>
      {children}
      <span className={[styles.tooltip, sideClass[side]].join(' ')}>
        {content}
      </span>
    </span>
  )
}
