// eslint-disable-next-line semi
import {
  InMemoryCache
} from 'apollo-cache-inmemory'
export default function (context) {
  return {
    httpLinkOptions: {
      uri: 'https://admin.virus.te.ua/api/graphql/query?token=f929e164a70313603d610994dcb4d2',
      credentials: 'same-origin'
    },
    cache: new InMemoryCache(),
    wsEndpoint: null
  }
}
