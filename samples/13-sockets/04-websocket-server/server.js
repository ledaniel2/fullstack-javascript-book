import WebSocket from 'ws';

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (ws) => {
    console.log('A new client has connected!');

    ws.on('message', (message) => {
        console.log('Received:', message);

        // Echo the message back to the client
        ws.send(`Server received: ${message}`);
    });
});

console.log('WebSocket server is ready and listening on port 8080...');
