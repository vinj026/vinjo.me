// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    'nuxt-lucide-icons',
    '@nuxtjs/leaflet'
  ],
  components: [{
    path: '~/components/sections',
    pathPrefix: false,
  },
  {
    path: '~/components/ui',
    pathPrefix: false,
  },
  {
    path: '~/components/common',
    pathPrefix: false,
  },
  ],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },

  css: ['~/assets/css/main.css'],
  content: {
    renderer: {
      anchorLinks: false
    },
    build: {
      markdown: {
        highlight: {
          // Theme used in all color schemes.
          theme: 'vitesse-dark',
          langs: [
            'c',
            'cpp',
            'js'
          ]
        }
      }
    }
  },
  hooks: {
    'content:file:beforeParse'(ctx) {
      const { file } = ctx;

      if (file.id.endsWith(".md")) {
        file.body = file.body.replace(/react/gi, "Vue");
      }
    },
    'content:file:afterParse'(ctx) {
      const { file, content } = ctx;

      const wordsPerMinute = 180;
      const text = typeof file.body === 'string' ? file.body : '';
      const wordCount = text.split(/\s+/).length;

      content.readingTime = Math.ceil(wordCount / wordsPerMinute);
    }
  },
  vite: {
    plugins: [
      tailwindcss()
    ]
  },

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
  },
  runtimeConfig: {
    public: {
      MAPTILER_KEY: process.env.NUXT_PUBLIC_MAPTILER_KEY
    }
  }
})
