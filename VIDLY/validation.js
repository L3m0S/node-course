const Joi = require('joi');

const validarGenero = function (course) {
    const schema = Joi.object().keys({ //Cria um schema de como o corpo do objeto e suas propriedades devem ser passadas.
        genero: Joi.string().min(3).required() // define uma validação que voce quer para a propriedade
    });
           
    return schema.validate(course);

}

module.exports = validarGenero; 
