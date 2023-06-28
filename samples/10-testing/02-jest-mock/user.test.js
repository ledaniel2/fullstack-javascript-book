import { jest } from '@jest/globals';

jest.unstable_mockModule('./database.js', () => ({
  fetchFromDatabase: jest.fn().mockResolvedValue({ name: 'John Doe' }),
  getNumberOfUsers: jest.fn(() => 1),
}));

const { fetchFromDatabase, getNumberOfUsers } = await import('./database.js');
const { getUserName } = await import('./user.js');

test('getUserName returns correct name', async () => {
  const userName = await getUserName(1);
  expect(userName).toBe('John Doe');
});

test('getNumberOfUsers returns correct number', async () => {
  const numberOfUsers = getNumberOfUsers();
  expect(numberOfUsers).toBe(1);
});
