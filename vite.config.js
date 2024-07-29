import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://cedric-cj.github.io/MZ24/',
  plugins: [
    vue(),
  ],
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png', '**/*.gif'],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
