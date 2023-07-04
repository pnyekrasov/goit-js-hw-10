import axios from 'axios';

const API_KEY =
  'live_0FMlwtQWqd1vJOoTCMUsZdXlnXzXwE1UK0p53tRYcjOaRrrVwcyCZ36uTOxcxR9C';

axios.defaults.headers.common['x-api-key'] = API_KEY;

// const listCatBreeds = document.querySelector('breed - select');

// function fetchBreeds() {
const BASE_URL = 'https://api.thecatapi.com/v1/breeds';

axios
  .get(`${BASE_URL}`)
  .then(response => {
    console.log(response);
    console.log(response.data);
    return response.data;
  })
  .catch(err =>
    console.log('Oops! Something went wrong! Try reloading the page!')
  );
