const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'demo.txt');

fs.writeFileSync(filePath, 'Hello, FS Module!');
console.log('File created with content.');

const data = fs.readFileSync(filePath, 'utf-8');
console.log(`File content: ${data}`);

fs.unlinkSync(filePath);
console.log('File deleted.');
