import http from 'http';

const server = http.createServer((req, res) => {
    console.log(req);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Node.js\n');
});

server.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000/');
});
