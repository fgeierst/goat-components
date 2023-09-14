import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      drafts: {
        nesting: true,
      }
    },
    devSourcemap: true,
  },
  build: {
    lib: {
      entry: 'src/components/main.ts',
      formats: ['es'],
      name: 'GoatComponents',
      fileName: 'goat-components',

    },
    rollupOptions: {
      external: /^lit/,
    },
  },
})
