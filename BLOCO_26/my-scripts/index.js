const readline = require('readline-sync');
const { keyInSelect } = readline;

const scripts = ['avgSpeed', 'gambleGame', 'imc'];
const index = keyInSelect(scripts, 'Qual script deseja executar? ');

const script = require(`./${scripts[index]}`);
