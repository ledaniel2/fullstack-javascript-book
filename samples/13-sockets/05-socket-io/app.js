import http from 'http';
import socketIo from 'socket.io';

const server = http.createServer();
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('A new client has connected!');

    socket.on('message', (message) => {
        console.log('Received:', message);

        // Echo the message back to the client
        socket.emit('message', `Server received: ${message}`);
    });
});

server.listen(8080, () => {
    console.log('Socket.io server is ready and listening on port 8080...');
});
