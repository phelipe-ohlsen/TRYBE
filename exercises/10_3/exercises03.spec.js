//* Ainda com a mesma função do primeiro exercício, utilizando o mock, 
//* crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. 
//* Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, 
//* que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

const exercise = {
  randomNumber: () => Math.round(Math.random() * 100),
}

describe('exercise03', () => {
  exercise.randomNumber = jest.fn();
  
  it('should accept three numbers and return their multiplication within each other', () => {
    exercise.randomNumber.mockImplementation((n1, n2, n3) => {
      if (typeof n1 !== 'number'|| typeof n2 !== 'number'|| typeof n3 !== 'number') {
          throw new Error('All arguments must be numbers');
        }
      return n1 * n2 * n3;
    });

    expect(exercise.randomNumber(2, 2, 2)).toBe(8);
    expect(exercise.randomNumber(12, 3, 4)).toBe(144);
    expect(exercise.randomNumber).toHaveBeenCalled();

    expect(() => {
      exercise.randomNumber('2', 12, 7);
    }).toThrowError('All arguments must be numbers');

    expect(() => {
      exercise.randomNumber(17, '12', 9);
    }).toThrowError('All arguments must be numbers');

    expect(() => {
      exercise.randomNumber(14, 37, '147');
    }).toThrowError('All arguments must be numbers');

    expect(() => {
      exercise.randomNumber('one', 'four', 'twenty');
    }).toThrowError('All arguments must be numbers');
  });

  it('should accept a number and return its value doubled', () => {
    exercise.randomNumber.mockReset();
    exercise.randomNumber.mockImplementation((number) => {
      try {
        return (typeof number === 'number') ? number * 2 : (void 0).throwError();
      } catch(err) {
        throw new Error('Argument should be a number')
      } 
    });

      expect(exercise.randomNumber(4)).toBe(8);
      expect(exercise.randomNumber).toHaveBeenCalled();

      expect(() => {
        exercise.randomNumber({});
      }).toThrowError('Argument should be a number');
      expect(exercise.randomNumber).toHaveBeenCalledTimes(2);
  });
});
