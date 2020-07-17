// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function arrayOfNumbers(array) {
  let lowestValueIndex = 0;

  for (index in array) {
    if (array[index] < array[lowestValueIndex]) {
      lowestValueIndex = index;
    }
  }

  return lowestValueIndex;
}

console.log(arrayOfNumbers([2, 4, 6, 7, 10, 0, -3]))