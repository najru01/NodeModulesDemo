const url = require('url');

// Parse a URL
const myURL = 'http://google.com';
const parsedURL = url.parse(myURL, true);

console.log('Parsed URL:', parsedURL);
console.log('Host:', parsedURL.host);
console.log('Query Parameters:', parsedURL.query);
