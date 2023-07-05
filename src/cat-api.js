import axios from 'axios';

const API_KEY =
  'live_0FMlwtQWqd1vJOoTCMUsZdXlnXzXwE1UK0p53tRYcjOaRrrVwcyCZ36uTOxcxR9C';

const BASE_URL = 'https://api.thecatapi.com/v1';

axios.defaults.headers.common['x-api-key'] = API_KEY;

function fetchBreeds() {
  return axios(`${BASE_URL}/breeds`);
}

function fetchCatByBreed(breedId) {
  return axios(`${BASE_URL}/images/search?breed_ids=${breedId}`);
}

export { fetchBreeds, fetchCatByBreed };
