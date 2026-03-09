import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from './Tooltip'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    side:    { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    content: { control: 'text' },
  },
  args: {
    content: 'Tooltip text',
    side: 'top',
    children: 'Hover me',
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 60 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {}

export const Sides: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 40, padding: 40 }}>
      {(['top', 'bottom', 'left', 'right'] as const).map(side => (
        <Tooltip key={side} {...args} side={side} content={`${side.charAt(0).toUpperCase() + side.slice(1)} tooltip`}>
          <button style={{ padding: '6px 12px', cursor: 'default', borderRadius: 6, border: '1px solid #ccc' }}>
            {side}
          </button>
        </Tooltip>
      ))}
    </div>
  ),
}

export const Top:    Story = { args: { side: 'top' } }
export const Bottom: Story = { args: { side: 'bottom' } }
export const Left:   Story = { args: { side: 'left' } }
export const Right:  Story = { args: { side: 'right' } }
