import { createUser, getUser, clearUsers } from '../users.js';
import chai from 'chai';
const expect = chai.expect;

describe('users', () => {
  beforeEach(async () => {
    // Set up test data
    await createUser({ name: 'John Doe', email: 'john@example.com' });
  });

  afterEach(async () => {
    // Clear test data
    await clearUsers();
  });

  it('should always fetch a valid user', async () => {
    const retrievedUser = await getUser('john@example.com');
    expect(retrievedUser.name).to.equal('John Doe');
    expect(retrievedUser.email).to.equal('john@example.com');
  });
});
