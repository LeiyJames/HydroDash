// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'HydroDash - Run Your Water Refill Business from One App',
      meta: [
        { name: 'description', content: 'Modern app for water refill stores to manage orders, riders, and customers seamlessly.' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' }
      ]
    }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  typescript: {
    strict: true
  },
  components: [
    {
      path: '~/components/ui',
      // this is required else Nuxt will auto-import components as 'UiButton'
      pathPrefix: false,
    },
    '~/components'
  ],
})
