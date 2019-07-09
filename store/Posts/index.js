const State = () => {
  return {
    fetched: false,
    posts: []
  }
}

const Mutations = {
  SET_FETCHED(state, trueFalse) {
    state.fetched = trueFalse
  },

  SET_POSTS(state, posts) {
    state.posts = posts
  }
}

const Actions = {
  fetch({
    commit
  }) {

    const error = new Error()


    return new Promise(async (resolve, reject) => {

      const url = `/collections/get/posts?token=${process.env.apiToken}`


      let response = null

      try {
        response = await this.$axios.get(url)


      } catch (ex) {

        error.message = ex.message


        reject(error)


        return
      }


      const posts = response.data.entries


      commit('SET_POSTS', posts)


      commit('SET_FETCHED', true)


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
