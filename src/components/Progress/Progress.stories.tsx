import type { Meta, StoryObj } from '@storybook/react'
import { Progress } from './Progress'
import type { ProgressIntent } from './Progress'

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  argTypes: {
    value:     { control: { type: 'range', min: 0, max: 100, step: 1 } },
    size:      { control: 'select', options: ['sm', 'md', 'lg'] },
    intent:    { control: 'select', options: ['default', 'primary', 'danger', 'success', 'warning'] },
    label:     { control: 'text' },
    showValue: { control: 'boolean' },
  },
  args: {
    value: 60,
    size: 'md',
    intent: 'primary',
    showValue: false,
  },
  decorators: [
    (Story) => (
      <div style={{ width: 360 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Progress>

export const Default: Story = {}

export const WithLabel: Story = { args: { label: 'Uploading…', showValue: true } }

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 360 }}>
      <Progress {...args} size="sm" />
      <Progress {...args} size="md" />
      <Progress {...args} size="lg" />
    </div>
  ),
}

export const Intents: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 360 }}>
      {(['default', 'primary', 'danger', 'success', 'warning'] as ProgressIntent[]).map(intent => (
        <Progress key={intent} {...args} intent={intent} label={intent.charAt(0).toUpperCase() + intent.slice(1)} showValue />
      ))}
    </div>
  ),
}

export const Values: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 360 }}>
      {[0, 25, 50, 75, 100].map(v => (
        <Progress key={v} {...args} value={v} label={`${v}%`} showValue />
      ))}
    </div>
  ),
}
