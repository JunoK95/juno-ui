import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    size:  { control: 'select', options: ['sm', 'md', 'lg'] },
    title: { control: 'text' },
  },
  args: {
    open: true,
    title: 'Modal title',
    size: 'md',
    onClose: () => {},
    children: 'Modal body content goes here. Press Esc or click the backdrop to close.',
  },
}

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {}

export const Small: Story = { args: { size: 'sm' } }
export const Large: Story = { args: { size: 'lg' } }

export const WithFooter: Story = {
  args: {
    footer: (
      <div style={{ display: 'flex', gap: 8 }}>
        <button style={{ padding: '6px 14px', borderRadius: 6, border: '1px solid #ccc', cursor: 'pointer' }}>
          Cancel
        </button>
        <button style={{ padding: '6px 14px', borderRadius: 6, border: 'none', background: '#2563eb', color: '#fff', cursor: 'pointer' }}>
          Confirm
        </button>
      </div>
    ),
  },
}

export const NoTitle: Story = {
  args: { title: undefined },
}

export const Interactive: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <button
          onClick={() => setOpen(true)}
          style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #ccc', cursor: 'pointer' }}
        >
          Open Modal
        </button>
        <Modal {...args} open={open} onClose={() => setOpen(false)} />
      </>
    )
  },
}
