io.on('connection', (socket) => {
    socket.join('room1'); // Join a room

    socket.on('message', (message) => {
        // Broadcast the message to all clients in 'room1'
        io.to('room1').emit('message', message);
    });
});
