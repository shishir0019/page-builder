import { resolve } from "path"
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib'),
      name: 'PageBuilder',
      fileName: 'page-builder'
    },
    rollupOptions: {
      external: ['vue', 'grapesjs'],
      output: {
        globals: {
          Vue: 'Vue'
        }
      }
    }
  }
})
