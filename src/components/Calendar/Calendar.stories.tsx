import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Calendar } from './Calendar'
import type { CalendarRange } from './Calendar'

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  argTypes: {
    mode: { control: 'select', options: ['single', 'range'] },
  },
}

export default meta
type Story = StoryObj<typeof Calendar>

export const Default: Story = {}

export const WithValue: Story = {
  args: { value: new Date() },
}

export const MinMax: Story = {
  args: {
    value: new Date(),
    min: new Date(new Date().setDate(new Date().getDate() - 7)),
    max: new Date(new Date().setDate(new Date().getDate() + 7)),
  },
}

export const Controlled: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(null)
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Calendar value={date} onChange={setDate} />
        <p style={{ margin: 0, fontSize: 13, color: 'var(--color-text-secondary)', fontFamily: 'ui-monospace, monospace' }}>
          {date ? date.toDateString() : 'No date selected'}
        </p>
      </div>
    )
  },
}

export const Range: Story = {
  render: () => {
    const [range, setRange] = useState<CalendarRange>({ from: null, to: null })
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Calendar mode="range" rangeValue={range} onRangeChange={setRange} />
        <p style={{ margin: 0, fontSize: 13, color: 'var(--color-text-secondary)', fontFamily: 'ui-monospace, monospace' }}>
          {range.from ? range.from.toDateString() : '—'} → {range.to ? range.to.toDateString() : '—'}
        </p>
      </div>
    )
  },
}

export const RangeWithDefault: Story = {
  render: () => {
    const from = new Date()
    const to   = new Date(from.getFullYear(), from.getMonth(), from.getDate() + 6)
    const [range, setRange] = useState<CalendarRange>({ from, to })
    return (
      <Calendar mode="range" rangeValue={range} onRangeChange={setRange} />
    )
  },
}
