import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

const selectCatBreedsEl = document.querySelector('.breed-select');
const waitingEl = document.querySelector('.loader');
const catInforEl = document.querySelector('.cat-info');

selectCatBreedsEl.hidden = true;

fetchBreeds()
  .then(response => {
    selectCatBreedsEl.innerHTML = createListCatBreeds(response.data);
    new SlimSelect({
      select: '.breed-select',
      //   data: [{ text: 'Value 1', value: 'value1' }],
    });
    selectCatBreedsEl.hidden = false;
  })
  .catch(err =>
    Notiflix.Notify.failure(
      'Oops! Something went wrong! Try reloading the page!'
    )
  )
  .finally(() => waitingEl.classList.add('is-hidden'));

function createListCatBreeds(array) {
  return array
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

selectCatBreedsEl.addEventListener('change', event => {
  waitingEl.classList.remove('is-hidden');
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
    .finally(() => waitingEl.classList.add('is-hidden'));
});

function createCartCatInfor({
  url,
  breeds: {
    [0]: { name, description, temperament },
  },
}) {
  return `<img class="cat-photo" src="${url}" alt="${name}">
<div class="cat-cart">
<h2 class="cat-name">${name}</h2>
<p>${description}</p>
<p><b>Temperament:</b> ${temperament}</p>
</div>`;
}
