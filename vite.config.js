import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
   base: "./",
   root: 'src',
   build: {
      outDir: '../dist/compiled/src',
      emptyOutDir: true
   }
})
