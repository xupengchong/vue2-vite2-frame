import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createVuePlugin } from 'vite-plugin-vue2'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin()], //vue(),
  base: './',
  server: {
    open: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src/components'),
      styles: path.resolve(__dirname, 'src/assets/styles'),
      plugins: path.resolve(__dirname, 'src/plugins'),
      views: path.resolve(__dirname, 'src/views'),
      layouts: path.resolve(__dirname, 'src/layouts'),
      utils: path.resolve(__dirname, 'src/utils'),
      api: path.resolve(__dirname, 'src/api')
    }
  }
})
