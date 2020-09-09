const fetch = require('node-fetch');

async function fetchDog() {
  const DOG_API = 'https://dog.ceo/api/breeds/image/random';
  try {
    const response = await fetch(DOG_API);
    const result = await response.json();
    console.log(result);
  } catch(err) {
    throw new Error('[API] Request failed.')
  }
}

describe('Dog API request', () => {
  const expected = {
    message: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_751.jpg',
    status: 'success'
  }

  fetchDog = jest.fn();

  afterEach(() => {
    fetchDog.mockReset();
  });
  
  it('Request succeeded', () => {
    fetchDog.mockResolvedValue(expected);
    try {
      fetchDog();
      expect(fetchDog).toHaveBeenCalled();
      expect(fetchDog).toHaveBeenCalledTimes(1);
      expect(fetchDog()).resolves.toBe(expected);
      expect(fetchDog).toHaveBeenCalledTimes(2);
 
    } catch(err) {
      console.log(err);
    }
  });

  it('Request failed', () => {
    fetchDog.mockRejectedValue(new Error('request failed'));
    try {
      fetchDog();
      expect(fetchDog).toHaveBeenCalled();
      expect(fetchDog).toHaveBeenCalledTimes(1);
      expect(fetchDog()).rejects.toThrowError('request failed');
      expect(fetchDog).toHaveBeenCalledTimes(2);
      
    } catch(err) {
      console.log(err);
    }
  });
});
