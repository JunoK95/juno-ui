import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tabs } from './Tabs'

const items = [
  { value: 'overview', label: 'Overview' },
  { value: 'specs', label: 'Specs' },
  { value: 'changelog', label: 'Changelog' },
]

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    variant: { control: 'select', options: ['underline', 'pill'] },
  },
  args: { items, value: 'overview', variant: 'underline', onChange: () => {} },
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {}
export const Pill: Story = { args: { variant: 'pill' } }

export const Interactive: Story = {
  render: args => {
    const [value, setValue] = useState('overview')
    return <Tabs {...args} value={value} onChange={setValue} />
  },
}
