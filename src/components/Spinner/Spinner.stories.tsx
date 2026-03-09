import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './Spinner'
import type { SpinnerIntent } from './Spinner'

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    size:   { control: 'select', options: ['sm', 'md', 'lg'] },
    intent: { control: 'select', options: ['default', 'primary', 'danger', 'success', 'warning'] },
  },
  args: {
    size: 'md',
    intent: 'primary',
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = {}

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
      <Spinner {...args} size="sm" />
      <Spinner {...args} size="md" />
      <Spinner {...args} size="lg" />
    </div>
  ),
}

export const Intents: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      {(['default', 'primary', 'danger', 'success', 'warning'] as SpinnerIntent[]).map(intent => (
        <Spinner key={intent} {...args} intent={intent} />
      ))}
    </div>
  ),
}
