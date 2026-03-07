import type { Meta, StoryObj } from '@storybook/react'
import { Stepper } from './Stepper'

const steps = [
  { label: 'Account', description: 'Create your account' },
  { label: 'Profile', description: 'Set up your profile' },
  { label: 'Review', description: 'Confirm details' },
]

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  argTypes: {
    activeStep: { control: { type: 'number', min: 0, max: 3 } },
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
  },
  args: { steps, activeStep: 1, orientation: 'horizontal' },
}

export default meta
type Story = StoryObj<typeof Stepper>

export const Default: Story = {}
export const Vertical: Story = { args: { orientation: 'vertical' } }
export const FirstStep: Story = { args: { activeStep: 0 } }
export const Completed: Story = { args: { activeStep: 3 } }
