import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular-link-http';

export function createApollo(httpLink: HttpLink) {
  return {
    link: httpLink.create({ uri: 'https://api.example.com/graphql' }),
    cache: new InMemoryCache(),
  };
}
