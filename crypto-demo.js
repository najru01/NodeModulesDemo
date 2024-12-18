const crypto = require('crypto');

// Generate a SHA256 Hash
const hash = crypto.createHash('sha256').update('MySecretPassword').digest('hex');
console.log('SHA256 Hash:', hash);
