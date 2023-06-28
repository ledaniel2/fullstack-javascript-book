import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://api.example.com/graphql',
  cache: new InMemoryCache()
});

// Query
client.query({
  query: gql`
    query GetData {
      data {
        id
        value
      }
    }
  `
}).then(result => console.log(result));
