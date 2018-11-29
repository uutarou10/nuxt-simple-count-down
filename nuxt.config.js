const pkg = require('./package')

const description = '指定した時刻までカウントダウンするタイマーをカンタンに作成することができます。作成したタイマーは簡単に共有できます。';

module.exports = {
  mode: 'universal',
  srcDir: 'app',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:type', property: 'og:type', content: 'website'},
      { hid: 'og:title', property: 'og:title', content: 'SIMPLE COUNT DOWN'},
      { hid: 'og:image', property: 'og:image', content: '/og_image.png'},
      { hid: 'og:site_name', property: 'og:site_name', content: 'SIMPLE COUNT DOWN'},
      { hid: 'og:description', property: 'og:description', content: description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  serverMiddleware: [
    'redirect-ssl'
  ],

  env: {
    apiKey: process.env.FIREBASE_API_KEY
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '~/plugins/firebase.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/moment',
    '@nuxtjs/google-analytics'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  'google-analytics': {
    id: 'UA-109873847-3'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
