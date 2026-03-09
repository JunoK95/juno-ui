import { useState } from 'react'
import { Modal, Button } from '../index'
import type { ModalSize } from '../index'
import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

const sizes: ModalSize[] = ['sm', 'md', 'lg']

export function ModalPage() {
  const [openSize, setOpenSize] = useState<ModalSize | null>(null)
  const [openNoTitle, setOpenNoTitle] = useState(false)

  return (
    <>
      <PageHeader title="Modal" desc="A dialog overlay for focused interactions." storybook="components-modal" />

      <div className={s.section}>
        <p className={s.sectionTitle}>Sizes</p>
        <div className={s.canvas} style={{ gap: 12 }}>
          {sizes.map(size => (
            <Button key={size} size="sm" variant="outline" onClick={() => setOpenSize(size)}>
              Open {size}
            </Button>
          ))}
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Without title</p>
        <div className={s.canvas}>
          <Button size="sm" variant="outline" onClick={() => setOpenNoTitle(true)}>
            Open modal
          </Button>
        </div>
      </div>

      {sizes.map(size => (
        <Modal
          key={size}
          open={openSize === size}
          onClose={() => setOpenSize(null)}
          title={`${size.toUpperCase()} Modal`}
          size={size}
          footer={
            <>
              <Button size="sm" variant="ghost" onClick={() => setOpenSize(null)}>Cancel</Button>
              <Button size="sm" intent="primary" onClick={() => setOpenSize(null)}>Confirm</Button>
            </>
          }
        >
          This is the {size} modal. Press <kbd>Esc</kbd> or click the backdrop to close it.
        </Modal>
      ))}

      <Modal
        open={openNoTitle}
        onClose={() => setOpenNoTitle(false)}
        footer={<Button size="sm" intent="primary" onClick={() => setOpenNoTitle(false)}>Got it</Button>}
      >
        <p style={{ margin: 0 }}>A modal without a title header. The body fills the full dialog area.</p>
      </Modal>
    </>
  )
}
