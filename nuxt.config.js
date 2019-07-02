require('dotenv').config()

const glob = require('glob-all')
const path = require('path')
const collect = require('collect.js')
const perPage = Number(process.env.PER_PAGE)

const axios = require('axios')
import purgecss from '@fullhuman/postcss-purgecss'

export default {
  mode: 'universal',
  server: {
    port: 8383,
    host: '0.0.0.0'
  },
  head: {
    title: 'Детейлінг центр Virus Тернопіль. Хімчистка, полірування, реставрація авто',
    htmlAttrs: {
      class: 'has-navbar-fixed-top',
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
        content: '/browserconfig.xml'
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
        size: '128x128',
        href: '/icon-128x128.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '96x96',
        href: '/icon-96x96.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '144x144',
        href: '/icon-144x144.png'
      }, {
        rel: 'icon',
        type: 'image/png',
        size: '512x512',
        href: '/icon-512x512.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '384x384',
        href: '/icon-384x384.png'
      }, {
        rel: 'icon',
        type: 'image/png',
        size: '192x192',
        href: '/icon-192x192.png'
      }, {
        rel: 'icon',
        type: 'image/png',
        size: '152x152',
        href: '/icon-152x152.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '72x72',
        href: '/icon-72x72.png'
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
        rel: "stylesheet",
        type: "text/css",
        href: 'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css'
      }
    ],
    script: [{
      rel: 'prefetch',
      src: 'https://ajax.cloudflare.com/cdn-cgi/scripts/a2bd7673/cloudflare-static/rocket-loader.min.js',
      "data-cf-settings": "74bf624512b1c6414329bcb4-|49",
      defer: true
    }]
  },

  manifest: {
    name: "Детейлінг центр Virus",
    short_name: "Virus Детейлінг",
    description: "Детейлінг студія Virus Тернопіль - комплексний догляд за Вашим авто.",
    theme_color: "#e32124",
    background_color: "#ffffff",
    display: "standalone",
    dir: "auto",
    lang: 'uk',
    icons: [{
        type: 'image/png',
        size: '32x32',
        src: '/favicon-32x32.png'
      },
      {
        type: 'image/png',
        size: '16x16',
        src: '/favicon-16x16.png'
      },
      {
        src: "/icon-72x72.png",
        sizes: "72x72",
        type: "image/png"
      },
      {
        src: "/icon-96x96.png",
        sizes: "96x96",
        type: "image/png"
      },
      {
        src: "/icon-128x128.png",
        sizes: "128x128",
        type: "image/png"
      },
      {
        src: "/icon-144x144.png",
        sizes: "144x144",
        type: "image/png"
      },
      {
        src: "/icon-152x152.png",
        sizes: "152x152",
        type: "image/png"
      },
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icon-384x384.png",
        sizes: "384x384",
        type: "image/png"
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    categories: ["business", "utilities", "shopping"],
    scope: "/app/"
  },

  loading: {
    color: '#e32124'
  },

  css: [
    '~/assets/scss/config.scss',
    '~/assets/fonts/fonts.css',
    'highlight.js/styles/dracula.css'
  ],

  env: {
    productUrl: `${process.env.BASE_URL}/api/collections/get/Product?token=${process.env.PRODUCT_TOKEN}`,
    contactUrl: `${process.env.BASE_URL}/api/forms/submit/contact?token=${process.env.FORMS_TOKEN}`,
    commentUrl: `${process.env.BASE_URL}/api/forms/submit/comments?token=${process.env.FORMS_TOKEN}`,
    cockpit: {
      apiUrl: 'https://cms.neniemsu.com/api',
      apiToken: '478b68417378bbac86af13a57561ef',
      baseUrl: 'https://cms.neniemsu.com'
    }
  },

  // webfontloader: {
  //   google: {
  //     families: ['Roboto+Condensed:400,700:latin,cyrillic,cyrillic-ext', 'Roboto:400,500,700,900:latin,cyrillic,cyrillic-ext'],
  //     display: 'swap',
  //   }
  // },

  // Configure polyfills:
  polyfill: {
    features: [{
        require: 'url-polyfill'
      },

      {
        require: 'intersection-observer',
        detect: () => 'IntersectionObserver' in window,
      },


      {
        require: 'smoothscroll-polyfill',


        detect: () => 'scrollBehavior' in document.documentElement.style && window.__forceSmoothScrollPolyfill__ !== true,


        install: (smoothscroll) => smoothscroll.polyfill()
      }
    ]
  },

  plugins: [

    '~/plugins/vue-scrollto.js',
    '~/plugins/lightGallery.client.js',
    '~/plugins/Axios.js',
    '~/plugins/filters.js',
    {
      src: 'plugins/v-owl-carousel.js',
      ssr: false
    },

    {
      src: '~/plugins/vue-lazyload',
      ssr: false
    },
    {
      ssr: false,
      src: '~plugins/JivoChat'
    },
    {
      src: '~plugins/ga',
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
    // 'nuxt-webfontloader',
    'nuxt-polyfill',
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
            route: `блог/category/${tag}`,
            payload: payload
          }
        }).all()

      let posts = collection.map(post => {
        return {
          route: post.title_slug,
          payload: post
        }
      }).all()

      if (perPage < data.total) {
        let pages = collection
          .take(perPage - data.total)
          .chunk(perPage)
          .map((items, key) => {
            let currentPage = key + 2

            return {
              route: `блог/pages/${currentPage}`,
              payload: {
                posts: items.all(),
                hasNext: data.total > currentPage * perPage
              }
            }
          }).all()

        return posts.concat(tags, pages)
      }

      return posts.concat(tags)
    },

  },


  sitemap: {
    path: '/sitemap.xml',
    hostname: process.env.URL,
    cacheTime: 1000 * 60 * 15,

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
        .map(tag => `блог/category/${tag}`)
        .all()

      let posts = collection.map(post => post.title_slug).all()

      if (perPage < data.total) {
        let pages = collection
          .take(perPage - data.total)
          .chunk(perPage)
          .map((items, key) => `блог/pages/${key+2}`)
          .all()

        return posts.concat(tags, pages)
      }

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

    extend(config, {
      isDev,
      isClient
    }) {
      config.module.rules.forEach(rule => {
        if (String(rule.test) === String(/\.(png|jpe?g|gif|svg|webp)$/)) {
          // add a second loader when loading images
          rule.use.push({
            loader: 'image-webpack-loader',
            options: {
              svgo: {
                plugins: [
                  // use these settings for internet explorer for proper scalable SVGs
                  // https://css-tricks.com/scale-svg/
                  {
                    removeViewBox: false
                  },
                  {
                    removeDimensions: true
                  }
                ]
              }
            }
          })
        }
      })
    },

    build: {
      extend(config, {
        isDev,
        isClient
      }) {
        // adding the new loader as the first in the list
        config.module.rules.unshift({
          test: /\.(png|jpe?g|gif)$/,
          use: {
            loader: 'responsive-loader',
            options: {
              // disable: isDev,
              placeholder: true,
              quality: 85,
              placeholderSize: 30,
              name: 'img/[name].[hash:hex:7].[width].[ext]'
            }
          }
        })
        // remove old pattern from the older loader
        config.module.rules.forEach(value => {
          if (String(value.test) === String(/\.(png|jpe?g|gif|svg|webp)$/)) {
            // reduce to svg and webp, as other images are handled above
            value.test = /\.(svg|webp)$/
            // keep the configuration from image-webpack-loader here unchanged
          }
        })
      }
    },
    build: {
      postcss: {
        plugins: [
          purgecss({
            content: ['./pages/**/*.vue', './layouts/**/*.vue', './components/**/*.vue', './content/**/*.md', './content/**/*.json'],
            whitelist: ['html', 'body', 'has-navbar-fixed-top', 'nuxt-link-exact-active', 'nuxt-progress', 'hidden', 'opacity-0'],
            whitelistPatternsChildren: [/svg-inline--fa/, /__layout/, /__nuxt/],
          })
        ]
      },
    }

  }
}
