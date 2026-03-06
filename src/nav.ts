export type Theme = 'light' | 'dark'

export interface NavItem {
  label: string
  path: string | null
}

export const navInputs: NavItem[] = [
  { label: 'Button',   path: '/ui/button' },
  { label: 'Input',    path: '/ui/input' },
  { label: 'Select',   path: '/ui/select' },
  { label: 'Checkbox', path: '/ui/checkbox' },
]

export const navDisplay: NavItem[] = [
  { label: 'Badge',  path: '/ui/badge' },
  { label: 'Avatar', path: '/ui/avatar' },
  { label: 'Tag',    path: '/ui/tag' },
]

export const navFeedback: NavItem[] = [
  { label: 'Alert', path: '/ui/alert' },
  { label: 'Toast', path: '/ui/toast' },
]
