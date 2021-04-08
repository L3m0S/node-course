
const express = require('express');
const Joi = require('joi');

const app = express(); 

app.use(express.json());

app.get('/', (req, res) => { 
    res.send('Hello World')
}); 


app.get('/api/courses', (req, res) => {
    res.send(courses); 
})

app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
})



//Trabalhando com HTTP GET Requests

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


//Trabalhando com HTTP POST Requests
//Precisamos validar o INPUT do metodo PUT para evitar problemas.
//Vamos utilizar a biblioteca JOI

app.post('/api/courses', (req, res) => { 
    const schema = Joi.object().keys({ //Cria um schema de como o corpo do objeto e suas propriedades devem ser passadas.
        name: Joi.string().min(3).required() // define uma validação que voce quer para a propriedade
    });
           
    const result = schema.validate({name: req.body.name}); // Valida o input da key "name"
    if (result.error) {
        res.status(400).send(result.error.details[0].message);//Caso a validação de algum erro, returna o erro para o cliente
        return
    }

    console.log(result);
    const course = {
        id: courses.length + 1, 
        name: req.body.name
    };
    courses.push(course);
    res.send(course); 
});





const port = process.env.PORT || 3000; 

app.listen(port, () => { 
    console.log(`Ouvindo na porta ${port}....`)
});

