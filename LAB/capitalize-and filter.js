const capitalizedArr = (arr) => arr.map(el => el.toUpperCase());
const filteredArr = (arr) => arr.filter(el => el.charAt(0) !== 'F');

const capitalizeAndFilter = (arr) => {
  const capArr = capitalizedArr(arr);
  return filteredArr(capArr);
  
};

module.exports = capitalizeAndFilter;
