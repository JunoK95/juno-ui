import { type ButtonHTMLAttributes, type ReactNode, useCallback, useRef, useState } from 'react'
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

interface Ripple { id: number; x: number; y: number; size: number }

export function Button({
  variant = 'solid',
  intent = 'default',
  size = 'md',
  className,
  children,
  onMouseDown,
  ...props
}: ButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([])
  const nextId = useRef(0)

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const s = Math.max(rect.width, rect.height) * 2
    const id = nextId.current++
    setRipples(r => [...r, { id, x: e.clientX - rect.left - s / 2, y: e.clientY - rect.top - s / 2, size: s }])
    setTimeout(() => setRipples(r => r.filter(rip => rip.id !== id)), 600)
    onMouseDown?.(e)
  }, [onMouseDown])

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
    <button className={classes} onMouseDown={handleMouseDown} {...props}>
      {children}
      {ripples.map(({ id, x, y, size: s }) => (
        <span key={id} className={styles.ripple} style={{ left: x, top: y, width: s, height: s }} />
      ))}
    </button>
  )
}
