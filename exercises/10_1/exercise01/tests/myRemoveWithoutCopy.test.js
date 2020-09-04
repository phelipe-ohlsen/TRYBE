const { myRemoveWithoutCopy } = require('../functions.js');

describe('', () => {
  const array = [1, 2, 3, 4];
  it('myRemoveWithoutCopy([1, 2, 3, 4], 3 should return [1, 2, 4])', () => {
    expect(myRemoveWithoutCopy(array, 3)).toEqual([1, 2, 4]);
  });

  it('myRemoveWithoutCopy([1, 2, 3, 4], 3) should NOT return [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy(array, 3)).not.toEqual([1, 2, 3, 4]);
  });
});

test('The array used as param should be altered properly', () => {
  const array = [1, 2, 3, 4];
  myRemoveWithoutCopy(array, 3);
  expect(array).toEqual([1, 2, 4]);
});
