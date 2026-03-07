import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Pagination } from './Pagination'

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    siblingCount: { control: 'number' },
  },
  args: { page: 1, totalPages: 10, siblingCount: 1, onChange: () => {} },
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {}

export const MiddlePage: Story = { args: { page: 5, totalPages: 20 } }

export const Interactive: Story = {
  render: args => {
    const [page, setPage] = useState(1)
    return <Pagination {...args} page={page} onChange={setPage} />
  },
}

export const FewPages: Story = { args: { page: 2, totalPages: 4 } }
