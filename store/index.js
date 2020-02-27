import fullProducts from '~/gql/products'
export const state = () => ({
  products: null,
  loading: true,
  cart: [],
  setCheckoutStatus: null,
  toast: {
    text: '',
    show: false
  },
  animation: 'fade-in-down'
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
  async fetchProducts ({
    commit
  }) {
    const client = this.app.apolloProvider.defaultClient
    await client.query({
      query: fullProducts
    }).then((products) => {
      commit('setUpProducts', products.data.fullProducts)
      commit('showToast', 'Продукти завантажені')
    })
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
        // ...product,
        _id: product._id,
        name: product.name,
        Price: product.Price,
        path: product.Image.path,
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
