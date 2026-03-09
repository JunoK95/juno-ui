import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { DatePicker } from './DatePicker'

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  argTypes: {
    mode:     { control: 'select', options: ['date', 'datetime'] },
    size:     { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
  },
  args: {
    mode:     'date',
    size:     'md',
    disabled: false,
    placeholder: 'Select date…',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 20, paddingBottom: 340 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof DatePicker>

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState<Date | null>(null)
    return <DatePicker {...args} value={value} onChange={setValue} />
  },
}

export const WithValue: Story = {
  render: (args) => {
    const [value, setValue] = useState<Date | null>(new Date(2026, 2, 9))
    return <DatePicker {...args} value={value} onChange={setValue} />
  },
}

export const DateTime: Story = {
  args: { mode: 'datetime' },
  render: (args) => {
    const [value, setValue] = useState<Date | null>(null)
    return <DatePicker {...args} value={value} onChange={setValue} />
  },
}

export const WithLabel: Story = {
  render: (args) => {
    const [value, setValue] = useState<Date | null>(null)
    return <DatePicker {...args} value={value} onChange={setValue} label="Due date" />
  },
}

export const Sizes: Story = {
  render: (args) => {
    const [v1, setV1] = useState<Date | null>(new Date())
    const [v2, setV2] = useState<Date | null>(new Date())
    const [v3, setV3] = useState<Date | null>(new Date())
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <DatePicker {...args} size="sm" value={v1} onChange={setV1} label="Small" />
        <DatePicker {...args} size="md" value={v2} onChange={setV2} label="Medium" />
        <DatePicker {...args} size="lg" value={v3} onChange={setV3} label="Large" />
      </div>
    )
  },
}

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => <DatePicker {...args} value={new Date(2026, 2, 9)} onChange={() => {}} />,
}

export const WithMinMax: Story = {
  render: (args) => {
    const [value, setValue] = useState<Date | null>(null)
    const min = new Date(); min.setDate(min.getDate() - 3)
    const max = new Date(); max.setDate(max.getDate() + 10)
    return <DatePicker {...args} value={value} onChange={setValue} min={min} max={max} placeholder="Only ±10 days…" />
  },
}
