import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

export function GetStartedPage() {
  return (
    <>
      <PageHeader
        title="Get Started"
        desc="Install juno-ui and have your first component rendering in minutes."
      />

      <div className={s.section}>
        <p className={s.docsHeading}>Installation</p>
        <p className={s.docsProse}>Install the package from npm:</p>
        <code className={s.codeBlock}>npm install juno-ui-library</code>
      </div>

      <div className={s.section}>
        <p className={s.docsHeading}>Import styles</p>
        <p className={s.docsProse}>
          juno-ui ships a single CSS file containing all component styles and the
          default token set. Import it once at the root of your app:
        </p>
        <code className={s.codeBlock}>import 'juno-ui-library/dist/juno-ui-library.css'</code>
      </div>

      <div className={s.section}>
        <p className={s.docsHeading}>Theming</p>
        <p className={s.docsProse}>
          Light and dark mode are controlled by a <code className={s.inlineCode}>data-theme</code> attribute
          on <code className={s.inlineCode}>&lt;html&gt;</code>. Set it once on mount and update it
          whenever the user toggles their preference:
        </p>
        <code className={s.codeBlock}>{`// Light mode (default)
document.documentElement.setAttribute('data-theme', 'light')

// Dark mode
document.documentElement.setAttribute('data-theme', 'dark')`}</code>
        <p className={s.docsProse}>
          Color palettes work the same way via <code className={s.inlineCode}>data-palette</code>.
          Available palettes: <code className={s.inlineCode}>default</code>,{' '}
          <code className={s.inlineCode}>warm</code>,{' '}
          <code className={s.inlineCode}>dim</code>,{' '}
          <code className={s.inlineCode}>mono</code>,{' '}
          <code className={s.inlineCode}>pastel</code>,{' '}
          <code className={s.inlineCode}>vibrant</code>,{' '}
          <code className={s.inlineCode}>muted</code>,{' '}
          <code className={s.inlineCode}>grayscale</code>,{' '}
          <code className={s.inlineCode}>forest</code>,{' '}
          <code className={s.inlineCode}>ocean</code>,{' '}
          <code className={s.inlineCode}>rose</code>.
        </p>
        <code className={s.codeBlock}>document.documentElement.setAttribute('data-palette', 'ocean')</code>
      </div>

      <div className={s.section}>
        <p className={s.docsHeading}>Usage</p>
        <p className={s.docsProse}>
          Import components directly from the package. All components are named exports:
        </p>
        <code className={s.codeBlock}>{`import { Button, Badge, Alert } from 'juno-ui-library'

export function App() {
  return (
    <div>
      <Alert intent="success" title="Done">
        Your changes have been saved.
      </Alert>

      <Button intent="primary" onClick={() => console.log('clicked')}>
        Save changes
      </Button>
    </div>
  )
}`}</code>
      </div>

      <div className={s.section}>
        <p className={s.docsHeading}>TypeScript</p>
        <p className={s.docsProse}>
          juno-ui is written in TypeScript. Type definitions are bundled — no separate{' '}
          <code className={s.inlineCode}>@types</code> package needed. All component props
          are fully typed and exported.
        </p>
      </div>

      <div className={s.section}>
        <p className={s.docsHeading}>Peer dependencies</p>
        <p className={s.docsProse}>
          juno-ui requires React 18 or later. Make sure it's installed in your project:
        </p>
        <code className={s.codeBlock}>npm install react react-dom</code>
      </div>
    </>
  )
}
