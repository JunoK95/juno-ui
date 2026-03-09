import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from './Dropdown'
import type { DropdownItem } from './Dropdown'

const items: DropdownItem[] = [
  { label: 'Edit',      shortcut: '⌘E' },
  { label: 'Duplicate' },
  { type: 'divider' },
  { label: 'Archive',   disabled: true },
  { label: 'Delete',    shortcut: '⌫' },
]

const grouped: DropdownItem[] = [
  { type: 'label', label: 'Actions' },
  { label: 'New file',  shortcut: '⌘N' },
  { label: 'Open',      shortcut: '⌘O' },
  { type: 'divider' },
  { type: 'label', label: 'Danger zone' },
  { label: 'Delete all' },
]

const triggerButton = (
  <button style={{ padding: '6px 14px', borderRadius: 6, border: '1px solid #ccc', cursor: 'pointer' }}>
    Options ▾
  </button>
)

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    align: { control: 'select', options: ['start', 'end'] },
  },
  args: {
    trigger: triggerButton,
    items,
    align: 'start',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 20, paddingBottom: 180 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Dropdown>

export const Default: Story = {}

export const AlignEnd: Story = {
  args: { align: 'end' },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: 20, paddingBottom: 180 }}>
        <Story />
      </div>
    ),
  ],
}

export const WithGroups: Story = { args: { items: grouped } }
