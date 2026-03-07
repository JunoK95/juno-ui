import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardHeader, CardBody, CardFooter } from './Card'
import type { CardColor, CardVariant } from './Card'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    variant: { control: 'select', options: ['elevated', 'outline', 'subtle', 'flat'] },
    color:   { control: 'select', options: ['default', 'primary', 'danger', 'success', 'warning'] },
  },
  args: { variant: 'elevated', color: 'default' },
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: args => (
    <Card {...args} style={{ maxWidth: 360 }}>
      <CardHeader>Card Title</CardHeader>
      <CardBody>This is the card body. Add any content here.</CardBody>
      <CardFooter>Footer action</CardFooter>
    </Card>
  ),
}

export const ColorMatrix: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {(['elevated', 'outline', 'subtle', 'flat'] as CardVariant[]).map(variant => (
        <div key={variant} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '11px', fontFamily: 'monospace', width: '72px', color: 'var(--color-text-muted)', paddingTop: 14, flexShrink: 0 }}>
            {variant}
          </span>
          {(['default', 'primary', 'danger', 'success', 'warning'] as CardColor[]).map(color => (
            <Card key={color} variant={variant} color={color} style={{ minWidth: 120 }}>
              <CardBody>{color}</CardBody>
            </Card>
          ))}
        </div>
      ))}
    </div>
  ),
}

export const Flat: Story = {
  args: { variant: 'flat' },
  render: args => (
    <Card {...args} style={{ maxWidth: 360 }}>
      <CardHeader>Flat Card</CardHeader>
      <CardBody>No border or shadow — useful inside already-bordered containers.</CardBody>
    </Card>
  ),
}

export const Colored: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      {(['primary', 'danger', 'success', 'warning'] as CardColor[]).map(color => (
        <Card key={color} color={color} style={{ minWidth: 180, flex: '1 1 160px' }}>
          <CardHeader>{color}</CardHeader>
          <CardBody>Status card content.</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      ))}
    </div>
  ),
}
