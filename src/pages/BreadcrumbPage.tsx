import { Breadcrumb } from '../index'
import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

export function BreadcrumbPage() {
  return (
    <>
      <PageHeader
        title="Breadcrumb"
        desc="Shows the user's current location in a hierarchy."
        storybook="components-breadcrumb"
      />

      <div className={s.section}>
        <p className={s.sectionTitle}>Default</p>
        <div className={s.canvas}>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Components', href: '/components' },
              { label: 'Breadcrumb' },
            ]}
          />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Custom separator</p>
        <div className={s.canvas}>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Settings', href: '/settings' },
              { label: 'Profile' },
            ]}
            separator="›"
          />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Deep hierarchy</p>
        <div className={s.canvas}>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Docs', href: '/docs' },
              { label: 'Components', href: '/docs/components' },
              { label: 'Navigation', href: '/docs/components/navigation' },
              { label: 'Breadcrumb' },
            ]}
          />
        </div>
      </div>
    </>
  )
}
