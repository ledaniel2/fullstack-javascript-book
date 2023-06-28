// Client side
socket.on('welcome', (message) => {
    console.log(message); // Logs 'Welcome to the server!'

    socket.emit('thank you', 'Thank you for the welcome!');
});
