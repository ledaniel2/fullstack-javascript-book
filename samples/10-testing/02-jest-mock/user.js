import { fetchFromDatabase } from './database.js';

export async function getUserName(userId) {
  const user = await fetchFromDatabase(userId);
  return user.name;
}
