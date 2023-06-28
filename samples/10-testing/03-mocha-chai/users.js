let allUsers = [];

export function createUser(user) {
  allUsers.push(user);
}

export function getUser(email) {
  return allUsers.filter((user) => user.email === email)[0];
}

export function clearUsers() {
  allUsers.length = 0;
}
