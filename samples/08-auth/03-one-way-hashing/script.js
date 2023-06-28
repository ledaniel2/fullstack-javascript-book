import crypto from 'crypto';

const password = 'myPassword';
const hash = crypto.createHash('sha256').update(password).digest('hex');

console.log(hash);
