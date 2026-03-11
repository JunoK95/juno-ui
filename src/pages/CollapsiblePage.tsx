import { useState } from 'react'
import { Collapsible, Button } from '../index'
import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

export function CollapsiblePage() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <PageHeader title="Collapsible" desc="A single expandable section with an animated reveal." storybook="components-collapsible" />

      <div className={s.section}>
        <p className={s.sectionTitle}>Default</p>
        <div className={s.canvas} style={{ flexDirection: 'column' }}>
          <Collapsible trigger="What is Juno UI?">
            A React component library built with Vite and TypeScript, providing accessible and themeable UI primitives.
          </Collapsible>
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Default open</p>
        <div className={s.canvas} style={{ flexDirection: 'column' }}>
          <Collapsible trigger="How do I install it?" defaultOpen>
            Run <code>npm install juno-ui-library</code> and import the CSS from the dist folder.
          </Collapsible>
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Custom trigger</p>
        <div className={s.canvas} style={{ flexDirection: 'column' }}>
          <Collapsible
            trigger={
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Release notes — v0.2.0
              </span>
            }
          >
            Added Collapsible, Slider, DatePicker, Dropdown, Modal, Accordion, Tooltip, Separator, Spinner, Progress, and Switch components.
          </Collapsible>
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Controlled</p>
        <div className={s.canvas} style={{ flexDirection: 'column', gap: 12 }}>
          <Button size="sm" variant="outline" onClick={() => setOpen(o => !o)}>
            {open ? 'Collapse' : 'Expand'} externally
          </Button>
          <Collapsible trigger="Controlled section" open={open} onOpenChange={setOpen}>
            This panel is controlled by the button above.
          </Collapsible>
        </div>
      </div>
    </>
  )
}
