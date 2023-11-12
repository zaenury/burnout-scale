import type { ConfigEnvironment } from '@burnout-scale/website'
import PACKAGE from './package.json'

const PROJECT_NAME = PACKAGE.name || ''
const VERSION = PACKAGE.version || '0.0.1'
const ENVIRONMENT = process.env.CONFIG_ENV || process.env.NODE_ENV || 'local'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CONFIGENVIRONMENT: ConfigEnvironment = require(
  `./config/${ENVIRONMENT.toLowerCase()}.json`
)
const { copywrite, hostname, teacherNumber } = CONFIGENVIRONMENT.env

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      teacherNumber
    }
  },

  ssr: false,

  app: {
    head: {
      title: copywrite.title,
      htmlAttrs: {
        lang: 'en'
      },
      bodyAttrs: {
        'data-project': PROJECT_NAME,
        'data-version': VERSION,
        'data-env': ENVIRONMENT
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#3248DA' },
        { name: 'robots', content: 'index, follow' },
        {
          hid: 'http-equiv',
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge,chrome=1'
        },
        {
          hid: 'description',
          name: 'description',
          content: copywrite.description
        },
        { hid: 'keywords', name: 'keywords', content: copywrite.keywords },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:title', property: 'og:title', content: copywrite.title },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: copywrite.sitename
        },
        { hid: 'og:url', property: 'og:url', content: hostname },
        {
          hid: 'og:description',
          property: 'og:description',
          content: copywrite.description
        },
        {
          hid: 'og:keywords',
          property: 'og:keywords',
          content: copywrite.keywords
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${hostname}/favicon.png`
        },
        {
          hid: 'og:image:type',
          property: 'og:image:type',
          content: 'image/png'
        },
        { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
        {
          hid: 'og:image:height',
          property: 'og:image:height',
          content: '1200'
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: copywrite.description
        },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: copywrite.title
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: copywrite.sitename
        },
        { hid: 'twitter:url', name: 'twitter:url', content: hostname },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: copywrite.description
        },
        {
          hid: 'twitter:keywords',
          name: 'twitter:keywords',
          content: copywrite.keywords
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `${hostname}/favicon.png`
        },
        {
          hid: 'twitter:image:src',
          name: 'twitter:image:src',
          content: `${hostname}/favicon.png`
        },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200;0,6..12,300;0,6..12,400;0,6..12,500;0,6..12,600;0,6..12,700;0,6..12,800;0,6..12,900;0,6..12,1000;1,6..12,200;1,6..12,300;1,6..12,400;1,6..12,500;1,6..12,600;1,6..12,700;1,6..12,800;1,6..12,900;1,6..12,1000&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0&display=swap'
        }
      ]
    }
  },

  css: [
    'vuetify/lib/styles/main.sass',
    '~/assets/scss/main.scss',
    '@mdi/font/css/materialdesignicons.min.css'
  ],

  build: {
    transpile: ['vuetify']
  },

  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],

  pinia: {
    storesDirs: ['./stores/**']
  },

  vite: {
    define: {
      'process.env.DEBUG': true
    }
  }
})
