// vitest.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    test: {
        // Testkonfigurasjoner
        globals: true,
        environment: 'jsdom',
    },
});
