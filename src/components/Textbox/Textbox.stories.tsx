import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Textbox } from './Textbox'

const meta: Meta<typeof Textbox> = {
  title: 'Components/Textbox',
  component: Textbox,
  argTypes: {
    size:     { control: 'select', options: ['sm', 'md', 'lg'] },
    intent:   { control: 'select', options: ['default', 'danger', 'success', 'warning'] },
    resize:   { control: 'select', options: ['none', 'vertical', 'horizontal', 'both'] },
    label:    { control: 'text' },
    hint:     { control: 'text' },
    rows:     { control: 'number' },
    disabled: { control: 'boolean' },
    showCount: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
  args: {
    placeholder: 'Write something…',
    size: 'md',
    intent: 'default',
    rows: 3,
    resize: 'vertical',
    disabled: false,
    showCount: false,
  },
}

export default meta
type Story = StoryObj<typeof Textbox>

export const Default: Story = {}

export const WithLabel: Story = {
  args: { label: 'Message', placeholder: 'Enter your message…' },
}

export const WithHint: Story = {
  args: { label: 'Bio', hint: 'Max 200 characters.', placeholder: 'Tell us about yourself…' },
}

export const WithCount: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <Textbox
        label="Bio"
        placeholder="Tell us about yourself…"
        maxLength={200}
        showCount
        value={value}
        onChange={e => setValue(e.target.value)}
        style={{ width: '320px' }}
      />
    )
  },
}

export const Danger: Story = {
  args: { label: 'Description', intent: 'danger', hint: 'Description is required.', placeholder: 'Enter description…' },
}

export const Success: Story = {
  args: { label: 'Notes', intent: 'success', hint: 'Saved successfully.', placeholder: 'Add notes…' },
}

export const Warning: Story = {
  args: { label: 'Comments', intent: 'warning', hint: 'Please review before submitting.', placeholder: 'Add comments…' },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '320px' }}>
      <Textbox size="sm" placeholder="Small" rows={2} />
      <Textbox size="md" placeholder="Medium" rows={2} />
      <Textbox size="lg" placeholder="Large" rows={2} />
    </div>
  ),
}

export const Intents: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '320px' }}>
      <Textbox intent="default" label="Default"  hint="Helper text goes here."   placeholder="Write something…" />
      <Textbox intent="danger"  label="Danger"   hint="This field has an error."  placeholder="Write something…" />
      <Textbox intent="success" label="Success"  hint="Looks good!"               placeholder="Write something…" />
      <Textbox intent="warning" label="Warning"  hint="Double-check this value."  placeholder="Write something…" />
    </div>
  ),
}

export const Disabled: Story = {
  args: { label: 'Notes', disabled: true, value: 'This field is disabled.', resize: 'none' },
}
