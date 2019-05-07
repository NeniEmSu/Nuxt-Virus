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
         hid: 'keywords',
         name: 'keywords',
         content: "детейлинг центр, автодетейлинг, детейлинг студия, автомобильный детейлинг, химчистка авто, чистка салону авто, хімчистка автомобіля, полировка фар, полірування авто, поліровка машини, полировка торпеды, поліровка торпеди"

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
     },
     {
       src: "/js/main.js",
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
