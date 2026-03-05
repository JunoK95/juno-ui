import type { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.scss'

export type ButtonVariant = 'solid' | 'outline' | 'ghost'
export type ButtonIntent = 'default' | 'primary' | 'danger' | 'success' | 'warning'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  intent?: ButtonIntent
  size?: ButtonSize
  children: ReactNode
}

const intentClass: Record<ButtonIntent, string> = {
  default: styles.intentDefault,
  primary: styles.intentPrimary,
  danger:  styles.intentDanger,
  success: styles.intentSuccess,
  warning: styles.intentWarning,
}

export function Button({
  variant = 'solid',
  intent = 'default',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = [
    styles.button,
    intentClass[intent],
    styles[variant],
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
