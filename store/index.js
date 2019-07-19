import {
  strictEqual
} from "assert";

import shop from "~/plugins/api/shop";

export const state = () => ({ // = data
  products: [],
  cart: [],
  setCheckoutStatus: null
})

export const getters = { // = computed properties
  productIsInStock() {
    return (product) => {
      return product.inventory > 0;
    }
  },

  availableProducts(state, getters) {
    return state.products.filter(product => product.inventory > 0)
  },

  cartProducts(state) {
    return state.cart.map(cartItem => {
      const product = state.products.find(product => product.id === cartItem.id)
      return {
        title: product.title,
        price: product.price,
        quantity: cartItem.quantity
      }
    })
  },
  cartTotal(state, getters) {
    // For simplicity
    // let total = 0
    // getters.cartProducts.forEach(product => {
    //   total += product.price * product.quantity
    // })
    // return total

    // Using Reduce
    return getters.cartProducts.reduce((total, product) => total += product.price * product.quantity, 0)
  }

}

export const actions = { //methods
  fetchProducts({
    commit
  }) {
    return new Promise((resolve, reject) => {
      // make the call
      // call the setProducts mutaion
      shop.getProducts(products => {
        commit("setProducts", products);
        resolve()
      });
    })

  },

  addProductToCart({
    state,
    getters,
    commit
  }, product) {
    // if (product.inventory > 0) { or we can use
    if (getters.productIsInStock(product)) {
      const cartItem = state.cart.find(item => item.id === product.id)
      if (!cartItem) {
        commit('pushProducctToCart', product.id)
      } else {
        commit('incrementItemQuantity', cartItem)
      }
      commit('decrementProductInventory', product)
    }
  },

  incrementProductQuantityInCart({
    state,
    getters,
    commit
  }, product) {
    // if (product.inventory > 0) { or we can use
    if (getters.productIsInStock(product)) {
      const cartItem = state.cart.find(item => item.id === product.id)

      commit('incrementItemQuantity', cartItem)

      commit('decrementProductInventory', product)
    }
  },

  checkout({
    state,
    commit
  }) {
    shop.buyProducts(
      state.cart,
      () => {
        commit('emptyCart')
        commit('setCheckoutStatus', 'Successful')
      },
      () => {

        commit('setCheckoutStatus', 'Failled')
      },

    )
  }

}

export const mutations = {
  setProducts(state, products) {
    // update products
    state.products = products
  },

  pushProducctToCart(state, productId) {
    state.cart.push({
      id: productId,
      quantity: 1
    })
  },

  incrementItemQuantity(state, cartItem) {
    cartItem.quantity++
  },
  decrementItemQuantity(state, cartItem) {
    cartItem.quantity--
  },
  incrementProductInventory(state, product) {
    product.inventory++
  },
  decrementProductInventory(state, product) {
    product.inventory--
  },

  setCheckoutStatus(state, status) {
    state.checkoutStatus = status
  },

  emptyCart(state) {
    state.cart = []
  }
}
