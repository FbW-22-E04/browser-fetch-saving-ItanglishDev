import View from './View.js';
import Client from './Client.js';

// All of your javascript should go here
console.log("Hello from index.js");


const inputFilm = document.querySelector('#input')
const save = document.querySelector('.btn-save')
const reset = document.querySelector('.btn-reset')

const newFilm = new Client()

console.log(newFilm.getMovieData('to live or let die'));

