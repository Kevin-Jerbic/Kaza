import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/https://kevin-jerbic.github.io/Kaza/src/main.jsx',
});
