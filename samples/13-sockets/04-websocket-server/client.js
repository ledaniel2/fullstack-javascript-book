import WebSocket from 'ws';

const socket = new WebSocket('ws://localhost:8080');

socket.onopen = () => {
    console.log('Successfully connected to the server');

    // Send a message to the server
    socket.send('Hello, Server!');
};

socket.onmessage = (message) => {
    console.log('Received from server:', message.data);
};

socket.onclose = () => {
    console.log('Disconnected from the server');
};

socket.onerror = (error) => {
    console.log('An error occurred:', error);
};
