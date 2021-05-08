//Promises
    //-Promises literalmente não prometem que iram trazer um resultado de alguma função assincrona
    //-Promises podem ter 3 estados:
    //-Pending: a promisse esta esperando a resolução da função asyncrona
    //-Fulfilled: É quando a função foi completa e retornou um resultado sem erro
    //-Rejected: Função assincrona retornou algum erro para a promise

const p = new Promise((resolve, reject) => {

    //Utilizar alguma operação assincrona
    //...
    setTimeout(() => {
        //resolve(1); // utilizamos o resolve para enviar o valor da promisse para o usuario
        reject(new Error('message'));// Reject é utilizado caso tenha algum erro.
    }, 2000)
    

    //
});

p
    .then(result => console.log('Resultado: ', result))
    .catch(err => console.log('Erro:', err.message));