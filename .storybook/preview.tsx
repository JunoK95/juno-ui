import { useEffect } from 'react'
import type { Decorator, Preview } from '@storybook/react'
import '../src/index.scss'

const withTheme: Decorator = (Story, context) => {
  const theme = context.globals?.theme ?? 'light'

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div style={{ padding: '32px' }}>
      <Story />
    </div>
  )
}

const preview: Preview = {
  decorators: [withTheme],

  initialGlobals: {
    theme: 'light',
  },

  globalTypes: {
    theme: {
      description: 'Color theme',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
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
