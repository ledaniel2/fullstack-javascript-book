setInterval(() => {
    fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data));
}, 5000);