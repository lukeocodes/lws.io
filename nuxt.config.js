export default {
  target: 'static',
  head: {
    title: 'Kevin Lewis',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'I am a Developer Advocate & Event Organizer' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
      { rel: 'shortcut icon', href: '/favicons/favicon.ico' }
    ]
  },
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/date-fns'
  ],
  modules: [
    '@nuxt/content',
    '@nuxtjs/sitemap'
  ],
  tailwindcss: {
    jit: true
  },
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-nord.css'
      }
    }
  },
  sitemap: {
    hostname: process.env.BASE_URL || 'https://lws.io',
    routes: async () => {
      const { $content } = require('@nuxt/content')
      const presentations = await $content('presentations').only(['path']).fetch()
      const articles = await $content('articles').only(['path']).fetch()
      const additional = [
        '/uses',
        '/about'
      ]

      return []
        .concat(...presentations.map(p => p.path))
        .concat(...articles.map(a => a.path))
        .concat(additional)
    }
  }
}
