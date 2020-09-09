const fetch = require('node-fetch');

async function fetchDog() {
  const DOG_API = 'https://dog.ceo/api/breeds/image/random';
  try {
    const response = await fetch(DOG_API);
    const result = await response.json();
    console.log(result);
  } catch(err) {
    throw new Error(err)
  }
}

// fetchDog();

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
    fetchDog.mockResolvedValue('request succeeded');

    fetchDog();
    expect(fetchDog).toHaveBeenCalled();
    expect(fetchDog).toHaveBeenCalledTimes(1);
    expect(fetchDog()).resolves.toBe('request succeeded');
    expect(fetchDog).toHaveBeenCalledTimes(2);
  });

  it('Request failed', () => {
    fetchDog.mockRejectedValue('request failed')

    fetchDog();
    expect(fetchDog).toHaveBeenCalled();
    expect(fetchDog).toHaveBeenCalledTimes(1);
    expect(fetchDog()).rejects.toBe('request failed');
    expect(fetchDog).toHaveBeenCalledTimes(2);
  });

});