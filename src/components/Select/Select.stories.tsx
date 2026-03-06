import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'


const options = [
  { value: 'admin', label: 'Admin' },
  { value: 'editor', label: 'Editor' },
  { value: 'viewer', label: 'Viewer' },
]

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    size:     { control: 'select', options: ['sm', 'md', 'lg'] },
    intent:   { control: 'select', options: ['default', 'danger', 'success', 'warning'] },
    label:    { control: 'text' },
    hint:     { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: { options, placeholder: 'Select a role…', size: 'md', intent: 'default', disabled: false },
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {}

export const WithLabel: Story = {
  args: { label: 'Role' },
}

export const Danger: Story = {
  args: { label: 'Role', intent: 'danger', hint: 'Please select a valid role.' },
}

export const Success: Story = {
  args: { label: 'Role', intent: 'success', hint: 'Great choice!' },
}

export const Disabled: Story = {
  args: { label: 'Role', disabled: true },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '220px' }}>
      <Select size="sm" options={options} placeholder="Small" />
      <Select size="md" options={options} placeholder="Medium" />
      <Select size="lg" options={options} placeholder="Large" />
    </div>
  ),
}
