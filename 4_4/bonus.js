// Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

function convert(string) {
  string = string.split("")

  let finalSum = 0;
  
  for (let i = 0; i < string.length; i++) {
    switch(string[i]){
      case "I":
        string[i] = 1;
        break;
        
        case "V":
          string[i] = 5;
          break;

      case "X":
        string[i] = 10;
        break;

      case "L":
        string[i] = 50;
        break;

      case "C":
        string[i] = 100;
        break;

      case "D":
        string[i] = 500;
        break;

      case "M":
        string[i] = 1000;
        break;

    }
  }

  for (let i = string.length-1; i >= 0; i--) {
    let sum = 0;

    if (string[i] > string[i-1]) {
      sum = string[i] - string[i-1];
      finalSum += sum;
      i--;
    } else {
      finalSum += string[i];
    }

  }

  return finalSum;

}
 

let result = convert("MMCCCXCIV") // 2394

console.log(result)