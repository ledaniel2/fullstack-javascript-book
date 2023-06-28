// Server side
wss.on('connection', (ws, request) => {
    const origin = request.headers.origin;

    if (origin !== 'http://my-trusted-website.com') {
        ws.close();
        return;
    }

    // Proceed with the connection...
});
