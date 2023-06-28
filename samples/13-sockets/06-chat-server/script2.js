// Server side
socket.on('connection', (socket) => {
    socket.emit('welcome', 'Welcome to the server!');

    socket.on('thank you', (message) => {
        console.log(message); // Logs 'Thank you for the welcome!'
    });
});
