io.on('connection', (socket) => {
    socket.on('message', (message) => {
        // Broadcast the message to all other clients
        socket.broadcast.emit('message', message);
    });
});
