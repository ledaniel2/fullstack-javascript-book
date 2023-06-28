import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/json', (req, res) => {
  res.json({ message: 'Hello, Express!' });
});

app.get('/html', (req, res) => {
  res.send('<h1>Hello, Express!</h1>');
});

app.get('/notfound', (req, res) => {
  res.status(404).send('Sorry, we cannot find that!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}/`);
  console.log('You can try /json, /html, /notfound');
});
