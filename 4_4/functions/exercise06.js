// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function sum(integer) {
  let sum = 0;

  for (let i = 0; i <= integer; i++) {
    sum += i;
  }
  
  return sum;

}


const results = sum(5);

console.log(results);
