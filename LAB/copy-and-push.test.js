const numbers = [1, 2, 3];

const copyAndPush = require('./copy-and-push');

describe('copy and push function', () => {
  it('returns a new array with all the items in  the origonal array and a new item pushed to the end', () => {
    const newArr = copyAndPush(numbers, 4);

    expect(newArr).toEqual(...numbers, 4);
  });
});
