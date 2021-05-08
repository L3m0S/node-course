//Criando uma promise ja resolvida

const p = Promise.resolve({id:1});
p.then(result => console.log(result));

const p1 = Promise.reject(new Error('Reason for rejection...'));
p1.catch(error => console.log(error));

//usando promises em paralelo

const p2 =  new Promise ((resolve,reject) => {
    setTimeout(() => {
        console.log('Async 1....')
        reject(new Error('Algo falhou'))
    },2000)
})

const p3 =  new Promise ((resolve) => {
    setTimeout(() => {
        console.log('Async 2....')
        resolve(2)
    },2000)
})

Promise.all([p2, p3])
    .then(result => console.log(result))
    .catch(err => console.log('error:', err.message))