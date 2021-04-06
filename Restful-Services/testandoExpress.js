// Express é um framework para criação de webservers

//Carregar o Express
const express = require('express');

const app = express(); //armazenando o objeto express()

//Metodos HTTP: app.get() / app.post() / app.put() / app.delete()


app.get('/', (req, res) => { //Recebe dois parametros, o primeiro é a URL e o segundo é uma função de callback.
    res.send('Hello World')
}); //A função de callback vai sempre receber os parametros 'req' e o 'res'.


app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]); // retorna esse array ao acessar o http://localhost:3000/api/courses
})

app.get('/api/courses/:id', (req, res) => {//Utilizamos o ':id' para ler o id passado pelo cliente na URL.
    res.send(req.params.id);//Utilizamos o 'req.params' para acessar o parametro passado, neste caso foi o ':id'.
})//podemos utilizar na URL as query strings como por exemplo:  url/:id?sortBy=id, para ordenar por ID
//No caso da query strings utilizamos o 'req.query'
const port = process.env.PORT || 3000; 
//Usaremos um variavel de ambiente para guardar a porta que sera utilizada.

app.listen(port, () => { //app.listen serve para escolher qual a porta que o servidor ira ouvir.
    console.log(`Ouvindo na porta ${port}....`)
}); //Primeiro paramentro do listen é a porta a ser ouvida e o segundo é uma função callback.



