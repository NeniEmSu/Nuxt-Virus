export default (apolloError, {
  route
}) => {
  // console.log(apolloError)
  // eslint-disable-next-line no-console
  console.log('error: ' + apolloError.message + 'Queried from ' + route.path)
}
