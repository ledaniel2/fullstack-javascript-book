import fs from 'fs';

fs.readFile('./example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('An error occurred:', err);
    return;
  }
  console.log(data);
});
