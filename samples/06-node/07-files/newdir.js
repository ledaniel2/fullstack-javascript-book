import fs from 'fs';

fs.mkdir('./new-directory', err => {
  if (err) {
    console.error('An error occurred:', err);
    return;
  }
  console.log('Directory created successfully!');
});
