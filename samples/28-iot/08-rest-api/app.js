import express from 'express';
const app = express();
const port = 3000;

let data = {};

app.get('/data', (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
