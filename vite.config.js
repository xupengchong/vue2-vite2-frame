import {defineConfig} from 'vite'
import {createVuePlugin} from 'vite-plugin-vue2'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin()], // vue(),
  base: './',
  build: {
    outDir: 'builds'
  },
  server: {
    open: true,
    host: '0.0.0.0',
    proxy: {
      '/jhfbw': {
        target: 'http://192.168.1.101:8081',
        changOrigin: true
      }
    }
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
    },

    // 忽略后缀名的配置选项, 添加 .vue 选项时要记得原本默认忽略的选项也要手动写入
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']

  }
})
