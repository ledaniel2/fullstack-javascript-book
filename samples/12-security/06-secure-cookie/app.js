import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.cookie('session', '1', { secure: true, httpOnly: true });
  res.send('Hello, world!');
});

app.listen(3000);
