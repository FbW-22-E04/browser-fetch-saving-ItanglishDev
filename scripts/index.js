import View from './View.js';
import Client from './Client.js';

// All of your javascript should go here
console.log("Hello from index.js");


const inputFilm = document.querySelector('#input')
const save = document.querySelector('.btn-save')
const reset = document.querySelector('.btn-reset')
inputFilm.focus()
const filmArray = []
const newFilm = new Client()
const viewOne = new View()

localStorage.setItem('film', newFilm)


save.addEventListener('click', () => {

  // const localStorageItem = localStorage.getItem('inputFilm')
  // const parsed = JSON.parse(localStorageItem)
  // filmArray.push(...parsed)
  // if (!localStorageItem.include(inputFilm.value))

  newFilm.getMovieData(inputFilm.value)
    .then(data => {
      viewOne.displayMovieOnPage(data)
      filmArray.push(data)
      localStorage.setItem('inputFilm', JSON.stringify(filmArray))

    })
  // console.log(filmArray);

  // filmArray.push(inputFilm.value)
})

reset.addEventListener('click', () => {
  viewOne.removeDisplay()
  localStorage.clear()
  filmArray.length = 0
})
console.log(filmArray);
