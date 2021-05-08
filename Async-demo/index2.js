console.log('Before');
// getUser(1, (user) => {
//   getRepositories(user.gitHubUsername, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(commits);
//     })
//   })
// });
console.log('After');

//Resolvendo o CallbackHell com promises

// getUser(1)
//   .then(user => getRepositories(user.gitHubUsername))
//   .then(repos => getCommits(repos[0]))
//   .then(commits => console.log('Commits', commits))
//   .catch(err => console.log('ERROR:', err.message));


//Escrevendo as promisses acima com Async and await
async function mostrarCommits() {
  try {
    const user = await getUser(1)
    const repos = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repos[0])
    console.log(commits);
  }
  catch (err) {
    console.log('Error', err.message)
  }
}

mostrarCommits()


function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading a user from a database...');
      resolve({ id: id, gitHubUsername: 'mosh' });
    }, 2000);
  });
};


function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      // resolve(['repo1', 'repo2', 'repo3']);
      reject(new Error('não foi possivel pegar os repositorios'))
    }, 2000);
  });
};

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['commit']);
    }, 2000);
  }); 
};