const assert = require('assert');

//* escreva a função wordLengths aqui

const wordLengths = array => {
  const newArray = [];
  for (const item of array) {
    newArray.push(item.length);
  }
  return newArray;
}

//* 

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);
