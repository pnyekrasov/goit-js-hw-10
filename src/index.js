import axios from 'axios';

const API_KEY =
  'live_0FMlwtQWqd1vJOoTCMUsZdXlnXzXwE1UK0p53tRYcjOaRrrVwcyCZ36uTOxcxR9C';

axios.defaults.headers.common['x-api-key'] = API_KEY;

// const listCatBreeds = document.querySelector('breed - select');

// function fetchBreeds() {
const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
// const API_KEY =
//   'live_0FMlwtQWqd1vJOoTCMUsZdXlnXzXwE1UK0p53tRYcjOaRrrVwcyCZ36uTOxcxR9C';
axios
  .get(`${BASE_URL}`)
  .then(response => {
    console.log(response);
    // if (!response.ok) {
    //   console.log('I');
    // throw new Error(response.status);
    // }
    // errorEl.classList.add("is-hidden");
    console.log(response.data);
    return response.data;
  })
  .catch(err => {
    console.log('Failure', err);
  });

// loader.classList.add("is-hidden");
// Notiflix.Notify.failure("Oops! Something went wrong! Try reloading the page!");
// })
// };

// fetch(`${BASE_URL}?api_key=${API_KEY}`)
//   .then(response => {
//     console.log(response);
//     return response.json();
//   })
//   .then(data => {
//     console.log('Success', data);
//   })
// .catch(err => {
//   console.log('Failure', err);
// });

// }
// fetchBreeds();

// const BASE_URL = 'https://jsonplaceholder.typicode.com';
// axios('${BASE_URL}/')
//   // fetch(`${BASE_URL}/users`)
//   .then(res => {
//     console.log('Success', res);
//     return res.data;
//     // return res.json();
//   })
//   // .then(data => {
//   //   console.log('Success', data);
//   // })
//   .catch(err => {
//     console.log('Failure', err);
//   });

// if (!res.ok) {
//   throw new Error(res.status);
// }

//   return res.json();
// });
// .then(data => {
//   console.log('Success', data);
// })
// .catch(err => {
//   console.log('Failure', err);
// })}
