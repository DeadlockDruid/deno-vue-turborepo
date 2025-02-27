import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import path from 'path'


export default defineConfig({
    plugins: [vue()],
    css: {
        postcss: {
            plugins: [tailwind(), autoprefixer()],
        },
    },
    resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'), 
        },
      },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            formats: ['es'],
            fileName: () => 'index.js'
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                assetFileNames: 'style.css',
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
});