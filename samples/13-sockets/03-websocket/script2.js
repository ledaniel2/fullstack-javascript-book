// Connecting to the server
const socket = new WebSocket('ws://localhost:8080');

// Event listener for the connection opening
socket.onopen = (event) => {
    console.log('Connection opened:', event);
};
