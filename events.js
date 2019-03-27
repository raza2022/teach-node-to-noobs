// a signal that happen something has happend
const EventEmitter = require('events');
//all capitalize means it's class
//Class:
//
const emitter = new EventEmitter();
// Register a listener
// Listener should be before calling/emitting event
emitter.on('messageLogged', () => {
    console.log("Listener Callsed")
});


//making noise, Raise and event
emitter.emit('messageLogged');

