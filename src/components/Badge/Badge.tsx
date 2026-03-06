import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Badge.module.scss'

export type BadgeVariant = 'solid' | 'subtle' | 'outline'
export type BadgeIntent = 'default' | 'primary' | 'danger' | 'success' | 'warning'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  intent?: BadgeIntent
  children: ReactNode
}

const intentClass: Record<BadgeIntent, string> = {
  default: styles.intentDefault,
  primary: styles.intentPrimary,
  danger:  styles.intentDanger,
  success: styles.intentSuccess,
  warning: styles.intentWarning,
}

export function Badge({
  variant = 'subtle',
  intent = 'default',
  className,
  children,
  ...props
}: BadgeProps) {
  const classes = [styles.badge, intentClass[intent], styles[variant], className]
    .filter(Boolean).join(' ')

  return <span className={classes} {...props}>{children}</span>
}
