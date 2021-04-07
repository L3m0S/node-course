// Express é um framework para criação de webservers

//Carregar o Express
const express = require('express');

const app = express(); //armazenando o objeto express()

app.use(express.json()); // retorna uma middleware, utilizamos o app.use para adicionar essa funcao no request process pipeline

//Metodos HTTP: app.get() / app.post() / app.put() / app.delete()


app.get('/', (req, res) => { //Recebe dois parametros, o primeiro é a URL e o segundo é uma função de callback.
    res.send('Hello World')
}); //A função de callback vai sempre receber os parametros 'req' e o 'res'.


app.get('/api/courses', (req, res) => {
    res.send(courses); // retorna esse array ao acessar o http://localhost:3000/api/courses
})

app.get('/api/courses/:id', (req, res) => {//Utilizamos o ':id' para ler o id passado pelo cliente na URL.
    res.send(req.params.id);//Utilizamos o 'req.params' para acessar o parametro passado, neste caso foi o ':id'.
})//podemos utilizar na URL as query strings como por exemplo:  url/:id?sortBy=id, para ordenar por ID
//No caso da query strings utilizamos o 'req.query'


//Trabalhando com HTTP GET Requests

const courses = [
    {id: 1, name: 'Course1'},
    {id: 2, name: 'Course2'},
    {id: 3, name: 'Course3'}
]
    
app.get('/api/courses/lista/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course)  res.status(404).send("O curso com o id informado não foi encontrado")//404 - Object not found. Erro retornado caso não encontre o curso com o id informado
    res.send(course); // Se encontrar o curso, retorna as informaçoes do curso com o id informado.
});


//Trabalhando com HTTP POST Requests

app.post('/api/courses', (req, res) => {//esse Request iremos ler o objeto que estara no body da request e usar as propriedades para criar um novo objeto no array de cursos
    const course = {
        id: courses.length + 1, //Cria o objeto para o novo curso
        name: req.body.name
    };
    courses.push(course); // Insere o objeto de curso criado em nosso aray de cursos
    res.send(course); //Retorna o corpo do novo objeto criado para o cliente
});





const port = process.env.PORT || 3000; //Para setar uma variavel de ambiente, utilizamos o comando set VARIAVEL=valor no terminal.
//Usaremos um variavel de ambiente para guardar a porta que sera utilizada.


app.listen(port, () => { //app.listen serve para escolher qual a porta que o servidor ira ouvir.
    console.log(`Ouvindo na porta ${port}....`)
}); //Primeiro paramentro do listen é a porta a ser ouvida e o segundo é uma função callback.



