// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: false,

  css: [
    'vuetify/lib/styles/main.sass',
    '~/assets/scss/main.scss'
  ],

  build: {
    transpile: ['vuetify']
  },

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  vite: {
    define: {
      'process.env.DEBUG': true
    }
  }
})
