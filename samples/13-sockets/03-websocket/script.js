const socket = new WebSocket('ws://example.com/data');

socket.addEventListener('open', (event) => {
    socket.send('Hello Server!');
});

socket.addEventListener('message', (event) => {
    console.log('Message from server: ', event.data);
});
