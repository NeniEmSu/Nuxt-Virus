import purgecss from '@fullhuman/postcss-purgecss'
require('dotenv').config()

// const path = require('path')
// const glob = require('glob-all')
// const collect = require('collect.js')
// const perPage = Number(process.env.PER_PAGE)
// const axios = require('axios')

const features = [
  'fetch',
  'Object.entries',
  'IntersectionObserver'
].join('%2C')

export default {
  mode: 'universal',
  // server: {
  //   port: 8383,
  //   host: '0.0.0.0'
  // },
  head: {
    title: 'Детейлінг центр Virus Тернопіль. Хімчистка, полірування, реставрація авто',
    htmlAttrs: {
      class: 'has-navbar-fixed-top',
      lang: 'uk'
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
      href: '/apple-touch-icon.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/icon-128x128.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/icon-96x96.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/icon-144x144.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/icon-512x512.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/icon-384x384.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/icon-192x192.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/icon-152x152.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/icon-72x72.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-32x32.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-16x16.png'
    },
    {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
      color: '#e32124'
    },
    {
      rel: 'shortcut icon',
      href: '/favicon.ico'
    }

    ],
    script: [{
      rel: 'prefetch',
      src: 'https://ajax.cloudflare.com/cdn-cgi/scripts/a2bd7673/cloudflare-static/rocket-loader.min.js',
      'data-cf-settings': '74bf624512b1c6414329bcb4-|49',
      defer: true
    },
    {
      src: `https://polyfill.io/v3/polyfill.min.js?features=${features}`,
      body: true
    }
    ]
  },

  manifest: {
    name: 'Детейлінг центр Virus',
    short_name: 'Virus Детейлінг',
    description: 'Детейлінг студія Virus Тернопіль - комплексний догляд за Вашим авто.',
    theme_color: '#e32124',
    background_color: '#ffffff',
    display: 'standalone',
    start_url: '/',
    dir: 'auto',
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
      src: '/icon-72x72.png',
      sizes: '72x72',
      type: 'image/png'
    },
    {
      src: '/icon-96x96.png',
      sizes: '96x96',
      type: 'image/png'
    },
    {
      src: '/icon-128x128.png',
      sizes: '128x128',
      type: 'image/png'
    },
    {
      src: '/icon-144x144.png',
      sizes: '144x144',
      type: 'image/png'
    },
    {
      src: '/icon-152x152.png',
      sizes: '152x152',
      type: 'image/png'
    },
    {
      src: '/icon-192x192.png',
      sizes: '192x192',
      type: 'image/png'
    },
    {
      src: '/icon-384x384.png',
      sizes: '384x384',
      type: 'image/png'
    },
    {
      src: '/icon-512x512.png',
      sizes: '512x512',
      type: 'image/png'
    }
    ],
    categories: ['business', 'utilities', 'shopping']
  },

  loading: {
    // color: '#25d41f',
    color: 'white',
    failedColor: 'red'
  },

  css: [
    '~/assets/scss/config.scss',
    '~/assets/fonts/fonts.css',
    'highlight.js/styles/dracula.css'
  ],

  polyfill: {
    features: [

      {
        require: 'url-polyfill' // NPM package or require path of file
      },

      {
        require: 'intersection-observer',
        detect: () => 'IntersectionObserver' in window
      },

      {
        require: 'smoothscroll-polyfill',

        detect: () => 'scrollBehavior' in document.documentElement.style && window.__forceSmoothScrollPolyfill__ !== true,

        install: smoothscroll => smoothscroll.polyfill()
      }
    ]
  },

  plugins: [
    '~/plugins/vue-scrollto.js',
    '~/plugins/lightGallery.client.js',
    '~/plugins/Axios.js',
    '~/plugins/filters.js',
    '~/plugins/vuelidate.js',
    '~/plugins/disqus',
    {
      src: '@/plugins/aos',
      mode: 'client'
    },
    {
      src: '~/plugins/paginate'
    },
    {
      src: '~/plugins/polyfills',
      mode: 'client'
    },
    {
      src: '~/plugins/vue-lazyload',
      ssr: false
    },
    {
      src: '~/plugins/vue-page-transition',
      ssr: true
    },
    {
      src: '~/plugins/v-owl-carousel',
      ssr: false
    },
    {
      ssr: false,
      src: '~/plugins/JivoChat'
    },
    {
      ssr: false,
      src: '~/plugins/filterItems'
    },
    {
      src: '~/plugins/google-maps',
      ssr: true
    },
    {
      src: '~/plugins/components',
      ssr: true
    },
    {
      src: '~/plugins/vuemask'
    },
    {
      src: '~/plugins/vuex-persist',
      ssr: false
    },
    {
      src: '~/plugins/vue-select',
      ssr: true
    }
  ],

  router: {
    middleware: ['animation']
  },

  modules: [
    [
      'vue-currency-filter/nuxt',
      {
        name: 'currency',
        symbol: '₴',
        thousandsSeparator: ',',
        fractionCount: 2,
        fractionSeparator: '.',
        symbolPosition: 'front',
        symbolSpacing: true
      }
    ],
    '@nuxtjs/apollo',
    'nuxt-polyfill',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'bootstrap-vue/nuxt',
    'vue-scrollto/nuxt',
    '@nuxtjs/dotenv',
    '@nuxtjs/robots',
    '@nuxtjs/netlify-files',
    [
      '@nuxtjs/component-cache',
      {
        maxAge: 1000 * 60 * 60 * 24
      }
    ],
    ['@nuxtjs/google-tag-manager', {
      id: process.env.GOOGLE_TAGS_API_ID
    }],
    [
      '@nuxtjs/google-analytics',
      {
        id: process.env.GOOGLE_ANALYTICS_API_ID
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

  apollo: {
    includeNodeModules: true, // optional, default: false (this includes graphql-tag for node_modules folder)
    errorHandler: '~/apollo/customErrorHandler',
    clientConfigs: {
      default: '~/apollo/clientConfig.js'
    }
  },

  robots: {
    Sitemap: '/sitemap.xml'
  },

  axios: {
    baseURL: process.env.BASE_URL
  },

  purgeCSS: {
    // purgecss
  },

  netlifyFiles: {
    existingFilesDirectory: './netlify/'
  },

  // generate: {
  //   routes: async () => {
  //     const {
  //       data
  //     } = await axios.post(
  //       process.env.POSTS_URL,
  //       JSON.stringify({
  //         filter: {
  //           published: true
  //         },
  //         sort: {
  //           _created: -1
  //         },
  //         populate: 1
  //       }), {
  //         headers: {
  //           'Content-Type': 'application/json'
  //         }
  //       }
  //     )

  //     const collection = collect(data.entries)

  //     const tags = collection
  //       .map(post => post.tags)
  //       .flatten()
  //       .unique()
  //       .map((tag) => {
  //         const payload = collection
  //           .filter(item => collect(item.tags).contains(tag))
  //           .all()

  //         return {
  //           route: `/blog/category/${tag}`,
  //           payload
  //         }
  //       })
  //       .all()

  //     const posts = collection
  //       .map(post => ({
  //         route: `/blog/${post.title_slug}`,
  //         payload: post
  //       }))
  //       .all()
  //     if (perPage < data.total) {
  //       const pages = collection
  //         .take(perPage - data.total)
  //         .chunk(perPage)
  //         .map((items, key) => {
  //           const currentPage = key + 2

  //           return {
  //             route: `/blog/pages/${currentPage}`,
  //             payload: {
  //               posts: items.all(),
  //               hasNext: data.total > currentPage * perPage
  //             }
  //           }
  //         })
  //         .all()

  //       return posts.concat(tags, pages)
  //     }
  //     return posts.concat(tags)
  //   }
  // },

  // generate: {
  //   routes: async () => {
  //     const {
  //       data
  //     } = await axios.get(process.env.PRODUCT_URL,
  //       JSON.stringify({
  //         filter: {
  //           published: true
  //         },
  //         sort: {
  //           _created: -1
  //         },
  //         populate: 1
  //       }), {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //     return data.entries.map((product) => {
  //       return {
  //         route: `/mahazyn/${product.name_slug}`,
  //         payload: product
  //       }
  //     })
  //   }

  // },

  // sitemap: {
  //   path: '/sitemap.xml',
  //   hostname: process.env.URL,
  //   cacheTime: 1000 * 60 * 15,

  //   async routes () {
  //     const {
  //       data
  //     } = await axios.post(
  //       process.env.POSTS_URL,
  //       JSON.stringify({
  //         filter: {
  //           published: true
  //         },
  //         sort: {
  //           _created: -1
  //         },
  //         populate: 1
  //       }), {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     }
  //     )

  //     const collection = collect(data.entries)

  //     const tags = collection
  //       .map(post => post.tags)
  //       .flatten()
  //       .unique()
  //       .map(tag => `blog/category/${tag}`)
  //       .all()

  //     const posts = collection.map(post => post.title_slug).all()

  //     if (perPage < data.total) {
  //       const pages = collection
  //         .take(perPage - data.total)
  //         .chunk(perPage)
  //         .map((items, key) => `blog/pages/${key + 2}`)
  //         .all()

  //       return posts.concat(tags, pages)
  //     }

  //     return posts.concat(tags)
  //   }
  // },

  styleResources: {
    scss: ['assets/scss/config.scss']
  },

  build: {
    transpile: [/^vue2-google-maps($|\/)/],
    extractCSS: true,

    extend (config, {
      isDev,
      isClient
    }) {
      config.module.rules.forEach((rule) => {
        if (String(rule.test) === String(/\.(png|jpe?g|gif|svg|webp)$/)) {
          rule.use.push({
            loader: 'image-webpack-loader',
            options: {
              svgo: {
                plugins: [{
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
    postcss: {
      plugins: [
        purgecss({
          content: [
            './pages/**/*.vue',
            './layouts/**/*.vue',
            './components/**/*.vue',
            './content/**/*.md',
            './content/**/*.json'
          ],
          whitelist: [
            'html',
            'body',
            'has-navbar-fixed-top',
            'nuxt-link-exact-active',
            'nuxt-progress',
            'hidden',
            'opacity-0',
            'nuxt__build_indicator'
          ],
          whitelistPatternsChildren: [/svg-inline--fa/, /__layout/, /__nuxt/, /aos/, /fade-in/, /tooltip/, /modal/, /map/, /gm/]
        })
      ]
    }
    // babel: {
    //   presets ({
    //     isServer
    //   }, [preset, options]) {
    //     const r = [
    //       [
    //         preset, {
    //           buildTarget: isServer ? 'server' : 'client',
    //           ...options
    //         }
    //       ]
    //       // [ Other presets ]
    //     ]

    //     r[0][1].targets = {
    //       'browsers': ['> 1%', 'last 2 versions'],
    //       ie: 11
    //     }

    //     r[0][1].polyfills = [
    //       'es6.array.iterator',
    //       'es6.promise',
    //       'es6.object.assign',
    //       'es6.symbol',
    //       'es6.array.find',
    //       'es6.array.from',
    //       'es7.promise.finally',
    //       'es7.object.entries'
    //     ]

    //     return r
    //   },

    //   plugins: [
    //     ['@babel/plugin-transform-runtime']
    //   ]
    // }
  }
}
