export default {
  components: true,
  target: 'static',
  static: {
    prefix: false
  },
  head: {
    titleTemplate: "Groovemaster Lab - Wood vibrations",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Laboratorio per la riparazione e costruzione di strumenti musicali a Matelica" }
    ],
    link: [
      { rel: "stylesheet", type: "text/css", href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }
    ]
  },
  css: ['~/static/css/style.css'],
  modules: [
    'nuxt-i18n',
    'bootstrap-vue/nuxt',
  ],
  i18n: {
    strategy: 'prefix',
    defaultLocale: 'it',
    langDir: 'lang',
    locales: [
      {
        code: 'en',
        name: "english",
        iso: 'en-US',
        file: 'en-US.js'
      }, {
        code: 'it',
        name: "italiano",
        iso: 'it-IT',
        file: 'it-IT.js'
      }
    ],
    vueI18n: {
      fallbackLocale: 'it',
    },
    parsePages: false,
    pages: {
      index: {
        it: '/home',
        en: '/index',
      },
      // family: {
      //   it: '/groovemaster-family',
      //   en: '/groovemaster-family',
      // },
      products: {
        it: '/produzione',
        en: '/products',
      },
      bio: {
        it: '/bio',
        en: '/biography',
      },
    }
  },
  bootstrapVue: {
    // Install the `IconsPlugin` plugin (in addition to `BootstrapVue` plugin)
    icons: false
  },
}