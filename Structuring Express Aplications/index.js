const express = require('express');
const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const Joi = require('joi');
const helmet = require('helmet');
const morgan = require('morgan');
const courses = require('./routes/courses');


const app = express(); 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); //Recebe URL payloads e converte em um objeto Json.
app.use(express.static('public')); //Middleware para retornar conteudos estaticos.
app.use(helmet()); // Best practice para ajudar na segurança da aplicação
app.use('/api/courses', courses)
//Debugging

dbDebugger('Conected to database...');
startupDebugger('Startup debugger....')

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);//A variave process.env.NODE_ENV serve para definirmos o ambiente, testes, desenvolvimento etc.
console.log(`app: ${app.get('env')}`) // utilizados o app.get para acessar o env que esta setado.
//Utilizamos o SET NODE_ENV no terminal para mudar o valor da variavel de ambiente.


if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.log('Morgan enabled....')
}


const port = process.env.PORT || 3000; 

app.listen(port, () => { 
    console.log(`Ouvindo na porta ${port}....`)
}); 