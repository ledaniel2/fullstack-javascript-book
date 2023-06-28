import http from 'http';
import socketIo from 'socket.io';

const server = http.createServer();
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('A new client has connected!');

    socket.on('chat message', (message) => {
        console.log('Received:', message);

        // Broadcast the message to all connected clients
        io.emit('chat message', `Client said: ${message}`);
    });
});

server.listen(8080, () => {
    console.log('Chat server is ready and listening on port 8080...');
});
