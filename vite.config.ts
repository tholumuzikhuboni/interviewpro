import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@google/generative-ai', 'react-router-dom'],
    exclude: ['lucide-react']
  },
  build: {
    commonjsOptions: {
      include: [/@google\/generative-ai/, /node_modules/]
    }
  }
});