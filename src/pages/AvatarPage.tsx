import { Avatar } from '../index'
import type { AvatarStatus } from '../index'
import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

const statuses: AvatarStatus[] = ['online', 'away', 'offline']

export function AvatarPage() {
  return (
    <>
      <PageHeader title="Avatar" desc="Represents a user with an image or initials." storybook="components-avatar" />

      <div className={s.section}>
        <p className={s.sectionTitle}>Sizes</p>
        <div className={s.canvas} style={{ alignItems: 'center', gap: '16px' }}>
          <Avatar size="sm" name="Juno Kim" />
          <Avatar size="md" name="Juno Kim" />
          <Avatar size="lg" name="Juno Kim" />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Initials</p>
        <div className={s.canvas} style={{ gap: '12px' }}>
          <Avatar name="Alice Johnson" />
          <Avatar name="Bob" />
          <Avatar name="Cara Miles" />
          <Avatar name="DJ" />
          <Avatar />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Status</p>
        <div className={s.canvas} style={{ gap: '20px' }}>
          {statuses.map(status => (
            <div key={status} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <Avatar name="Juno Kim" status={status} />
              <span className={s.canvasLabel} style={{ minWidth: 'auto' }}>{status}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
