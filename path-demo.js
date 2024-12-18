const path = require('path');

// Example Path
const filePath = '/user/local/demo.txt';

console.log('Base Name:', path.basename(filePath));
console.log('Directory Name:', path.dirname(filePath));
console.log('File Extension:', path.extname(filePath));
console.log('Absolute Path:', path.resolve('demo.txt'));
