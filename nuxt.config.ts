// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@/assets/css/main.css',
    'bootstrap-icons/font/bootstrap-icons.css'
  ],
  build: {
    transpile: []
  },
  plugins: ['@/plugins/bootstrap.js'],
})