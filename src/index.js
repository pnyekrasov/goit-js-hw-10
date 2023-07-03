// import axios from 'axios';

// axios.defaults.headers.common['x-api-key'] = API_KEY;

// const listCatBreeds = document.querySelector('breed - select');
// const API_KEY =
//   'live_0FMlwtQWqd1vJOoTCMUsZdXlnXzXwE1UK0p53tRYcjOaRrrVwcyCZ36uTOxcxR9C';

// function fetchBreeds() {
const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
const API_KEY =
  'live_0FMlwtQWqd1vJOoTCMUsZdXlnXzXwE1UK0p53tRYcjOaRrrVwcyCZ36uTOxcxR9C';
fetch(`https://api.thecatapi.com/v1/breeds123?api_key=S{API_KEY}`)
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then(data => {
    console.log('Success', data);
  })
  .catch(err => {
    console.log('Failure', err);
  });

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
