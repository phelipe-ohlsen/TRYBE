//* Utilizando as mesmas funções do exercício anterior, 
//* repita a implementação para a primeira função. 
//* Após repetir a implementação, restaure a implementação original e 
//* crie os testes necessários para validar.

const transformToAllCaps = (string) => string.toUpperCase();
const getFirstLetter = (string) => string[0];
const concatStrings = (firstStr, secondStr) => firstStr.concat(secondStr);

module.exports = {
  transformToAllCaps,
  getFirstLetter,
  concatStrings,
}
