// ! Exercise 02
// * Crie uma função que receba uma frase e retorne qual a maior palavra.

const getLongest = (array) => {
  const wordsLength = array.map(x => x.length);
  let longestWord = 0;

  for (const item of wordsLength) {
    if (item > longestWord) {
      longestWord = item;
    }
  }

  return wordsLength.indexOf(longestWord)
}

function LongestWord(phrase) {
  const arrayOfWords = phrase.split(' ');

  const longestIndex = getLongest(arrayOfWords);

  return arrayOfWords[longestIndex];
  
}

console.log(LongestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))

// ! I forced the use of '.indexOf' and '.map' in order to practice them.
