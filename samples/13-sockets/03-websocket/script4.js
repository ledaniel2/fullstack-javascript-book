// Closing the connection
socket.close();

// Event listener for the connection being closed by the server
socket.onclose = (event) => {
    console.log('Connection closed:', event);
};
