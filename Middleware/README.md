MIDDDLEWARE Functions:

-São funções que estão no pipeline de processamento que irão receber o Request e processar e então devolver o Response para outras funções na pipeline

-Um exempro de função Middleware é app.use(express.json()); que ira processar o request e caso tenha um json ele ira tranformalo em um objeto Json e atribuilo no req.body.

-Algumas funções Middleware ja estão no pipeline de processamento do EXPRESS, porem conseguimos construir nossas propria funções customizadas middleware.

-Podemos criar middleware functions para autenticação, loguin, autorização etc.