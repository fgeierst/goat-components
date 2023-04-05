import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/components/main.js',
      formats: ['es'],
      name: 'GoatComponents',
      fileName: 'goat-components',
      
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
})
