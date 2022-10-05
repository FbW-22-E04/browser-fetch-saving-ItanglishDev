import View from './View.js';
import Client from './Client.js';

// All of your javascript should go here
console.log("Hello from index.js");


const inputFilm = document.querySelector('#input')
const save = document.querySelector('.btn-save')
const reset = document.querySelector('.btn-reset')


// console.log(newFilm.getMovieData('to live or let die'));

const newFilm = new Client()

// inputFilm.addEventListener('input', () => {
//   newFilm.getMovieData()
// })

const viewOne = new View()

save.addEventListener('click', () => {

  newFilm.getMovieData(inputFilm.value)
    .then(data => {

      viewOne.displayMovieOnPage(data)
    })
})

reset.addEventListener('click', () => {
  viewOne.removeDisplay()
})


