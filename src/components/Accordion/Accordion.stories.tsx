import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from './Accordion'
import type { AccordionItem } from './Accordion'

const items: AccordionItem[] = [
  { title: 'What is Juno UI?',        content: 'A React component library built with Vite and TypeScript.' },
  { title: 'How do I install it?',    content: 'Run npm install juno-ui-library in your project.' },
  { title: 'Does it support dark mode?', content: 'Yes — all components use CSS custom properties mapped to light and dark tokens.' },
]

const withDisabled: AccordionItem[] = [
  ...items,
  { title: 'Disabled item', content: 'Never shown.', disabled: true },
]

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    multiple: { control: 'boolean' },
  },
  args: {
    items,
    multiple: false,
  },
  decorators: [
    (Story) => (
      <div style={{ width: 480 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {}

export const Multiple: Story = { args: { multiple: true } }

export const WithDisabled: Story = { args: { items: withDisabled } }
