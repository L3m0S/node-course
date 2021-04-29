

function log(req, res, next) {//Utilizamos app.use para inserir a middleware function em nossa pipeline
    console.log('Loggin...')
    next(); //Sem essa linha de comando nossa aplicação ficaria travada nessa Middleware
    //Utilizamos o next() para passar o controle para a proxima função da pipeline
}

module.exports = log;