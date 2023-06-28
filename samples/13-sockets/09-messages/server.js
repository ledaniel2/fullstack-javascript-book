socket.emit('message', 'Hello, client!', (confirmation) => {
    console.log(confirmation); // Logs 'Message received'
});
