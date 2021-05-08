const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send(courses); 
})

router.get('/:id', (req, res) => {
    res.send(courses[req.params.id - 1]);
})

const courses = [
    {id: 1, name: 'Course1'},
    {id: 2, name: 'Course2'},
    {id: 3, name: 'Course3'}
]
    
router.get('/lista/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course)  res.status(404).send("O curso com o id informado não foi encontrado")
    res.send(course);
});



router.post('/', (req, res) => {
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


router.put('/:id', (req, res) => {
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



router.delete('/:id', (req, res) => {
    
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

module.exports = router;