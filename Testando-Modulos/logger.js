const EventEmitter = require('events');

var url = 'http//mylogger.io/log/teste';

class Logger extends EventEmitter { //herda todas as funçoes do EventEmitter
    log(message) {
        console.log(message);
    
        //Emite um sinal
        this.emit('Logging', { id: 1, data: message});
    }
}



//module.exports.log = log; //Exports the function call log , Object
module.exports = Logger; // Exports just a functio , not a Object
//module.exports.url = url; //Exports the variable call url