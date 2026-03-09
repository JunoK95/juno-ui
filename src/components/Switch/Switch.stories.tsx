import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from './Switch'
import type { SwitchIntent } from './Switch'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    size:     { control: 'select', options: ['sm', 'md', 'lg'] },
    intent:   { control: 'select', options: ['default', 'primary', 'danger', 'success', 'warning'] },
    label:    { control: 'text' },
    disabled: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
  },
  args: {
    label: 'Enable feature',
    size: 'md',
    intent: 'primary',
    disabled: false,
    defaultChecked: false,
  },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {}

export const Checked: Story = { args: { defaultChecked: true } }

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
      <Switch {...args} size="sm" label="Small"  defaultChecked />
      <Switch {...args} size="md" label="Medium" defaultChecked />
      <Switch {...args} size="lg" label="Large"  defaultChecked />
    </div>
  ),
}

export const Intents: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {(['default', 'primary', 'danger', 'success', 'warning'] as SwitchIntent[]).map(intent => (
        <Switch key={intent} {...args} intent={intent} label={intent.charAt(0).toUpperCase() + intent.slice(1)} defaultChecked />
      ))}
    </div>
  ),
}

export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
      <Switch {...args} label="Off" />
      <Switch {...args} label="On" defaultChecked />
      <Switch {...args} label="Disabled off" disabled />
      <Switch {...args} label="Disabled on"  disabled defaultChecked />
    </div>
  ),
}
