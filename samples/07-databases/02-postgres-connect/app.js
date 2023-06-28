import pg from 'pg';
const connection = new pg.Client({
  host: 'localhost',
  user: 'postgres',
  password: 'your_password',
  database: 'myDatabase'
});

connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});
