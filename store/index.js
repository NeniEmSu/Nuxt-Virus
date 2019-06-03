// Store actions
const Actions = {
    nuxtServerInit({ dispatch }) {
      // Create error instance, in case we need it later
      const error = new Error()
  
      // Return promise which resolves once all always required data has been fetched
      return (
        this.$axios
          // Make sure we're acquainted with the server, here it will use the listCollectionsToken we created earlier
          .get(`/collections/listCollections?token=${process.env.listCollectionsToken}`)
  
          // Then, fetch any other required data
          .then(() => {
            // Array of promises
            const promises = []
  
            // Add fetch pages promise
            promises.push(dispatch('Pages/fetch'))
  
            // Return promise which resolves once all promises have resolved
            return Promise.all(promises)
          })
  
          // Handle any errors
          .catch(ex => {
            // Set error mesage
            error.message = ex.message
  
            // And throw error
            throw error
          })
      )
    }
  }
  
  // Exports
  export { Actions as actions }