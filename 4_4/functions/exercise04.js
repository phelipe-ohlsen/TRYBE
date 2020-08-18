// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function listOfNames(array) {
  let longestName = {
    name: "",
    nameLength: 0,
  };

  for (index in array) {
    if (array[index].length > longestName.nameLength) {
      longestName.name = array[index];
      longestName.nameLength = array[index].length;
    }
  }

  return longestName.name
}

const results = listOfNames(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])

console.log(results)
