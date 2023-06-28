import mysql from 'mysql2';
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'myDatabase'
});

connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});
