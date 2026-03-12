import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const SearchIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6.5" cy="6.5" r="4.5" />
    <line x1="10.5" y1="10.5" x2="14" y2="14" />
  </svg>
)

const EyeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z" />
    <circle cx="8" cy="8" r="2" />
  </svg>
)


const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    size:     { control: 'select', options: ['sm', 'md', 'lg'] },
    intent:   { control: 'select', options: ['default', 'danger', 'success', 'warning'] },
    label:    { control: 'text' },
    hint:     { control: 'text' },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    iconLeft:  { control: false },
    iconRight: { control: false },
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

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '280px' }}>
      <Input iconLeft={<SearchIcon />} placeholder="Search…" />
      <Input iconRight={<EyeIcon />} placeholder="Password" type="password" label="Password" />
      <Input iconLeft={<SearchIcon />} iconRight={<EyeIcon />} placeholder="Both sides…" />
    </div>
  ),
}

const XIcon = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="3" x2="13" y2="13" />
    <line x1="13" y1="3" x2="3" y2="13" />
  </svg>
)

const EyeOffIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 2l12 12M6.5 6.6A2 2 0 0 0 9.4 9.5M4.2 4.3C2.8 5.3 1.7 6.8 1 8c1.4 2.5 4 5 7 5 1.3 0 2.5-.4 3.5-1M7 3.1C7.3 3 7.7 3 8 3c3 0 5.6 2.5 7 5-.4.8-1 1.6-1.7 2.2" />
  </svg>
)

export const ClickableIcons: Story = {
  render: () => {
    const [showPw, setShowPw] = useState(false)
    const [value, setValue] = useState('')
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '280px' }}>
        <Input
          iconLeft={<SearchIcon />}
          iconRight={value ? <XIcon /> : undefined}
          onClickIconRight={value ? () => setValue('') : undefined}
          placeholder="Search — click ✕ to clear"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <Input
          type={showPw ? 'text' : 'password'}
          label="Password"
          placeholder="Toggle visibility"
          iconRight={showPw ? <EyeOffIcon /> : <EyeIcon />}
          onClickIconRight={() => setShowPw(v => !v)}
        />
      </div>
    )
  },
}
