import type { Meta, StoryObj } from '@storybook/react'
import { Toast } from './Toast'
import type { ToastIntent } from './Toast'

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    intent:      { control: 'select', options: ['default', 'primary', 'danger', 'success', 'warning'] },
    title:       { control: 'text' },
    description: { control: 'text' },
  },
  args: { intent: 'default', title: 'Notification', description: 'You have a new message.' },
}

export default meta
type Story = StoryObj<typeof Toast>

export const Default: Story = {}
export const Primary: Story = { args: { intent: 'primary', title: 'Update available', description: 'Version 2.0 is ready to install.' } }
export const Danger:  Story = { args: { intent: 'danger',  title: 'Upload failed',    description: 'The file exceeds the 10 MB limit.' } }
export const Success: Story = { args: { intent: 'success', title: 'Saved',            description: 'Your changes were saved.' } }
export const Warning: Story = { args: { intent: 'warning', title: 'Low storage',      description: 'You are using 90% of your storage.' } }

export const Dismissible: Story = {
  args: { onDismiss: () => {} },
}

export const TitleOnly: Story = {
  args: { description: undefined, title: 'Changes saved' },
}

export const AllIntents: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {(['default', 'primary', 'danger', 'success', 'warning'] as ToastIntent[]).map(intent => (
        <Toast key={intent} intent={intent} title={intent.charAt(0).toUpperCase() + intent.slice(1)} description={`This is a ${intent} toast.`} onDismiss={() => {}} />
      ))}
    </div>
  ),
}
