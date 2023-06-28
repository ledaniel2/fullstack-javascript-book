// Server side
wss.on('connection', (ws, request) => {
    const cookies = parseCookies(request.headers.cookie);

    if (!authenticate(cookies)) {
        ws.close();
        return;
    }

    // Proceed with the connection...
});
