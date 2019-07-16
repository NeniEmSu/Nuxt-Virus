const State = () => {
  return {
    fetched: false,
    products: [],
    inCart: []
  }
}

const Mutations = {
  SET_FETCHED(state, trueFalse) {
    state.fetched = trueFalse
  },

  SET_PRODUCTS(state, products) {
    state.products = products
  },

  ADD_TO_CART(state, _id) {
    state.inCart.push(_id);
  },

  REMOVE_FROM_CART(state, index) {
    state.inCart.splice(index, 1);
  },
}

const Getters = {
  products: state => state.products,
  inCart: state => state.inCart,
}

const Actions = {
  fetch({
    commit
  }) {

    const error = new Error()


    return new Promise(async (resolve, reject) => {

      const url = `/collections/get/Product?token=${process.env.PRODUCT_TOKEN}`


      let response = null

      try {
        response = await this.$axios.get(url)


      } catch (ex) {

        error.message = ex.message


        reject(error)


        return
      }


      const products = response.data.entries


      commit('SET_PRODUCTS', products)


      commit('SET_FETCHED', true)


      resolve()
    })
  },

  addToCart(context, _id) {
    context.commit('ADD_TO_CART', _id);
  },

  removeFromCart(context, index) {
    context.commit('REMOVE_FROM_CART', index);
  },

}

export {
  State as state
}
export {
  Getters as getters
}
export {
  Actions as actions
}
export {
  Mutations as mutations
}
