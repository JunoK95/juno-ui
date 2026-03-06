import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'


const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    size:   { control: 'select', options: ['sm', 'md', 'lg'] },
    status: { control: 'select', options: ['online', 'away', 'offline'] },
    name:   { control: 'text' },
    src:    { control: 'text' },
  },
  args: { name: 'Juno Kim', size: 'md' },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {}

export const WithStatus: Story = {
  args: { status: 'online' },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar size="sm" name="Juno Kim" />
      <Avatar size="md" name="Juno Kim" />
      <Avatar size="lg" name="Juno Kim" />
    </div>
  ),
}

export const Statuses: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar name="Alice" status="online" />
      <Avatar name="Bob"   status="away" />
      <Avatar name="Cara"  status="offline" />
    </div>
  ),
}

export const Initials: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px' }}>
      {['Alice Johnson', 'Bob', 'Cara Miles', 'DJ'].map(name => (
        <Avatar key={name} name={name} />
      ))}
    </div>
  ),
}
