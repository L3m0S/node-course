const express = require('express');
const generos = require('./routes/generos');


const app = express();
app.use(express.json());
app.use('/api/generos', generos)



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}...`)
});