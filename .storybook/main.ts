import { mergeConfig } from 'vite'
import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal(config) {
    const blockedPlugins = new Set(['vite:dts', 'vite-plugin-css-injected-by-js'])
    config.plugins = (config.plugins ?? []).filter(
      (p) => !(p && typeof p === 'object' && 'name' in p && blockedPlugins.has(p.name as string))
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
