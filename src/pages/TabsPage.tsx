import { useState } from 'react'
import { Tabs } from '../index'
import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

const items = [
  { value: 'overview', label: 'Overview' },
  { value: 'specs', label: 'Specs' },
  { value: 'changelog', label: 'Changelog' },
]

export function TabsPage() {
  const [tab1, setTab1] = useState('overview')
  const [tab2, setTab2] = useState('overview')

  return (
    <>
      <PageHeader title="Tabs" desc="Organizes content into switchable panels." storybook="components-tabs" />

      <div className={s.section}>
        <p className={s.sectionTitle}>Underline (default)</p>
        <div className={s.canvas}>
          <Tabs items={items} value={tab1} onChange={setTab1} />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Pill</p>
        <div className={s.canvas}>
          <Tabs items={items} value={tab2} onChange={setTab2} variant="pill" />
        </div>
      </div>
    </>
  )
}
