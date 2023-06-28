socket.on('message', (message, callback) => {
    console.log(message); // Logs 'Hello, client!'
    callback('Message received');
});
