import axios from 'axios'

'use strict'

const data = axios.get(
  'https://admin.virus.te.ua/api/collections/get/Product?token=9fc49d5af4dda3c961d71b489540a4&rspc=1',
  JSON.stringify({
    filter: {
      Published: true
    },
    sort: {
      _created: -1
    },
    populate: 1
  }), {
    headers: {
      'Content-Type': 'application/json'
    }
  }
)

module.exports = data
