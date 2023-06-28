const socket = new WebSocket('ws://my-website.com');

socket.onclose = (event) => {
    console.log('WebSocket closed. Attempting to reconnect...');
    setTimeout(() => {
        // Reconnect after 1 second
        socket = new WebSocket('ws://my-website.com');
    }, 1000);
};

socket.onerror = (error) => {
    console.error('WebSocket Error: ', error);
};
