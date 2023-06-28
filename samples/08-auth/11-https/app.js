import fs from 'fs';
import https from 'https';
import express from 'express';

const app = express();

// ... set up your middleware and routes here ...

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

https.createServer(options, app).listen(443);
