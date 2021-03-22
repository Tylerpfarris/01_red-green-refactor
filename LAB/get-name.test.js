const getName = require('./get-name');
const spot = { name: 'spot', age: 5, weight: '20 lbs' };
const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };

describe('get name function', () => {
  it('returns the name property from an object', () => {

    const obj1Name = getName(character);
    const obj2Name = getName(spot);

    expect(obj1Name).toEqual(character.name);
    expect(obj2Name).toEqual(spot.name);
  }); 
});
