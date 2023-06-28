const eventSource = new EventSource('https://api.example.com/data');

eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log(data);
};
