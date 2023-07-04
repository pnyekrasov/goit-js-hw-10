import axios from 'axios';

const API_KEY =
  'live_0FMlwtQWqd1vJOoTCMUsZdXlnXzXwE1UK0p53tRYcjOaRrrVwcyCZ36uTOxcxR9C';

axios.defaults.headers.common['x-api-key'] = API_KEY;

// const listCatBreeds = document.querySelector('breed - select');

// function fetchBreeds() {
const BASE_URL = 'https://api.thecatapi.com/v1/breeds123';

axios
  .get(`${BASE_URL}`)
  .then(response => {
    console.log(response);
    // if ((response.status = 404)) {
    //   throw new Error(response.status);
    // }

    console.log(response.data);
    return response.data;
  })
  .catch(console.warn);

// fetch(`${BASE_URL}?api_key=${API_KEY}`)
//   .then(response => {
// if (!response.ok) {
//   throw new Error(response.status);
// }
///     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
// .catch(console.warn);
// });

// }
// fetchBreeds();
