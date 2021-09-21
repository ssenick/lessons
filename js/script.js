'use strict';

const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

const personalMuvieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
const a = prompt('Один из последних просмотреных фильмов?', ''),
  b = prompt('Один из последних просмотреных фильмов?', ''),
  c = prompt('Один из последних просмотреных фильмов?', ''),
  d = prompt('Один из последних просмотреных фильмов?', '');

personalMuvieDB.movies[a] = b;
personalMuvieDB.movies[c] = d;

console.log(personalMuvieDB);
