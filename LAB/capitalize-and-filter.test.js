const capitalizeAndFilter = require('./capitalize-and filter');

const testArr = ['hi hows it going', 'whats up', 'fun times', 'left over crack'];
const passingArr = ['HI HOWS IT GOING', 'WHATS UP', 'LEFT OVER CRACK'];

describe('capitalize and filter function', () => {
  it('takes and array of strings, capitalizes all strings and filters out any string that starts with the letter f', () => {
    const filteredArray = capitalizeAndFilter(testArr);
      
    expect(filteredArray).toEqual(passingArr);
  });
});
