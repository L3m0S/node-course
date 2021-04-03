//Iniciando no modulo HTTP

const http = require('http');//Requerindo o metodo HTTP

const server = http.createServer((req, res) => { //Usando o jeito mais leigo de se criar um servidor, iremos utilizar o EXPRESS para isso
    if(req.url === '/') {
        res.write('Servidor Ligado')
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3])) //JSON.stringify converte essa array em uma string usando a sintax de um JSON
        res.end();
    }
}); //Criando o servidor


server.listen(3000);//Definindo qual porta nosso servidor ira escutar

console.log('Linstening on port 3000...')