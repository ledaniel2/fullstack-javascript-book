import { useQuery, gql } from '@apollo/client';

const GET_USERS = gql`
  query {
    users {
      id
      name
    }
  }
`;

function Users() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return data.users.map(user => (
    <div key={user.id}>
      {user.name}
    </div>
  ));
}
