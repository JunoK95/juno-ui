import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Drawer } from './Drawer'

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  argTypes: {
    position: { control: 'select', options: ['left', 'right'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
  args: {
    open: true,
    title: 'Drawer Title',
    position: 'right',
    size: 'md',
    onClose: () => {},
    children: 'Drawer content goes here.',
  },
}

export default meta
type Story = StoryObj<typeof Drawer>

export const Default: Story = {}
export const Left: Story = { args: { position: 'left' } }
export const Small: Story = { args: { size: 'sm' } }
export const Large: Story = { args: { size: 'lg' } }

export const Interactive: Story = {
  render: args => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <button onClick={() => setOpen(true)} style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Open Drawer
        </button>
        <Drawer {...args} open={open} onClose={() => setOpen(false)} />
      </>
    )
  },
}
