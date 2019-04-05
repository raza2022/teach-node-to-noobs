const EventEmitter = require('day1/events');

const emitter = new EventEmitter();


const  Logger = require('./newLogger');
const logger = new Logger();

logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg)
});
logger.log('message');