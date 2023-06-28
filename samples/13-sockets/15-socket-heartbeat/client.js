// Client side
setInterval(() => {
    if (socket.readyState === WebSocket.OPEN) {
        socket.send('ping');
    }
}, 5000); // send a ping every 5 seconds
