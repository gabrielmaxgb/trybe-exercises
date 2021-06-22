const readline = require('readline-sync');

const { questionInt } = readline;
const number = questionInt("Número da sorte: ");
const sortedNumber = parseInt(Math.random() * 10);

number === sortedNumber
? (
  console.log('Parabéns, número correto!')
)
: console.log(`Ops, não foi dessa vez! Resposta certa: ${ sortedNumber }`);
