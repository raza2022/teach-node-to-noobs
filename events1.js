// a signal that happen something has happend
const EventEmitter = require('events');
//all capitalize means it's class
//Class:
//
const emitter = new EventEmitter();

emitter.on('logging', (args) => {
    console.log("Excrcise")
})


// Register a listener
// Listener should be before calling/emitting event
emitter.on('messageLogged', (arg) => {
    emitter.emit('logging', arg);
    console.log("Listener Callsed", arg)
});


//making noise, Raise and event
emitter.emit('messageLogged', {
    id: 1,
    url: 'http:.com'
});

