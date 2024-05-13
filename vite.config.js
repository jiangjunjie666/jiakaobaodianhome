import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //配置文件检索
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  //配置全局scss
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: '@import "./src/styles/variables.scss";'
      }
    }
  }
})
