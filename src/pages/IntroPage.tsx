import { Link } from 'react-router-dom'
import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

const groups = [
  {
    label: 'Inputs',
    items: [
      { label: 'Button',     sub: 'Actions',      path: '/ui/button' },
      { label: 'Input',      sub: 'Text entry',   path: '/ui/input' },
      { label: 'Select',     sub: 'Dropdowns',    path: '/ui/select' },
      { label: 'Checkbox',   sub: 'Toggles',      path: '/ui/checkbox' },
      { label: 'Switch',     sub: 'Toggles',      path: '/ui/switch' },
      { label: 'Slider',     sub: 'Range',        path: '/ui/slider' },
      { label: 'DatePicker', sub: 'Date & time',  path: '/ui/datepicker' },
      { label: 'Dropdown',   sub: 'Menu',         path: '/ui/dropdown' },
    ],
  },
  {
    label: 'Display',
    items: [
      { label: 'Badge',       sub: 'Labels',     path: '/ui/badge' },
      { label: 'Avatar',      sub: 'Identity',   path: '/ui/avatar' },
      { label: 'Tag',         sub: 'Chips',      path: '/ui/tag' },
      { label: 'Card',        sub: 'Containers', path: '/ui/card' },
      { label: 'Tooltip',     sub: 'Overlays',   path: '/ui/tooltip' },
      { label: 'Separator',   sub: 'Dividers',   path: '/ui/separator' },
      { label: 'Spinner',     sub: 'Loading',    path: '/ui/spinner' },
      { label: 'Progress',    sub: 'Loading',    path: '/ui/progress' },
      { label: 'Accordion',   sub: 'Disclosure', path: '/ui/accordion' },
      { label: 'Collapsible', sub: 'Disclosure', path: '/ui/collapsible' },
    ],
  },
  {
    label: 'Feedback',
    items: [
      { label: 'Alert', sub: 'Inline',         path: '/ui/alert' },
      { label: 'Toast', sub: 'Notifications',  path: '/ui/toast' },
      { label: 'Modal', sub: 'Dialogs',        path: '/ui/modal' },
    ],
  },
  {
    label: 'Navigation',
    items: [
      { label: 'Tabs',       sub: 'Tab bar',   path: '/ui/tabs' },
      { label: 'Breadcrumb', sub: 'Wayfinding', path: '/ui/breadcrumb' },
      { label: 'Pagination', sub: 'Pages',     path: '/ui/pagination' },
      { label: 'Stepper',    sub: 'Steps',     path: '/ui/stepper' },
      { label: 'Drawer',     sub: 'Side panel', path: '/ui/drawer' },
    ],
  },
  {
    label: 'Theme',
    items: [
      { label: 'Palette',    sub: 'Color tokens',  path: '/ui/palette' },
      { label: 'Typography', sub: 'Type system',   path: '/ui/typography' },
    ],
  },
]

const total = groups.reduce((n, g) => n + g.items.length, 0)

export function IntroPage() {
  return (
    <>
      <PageHeader
        title="Introduction"
        desc="An overview of juno-ui — what it is, how it's built, and what it includes."
      />

      <div className={s.section}>
        <p className={s.docsHeading}>What is juno-ui?</p>
        <p className={s.docsProse}>
          juno-ui is a minimal, themeable React component library built with CSS custom
          properties. Every visual attribute — colors, borders, surfaces — is driven by
          design tokens, making it trivial to switch between light/dark mode and color
          palettes at runtime without rebuilding anything.
        </p>
        <p className={s.docsProse}>
          Components are unstyled at their core and gain their look entirely from the
          token layer. Swap a palette and every component updates instantly.
        </p>
      </div>

      <div className={s.section}>
        <p className={s.docsHeading}>Design tokens</p>
        <p className={s.docsProse}>
          The token system is split into two layers. Surface tokens control the
          page chrome — backgrounds, borders, and text colors. Intent tokens cover
          the four semantic states: <code className={s.inlineCode}>primary</code>,{' '}
          <code className={s.inlineCode}>danger</code>,{' '}
          <code className={s.inlineCode}>success</code>, and{' '}
          <code className={s.inlineCode}>warning</code>.
        </p>
        <p className={s.docsProse}>
          Theme switching is done by setting <code className={s.inlineCode}>data-theme="dark"</code> on{' '}
          <code className={s.inlineCode}>&lt;html&gt;</code>. Palette switching uses{' '}
          <code className={s.inlineCode}>data-palette="ocean"</code> (or any other palette name).
          Both can be combined freely. See the{' '}
          <Link to="/ui/palette" style={{ color: 'var(--color-primary)' }}>Palette page</Link> for
          a live preview.
        </p>
      </div>

      <div className={s.section}>
        <p className={s.docsHeading}>Components</p>
        <p className={s.docsProse}>
          {total} pages across {groups.length} categories. Click any to open its demo.
        </p>
        {groups.map(g => (
          <div key={g.label} style={{ marginBottom: 20 }}>
            <p className={s.sectionTitle} style={{ marginBottom: 8 }}>{g.label}</p>
            <div className={s.docsGrid}>
              {g.items.map(c => (
                <Link key={c.path} to={c.path} className={s.docsCard}>
                  <p className={s.docsCardLabel}>{c.label}</p>
                  <p className={s.docsCardSub}>{c.sub}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
