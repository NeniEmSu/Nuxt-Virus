import {
  strictEqual
} from "assert";

import shop from "~/plugins/api/shop";
import {
  getData,
  setData
} from 'nuxt-storage/local-storage';

// let cart = window.localStorage.getItem('cart');
// let cartCount = window.localStorage.getItem('cartCount');

let cart = getData('cart');
let cartCount = getData('cartCount');

export const state = () => ({ // = data
  products: [],
  cart: cart ? JSON.parse(cart) : [],
  cartCount: cartCount ? parseInt(cartCount) : 0,
  // cart: [],
  // cartCount: 0,
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
    commit('saveCart');
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
    commit('saveCart');
  }

}

export const mutations = {
  setProducts(state, products) {
    // update products
    state.products = products
  },

  removeFromCart({
    state,
    commit
  }, product) {
    let index = state.cart.indexOf(product);

    if (index > -1) {
      let item = state.cart[index];
      state.cartCount -= item.quantity;

      state.cart.splice(index, 1);
    }
    commit('saveCart');
  },

  pushProducctToCart(state, productId) {
    state.cart.push({
      id: productId,
      quantity: 1
    })
    state.cartCount++;
  },

  incrementItemQuantity(state, cartItem) {
    cartItem.quantity++
    state.cartCount++;
  },
  decrementItemQuantity(state, cartItem) {
    cartItem.quantity--
    state.cartCount--;
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
    state.cartCount = 0

  },

  saveCart(state) {
    setData('cart', JSON.stringify(state.cart));
    setData('cartCount', state.cartCount);
    // window.localStorage.setItem('cart', JSON.stringify(state.cart));
    // window.localStorage.setItem('cartCount', state.cartCount);
  }

}
