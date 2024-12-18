const { exec } = require('child_process');

// Execute Command
exec('ls', (error, stdout, stderr) => {
    if (error) {
        console.error('Error:', error);
    }
    console.log('Command Output:', stdout);
});
