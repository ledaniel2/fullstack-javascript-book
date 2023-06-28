// Jest test
import WebSocket from 'ws';

let wsServer;
let port;

beforeAll(() => {
    wsServer = new WebSocket.Server({ port: 0 });
    port = wsServer.address().port;
});

afterAll(() => {
    wsServer.close();
});

test('client should receive messages from server', (done) => {
    wsServer.on('connection', (ws) => {
        ws.send('Hello from server!');
    });

    const client = new WebSocket(`ws://localhost:${port}`);

    client.on('message', (message) => {
        expect(message).toBe('Hello from server!');
        done();
    });
});
