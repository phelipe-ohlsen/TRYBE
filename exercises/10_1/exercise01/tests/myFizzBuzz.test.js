const { myFizzBuzz } = require('../functions.js');

describe('should return the expected results', () => {
  it('myFizzBuzz(15) should return "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz')
  });
  
  it('myFizzBuzz(9) should return "fizz"', () => {
    expect(myFizzBuzz(9)).toMatch('fizz')
  });
  
  it('myFizzBuzz(10) should return "buzz"', () => {
    expect(myFizzBuzz(10)).toMatch('buzz')
  });
  
  it('myFizzBuzz(7) should return 7', () => {
    expect(myFizzBuzz(7)).toBe(7)
  });

});