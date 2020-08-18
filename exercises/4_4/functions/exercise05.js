// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function arrayOfNumbers(array) {

  let globalCounter = 0;
  let compare;
  let mostOccurring;

  for (let i = 0; i < array.length; i++) {
    let counter = 0;

    compare = array[i];

    for (let j = 0; j < array.length; j++) {
      if (compare === array[j]) {
        counter += 1;
      }

      if (counter > globalCounter) {
        globalCounter = counter;
        mostOccurring = array[j]
      }

    }

  }

  return mostOccurring

}


const results = arrayOfNumbers([2, 3, 2, 5, 8, 2, 3])

console.log(results)
