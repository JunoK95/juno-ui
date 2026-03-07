import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import styles from './Drawer.module.scss'

export type DrawerPosition = 'left' | 'right'
export type DrawerSize = 'sm' | 'md' | 'lg'

export interface DrawerProps {
  open: boolean
  onClose: () => void
  title?: string
  children?: ReactNode
  position?: DrawerPosition
  size?: DrawerSize
}

export function Drawer({
  open,
  onClose,
  title,
  children,
  position = 'right',
  size = 'md',
}: DrawerProps) {
  return createPortal(
    <div
      className={[styles.overlay, open ? styles.overlayVisible : ''].filter(Boolean).join(' ')}
      onClick={onClose}
    >
      <div
        className={[styles.drawer, styles[position], styles[size], open ? styles.open : ''].filter(Boolean).join(' ')}
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        {title && (
          <div className={styles.header}>
            <p className={styles.title}>{title}</p>
            <button className={styles.close} onClick={onClose} aria-label="Close">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M1 1l12 12M13 1L1 13"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        )}
        <div className={styles.body}>{children}</div>
      </div>
    </div>,
    document.body
  )
}
