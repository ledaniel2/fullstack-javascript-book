import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(path.dirname(process.argv[1]), 'public')));

app.post('/submit', (req, res) => {
  res.send(`You submitted: ${JSON.stringify(req.body)}`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}/`);
  console.log('Submit the form, or load /test.txt');
});
