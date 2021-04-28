const express = require('express');
const validarGenero = require('./validation.js');


const app = express();
app.use(express.json());

const generos = [
    { id: 1,
      genero: "ação"
    },
    {
        id: 2,
        genero: "romance"
    }
];


// EndPoint para visualizar todos os generos
app.get('/generos', (req, res) => {
    res.send(generos);
});


//EndPoint para criar um novo genero
app.post('/generos/create',(req, res) => {
    const { error } = validarGenero(res.body);
    if(error) {
        return res.status(400).send(error.details[0].message);
    };
    const genero = {
        id: generos.length + 1, //Cria o objeto para o novo curso
        genero: req.body.genero
    };

    generos.push(genero); 
    res.send(genero);
});


//EndPoint para atualizar um genero já existente
app.put('/generos/:id', (req, res) => {
    const genero = generos.find(c => c.id === parseInt(req.params.id));
    if(!genero) {
       return res.status(404).send("O genero com o id informado não foi encontrado")
    };

    //Validação do nome do genero
    const { error } = validarGenero(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);//Caso a validação de algum erro, returna o erro para o cliente
    };

    genero.genero = req.body.genero;
    res.send(genero);

});


//EndPoint para deletar um genero ja existente

app.delete('/generos/:id', (req, res) => {
    //Procura o Curso
    //Se não existir, retorna 404
    const genero = generos.find(c => c.id === parseInt(req.params.id));
    if(!genero) {
       return res.status(404).send("O Genero com o id informado não foi encontrado")
    } 

    //Se encontrar, deleta o curso
    const index = generos.indexOf(genero);
    generos.splice(index, 1);

    res.send(genero);
});





const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}...`)
});