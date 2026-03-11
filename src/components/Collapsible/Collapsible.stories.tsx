import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Collapsible } from './Collapsible'

const meta: Meta<typeof Collapsible> = {
  title: 'Components/Collapsible',
  component: Collapsible,
  argTypes: {
    defaultOpen: { control: 'boolean' },
  },
  args: {
    trigger:  'Click to expand',
    children: 'Hidden content revealed when expanded. Any React node can go here.',
    defaultOpen: false,
  },
  decorators: [
    (Story) => (
      <div style={{ width: 480 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Collapsible>

export const Default: Story = {}

export const DefaultOpen: Story = { args: { defaultOpen: true } }

export const CustomTrigger: Story = {
  args: {
    trigger: (
      <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        Details
      </span>
    ),
    children: 'Additional details are shown here after expanding.',
  },
}

export const Controlled: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <button
          onClick={() => setOpen(o => !o)}
          style={{ alignSelf: 'flex-start', padding: '6px 14px', borderRadius: 6, border: '1px solid #ccc', cursor: 'pointer' }}
        >
          {open ? 'Collapse' : 'Expand'} externally
        </button>
        <Collapsible {...args} open={open} onOpenChange={setOpen} />
      </div>
    )
  },
}
