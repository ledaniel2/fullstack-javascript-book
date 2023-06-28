import express from 'express';
import fs from 'fs';

const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log('Time:', Date.now());
  console.log('Request Method:', req.method);
  console.log('Request URL:', req.originalUrl);
  next();
});

app.get('/', (req, res, next) => {
  fs.readFile('/file-does-not-exist', (err, data) => {
    if (err) {
      next(err);  // Pass the error to the error-handling middleware
    } else {
      res.send(data);
    }
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}/`);
});
