import express from 'express';

const app = express();

app.use((req, res, next) => {
  res.setHeader('X-Frame-Options', 'DENY');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000);
