import styles from './Avatar.module.scss'

export type AvatarSize = 'sm' | 'md' | 'lg'
export type AvatarStatus = 'online' | 'offline' | 'away'

export interface AvatarProps {
  src?: string
  name?: string
  size?: AvatarSize
  status?: AvatarStatus
  alt?: string
  className?: string
}

function getInitials(name: string): string {
  return name.trim().split(/\s+/).map(n => n[0]).slice(0, 2).join('').toUpperCase()
}

export function Avatar({
  src,
  name,
  size = 'md',
  status,
  alt,
  className,
}: AvatarProps) {
  const classes = [styles.avatar, styles[size], className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      {src ? (
        <img src={src} alt={alt ?? name ?? 'avatar'} className={styles.img} />
      ) : (
        <span className={styles.initials}>{name ? getInitials(name) : '?'}</span>
      )}
      {status && <span className={`${styles.status} ${styles[status]}`} />}
    </div>
  )
}
