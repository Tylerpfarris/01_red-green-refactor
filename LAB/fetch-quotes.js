const fetch = require('node-fetch');

const fetchQuotes = async() => {
  const res = await fetch('http://futuramaapi.herokuapp.com/api/quotes/1');
  const body = await res.json();

  return body[0];
};

module.exports = fetchQuotes;

