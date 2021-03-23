
jest.mock('node-fetch');
const fetch = require('node-fetch');
const fetchQuotes = require('./fetch-quotes.js');


fetch.mockImplementation(() => {
  return Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          character: 'Professor Farnsworth',
          quote: 'Everyone, I have a dramatic announcement. Anyone with a weak heart should\nleave. Goodbye.',
          image: 'https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904014/farnsworth.png'
        }
      ])
  });
});
describe('A function that fetches quotes', () => {
  it('Uses the Futurama Quote API to return a single quote in the right format', async() => {
    
    const quotes = await fetchQuotes();
      
    
    expect(quotes).toEqual(expect.objectContaining({
      character: expect.any(String),
      quote: expect.any(String),
      image: expect.any(String)
    }));
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
