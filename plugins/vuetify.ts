import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
  console.info('hello')
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: '#3248DA',
            secondary: '#00CAF2'
          }
        }
      }
    }
  })
  nuxtApp.vueApp.use(vuetify)
})
