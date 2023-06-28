import io from 'socket.io-client';
const socket = io('http://localhost:3000');

setInterval(() => {
  const data = // gather your data here
  socket.emit('data', data);
}, 1000);
