import { useMutation, gql } from '@apollo/client';

const ADD_USER = gql`
  mutation ($name: String!) {
    addUser(name: $name) {
      id
      name
    }
  }
`;

function AddUser() {
  let input;
  const [addUser, { data }] = useMutation(ADD_USER);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addUser({ variables: { name: input.value } });
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
