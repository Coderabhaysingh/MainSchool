import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isProduction = command === 'build';
  
  return {
    base: isProduction ? './' : '/',
    plugins: [react(), tailwindcss()],
    server: {
      hmr: {
        overlay: false
      },
      historyApiFallback: {
        disableDotRule: true,
        index: '/index.html'
      },
      proxy: {
        // Add any API proxy configuration here if needed
      }
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      emptyOutDir: true,
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom', 'react-router-dom']
          }
        }
      }
    }
  };
});
