import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import pluginEslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        pluginEslint({
            include: ['src/*.tsx', 'src/**/*.tsx', 'src/*.ts', 'src/**/*.ts'],
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    css: {
        modules: {
            localsConvention: 'camelCase',
        },
    },
})
