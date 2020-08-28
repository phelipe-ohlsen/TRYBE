const API_URL = 'https://icanhazdadjoke.com/';

const object = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const fetchJoke = async () => {
  return fetch(API_URL, object)
    .then(response => response.json())
    .then(data => data.joke)
}

const generateJoke = async () => {
  const h2 = document.getElementById('jokeContainer');
  try {
    const joke = await fetchJoke(API_URL)
  
    h2.innerText = joke;
  } catch (err) {
    h2.innerText = 'Error on generating joke.'
  }
};

window.onload = () => generateJoke();
