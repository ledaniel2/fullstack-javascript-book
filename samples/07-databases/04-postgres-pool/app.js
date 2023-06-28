import pg from 'pg';
const pool = new pg.Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'your_password',
  database: 'myDatabase'
});

pool.connect((error, client, done) => {
  if (error) throw error;
  
  // Use the connection
  client.query('SELECT * FROM myTable', (error, res) => {
    // When done with the connection, release it back to the pool
  done();

  if (error) throw error;
    console.log(res.rows);
  });
});
