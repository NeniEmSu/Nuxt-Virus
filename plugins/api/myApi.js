import products from './products.js'

export default {
  getProducts: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products)
      }, 200)
    })
  },
  products: (action, productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productId)
      }, 100)
    })
  },
  buyProducts (cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      Math.random() > 0.5 || navigator.userAgent.includes('PhantomJS')
        ? cb()
        : errorCb()
    }, 3000)
  },

  postFormToDB (form) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(form), 1000)
    })
  }
}
