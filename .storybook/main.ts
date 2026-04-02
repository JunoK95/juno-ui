import { mergeConfig } from 'vite'
import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal(config) {
    config.plugins = (config.plugins ?? []).filter(
      (p) => !(p && typeof p === 'object' && 'name' in p && p.name === 'vite:dts')
    )
    return mergeConfig(config, {
      build: {
        chunkSizeWarningLimit: 1500,
        rollupOptions: {
          output: {
            manualChunks: (id: string) => {
              if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
                return 'react-vendor'
              }
              if (id.includes('node_modules')) {
                return 'vendor'
              }
            },
          },
        },
      },
    })
  },
}

export default config
