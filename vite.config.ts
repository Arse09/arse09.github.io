import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import packageJson from "./package.json"

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isPreviewMode = mode === 'gh-pages';
  
  return {
    plugins: [
      react(),
      tailwindcss()
    ],
    define: {
      'import.meta.env.VITE_APP_VERSION': JSON.stringify(packageJson.version), // We are using import.meta.env
    },
    build: {
      outDir: isPreviewMode ? 'github-pages-dist' : 'dist', // Use different directories based on the mode
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          entryFileNames: 'assets/[name].js',
          chunkFileNames: 'assets/[name].js',
          assetFileNames: 'assets/[name].[ext]'
        }
      }
    }
  };
})
