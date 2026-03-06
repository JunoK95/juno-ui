import type { Meta, StoryObj } from '@storybook/react'
import { Tag } from './Tag'
import type { TagIntent, TagVariant } from './Tag'

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    variant:  { control: 'select', options: ['subtle', 'solid', 'outline'] },
    intent:   { control: 'select', options: ['default', 'primary', 'danger', 'success', 'warning'] },
    children: { control: 'text' },
  },
  args: { children: 'Tag', variant: 'subtle', intent: 'default' },
}

export default meta
type Story = StoryObj<typeof Tag>

export const Default: Story = {}
export const Primary: Story = { args: { intent: 'primary' } }
export const Dismissible: Story = { args: { onRemove: () => {} } }

export const Matrix: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {(['subtle', 'solid', 'outline'] as TagVariant[]).map(variant => (
        <div key={variant} style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          <span style={{ fontSize: '11px', fontFamily: 'monospace', width: '56px', color: 'var(--color-text-muted)' }}>{variant}</span>
          {(['default', 'primary', 'danger', 'success', 'warning'] as TagIntent[]).map(intent => (
            <Tag key={intent} variant={variant} intent={intent}>{intent}</Tag>
          ))}
        </div>
      ))}
    </div>
  ),
}
