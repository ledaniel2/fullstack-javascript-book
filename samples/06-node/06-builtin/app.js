import os from 'os';
import path from 'path';

console.log('OS platform:', os.platform());

const filePath = '/usr/local/bin/node';
console.log('Base file name:', path.basename(filePath));
