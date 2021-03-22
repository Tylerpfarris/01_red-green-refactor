const copyAndPush = require('./copy-and-push');
const numbers = [1, 2, 3];
const orgArr = numbers;

describe('copy and push function', () => {
  it('returns a new array with all the items in  the original array and a new item pushed to the end', () => {
    const newArr = copyAndPush(numbers, 4);
   
    expect(newArr).toEqual(...orgArr, 4);
  });
    
  it('should not mutate the original array', () => {

    expect(orgArr).toEqual(numbers);
  }) ;
});
