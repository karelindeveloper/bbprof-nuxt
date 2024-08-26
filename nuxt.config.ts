export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: false,
  head: {
    title: 'BBProf',
    htmlAttrs: {
        lang: 'ru',
    },
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Привет, я Карелин Степан Frontend-разработчик из Челябинска, увлеченный созданием доступных и удобных для пользователя веб-сайтов.' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
},
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',        
    "@nuxt/image",
  ],
  googleFonts: {
    families: {
      Roboto: [400,700],
    }
  },
  shadcn: {
    prefix: 'Ui',
    componentDir: './components/ui'
  }
})