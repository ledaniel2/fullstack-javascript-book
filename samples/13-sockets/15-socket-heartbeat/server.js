// Server side
ws.on('message', (message) => {
    if (message === 'ping') {
        ws.send('pong');
    }
});
