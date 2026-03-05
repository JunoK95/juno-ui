import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost'],
    },
    intent: {
      control: 'select',
      options: ['default', 'primary', 'danger', 'success', 'warning'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    children: 'Button',
    variant: 'solid',
    intent: 'default',
    size: 'md',
    disabled: false,
  },
}

export default meta
type Story = StoryObj<typeof Button>

// ─── Variants ────────────────────────────────────────────────────────────────

export const Solid: Story = { args: { variant: 'solid' } }
export const Outline: Story = { args: { variant: 'outline' } }
export const Ghost: Story = { args: { variant: 'ghost' } }

// ─── Intents ─────────────────────────────────────────────────────────────────

export const Default: Story = { args: { intent: 'default' } }
export const Primary: Story = { args: { intent: 'primary' } }
export const Danger: Story = { args: { intent: 'danger' } }
export const Success: Story = { args: { intent: 'success' } }
export const Warning: Story = { args: { intent: 'warning' } }

// ─── Full matrix ──────────────────────────────────────────────────────────────

const intents = ['default', 'primary', 'danger', 'success', 'warning'] as const
const variants = ['solid', 'outline', 'ghost'] as const

export const Matrix: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {variants.map((variant) => (
        <div key={variant} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {intents.map((intent) => (
            <Button key={intent} {...args} variant={variant} intent={intent}>
              {intent}
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
}

// ─── Sizes ───────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
}

// ─── States ───────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {intents.map((intent) => (
        <Button key={intent} {...args} intent={intent} disabled>
          {intent}
        </Button>
      ))}
    </div>
  ),
}
