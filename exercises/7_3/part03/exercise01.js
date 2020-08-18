const assert = require('assert');

const greetPeople = (people) => {
  let array = [];
  let greeting = 'Hello ';

  for (const person of people) {
    array.push(greeting + person)
  }
  return array;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);

// console.log(greetPeople(parameter))