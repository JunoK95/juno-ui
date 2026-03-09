import styles from './Separator.module.scss'

export interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical'
  label?: string
  className?: string
}

export function Separator({ orientation = 'horizontal', label, className }: SeparatorProps) {
  const cls = [
    styles.separator,
    orientation === 'vertical' ? styles.vertical : styles.horizontal,
    label ? styles.withLabel : '',
    className,
  ].filter(Boolean).join(' ')

  if (label) {
    return (
      <div className={cls} role="separator" aria-label={label}>
        <span className={styles.label}>{label}</span>
      </div>
    )
  }

  return <hr className={cls} role="separator" />
}
