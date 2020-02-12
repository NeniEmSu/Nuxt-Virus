// eslint-disable-next-line semi
import {
  InMemoryCache
} from 'apollo-cache-inmemory'
export default function (context) {
  return {
    httpLinkOptions: {
      uri: 'https://barbaresco-admin.w-start.com.ua/api/graphql/query?token=d5993d83d44040c37de0414695e82e',
      credentials: 'same-origin'
    },
    cache: new InMemoryCache(),
    wsEndpoint: null
  }
}
