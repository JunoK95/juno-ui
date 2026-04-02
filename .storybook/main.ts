import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal(config) {
    config.build ??= {}
    config.build.rollupOptions ??= {}
    config.build.rollupOptions.output ??= {}
    if (!Array.isArray(config.build.rollupOptions.output)) {
      config.build.rollupOptions.output.manualChunks = (id) => {
        if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
          return 'react-vendor'
        }
        if (id.includes('node_modules')) {
          return 'vendor'
        }
      }
    }
    return config
  },
}

export default config
