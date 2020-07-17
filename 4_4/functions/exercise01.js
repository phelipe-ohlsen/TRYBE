// Crie uma função que receba uma string e retorne true se for um palíndromo, 
// ou false, se não for

function isPalindrome(word) {

  let reverseWord = word.split("").reverse().join("");

  if (reverseWord === word) {
    return true;
  } else {
    return false;
  }

}

// isPalindrome("arara")
console.log(isPalindrome("arara"))