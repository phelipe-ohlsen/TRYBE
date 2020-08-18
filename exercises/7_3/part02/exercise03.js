const assert = require('assert');

//* escreva a função addAllNumbers aqui

const addAllNumbers = array => {
  let result = 0;
  for (const item of array) {
    result += item;
  }
  return result;
}

//* 

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllNumbers(numbers);

assert.strictEqual(typeof addAllNumbers, 'function');
assert.strictEqual(output, expected);