// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function arrayOfNumbers(array) {
  let highestValueIndex = 0;

  for (index in array) {
    if (array[index] > array[highestValueIndex]) {
      highestValueIndex = index;
    }
  }

  return highestValueIndex;
}

console.log(arrayOfNumbers([2, 3, 6, 7, 10, 1]))