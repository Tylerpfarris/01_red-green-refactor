const filteredArr = (arr) => arr.filter(el => el.charAt(0) !== 'F');


const capitalizeAndFilter = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toUpperCase();
  }
  return filteredArr(arr);
  
};

module.exports = capitalizeAndFilter;
