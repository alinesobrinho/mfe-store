import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/',

  plugins: [
    react(),
    tailwindcss(),

    federation({
      name: 'footer',

      filename: 'remoteEntry.js',

      exposes: {
        './Footer': './src/App.jsx',
      },

      shared: ['react', 'react-dom'],
    }),
  ],

  build: {
    target: 'esnext',
    cssCodeSplit: false,
  },

  server: {
    port: 4174,
    origin: 'http://localhost:5175',
  },
})