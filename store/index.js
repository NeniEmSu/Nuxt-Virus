import {
  strictEqual
} from "assert";

import {
  getData,
  setData
} from 'nuxt-storage/local-storage';

import myApi from '~/plugins/api/myApi'

let cart = getData('cart');



export const state = () => ({ // = data
  products: null,
  cart: cart ? JSON.parse(cart) : [],
  setCheckoutStatus: null,
  toast: {
    text: "",
    show: false
  }
})

export const getters = { // = computed properties

  cartSize: (state) => {
    return state.cart.length;
  },

  cartTotalAmount: (state) => {
    return state.cart.reduce((total, product) => {
      return total + (product.price * product.quantity);
    }, 0);
  },

  toast: (state) => {
    return state.toast;
  }
}


export const actions = { //methods

  fetchProducts: ({
    commit
  }) => {
    //simulating a fake ajax request to fetch products from database
    myApi.getProducts().then((products) => {
      //passing the products recieved from response as a payload to the mutation
      commit("setUpProducts", products);
      commit("showToast", "Продукти завантажені");
    });
  },

  addToCart: ({
    commit
  }, productId) => {
    myApi.products("add", productId).then((productId) => {
      commit("addToCart", productId);
      commit("showToast", "Додано з кошика");
    });
  },

  removeFromCart: ({
    commit
  }, productId) => {
    myApi.products("remove", productId).then((productId) => {
      commit("removeFromCart", productId);
      commit("showToast", "Видалено з кошика");
    });
  },

  deleteFromCart: ({
    commit
  }, productId) => {
    myApi.products("delete", productId).then((productId) => {
      commit("deleteFromCart", productId);
      commit("showToast", "Видалено з кошика");
    });

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

  setUpProducts: (state, productsPayload) => {
    //sets the state's  products property to the products array recieved as payload
    state.products = productsPayload;
  },

  addToCart: (state, productId) => {
    //find the product in the products list
    let product = state.products.find((product) => product.id === productId);
    //find the product in the cart list
    let cartProduct = state.cart.find((product) => product.id === productId);

    if (cartProduct) {
      //product already present in the cart. so increase the quantity
      cartProduct.quantity++;
    } else {
      state.cart.push({
        // product newly added to cart
        ...product,
        stock: product.quantity,
        quantity: 1,
      });
    }
    //reduce the quantity in products list by 1
    product.quantity--;
    commit('saveCart');
  },

  removeFromCart: (state, productId) => {
    //find the product in the products list
    let product = state.products.find((product) => product.id === productId);
    //find the product in the cart list
    let cartProduct = state.cart.find((product) => product.id === productId);

    cartProduct.quantity--;
    //Add back the quantity in products list by 1
    product.quantity++;
    commit('saveCart');
  },

  deleteFromCart: (state, productId) => {
    //find the product in the products list
    let product = state.products.find((product) => product.id === productId);
    //find the product index in the cart list
    let cartProductIndex = state.cart.findIndex((product) => product.id === productId);
    //srt back the quantity of the product to intial quantity
    product.quantity = state.cart[cartProductIndex].stock;
    // remove the product from the cart
    state.cart.splice(cartProductIndex, 1);
    commit('saveCart');
  },

  showToast: (state, toastText) => {
    state.toast.show = true;
    state.toast.text = toastText;
  },

  hideToast: (state) => {
    state.toast.show = false;
    state.toast.text = "";
  },

  setCheckoutStatus(state, status) {
    state.checkoutStatus = status
  },

  emptyCart(state) {
    state.cart = []
    state.cartCount = 0
    commit('saveCart');
  },

  saveCart(state) {
    setData('cart', JSON.stringify(state.cart));
    setData('cartCount', state.cartCount);
  }
}
