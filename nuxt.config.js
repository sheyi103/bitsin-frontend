export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Bitsin Travles and tours',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'Hotels, Flights, Booking, Travels and Tour', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    script: [

      {
        src: '@/assets/js/popper.js'
      },

    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.3.1/css/all.min.css',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css', 'animate.css/animate.min.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '@/plugins/view-ui',
    { src: '~/plugins/vue-datepicker', ssr: false },
    { src: '~plugins/oruga.js', ssr: false },
    { src: "@/plugins/flutterwave", ssr: false },
    { src: '~/plugins/vue-cookies', ssr: false },

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/fontawesome'],
  fontawesome: {
    component: 'Fa',
    suffix: false,
    icons: {
      solid: true,
      brands: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    "@nuxtjs/toast",
    'nuxt-clipboard',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: 'https://api.bitsintravelsandtours.com/api',
    baseURL: 'https://api-bitsin.sasoftsolutions.com.ng/api',
    // baseURL: 'http://localhost:8000/api',
  },
  auth: {
    // localStorage: false,
    strategies: {
      local: {
        token: {
          property: 'token',
          required: true,
          type: 'Bearer',
          maxAge: 60 * 60 * 24 * 30,
          global: true,
        },
        user: {
          property: 'data',
          // here should be `false`, as you defined in user endpoint `propertyName`
          autoFetch: true,
        },
        endpoints: {
          login: { url: '/login', method: 'post' },
          user: { url: '/user', method: 'get' },
          logout: { url: '/logout', method: 'delete' },
          // register: { url: '/register', method: 'post' },
          // changepassword: { url: '/change-password', method: 'post' },
          // forgotpassword: { url: '/forgot-password', method: 'post' },
          // resetpassword: { url: '/reset-password', method: 'post' },

          // logout: true,
        },
      },
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  buildModules: [
    // Simple usage
    '@nuxtjs/moment',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  generate: {
    dir: 'production',
  },
}
