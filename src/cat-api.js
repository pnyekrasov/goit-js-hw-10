import axios from 'axios';
import Notiflix from 'notiflix';

const API_KEY =
  'live_0FMlwtQWqd1vJOoTCMUsZdXlnXzXwE1UK0p53tRYcjOaRrrVwcyCZ36uTOxcxR9C';

const BASE_URL = 'https://api.thecatapi.com/v1';

axios.defaults.headers.common['x-api-key'] = API_KEY;

function fetchBreeds() {
  return axios
    .get(`${BASE_URL}/breeds`)
    .then(response => {
      return response.data;
    })
    .catch(err =>
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      )
    );
}

function fetchCatByBreed(breedId) {
  return axios
    .get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
    .then(response => {
      console.log(response.data[0].breeds[0]);
      return response.data;
    })
    .catch(err =>
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      )
    );
}

export { fetchBreeds, fetchCatByBreed };
