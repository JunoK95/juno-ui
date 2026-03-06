import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'


const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    size:     { control: 'select', options: ['sm', 'md', 'lg'] },
    intent:   { control: 'select', options: ['default', 'primary', 'danger', 'success', 'warning'] },
    label:    { control: 'text' },
    hint:     { control: 'text' },
    disabled: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
  },
  args: { label: 'Accept terms', size: 'md', intent: 'default', disabled: false },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {}

export const Checked: Story = {
  args: { defaultChecked: true },
}

export const WithHint: Story = {
  args: { label: 'Send me updates', hint: "We'll email you about new features.", defaultChecked: true },
}

export const Primary: Story = {
  args: { intent: 'primary', defaultChecked: true },
}

export const Danger: Story = {
  args: { label: 'Delete my account', intent: 'danger', hint: 'This cannot be undone.' },
}

export const Disabled: Story = {
  args: { disabled: true, defaultChecked: true },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Checkbox size="sm" label="Small" defaultChecked />
      <Checkbox size="md" label="Medium" defaultChecked />
      <Checkbox size="lg" label="Large" defaultChecked />
    </div>
  ),
}
