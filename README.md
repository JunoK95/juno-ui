# juno-ui-library

A lightweight React component library with a token-based theme system and built-in dark mode support.

## Installation

```sh
npm install juno-ui-library
```

Import the stylesheet once at your app root:

```ts
import 'juno-ui-library/dist/juno-ui-library.css'
```

## Usage

```tsx
import { Button } from 'juno-ui-library'

export default function App() {
  return (
    <Button intent="primary" variant="solid">
      Save changes
    </Button>
  )
}
```

## Components

### Button

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'solid' \| 'outline' \| 'ghost'` | `'solid'` | Visual style |
| `intent` | `'default' \| 'primary' \| 'danger' \| 'success' \| 'warning'` | `'default'` | Color intent |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size |
| `disabled` | `boolean` | `false` | Disabled state |

`variant` and `intent` compose freely — 15 combinations with no extra code:

```tsx
<Button variant="solid"   intent="primary">Save</Button>
<Button variant="outline" intent="danger">Delete</Button>
<Button variant="ghost"   intent="success">Confirm</Button>
<Button variant="outline" intent="warning" size="sm">Review</Button>
```

## Theming

The library uses CSS custom properties. Light mode is the default; dark mode activates automatically via OS preference or explicitly via a `data-theme` attribute:

```html
<div data-theme="light"> … </div>
<div data-theme="dark"> … </div>
```

### Overriding tokens

Override any token after importing the stylesheet:

```css
:root {
  --color-primary:       #7c3aed;
  --color-primary-hover: #6d28d9;
}
```

Full token reference: [`src/styles/_tokens.scss`](./src/styles/_tokens.scss).

## Development

```sh
npm install
npm run dev          # Vite dev sandbox  → localhost:5173
npm run storybook    # Storybook         → localhost:6006
npm run build        # Build library     → dist/
```

## Publishing

```sh
npm run build
npm publish
```
