import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDf7ZghK10USNQvPgv0um7a1tFbZ32RA-A',
    libraries: 'places'
  }
})
