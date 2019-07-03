const State = () => {
  return {
    fetched: false,
    products: []
  }
}

const Mutations = {
  SET_FETCHED(state, trueFalse) {
    state.fetched = trueFalse
  },

  SET_PRODUCTS(state, products) {
    state.products = products
  }
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

      // Set pages
      commit('SET_PRODUCTS', products)

      // Set fetched flag
      commit('SET_FETCHED', true)

      // And resolve promise
      resolve()
    })
  }
}

export {
  State as state
}
export {
  Actions as actions
}
export {
  Mutations as mutations
}
