//Programação sincrona X assincrona

//Codigo assincrono
console.log("Antes")//O tread executa esse console.log

//const user = getUser(1)// Não ira funcionar pois a função getUser é executada apenas 2 segundos após ela for chamada.

//Função utilizando callback
getUserCallback(1, (user) => {
    console.log('User:', user);

    getRepositories(user.gitHubUsername, (repos) => {
        console.log('Repos: ', repos);
    });
});


console.log('Depois')//a tread executa essa linha

//E após 2 segundos é executada a função setTimeout.

//Resultado do codigo acima é: 
// Antes
// Depois
// Lendo um usuario no banco de dados...

function getUser(id) {
    setTimeout(() => { //o tread agenda essa função para daqui a dois 2  segundos e passa para a proxima função
        console.log('Lendo um usuario no banco de dados...');
        return {id: id, gitHubUsername: 'lemos'};
    }, 2000);
};

function getRepositories(username) { //Função sem callback
    return ['repo1', 'repo2', 'repo3'];
}

//Callbacks

function getUserCallback(id, callback) {
    setTimeout(() => { //o tread agenda essa função para daqui a dois 2  segundos e passa para a proxima função
        console.log('Lendo um usuario no banco de dados...');
        callback({id: id, gitHubUsername: 'lemos'});
    }, 2000);
};

function getRepositories(username, callback) { //Função sem callback
    setTimeout(() => {
        console.log('Buscando repositorios....');
        callback(['repo1', 'repo2', 'repo3'])
    }, 2000);
}



//Async/awayt