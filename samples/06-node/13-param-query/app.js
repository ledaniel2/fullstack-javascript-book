import express from 'express';

const app = express();
const port = 3000;

app.get('/users/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

app.get('/search', (req, res) => {
  res.send(`Search for: ${req.query.q}`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}/`);
  console.log('Navigate to /users/N or /search?q=X');
});
