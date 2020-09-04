const { myRemove } = require('../functions.js');

describe('should not return an array with specified number', () => {
  it('myRemove([1, 2, 3, 4], 3) should return [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual(
      expect.arrayContaining([1, 2, 4]),
    );

  });
  
  it('myRemove([1, 2, 3, 4], 5) should return [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
  
  it('should not return the exactly same array', () => {
    const array = [1, 2, 3, 4];
    expect(myRemove(array, 3)).not.toEqual(
      expect.arrayContaining(array),
    );
  });

  it('should not change alter the array used as a param', () => {
    const array = [1, 2, 3, 4];
    myRemove(array, 4);
    expect(array).toEqual([1, 2, 3, 4]);
  });
});
