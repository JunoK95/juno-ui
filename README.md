# juno-ui-library

A lightweight React component library with a token-based theme system, dark mode, and multiple color palettes.

Built originally for my own projects — sharing it in the hope it helps others save time and build beautiful UIs too.

If juno-ui saves you time, consider [buying me a coffee ☕](https://ko-fi.com/junok) — it's free and open source, built in spare time.

## Installation

```sh
npm install juno-ui-library
```

Import the stylesheet once in your app entry:

```ts
import 'juno-ui-library/dist/juno-ui-library.css'
```

## Usage

```tsx
import { Button, Badge, Spinner } from 'juno-ui-library'

export default function App() {
  return (
    <>
      <Button intent="primary" variant="solid">Save changes</Button>
      <Badge intent="success">Live</Badge>
      <Spinner intent="primary" />
    </>
  )
}
```

## Components

### Inputs

| Component | Description |
|-----------|-------------|
| `Button` | Solid / outline / ghost × 5 intents × 3 sizes |
| `Input` | Text input with intent states and sizes |
| `Select` | Dropdown select with intent states |
| `Checkbox` | Accessible checkbox with intent colors |
| `Switch` | Toggle switch with intent colors |
| `Dropdown` | Click-triggered menu with icons, shortcuts, dividers, labels |
| `DatePicker` | Calendar popover for date or date+time selection |
| `Slider` | Range input with intent colors, sizes, and value display |

### Display

| Component | Description |
|-----------|-------------|
| `Badge` | Small status label |
| `Avatar` | User avatar with image, initials, and status indicator |
| `Tag` | Removable or static tag |
| `Card` | Surface container with optional header/body/footer |
| `Tooltip` | CSS hover tooltip on 4 sides with arrow |
| `Separator` | Horizontal or vertical divider, optional label |
| `Spinner` | Animated loading indicator |
| `Progress` | Track+fill progress bar with intent colors |
| `Accordion` | Animated collapsible sections, single or multi-open |
| `Collapsible` | Single expandable section with a custom trigger |

### Feedback

| Component | Description |
|-----------|-------------|
| `Alert` | Inline alert with intent colors |
| `Toast` | Transient notification |
| `Modal` | Portal dialog with backdrop, ESC, and scroll lock |
| `Drawer` | Slide-in panel from left or right |

### Navigation

| Component | Description |
|-----------|-------------|
| `Tabs` | Tab navigation with multiple variants |
| `Breadcrumb` | Hierarchical path navigation |
| `Pagination` | Page navigation controls |
| `Stepper` | Step-by-step progress indicator |

## Theming

All components use CSS custom properties. Light mode is the default; dark mode activates via OS preference or a `data-theme` attribute:

```html
<html data-theme="light"> … </html>
<html data-theme="dark"> … </html>
```

### Color palettes

Eight built-in palettes override the accent colors via `data-palette`:

```html
<html data-palette="warm">   <!-- warm reds/oranges -->
<html data-palette="dim">    <!-- muted blues -->
<html data-palette="mono">   <!-- monochrome -->
<html data-palette="pastel"> <!-- soft pastels -->
```

Available values: `default` · `warm` · `dim` · `mono` · `pastel` · `vibrant` · `muted` · `grayscale`

### Overriding tokens

```css
:root {
  --color-primary:       #7c3aed;
  --color-primary-hover: #6d28d9;
}
```

Full token reference: [`src/styles/_tokens.scss`](./src/styles/_tokens.scss)

## Development

```sh
npm install
npm run dev          # Vite dev sandbox  → localhost:5173
npm run storybook    # Storybook         → localhost:6006
npm run build        # Build library     → dist/
npm test             # Jest unit tests
```

## Publishing

```sh
npm run build
npm publish
```
