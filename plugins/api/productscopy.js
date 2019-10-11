import axios from 'axios'

export default ({
  app,
  error
}) => {
  const {
    data
  } = app.$axios.get(
    'https://admin.virus.te.ua/api/collections/get/Product?token=9fc49d5af4dda3c961d71b489540a4&rspc=1',
    JSON.stringify({
      filter: {
        Published: true
      },
      sort: {
        _created: 1
      },
      populate: 1
    }), {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )

  if (!data.entries[0]) {
    return error({
      message: '404 Page not found',
      statusCode: 404
    })
  }

  return {
    products: data.entries
  }
}
