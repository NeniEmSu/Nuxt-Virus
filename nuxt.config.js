 import webpack from 'webpack'

 const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
   router: {
     base: '/Nuxt-Virus/'
   }
 } : {}

 export default {
   mode: 'universal',
   server: {
     port: 8383,
     host: '0.0.0.0',
   },

   //  router: {
   //    base: '/Nuxt-Virus/'
   //  },

   head: {
     title: "Детейлінг центр Virus Тернопіль. Хімчистка, полірування, реставрація авто",
     htmlAttrs: {
       lang: "uk",
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
         content: "Детейлінг студія Virus - комплексний догляд за Вашим авто. Передпродажна підготовка, хімчистка салону, полірування кузова, керамічне покритя, перетяжка руля, реставрація шкіри."
       },
       {
         hid: 'keywords',
         name: 'keywords',
         content: "детейлинг центр, автодетейлинг, детейлинг студия, автомобильный детейлинг, химчистка авто, чистка салону авто, хімчистка автомобіля, полировка фар, полірування авто, поліровка машини, полировка торпеды, поліровка торпеди"

       },
       {
         hid: 'apple-mobile-web-app-title',
         name: "apple-mobile-web-app-title",
         content: "Virus detailing"

       },
       {
         hid: 'application-name',
         name: "application-name",
         content: "Virus detailing"

       },
       {
         hid: 'msapplication-TileColor',
         name: "msapplication-TileColor",
         content: "#da532c"

       },
       {
         hid: 'msapplication-config',
         name: "msapplication-config",
         content: "img/icons/browserconfig.xml"

       },
       {
         hid: 'theme-color',
         name: "theme-color",
         content: "#E32124"

       },
       {
         hid: 'og:title',
         name: "og:title",
         property: "og:title",
         content: "Virus детейлінг"

       },
       {
         hid: 'og:site_name',
         name: "og:site_name",
         property: "og:site_name",
         content: "Virus детейлінг"

       },
       {
         hid: 'og:url',
         name: "og:url",
         property: "og:url",
         content: "https://virus.te.ua/"

       },
       {
         hid: 'og:type',
         name: "og:type",
         property: "og:type",
         content: "website"

       },
       {
         hid: 'og:locale',
         name: "og:locale",
         property: "og:locale",
         content: "uk_UA"

       },
       {
         hid: 'og:description',
         name: "og:description",
         property: "og:description",
         content: "Детейлінг студія Virus - комплексний догляд за Вашим авто. Передпродажна підготовка, хімчистка салону, полірування кузова, керамічне покритя, перетяжка руля, реставрація шкіри"

       },
       {
         hid: 'og:image',
         name: "og:image",
         property: "og:image",
         content: "https://virus.te.uaimg/virus_og.jpg"

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
         rel: 'manifest',
         href: '/site.webmanifest'
       },
       {
         rel: 'mask-icon',
         href: 'https://virus.te.ua/assets/icons/safari-pinned-tab.svg',
         color: "#e32124"
       },
       {
         rel: "shortcut icon",
         href: "/favicon.ico"
       },
       {
         rel: "stylesheet",
         href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
       },
       {
         rel: "stylesheet",
         href: "https://use.fontawesome.com/releases/v5.8.1/css/all.css"
       },
       {
         rel: "stylesheet",
         href: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
       },
       {
         rel: "stylesheet",
         href: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
       },
       {
         rel: "stylesheet",
         href: "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css"
       },
       {
         rel: "stylesheet",
         href: "https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Condensed:400,700|Roboto:400,500,700,900"
       }
     ]
   },

   /*
    ** Customize the progress-bar color
    */
   loading: {
     color: '#e32124'
   },

   /*
    ** Global CSS
    */
   css: [],

   /*
    ** Plugins to load before mounting the App
    */
   plugins: [{
     src: '~plugins/ga.js',
     ssr: false
   }],

   /*
    ** Nuxt.js modules
    */
   modules: [
     ['@nuxtjs/google-analytics', {
       id: 'UA-62479125-9'
     }]
   ],


   script: [{
       src: "https://code.jquery.com/jquery-3.2.1.min.js",
       type: "text/javascript"
     },
     {
       src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
       type: "text/javascript"
     },
     {
       src: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
       type: "text/javascript"
     },
     {
       src: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js",
       type: "text/javascript"
     },
     {
       src: "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js",
       type: "text/javascript"
     }
   ],

   /*
    ** Build configuration
    */
   build: {
     /*
      ** You can extend webpack config here
      */
     plugins: [
       new webpack.ProvidePlugin({
         '$': 'jquery',
       })
     ],

     extend(config, ctx) {

     }
   }
 }
