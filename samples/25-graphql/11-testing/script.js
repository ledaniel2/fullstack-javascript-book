import { createTestClient } from 'apollo-server-testing';
import { ApolloServer, gql } from 'apollo-server';
import { resolvers, typeDefs } from '../src/schema';

const server = new ApolloServer({ typeDefs, resolvers });
const { query, mutate } = createTestClient(server);

describe('Queries', () => {
  it('fetches list of users', async () => {
    const GET_USERS = gql`
      query {
        users {
          id
          name
        }
      }
    `;

    const res = await query({ query: GET_USERS });
    expect(res).toMatchSnapshot();
  });
});
