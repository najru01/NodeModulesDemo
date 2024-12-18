const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'stream-demo.txt');

// Write Stream
const writeStream = fs.createWriteStream(filePath);
writeStream.write('Streaming data into a file...');
writeStream.end();

// Read Stream
writeStream.on('finish', () => {
    const readStream = fs.createReadStream(filePath, 'utf8');
    readStream.on('data', (chunk) => {
        console.log('Read Stream Chunk:', chunk);
    });
});
