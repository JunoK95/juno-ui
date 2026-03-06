import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'
import type { BadgeIntent, BadgeVariant } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: { control: 'select', options: ['subtle', 'solid', 'outline'] },
    intent:  { control: 'select', options: ['default', 'primary', 'danger', 'success', 'warning'] },
    children: { control: 'text' },
  },
  args: { children: 'Badge', variant: 'subtle', intent: 'default' },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {}
export const Primary: Story = { args: { intent: 'primary' } }
export const Danger:  Story = { args: { intent: 'danger' } }
export const Success: Story = { args: { intent: 'success' } }
export const Warning: Story = { args: { intent: 'warning' } }

export const Matrix: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {(['subtle', 'solid', 'outline'] as BadgeVariant[]).map(variant => (
        <div key={variant} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span style={{ fontSize: '11px', fontFamily: 'monospace', width: '56px', color: 'var(--color-text-muted)' }}>{variant}</span>
          {(['default', 'primary', 'danger', 'success', 'warning'] as BadgeIntent[]).map(intent => (
            <Badge key={intent} variant={variant} intent={intent}>{intent}</Badge>
          ))}
        </div>
      ))}
    </div>
  ),
}
