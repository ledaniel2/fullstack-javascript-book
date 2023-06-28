import express from 'express';
import http from 'http';
import socket from 'socket.io';

const app = express();
const httpserver = http.createServer(app);
const io = socket(httpserver);
const port = 3000;

io.on('connection', (socket) => {
  console.log('Device connected');
});

httpserver.listen(port, () => {
  console.log(`listening on *:${port}`);
});
