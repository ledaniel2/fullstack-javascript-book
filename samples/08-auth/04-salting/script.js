import bcrypt from 'bcrypt';
const saltRounds = 10;
const password = 'myPassword';
let hashed;

bcrypt.hash(password, saltRounds, (err, hash) => {
  hashed = hash;
  console.log(hash);
});

setTimeout(() => {
  bcrypt.compare('myPassword', hashed, (err, result) => {
    console.log('Passwords match: ' + result);
  });
}, 2000);
