import jwt from 'jsonwebtoken';

const user = { id: 123, name: 'John Doe' };
const token = jwt.sign(user, 'your_secret_key', { expiresIn: '1s' });

console.log(token);

setTimeout(() => {
  jwt.verify(token, 'your_secret_key', (err, decoded) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        console.log('Token expired');
      } else {
        console.log('Token not valid');
      }
    } else {
      console.log('Token valid');
      console.log(decoded);
    }
  });
}, 2000);
