import { Accordion } from '../index'
import type { AccordionItem } from '../index'
import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

const items: AccordionItem[] = [
  {
    title: 'What is Juno UI?',
    content: 'Juno UI is a React component library built with Vite and TypeScript. It provides a set of accessible, themeable primitives for building modern web applications.',
  },
  {
    title: 'How do I install it?',
    content: 'Run npm install juno-ui-library in your project, then import components from the package and include the CSS file.',
  },
  {
    title: 'Does it support dark mode?',
    content: 'Yes — all components use CSS custom properties mapped to light and dark tokens. Toggle the [data-theme] attribute on the document root.',
  },
  {
    title: 'Disabled item (not interactive)',
    content: 'This content is never shown.',
    disabled: true,
  },
]

export function AccordionPage() {
  return (
    <>
      <PageHeader title="Accordion" desc="Collapsible content sections with smooth animation." storybook="components-accordion" />

      <div className={s.section}>
        <p className={s.sectionTitle}>Single (default)</p>
        <div className={s.canvas} style={{ flexDirection: 'column' }}>
          <Accordion items={items.slice(0, 3)} />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Multiple open</p>
        <div className={s.canvas} style={{ flexDirection: 'column' }}>
          <Accordion items={items.slice(0, 3)} multiple />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>With disabled item</p>
        <div className={s.canvas} style={{ flexDirection: 'column' }}>
          <Accordion items={items} />
        </div>
      </div>
    </>
  )
}
