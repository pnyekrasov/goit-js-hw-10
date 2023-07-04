import axios from 'axios';
// import { fetchBreeds } from './cat-api';

const API_KEY =
  'live_0FMlwtQWqd1vJOoTCMUsZdXlnXzXwE1UK0p53tRYcjOaRrrVwcyCZ36uTOxcxR9C';

axios.defaults.headers.common['x-api-key'] = API_KEY;

// const listCatBreeds = document.querySelector('breed - select');

// function fetchCatByBreed(breedId) {
// fetchBreeds();
const breedId = 'abys';
const BASE_URL = 'https://api.thecatapi.com/v1';

axios
  .get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
  .then(response => {
    console.log(response.data[0].breeds[0]);
    return response.data;
  })
  .catch(err =>
    console.log('Oops! Something went wrong! Try reloading the page!')
  );
// }
