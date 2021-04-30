const config = require('config');//Nos ajuda a definir configuração para diferentes Env
const express = require('express');
const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const Joi = require('joi');
const logger = require('./logger');
const helmet = require('helmet');
const morgan = require('morgan');


const app = express(); 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); //Recebe URL payloads e converte em um objeto Json.
app.use(express.static('public')); //Middleware para retornar conteudos estaticos.
app.use(helmet()); // Best practice para ajudar na segurança da aplicação

//Debugging

dbDebugger('Conected to database...');
startupDebugger('Startup debugger....')














console.log(`NODE_ENV: ${process.env.NODE_ENV}`);//A variave process.env.NODE_ENV serve para definirmos o ambiente, testes, desenvolvimento etc.
console.log(`app: ${app.get('env')}`) // utilizados o app.get para acessar o env que esta setado.
//Utilizamos o SET NODE_ENV no terminal para mudar o valor da variavel de ambiente.

//Config
console.log("Aplication name: " + config.get('name'));
console.log('Mail server: ' + config.get('mail.host'))


if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.log('Morgan enabled....')
}
app.use(logger);//Função middleware adiconada na pipeline

app.get('/', (req, res) => { 
    res.send('Hello World')
});


app.get('/api/courses', (req, res) => {
    res.send(courses); 
})

app.get('/api/courses/:id', (req, res) => {
    res.send(courses[req.params.id - 1]);
})





const courses = [
    {id: 1, name: 'Course1'},
    {id: 2, name: 'Course2'},
    {id: 3, name: 'Course3'}
]
    
app.get('/api/courses/lista/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course)  res.status(404).send("O curso com o id informado não foi encontrado")
    res.send(course);
});



app.post('/api/courses', (req, res) => {
    const { error } = validadeCourse(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course); 
    res.send(course); 
});





app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course)  {
        return res.status(404).send("O curso com o id informado não foi encontrado")
    }
    const { error } = validadeCourse(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    };

    course.name = req.body.name;
    res.send(course);
});



app.delete('/api/courses/:id', (req, res) => {
    
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) {
       return res.status(404).send("O curso com o id informado não foi encontrado")
    } 

    
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});


function validadeCourse(course) {
    const schema = Joi.object().keys({ 
        name: Joi.string().min(3).required()
    });
           
    return schema.validate(course);

}





const port = process.env.PORT || 3000; 

app.listen(port, () => { 
    console.log(`Ouvindo na porta ${port}....`)
}); 

