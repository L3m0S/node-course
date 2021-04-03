// Node Module System
// -Variaveis não ficam disponiveis no escopo Global.

//As a best practice, when load a module using 'require' we define as a CONST
//const Logger = require('./testandoModulos'); // Load the selected module

//log('Say hello')

//Testando o modulo path

const path = require('path');

var pathObj = path.parse(__filename)

//console.log(pathObj)//Retorna o um objeto com informaçoes sobre o Path do arquivo app.js


//Testando o modulo OS
//esse modulo nos permite ver algumas informaçoes sobre o sistema operacional
const os = require('os'); 

var totalMemory = os.totalmem()
var totalUpTime = os.uptime()

//console.log(`Total Memory: ${totalMemory}`)
//console.log(`Total UpTime: ${totalUpTime}`)


//Testando o modulo fs
//serve para trabalhar com files no node

const fs = require('fs');

const files = fs.readdirSync('./');

//console.log(files)

fs.readdir('./', function(err, files) { //nos retorna todos os arquivos no path selecionado
    //if (err) console.log('Error', err);//lidando com erros  da maneira mais leiga possivel
    //else console.log('Result', files);
})


//Testando o modulo events

const EventEmitter = require('events');
const Logger = require('./logger');
//       =>EventEmitter se escreve com as letras maiusculas pois ele é uma classe.

//instanciando a classe EventEmitter
const logger = new Logger();

//Cria um Listener
logger.on('Logging', (arg) => {
    console.log('Listener Called', arg) //Quando esse Listener escutar o 'sinal' do emmiter abaixo, ele vai diparar o console.log
})

logger.log('message');
