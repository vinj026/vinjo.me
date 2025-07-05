// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
  components: [{
    path: '~/components/sections',
    pathPrefix: false,
  }],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },

  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    'nuxt-lucide-icons'
  ],
  app: {
    head: {
      title: "Kevin Jonathan | Personal Site",
      meta: [
        { name: 'description', content: 'Personal portfolio and blog of Kevin Jonathan.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'Kevin Jonathan' },
        { name: 'robots', content: 'index, follow' },
      ]
    },
  }
})
