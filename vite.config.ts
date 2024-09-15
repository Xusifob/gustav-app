import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Word Genius',
        short_name: 'Word Genius',
        description: 'Word Genius is an app helping you to save and learn new words.',
        start_url: '/',
        display: 'standalone',
        background_color: '#f7f7fa',
        theme_color: '#03a9f4',
        icons: [
          {
            src: '/logo_small.svg',
            sizes: '48x48 72x72 96x96 128x128 256x256',
            type: 'image/svg+xml',
            purpose: 'any'
          },
        ],
      },
      includeAssets: [
          '/src',
        '/index.html',
        '/assets',
        '/locales',
        '/script.js',
        '/logo.svg'
      ],
      workbox: {
        importScripts: ["https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js"],
      },
    }),
    react()
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },


})
