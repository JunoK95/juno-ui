import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import type { InputIntent, InputSize } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    size:     { control: 'select', options: ['sm', 'md', 'lg'] satisfies InputSize[] },
    intent:   { control: 'select', options: ['default', 'danger', 'success', 'warning'] satisfies InputIntent[] },
    label:    { control: 'text' },
    hint:     { control: 'text' },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
  args: {
    placeholder: 'Placeholder…',
    size: 'md',
    intent: 'default',
    disabled: false,
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {}

export const WithLabel: Story = {
  args: { label: 'Email address', placeholder: 'you@example.com' },
}

export const WithHint: Story = {
  args: { label: 'Username', hint: 'Must be 3–20 characters.', placeholder: 'juno' },
}

export const Danger: Story = {
  args: { label: 'Email address', intent: 'danger', hint: 'That email is already in use.', placeholder: 'you@example.com' },
}

export const Success: Story = {
  args: { label: 'Username', intent: 'success', hint: 'Username is available!', placeholder: 'juno' },
}

export const Warning: Story = {
  args: { label: 'Password', intent: 'warning', hint: 'Your password is weak.', placeholder: '••••••••' },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '280px' }}>
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </div>
  ),
}

export const Intents: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '280px' }}>
      <Input intent="default" label="Default" placeholder="Enter value…" />
      <Input intent="danger"  label="Danger"  hint="Something went wrong." placeholder="Enter value…" />
      <Input intent="success" label="Success" hint="Looks good!" placeholder="Enter value…" />
      <Input intent="warning" label="Warning" hint="Double-check this value." placeholder="Enter value…" />
    </div>
  ),
}

export const Disabled: Story = {
  args: { label: 'Email address', disabled: true, placeholder: 'you@example.com' },
}
