export type Theme = 'light' | 'dark'

export interface NavItem {
  label: string
  path: string | null
}

export const navInputs: NavItem[] = [
  { label: 'Button',   path: '/ui/button' },
  { label: 'Input',    path: '/ui/input' },
  { label: 'Select',   path: null },
  { label: 'Checkbox', path: null },
]

export const navDisplay: NavItem[] = [
  { label: 'Badge',  path: null },
  { label: 'Avatar', path: null },
  { label: 'Tag',    path: null },
]

export const navFeedback: NavItem[] = [
  { label: 'Alert', path: null },
  { label: 'Toast', path: null },
]
