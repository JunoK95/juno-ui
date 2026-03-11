import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './Slider'
import type { SliderIntent } from './Slider'

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  argTypes: {
    value:     { control: { type: 'range', min: 0, max: 100, step: 1 } },
    size:      { control: 'select', options: ['sm', 'md', 'lg'] },
    intent:    { control: 'select', options: ['default', 'primary', 'danger', 'success', 'warning'] },
    showValue: { control: 'boolean' },
    disabled:  { control: 'boolean' },
  },
  args: {
    value: 40,
    min: 0,
    max: 100,
    step: 1,
    size: 'md',
    intent: 'primary',
    showValue: false,
    disabled: false,
  },
  decorators: [
    (Story) => (
      <div style={{ width: 360, padding: 8 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  render: (args) => {
    const [v, setV] = useState(args.value ?? 40)
    return <Slider {...args} value={v} onChange={setV} />
  },
}

export const WithLabel: Story = {
  render: (args) => {
    const [v, setV] = useState(60)
    return <Slider {...args} value={v} onChange={setV} label="Volume" showValue />
  },
}

export const Sizes: Story = {
  render: (args) => {
    const [v, setV] = useState(55)
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: 360 }}>
        <Slider {...args} size="sm" value={v} onChange={setV} label="Small"  showValue />
        <Slider {...args} size="md" value={v} onChange={setV} label="Medium" showValue />
        <Slider {...args} size="lg" value={v} onChange={setV} label="Large"  showValue />
      </div>
    )
  },
}

export const Intents: Story = {
  render: (args) => {
    const [v, setV] = useState(60)
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: 360 }}>
        {(['default', 'primary', 'danger', 'success', 'warning'] as SliderIntent[]).map(intent => (
          <Slider key={intent} {...args} intent={intent} value={v} onChange={setV}
            label={intent.charAt(0).toUpperCase() + intent.slice(1)} showValue />
        ))}
      </div>
    )
  },
}

export const Disabled: Story = {
  args: { disabled: true, value: 45, label: 'Disabled', showValue: true },
}
