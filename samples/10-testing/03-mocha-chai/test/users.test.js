import { createUser, getUser } from '../users.js';
import chai from 'chai';
const expect = chai.expect;

describe('createUser', () => {
  it('should create a user and retrieve it', async () => {
    const user = { name: 'John Doe', email: 'john@example.com' };
    await createUser(user);

    const retrievedUser = await getUser(user.email);
    expect(retrievedUser.name).to.equal(user.name);
    expect(retrievedUser.email).to.equal(user.email);
  });
});
