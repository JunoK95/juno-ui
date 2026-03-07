export type Theme = 'light' | 'dark'
export type Palette = 'default' | 'warm' | 'dim' | 'mono' | 'pastel' | 'vibrant' | 'muted' | 'grayscale'

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
  { label: 'Card',   path: '/ui/card' },
]

export const navFeedback: NavItem[] = [
  { label: 'Alert', path: '/ui/alert' },
  { label: 'Toast', path: '/ui/toast' },
]

export const navTheme: NavItem[] = [
  { label: 'Palette', path: '/ui/palette' },
]

export const navNavigation: NavItem[] = [
  { label: 'Tabs',       path: '/ui/tabs' },
  { label: 'Breadcrumb', path: '/ui/breadcrumb' },
  { label: 'Pagination', path: '/ui/pagination' },
  { label: 'Stepper',    path: '/ui/stepper' },
  { label: 'Drawer',     path: '/ui/drawer' },
]
