const { obj1, obj2, obj3 } = require('../functions.js');

describe('compare two objects to check if they are identical', () => {
  it('obj1 is identical to obj2', () => {
    expect(obj1).toEqual(obj2);
  });

  it('obj1 and ob2 are NOT identical to obj3', () => {
    expect(obj1).not.toEqual(obj3);
    expect(obj2).not.toEqual(obj3);
  });
});
