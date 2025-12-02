import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ command }) => {
  const isProduction = command === 'build';
  
  return {
    base: isProduction ? './' : '/',
    plugins: [
      react({
        // Add this to ensure JSX is properly handled
        jsxImportSource: 'react',
        babel: {
          plugins: []
        }
      }), 
      tailwindcss()
    ],
    server: {
      port: 3000,
      open: true,
      hmr: {
        overlay: false
      },
      historyApiFallback: true,
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
