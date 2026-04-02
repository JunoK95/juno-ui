import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import cssInjectedByJs from 'vite-plugin-css-injected-by-js'

const isStorybook = process.env.STORYBOOK === 'true'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    !isStorybook && dts({
      include: ['src'],
      exclude: ['src/main.tsx', 'src/App.tsx'],
      tsconfigPath: './tsconfig.app.json',
      rollupTypes: true,
    }),
    !isStorybook && cssInjectedByJs(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'JunoUI',
      formats: ['es', 'umd'],
      fileName: (format) =>
        `juno-ui-library.${format === 'es' ? 'js' : 'umd.cjs'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'ReactJSXRuntime',
        },
      },
    },
    copyPublicDir: false,
  },
})
