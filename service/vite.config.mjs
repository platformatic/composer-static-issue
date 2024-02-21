import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from 'node:path'

const envDir = join(__dirname, '..', '..')

// https://vitejs.dev/config/
export default defineConfig({
  envDir,
  plugins: [react()],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src')
    }
  }
})
