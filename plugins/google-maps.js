import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDKJciVrAvST8C9SJzwkjmHFnoPM8FwooY',
    libraries: 'places'
  }
})
