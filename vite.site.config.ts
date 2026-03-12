import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Builds the demo/docs website (not the npm library).
// Output goes to site-dist/ so it doesn't collide with the library dist/.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'site-dist',
    emptyOutDir: true,
  },
})
