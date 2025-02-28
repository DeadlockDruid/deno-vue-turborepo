import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'path'
import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'
import fs from 'fs'

export default defineConfig(() => {
  const NODE_ENV = process.env.NODE_ENV || 'development'

  console.log(`Using NODE_ENV: ${NODE_ENV}`)

  const envFilePath = path.resolve(__dirname, `./${NODE_ENV}.json`)

  if (!fs.existsSync(envFilePath)) {
    console.error(`ERROR: Missing environment config file: ${envFilePath}`)
    process.exit(1)
  }

  const envConfig = JSON.parse(fs.readFileSync(envFilePath, 'utf-8'))

  const viteDefine = Object.fromEntries(
    Object.entries(envConfig).map(([key, value]) => [key, JSON.stringify(value)]),
  )

  console.log(`Loaded env config:`, viteDefine)

  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    css: {
      postcss: {
        plugins: [tailwind(), autoprefixer()],
      },
    },
    plugins: [vue(), vueDevTools()],
    define: viteDefine,
  }
})
