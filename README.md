# nuxt-Virus

> Virus car detailing project with full blog connected to Cockpit cms via api, full shop consuming data from cockpit cms api and full range of services using Vuejs & Nuxt js for ssr, and proper seo integration.

## Links

Deployed from the branch after runing npn run generate && npm run deploy: https://virus-car-detailing-branched.netlify.com/

Deployed automatically by netlify from npm run generate on netlify console:  https://virus-car-detailing.netlify.com/

## Technologies

1. Vue js
2. Nuxt js
3. Bootstrap
4. Bootstrap Vue
5. Axios
6. Nuxt caching
7. Google Maps
8. VueX
9. PWA
10. Owl carousel
11. JivoChat
12. Vuemask
13. Lazyload

## Deployment Setup

### Options
1. Direct generated html files deploy from the gh-pages branch holding dist file content.
2. Deploy main branch with npm run build or npm run generate as stated below.

### nginx

- [Using nginx as a reverse proxy](https://nuxtjs.org/faq/nginx-proxy/)
- [Blog post on the deployment process to nginx](https://www.waysquare.com/creating-vue-js-application-using-nuxt-js-and-nginx/)
- [Deploy nuxt app (Vue.js) with Pm2 and Nginx](https://kenyaappexperts.com/blog/deploy-vue-js%E2%80%8A-with-pm2-and-nginx/)

<!-- Given the .env page is populated with relevant data -->



Note:

1. Server port points to

```bash
server: {
    port: 8383,
    host: '0.0.0.0'
  },
```

as updated in nuxt.config.js coment section out or update places it's needed on nginx deployment.

2. Your webserver is not aware of the routing inside your Vue application, so you'll need to have Nginx point all requests to the application to the index.html and after that Vue routing will take over. The documentation can be found [here](https://router.vuejs.org/guide/essentials/history-mode.html).

The required configuration snippet copied from there is the following:

```bash
location / {
  try_files $uri $uri/ /index.html;
}
```

Or if using nginx proxy, The documentation can be found [here](https://nuxtjs.org/faq/nginx-proxy/)

#### Nginx Proxy

For Nginx you can add a proxy using the follwing location block:

```
server {
    location / {
        proxy_pass http://http://127.0.0.1:8383;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### Process Manager

In production you need a process manager to keep the Node server alive forever:

```bash
# install pm2 process manager
npm install -g pm2

# startup script
pm2 startup

# start process
pm2 start npm --name "virus" -- run start

# save process list
pm2 save

# list all processes
pm2 l
```

After each deploy you'll need to restart the process:

```bash
pm2 restart virus 
```

Make sure to read the [Nuxt docs](https://nuxtjs.org/).

More Information on deploying to Nginx


```bash
map $sent_http_content_type $expires {
    "text/html"                 epoch;
    "text/html; charset=utf-8"  epoch;
    default                     off;
}

server {
    listen          80;             # the port nginx is listening on
    server_name     your-domain;    # setup your domain here

    gzip            on;
    gzip_types      text/plain application/xml text/css application/javascript;
    gzip_min_length 1000;

    location / {
        expires $expires;

        proxy_redirect                      off;
        proxy_set_header Host               $host;
        proxy_set_header X-Real-IP          $remote_addr;
        proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto  $scheme;
        proxy_read_timeout          1m;
        proxy_connect_timeout       1m;
        proxy_pass                          http://127.0.0.1:8383; # to 3000 if port had been updated in nuxtconfig. # set the adress of the Node.js instance here
    }
}
```

1. Deploy command

   Build command:

```bash
   $ npm run generate


  #  If not all data is available then


   $ node ./create-env.js && npm run generate
```

2. If the ./create-env.js command is used make sure to add env variables to the site server.

3. Deployed dirctory: dist

4. Build for production shoukd be ready.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8383 
# To reset the local host to localhost:3000 change line 12 to 15 in nuxt config file

server: {
     port: 8383, # to 3000
    host: '0.0.0.0'
  },

# or delete contents of above stated line.

$ npm run dev

# build for production and launch server on local device case server will listen to localhost 8383
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
