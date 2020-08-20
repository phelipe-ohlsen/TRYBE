//* Dado o array de nomes, retorne a quantidade de vezes em que aparecem a letra "a" maiúscula ou minúscula.

const assert = require('assert');
const { worker } = require('cluster');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

function containsA() {
  return names.reduce((acc,word) => {
    word.toLowerCase().split("").forEach(letter => (letter === 'a') ? acc += 1 : acc);
    return acc;
  }, 0)

  //? return names.reduce((acc,word) => acc + word.toLowerCase().split("a").length - 1, 0)
}

assert.deepEqual(containsA(), 20);
