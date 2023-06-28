import fs from 'fs';

const data = 'Hello, Node.js!';

fs.writeFile('./example.txt', data, 'utf8', err => {
  if (err) {
    console.error('An error occurred:', err);
    return;
  }
  console.log('File written successfully!');
});
