io.on('connection', (socket) => {
    console.log('A new client has connected!');

    socket.on('message', (message) => {
        console.log('Received:', message);
    });

    socket.on('disconnect', () => {
        console.log('A client has disconnected');
    });
});
