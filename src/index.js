import Notiflix from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

const selectCatBreedsEl = document.querySelector('.breed-select');
const waitingTextEl = document.querySelector('.loader');
const catInforEl = document.querySelector('.cat-info');

selectCatBreedsEl.hidden = true;

fetchBreeds()
  .then(response => {
    selectCatBreedsEl.innerHTML = createListCatBreeds(response.data);
    selectCatBreedsEl.hidden = false;
  })
  .catch(
    Notiflix.Notify.failure(
      'Oops! Something went wrong! Try reloading the page!'
    )
  )
  .finally((waitingTextEl.hidden = true));

function createListCatBreeds(array) {
  return array
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

selectCatBreedsEl.addEventListener('change', event => {
  waitingTextEl.hidden = false;
  const choiceBreed = event.target.value;

  fetchCatByBreed(choiceBreed)
    .then(response => {
      catInforEl.innerHTML = createCartCatInfor(response.data[0]);
    })
    .catch(err =>
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      )
    )
    .finally((waitingTextEl.hidden = true));
});

function createCartCatInfor({
  url,
  breeds: {
    [0]: { name, description, temperament },
  },
}) {
  return `<img src="${url}" alt="${name}">
<h2>${name}</h2>
<p>${description}</p>
<h3>Temperament: </h3>
<p>${temperament}</p>`;
}
