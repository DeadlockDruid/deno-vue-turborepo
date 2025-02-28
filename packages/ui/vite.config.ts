import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'
import autoprefixer from 'autoprefixer'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

export default defineConfig({
    plugins: [vue(), tailwindcss()],
    css: {
        postcss: {
            plugins: [autoprefixer()],
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