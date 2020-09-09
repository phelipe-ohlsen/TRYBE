//* Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, 
//* que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. 
//* Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

let randomNumber = () => Math.round(Math.random() * 100);

describe('exercise02', () => {
  beforeEach(() => {
    randomNumber = jest.fn();
    randomNumber.mockImplementation((dividend, divisor) => {
      if (divisor === 0) {
        throw new Error('divisor should not be zero');
      } else {
        return dividend / divisor;
      }
    });
  });
  
  it('should return the proper result', () => {
    expect(randomNumber(4, 2)).toBe(2);
    expect(randomNumber).toHaveBeenCalled();
  });
  
  it('divisor should not be zero', () => {
    expect(() => {
      randomNumber(7, 0);
    }).toThrowError('divisor should not be zero');
  });
});
