// Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let newArray = []

for (let i = 0; i < numbers.length; i++) {
  let newValue = 0;

  if (i == numbers.length - 1) {
    newValue = numbers[i] * 2;
  } else {
    newValue = numbers[i] * numbers[i+1];
  }
  
  newArray.push(newValue)
}

console.log(newArray)
