const { sum } = require('../functions.js');

describe('sum properly', () => {
  it('should add two numbers', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
});

describe('receive proper parameters', () => {
  it('should throw error when not receiving numbers as parameters', () => {
    expect(() => {
      sum(4,'5');
    }).toThrowError();
  });
  it('error message should be: "parameters must be numbers"', () => {
    expect(() => {
      sum(4,'5');
    }).toThrowError('parameters must be numbers');
  });
});

