import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ command }) => {
  const isProduction = command === 'build';
  
  return {
    base: '/',
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
      proxy: {
        // Add any API proxy configuration here if needed
      }
    },
    preview: {
      port: 3000,
      strictPort: true
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
