let id = process.argv[2] ? parseInt(process.argv[2]) : 1;

fetch(`http://localhost:3000/users/${id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Updated name',
        description: 'Updated description'
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => console.error('Error:', error));
