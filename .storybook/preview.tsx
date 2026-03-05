import type { Decorator, Preview } from '@storybook/react'
import '../src/index.scss'

// Wrap every story with a themed container so [data-theme] tokens apply
const withTheme: Decorator = (Story, context) => {
  const theme = context.globals?.theme ?? 'light'
  return (
    <div
      data-theme={theme}
      style={{
        minHeight: '100vh',
        padding: '32px',
        backgroundColor: 'var(--color-bg)',
        color: 'var(--color-text)',
      }}
    >
      <Story />
    </div>
  )
}

const preview: Preview = {
  decorators: [withTheme],

  globalTypes: {
    theme: {
      description: 'Color theme',
      defaultValue: 'light',
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
