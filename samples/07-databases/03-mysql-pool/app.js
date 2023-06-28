import mysql from 'mysql2';
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'myDatabase'
});

pool.getConnection((error, connection) => {
  if (error) throw error; 

  // Use the connection
  connection.query('SELECT * FROM myTable', (error, results) => {
    // When done with the connection, release it back to the pool
    connection.release();

    if (error) throw error;
    console.log(results);
  });
});
