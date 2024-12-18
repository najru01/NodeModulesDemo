const events = require('events');
const eventEmitter = new events.EventEmitter();

// Listener
eventEmitter.on('myEvent', (data) => {
    console.log('Event Received:', data);
});

// Emit Event
eventEmitter.emit('myEvent', 'Hello from Events Module!');
