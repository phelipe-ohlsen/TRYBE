// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. 
// Considere que a string ending sempre será menor que a string word.

function verify(word, ending) {

  let result = true;
  
  word = word.split("").reverse();

  ending = ending.split("").reverse();

  let compare = [];

  for (let i = 0; i < ending.length; i++) {
    compare.push(word[i]);
  }

  for (let i = 0; i < ending.length; i++) {
    if (!(ending[i] == compare[i])) {
      result = false;
    }
  }

  return result;

}

const results = verify("joaofernando", "fernan");

console.log(results);
