export default ({ route, app }) => {
  const animation = route.meta.reduce(
    (animation, meta) => meta.animation || animation,
    'fade-in-up'
  )
  app.store.commit('SET_ANIMATION', animation)
}
