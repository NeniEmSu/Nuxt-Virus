export const state = () => ({

})

export const mutations = {

}

export const actions = {
  nuxtServerInit({
    dispatch
  }) {

    const error = new Error()


    return (
      this.$axios

      .get(`/collections/listCollections?token=${process.env.listCollectionsToken}`)


      .then(() => {

        const promises = []


        promises.push(dispatch('Posts/fetch')),
          promises.push(dispatch('Products/fetch'))

        return Promise.all(promises)
      })
      .catch(ex => {
        error.message = ex.message
        throw error
      })
    )

  }

}
