// Store state
const State = () => {
  return {
    fetched: false,
    pages: []
  }
}

// Store mutations
const Mutations = {
  SET_FETCHED(state, trueFalse) {
    state.fetched = trueFalse
  },

  SET_PAGES(state, pages) {
    state.pages = pages
  }
}

// Store actions
const Actions = {
  fetch({ commit }) {
    // Create error instance, in case we need it later
    const error = new Error()

    // Return promise which resolves once all data has been fetched
    return new Promise(async (resolve, reject) => {
      // Url to fetch, defaults to base url
      const url = `/collections/get/pages?token=${process.env.pagesToken}`

      // Variable to hold our response
      let response = null

      // Try to fetch url
      try {
        response = await this.$axios.get(url)

        // Handle any errors
      } catch (ex) {
        // Set error mesage
        error.message = ex.message

        // Reject promise with error
        reject(error)

        // And exit function
        return
      }

      // Add values from response to pages array
      const pages = response.data.entries

      // Set pages
      commit('SET_PAGES', pages)

      // Set fetched flag
      commit('SET_FETCHED', true)

      // And resolve promise
      resolve()
    })
  }
}

export { State as state }
export { Actions as actions }
export { Mutations as mutations }