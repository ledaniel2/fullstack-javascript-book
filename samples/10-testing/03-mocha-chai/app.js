import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.use(express.json());

app.get('/users', (req, res) => {
  res.send([{ id: 1, name: 'John Doe' }]);
});

if (process.env.npm_command !== 'test') {
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}/`);
  });
}

export default app;
