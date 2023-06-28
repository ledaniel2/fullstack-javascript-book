import mysql from 'mysql2';
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'myDatabase'
});
let query

connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

query = "INSERT INTO Users (UserID, FirstName, LastName) VALUES (1, 'John', 'Doe')";
connection.query(query, (error, results) => {
  if (error) throw error;
  console.log(results);
});

query = "SELECT * FROM Users WHERE FirstName = 'John'";
connection.query(query, (error, results) => {
  if (error) throw error;
  console.log(results);
});

query = "UPDATE Users SET LastName = 'Smith' WHERE FirstName = 'John'";
connection.query(query, (error, results) => {
  if (error) throw error;
  console.log(results);
});

query = "DELETE FROM Users WHERE FirstName = 'John'";
connection.query(query, (error, results) => {
  if (error) throw error;
  console.log(results);
});
