import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'
import type { AlertIntent } from './Alert'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    intent: { control: 'select', options: ['default', 'primary', 'danger', 'success', 'warning'] },
    title:  { control: 'text' },
  },
  args: { intent: 'default', title: 'Heads up', children: 'You can change your settings in the account page.' },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {}
export const Primary: Story = { args: { intent: 'primary', title: 'Info', children: 'Your plan renews in 3 days.' } }
export const Danger:  Story = { args: { intent: 'danger',  title: 'Error',   children: 'Failed to save changes.' } }
export const Success: Story = { args: { intent: 'success', title: 'Success', children: 'Changes saved successfully.' } }
export const Warning: Story = { args: { intent: 'warning', title: 'Warning', children: 'Approaching storage limit.' } }

export const Dismissible: Story = {
  args: { onDismiss: () => {} },
}

export const WithoutTitle: Story = {
  args: { title: undefined, children: 'Something happened that you should know about.' },
}

export const AllIntents: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '480px' }}>
      {(['default', 'primary', 'danger', 'success', 'warning'] as AlertIntent[]).map(intent => (
        <Alert key={intent} intent={intent} title={intent.charAt(0).toUpperCase() + intent.slice(1)}>
          This is a {intent} alert message.
        </Alert>
      ))}
    </div>
  ),
}
