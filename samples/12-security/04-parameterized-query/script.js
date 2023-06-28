import pg from 'pg-promise';
const pgp = pg();

const db = pgp('postgres://username:password@localhost:5432/my_database');

let username = "' OR '1'='1";
let password = "' OR '1'='1";

db.one('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password])
  .then(user => {
    console.log(user);
  })
  .catch(error => {
    console.error(error);
  });
