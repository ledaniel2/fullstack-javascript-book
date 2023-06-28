import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.post('/submit', (req, res) => {
  res.send('Received a POST request!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}/`);
});
