// Sending a message to the server
socket.send('Hello, Server!');

// Listening for messages from the server
socket.onmessage = (event) => {
    console.log('Message from server:', event.data);
};
