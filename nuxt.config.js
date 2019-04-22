module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'ru',
    },
    title: 'Default title',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { hid: 'description', name: 'description', content: 'Vterekhov nuxt boilerplate' }
    ],
    link: [
      { rel: 'icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon-16x16.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans:400,700' },
    ]
  },
  modules: ['@nuxtjs/axios', '@nuxtjs/auth'],
  /* @nuxtjs/auth
  ** Global CSS
  */
  watch: ['~/api/**/*.js'],
  css: [
    '~/assets/styles/main.styl',
    'normalize.css',
  ],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios', '@nuxtjs/axios', '@nuxtjs/auth'],
    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  serverMiddleware: [
    // API middleware
    '~/api/index.js'
  ],
  /*
  ** Plugins configuration
  */
  plugins: [
    { src: '~plugins/vee-validate', ssr: true },
    { src: '~plugins/vue-cookie', ssr: false },
    { src: '~plugins/vue-idle-queue.js', ssr: false },
  ],
  /*
  ** Router configuration
  */
  router: {
    middleware: 'animateNavigation',
    // scrollBehavior: (to, from) => {      
    // },
    linkExactActiveClass: 'menu__link_active',
  },
}
