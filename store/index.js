import myApi from '~/plugins/api/myApi.js'

export const state = () => ({
  products: null,
  loading: true,
  cart: [],
  setCheckoutStatus: null,
  toast: {
    text: '',
    show: false
  },
  animation: 'fade-in-up'
})

export const getters = {
  cartSize (state) {
    return state.cart.length
  },

  cartTotalAmount (state) {
    return state.cart.reduce((total, product) => {
      return total + product.Price * product.quantity
    }, 0)
  },

  toast (state) {
    return state.toast
  }
}

export const actions = {
  async nuxtServerInit ({
    commit
  }, {
    app,
    error
  }) {
    const response = await app.$axios.get(
      'https://admin.virus.te.ua/api/collections/get/Product?token=9fc49d5af4dda3c961d71b489540a4&sort[_created]=-1&rspc=1',
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

    if (!response.data.entries[0]) {
      return error({
        message: '404 Page not found',
        statusCode: 404
      })
    }

    commit('setUpProducts', response.data.entries)
    commit('showToast', 'Продукти завантажені')
  },

  addToCart ({
    commit
  }, productId) {
    commit('addToCart', productId)
    commit('showToast', 'Додано з кошика')
  },

  removeFromCart ({
    commit
  }, productId) {
    commit('removeFromCart', productId)
    commit('showToast', 'Видалено з кошика')
  },

  deleteFromCart ({
    commit
  }, productId) {
    commit('deleteFromCart', productId)
    commit('showToast', 'Видалено з кошика')
  },

  checkout: ({
    state,
    commit
  }) => {
    myApi.buyProducts(
      state.cart,
      () => {
        commit('emptyCart')
        commit('setCheckoutStatus', 'Successful')
      },
      () => {
        commit('setCheckoutStatus', 'Failled')
      }
    )
  }
}

export const mutations = {
  setUpProducts (state, productsPayload) {
    state.loading = true
    state.products = productsPayload
    state.loading = false
  },

  // SET_DATA (state, dataPayload) {
  //   state.data = dataPayload
  // },

  addToCart (state, productId) {
    const product = state.products.find(product => product._id === productId)

    const cartProduct = state.cart.find(product => product._id === productId)

    if (cartProduct) {
      cartProduct.quantity++
    } else {
      state.cart.push({
        ...product,
        stock: product.quantity,
        quantity: 1
      })
    }

    product.quantity--
  },

  removeFromCart (state, productId) {
    const product = state.products.find(product => product._id === productId)

    const cartProduct = state.cart.find(product => product._id === productId)

    cartProduct.quantity--

    product.quantity++
  },

  deleteFromCart (state, productId) {
    const product = state.products.find(product => product._id === productId)

    const cartProductIndex = state.cart.findIndex(
      product => product._id === productId
    )

    product.quantity = state.cart[cartProductIndex].stock

    state.cart.splice(cartProductIndex, 1)
  },

  showToast (state, toastText) {
    state.toast.show = true
    state.toast.text = toastText
  },

  hideToast (state) {
    state.toast.show = false
    state.toast.text = ''
  },

  setCheckoutStatus (state, status) {
    state.checkoutStatus = status
  },

  emptyCart (state) {
    state.cart = []
    state.cartCount = 0
  },

  SET_ANIMATION (state, animation) {
    state.animation = animation
  }
}
