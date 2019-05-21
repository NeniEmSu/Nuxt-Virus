export default {
  mode: 'universal',
  server: {
    port: 8383,
    host: '0.0.0.0'
  },
  head: {
    title:
      'Детейлінг центр Virus Тернопіль. Хімчистка, полірування, реставрація авто',
    htmlAttrs: {
      lang: 'uk',
      amp: true
    },
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Детейлінг студія Virus - комплексний догляд за Вашим авто. Передпродажна підготовка, хімчистка салону, полірування кузова, керамічне покритя, перетяжка руля, реставрація шкіри.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'детейлинг центр, автодетейлинг, детейлинг студия, автомобильный детейлинг, химчистка авто, чистка салону авто, хімчистка автомобіля, полировка фар, полірування авто, поліровка машини, полировка торпеды, поліровка торпеди'
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: 'Virus detailing'
      },
      {
        hid: 'application-name',
        name: 'application-name',
        content: 'Virus detailing'
      },
      {
        hid: 'msapplication-TileColor',
        name: 'msapplication-TileColor',
        content: '#da532c'
      },
      {
        hid: 'msapplication-config',
        name: 'msapplication-config',
        content: 'img/icons/browserconfig.xml'
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#E32124'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        property: 'og:title',
        content: 'Virus детейлінг'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        property: 'og:site_name',
        content: 'Virus детейлінг'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        property: 'og:url',
        content: 'https://virus.te.ua/'
      },
      {
        hid: 'og:type',
        name: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:locale',
        name: 'og:locale',
        property: 'og:locale',
        content: 'uk_UA'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        property: 'og:description',
        content:
          'Детейлінг студія Virus - комплексний догляд за Вашим авто. Передпродажна підготовка, хімчистка салону, полірування кузова, керамічне покритя, перетяжка руля, реставрація шкіри'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        property: 'og:image',
        content: '/virus_og.jpg'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        size: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest'
      },
      {
        rel: 'mask-icon',
        href: 'https://virus.te.ua/assets/icons/safari-pinned-tab.svg',
        color: '#e32124'
      },
      {
        rel: 'shortcut icon',
        href: '/favicon.ico'
      }
    ]
  },

  loading: {
    color: '#e32124'
  },

  css: ['~/assets/scss/config.scss'],

  plugins: [
    {
      src: '~plugins/ga.js',
      ssr: false
    },
    {
      src: '~/plugins/vue-gallery.js',
      ssr: false
    }
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'bootstrap-vue/nuxt',
    'vue-scrollto/nuxt',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-62479125-9'
      }
    ],
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ]
  ],

  build: {
    plugins: [],

    extend(config, ctx) {}
  }
}
