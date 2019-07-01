const Actions = {
  nuxtServerInit({
    dispatch
  }) {

    const error = new Error()


    return (
      this.$axios

      .get(`/collections/listCollections?token=${process.env.listCollectionsToken}`)


      .then(() => {

        const promises = []


        promises.push(dispatch('Pages/fetch'))


        return Promise.all(promises)
      })


      .catch(ex => {

        error.message = ex.message


        throw error
      })
    )
  }
}


export {
  Actions as actions
}
