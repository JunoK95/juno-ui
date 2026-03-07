import { useEffect } from 'react'
import type { Decorator, Preview } from '@storybook/react'
import '../src/index.scss'

const withTheme: Decorator = (Story, context) => {
  const theme   = context.globals?.theme   ?? 'light'
  const palette = context.globals?.palette ?? 'default'

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    if (palette === 'default') {
      document.documentElement.removeAttribute('data-palette')
    } else {
      document.documentElement.setAttribute('data-palette', palette)
    }
  }, [palette])

  return (
    <div style={{ padding: '32px' }}>
      <Story />
    </div>
  )
}

const preview: Preview = {
  decorators: [withTheme],

  initialGlobals: {
    theme:   'light',
    palette: 'default',
  },

  globalTypes: {
    theme: {
      description: 'Color theme',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark',  title: 'Dark',  icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },

    palette: {
      description: 'Color palette',
      toolbar: {
        title: 'Palette',
        icon: 'paintbrush',
        items: [
          { value: 'default',   title: 'Default' },
          { value: 'warm',      title: 'Warm' },
          { value: 'dim',       title: 'Dim' },
          { value: 'mono',      title: 'Mono' },
          { value: 'pastel',    title: 'Pastel' },
          { value: 'vibrant',   title: 'Vibrant' },
          { value: 'muted',     title: 'Muted' },
          { value: 'grayscale', title: 'Grayscale' },
        ],
        dynamicTitle: true,
      },
    },
  },

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
