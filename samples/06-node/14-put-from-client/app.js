import express from 'express';

const app = express();
const port = 3000;

let users = {}

app.use(express.json());

app.put('/users/:id', (req, res) => {
  console.log(`PUT /users/${req.params.id}`);
  users[req.params.id] = req.body;
  res.json({ success: true });
  console.log(users);
});

app.delete('/users/:id', (req, res) => {
  console.log(`DELETE /users/${req.params.id}`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}/`);
  console.log('Now run "node client.js N" in another terminal');
});
