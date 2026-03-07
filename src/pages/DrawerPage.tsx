import { useState } from 'react'
import { Button, Drawer } from '../index'
import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

export function DrawerPage() {
  const [rightOpen, setRightOpen] = useState(false)
  const [leftOpen, setLeftOpen] = useState(false)
  const [smOpen, setSmOpen] = useState(false)

  return (
    <>
      <PageHeader
        title="Drawer"
        desc="A slide-in panel that overlays content from the side."
        storybook="components-drawer"
      />

      <div className={s.section}>
        <p className={s.sectionTitle}>Right (default)</p>
        <div className={s.canvas}>
          <Button onClick={() => setRightOpen(true)}>Open Drawer</Button>
          <Drawer open={rightOpen} onClose={() => setRightOpen(false)} title="Drawer Title">
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>
              Drawer content goes here. You can put any content inside — forms, lists, detail panels, and more.
            </p>
          </Drawer>
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Left</p>
        <div className={s.canvas}>
          <Button onClick={() => setLeftOpen(true)}>Open Left Drawer</Button>
          <Drawer open={leftOpen} onClose={() => setLeftOpen(false)} title="Left Drawer" position="left">
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>
              This drawer slides in from the left.
            </p>
          </Drawer>
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Small size</p>
        <div className={s.canvas}>
          <Button onClick={() => setSmOpen(true)}>Open Small Drawer</Button>
          <Drawer open={smOpen} onClose={() => setSmOpen(false)} title="Small Drawer" size="sm">
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>
              280px wide — great for quick actions.
            </p>
          </Drawer>
        </div>
      </div>
    </>
  )
}
