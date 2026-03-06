import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input } from '../Input'

describe('Input', () => {
  it('renders an input element', () => {
    render(<Input placeholder="Enter text" />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('renders label and associates it with the input', () => {
    render(<Input label="Email address" />)
    const input = screen.getByLabelText('Email address')
    expect(input).toBeInTheDocument()
    expect(input.tagName).toBe('INPUT')
  })

  it('renders hint text', () => {
    render(<Input hint="Must be 3–20 characters" />)
    expect(screen.getByText('Must be 3–20 characters')).toBeInTheDocument()
  })

  it('is disabled when disabled prop is set', () => {
    render(<Input disabled />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  it('accepts typed text', async () => {
    const user = userEvent.setup()
    render(<Input />)
    const input = screen.getByRole('textbox')
    await user.type(input, 'hello')
    expect(input).toHaveValue('hello')
  })

  it('calls onChange when value changes', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    render(<Input onChange={onChange} />)
    await user.type(screen.getByRole('textbox'), 'a')
    expect(onChange).toHaveBeenCalled()
  })

  it('forwards extra props to input element', () => {
    render(<Input data-testid="my-input" />)
    expect(screen.getByTestId('my-input')).toBeInTheDocument()
  })
})
