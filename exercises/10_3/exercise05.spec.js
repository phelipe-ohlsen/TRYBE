//* Utilizando as mesmas funções do exercício anterior, 
//* repita a implementação para a primeira função. 
//* Após repetir a implementação, restaure a implementação original e 
//* crie os testes necessários para validar.

const exc = require('./exercise05.js');

describe('Modify transformToAllCaps()', () => {
  it('should return a lower cased string', () => {
    const mockFuncToAllCaps = jest
      .spyOn(exc, 'transformToAllCaps')
      .mockImplementation((string) => string.toLowerCase());

    expect(mockFuncToAllCaps('RANDOM')).toBe('random');
    expect(mockFuncToAllCaps).toHaveBeenCalled();

    exc.transformToAllCaps.mockRestore();
    expect(exc.transformToAllCaps('notlowercase')).toBe('NOTLOWERCASE')
  });
});
