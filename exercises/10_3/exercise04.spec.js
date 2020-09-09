// Dentro de um mesmo arquivo, crie três funções:
// A primeira deve receber uma string e retorná-la em caixa alta. 
// A segunda deve também receber uma string e retornar só a primeira letra. 
// A terceira deve receber duas strings e concatená-las. 

//* Faça o mock do arquivo. Faça uma nova implementação para a primeira função, 
//* mas agora ela deve retornar a string em caixa baixa. Para a segunda função, 
//* uma nova implementação deve retornar a última letra de uma string. 
//* A terceira deve receber três strings e concatená-las.

jest.mock('./exercise04.js');
const exc = require('./exercise04.js');

describe('Modify transformToAllCaps()', () => {
  it('should return a lower cased string', () => {
    exc.transformToAllCaps.mockImplementation((string) => string.toLowerCase());

    expect(exc.transformToAllCaps('RANDOM')).toBe('random');
    expect(exc.transformToAllCaps).toHaveBeenCalled();
  });
});

describe('Modify getFirstLetter()', () => {
  it('should return the last letter', () => {
    exc.getFirstLetter.mockImplementation((string) => string[string.length - 1]);

    expect(exc.getFirstLetter('Another')).toBe('r');
    expect(exc.getFirstLetter('TEST')).toBe('T');
    expect(exc.getFirstLetter).toHaveBeenCalled();
    expect(exc.getFirstLetter).toHaveBeenCalledTimes(2);
  });
});
