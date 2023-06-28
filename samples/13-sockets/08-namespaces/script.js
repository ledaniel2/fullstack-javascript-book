const namespace1 = io.of('/namespace1');

namespace1.on('connection', (socket) => {
    socket.on('message', (message) => {
        namespace1.emit('message', message);
    });
});
