// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false,
  devtools: { enabled: true },
  app: {
    head: {
      script: [
        { src: 'https://telegram.org/js/telegram-web-app.js', defer: true },
      ],
    },
  },

})
