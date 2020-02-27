// eslint-disable-next-line semi
import {
  InMemoryCache
} from 'apollo-cache-inmemory'
export default function (context) {
  return {
    httpLinkOptions: {
      uri: context.env.API_GQL_LINK,
      credentials: 'same-origin'
    },
    cache: new InMemoryCache(),
    wsEndpoint: null
  }
}
