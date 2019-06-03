require('dotenv').config()

const glob = require('glob-all')
const path = require('path')
const collect = require('collect.js')
import axios from 'axios'

export default {
  mode: 'universal',
  server: {
    port: 8383,
    host: '0.0.0.0'
  },
  head: {
    title: 'Детейлінг центр Virus Тернопіль. Хімчистка, полірування, реставрація авто',
    htmlAttrs: {
      lang: 'uk',
      amp: true
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Детейлінг студія Virus - комплексний догляд за Вашим авто. Передпродажна підготовка, хімчистка салону, полірування кузова, керамічне покритя, перетяжка руля, реставрація шкіри.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'детейлинг центр, автодетейлинг, детейлинг студия, автомобильный детейлинг, химчистка авто, чистка салону авто, хімчистка автомобіля, полировка фар, полірування авто, поліровка машини, полировка торпеды, поліровка торпеди'
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
        content: 'Детейлінг студія Virus - комплексний догляд за Вашим авто. Передпродажна підготовка, хімчистка салону, полірування кузова, керамічне покритя, перетяжка руля, реставрація шкіри'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        property: 'og:image',
        content: '/virus_og.jpg'
      }
    ],
    link: [{
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
        rel: 'mask-icon',
        href: 'https://virus.te.ua/assets/icons/safari-pinned-tab.svg',
        color: '#e32124'
      },
      {
        rel: 'shortcut icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700|Roboto:400,500,900&display=swap&subset=cyrillic,cyrillic-ext'
      }
    ]
  },

  loading: {
    color: '#e32124'
  },

  css: ['~/assets/scss/config.scss',
    'highlight.js/styles/dracula.css'
  ],

  plugins: [
    '~/plugins/Axios.js',
    '~/plugins/filters.js',
    {
      src: '~plugins/ga.js',
      ssr: false
    },
    {
      src: "~/plugins/google-maps",
      ssr: true
    },
    {
      src: "~/plugins/components",
      ssr: true
    },
    {
      src: "~/plugins/vuemask"

    }
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'bootstrap-vue/nuxt',
    'vue-scrollto/nuxt',
    '@nuxtjs/robots',
    '@nuxtjs/dotenv',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-62479125-9'
      }
    ],
    [
      'nuxt-fontawesome',
      {
        imports: [{
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        }]
      }
    ],
    '@nuxtjs/sitemap'
  ],

  axios: {
    baseURL: process.env.apiUrl
  },

  purgeCSS: {

  },

  generate: {
    routes: async () => {
      let {
        data
      } = await axios.post(process.env.POSTS_URL,
        JSON.stringify({
          filter: {
            published: true
          },
          sort: {
            _created: -1
          },
          populate: 1
        }), {
          headers: {
            'Content-Type': 'application/json'
          }
        })

      const collection = collect(data.entries)

      let tags = collection.map(post => post.tags)
        .flatten()
        .unique()
        .map(tag => {
          let payload = collection.filter(item => {
            return collect(item.tags).contains(tag)
          }).all()

          return {
            route: `category/${tag}`,
            payload: payload
          }
        }).all()

      let posts = collection.map(post => {
        return {
          route: post.title_slug,
          payload: post
        }
      }).all()

      return posts.concat(tags)
    }
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: process.env.URL,
    cacheTime: 1000 * 60 * 15,
    generate: true, // Enable me when using nuxt generate
    async routes() {
      let {
        data
      } = await axios.post(process.env.POSTS_URL,
        JSON.stringify({
          filter: {
            published: true
          },
          sort: {
            _created: -1
          },
          populate: 1
        }), {
          headers: {
            'Content-Type': 'application/json'
          }
        })

      const collection = collect(data.entries)

      let tags = collection.map(post => post.tags)
        .flatten()
        .unique()
        .map(tag => `category/${tag}`)
        .all()

      let posts = collection.map(post => post.title_slug).all()

      return posts.concat(tags)
    }
  },

  styleResources: {
    scss: [
      'assets/scss/config.scss'
    ]
  },



  build: {
    transpile: [/^vue2-google-maps($|\/)/],
    extractCSS: true,

    extend(config, ctx) {
      // Run ESLint on save

    }
  }
}
