import type { Meta, StoryObj } from '@storybook/react'
import { Separator } from './Separator'

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    label:       { control: 'text' },
  },
  args: {
    orientation: 'horizontal',
  },
}

export default meta
type Story = StoryObj<typeof Separator>

export const Default: Story = {}

export const WithLabel: Story = { args: { label: 'OR' } }

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'stretch', gap: 16, height: 48 }}>
      <span style={{ fontSize: 13 }}>Left</span>
      <Separator {...args} />
      <span style={{ fontSize: 13 }}>Center</span>
      <Separator {...args} />
      <span style={{ fontSize: 13 }}>Right</span>
    </div>
  ),
}

export const LabelVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: 400 }}>
      <Separator label="OR" />
      <Separator label="Section title" />
      <Separator label="Continue" />
    </div>
  ),
}
