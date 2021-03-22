const fetchQuotes = require('./fetch-quotes');


describe('A function that fetches quotes', () => {
  it('Uses the Futurama Quote API to return a single quote in the right format', async() => {
      
    const quotes = await fetchQuotes();
      
    expect(quotes).toEqual(expect.objectContaining({
      character: expect.any(String),
      quote: expect.any(String),
      image: expect.any(String)
          
    }));
  });
});
