import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Card.module.scss'

export type CardVariant = 'elevated' | 'outline' | 'subtle' | 'flat'
export type CardColor = 'default' | 'primary' | 'danger' | 'success' | 'warning'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
  color?: CardColor
  children?: ReactNode
}

const colorClass: Record<CardColor, string> = {
  default: styles.colorDefault,
  primary: styles.colorPrimary,
  danger:  styles.colorDanger,
  success: styles.colorSuccess,
  warning: styles.colorWarning,
}

export function Card({ variant = 'elevated', color = 'default', className, children, ...props }: CardProps) {
  const classes = [styles.card, colorClass[color], styles[variant], className].filter(Boolean).join(' ')
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={[styles.header, className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function CardBody({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={[styles.body, className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={[styles.footer, className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}
