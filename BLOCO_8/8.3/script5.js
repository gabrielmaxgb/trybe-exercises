
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA() {
  // escreva seu código aqui
  return names.reduce((prev, actual) => prev.concat(actual)).split('').reduce((acc, element) => (element === 'A' || element === 'a') ? acc + 1 : acc, 0);
}

assert.deepEqual(containsA(), 20);