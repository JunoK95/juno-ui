import { Dropdown, Button } from '../index'
import type { DropdownItem } from '../index'
import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

const basicItems: DropdownItem[] = [
  { label: 'Edit',    shortcut: '⌘E' },
  { label: 'Duplicate' },
  { type: 'divider' },
  { label: 'Archive', disabled: true },
  { label: 'Delete',  shortcut: '⌫' },
]

const groupedItems: DropdownItem[] = [
  { type: 'label', label: 'Actions' },
  { label: 'New file',   shortcut: '⌘N' },
  { label: 'Open',       shortcut: '⌘O' },
  { type: 'divider' },
  { type: 'label', label: 'Danger zone' },
  { label: 'Delete all' },
]

export function DropdownPage() {
  return (
    <>
      <PageHeader title="Dropdown" desc="A contextual menu triggered by a button click." storybook="components-dropdown" />

      <div className={s.section}>
        <p className={s.sectionTitle}>Basic</p>
        <div className={s.canvas} style={{ gap: 16, paddingBottom: 120 }}>
          <Dropdown
            trigger={<Button size="sm" variant="outline">Options ▾</Button>}
            items={basicItems}
          />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>With groups and labels</p>
        <div className={s.canvas} style={{ gap: 16, paddingBottom: 160 }}>
          <Dropdown
            trigger={<Button size="sm" intent="primary">File ▾</Button>}
            items={groupedItems}
          />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Align end</p>
        <div className={s.canvas} style={{ justifyContent: 'flex-end', paddingBottom: 120 }}>
          <Dropdown
            align="end"
            trigger={<Button size="sm" variant="outline">More ▾</Button>}
            items={basicItems}
          />
        </div>
      </div>
    </>
  )
}
