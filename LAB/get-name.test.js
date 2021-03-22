// const spot = { name: 'spot', age: 5, weight: '20 lbs' };

const getName = require('./get-name');

const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };


describe('get name function', () => {
  it('returns the name property from an object', () => {

    const objName = getName(character);
      
    expect(objName).toEqual(character.name);
  }); 
});