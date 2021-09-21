'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');
  }
}
start();

const personalMuvieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// const a = prompt('Один из последних просмотреных фильмов?', ''),
//   b = prompt('Один из последних просмотреных фильмов?', ''),
//   c = prompt('Один из последних просмотреных фильмов?', ''),
//   d = prompt('Один из последних просмотреных фильмов?', '');
// personalMuvieDB.movies[a] = b;
// personalMuvieDB.movies[c] = d;

function rememberMyFilms() {
  for (let index = 0; index < 2; index++) {
    const a = prompt('Один из последних просмотреных фильмов?', ''),
      b = prompt('Ваша оценка?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
      personalMuvieDB.movies[a] = b;
      console.log('ok');
    } else {
      console.log('error');
      index--;
    }
  }
}
//rememberMyFilms();

function detectPersolanlLevel() {
  if (personalMuvieDB.count >= 1 && personalMuvieDB.count < 10) {
    alert('Просмотренно довольно мало фильмов');
  } else if (personalMuvieDB.count >= 10 && personalMuvieDB.count <= 30) {
    alert('Вы класиический зритель');
  } else if (personalMuvieDB.count > 30) {
    alert('Вы киноман');
  } else {
    alert('Произошла ошибка');
  }
}
//detectPersolanlLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMuvieDB);
  }
}
showMyDB(personalMuvieDB.privat);

function writeYourGeneres() {
  for (let index = 1; index <= 3; index++) {
    const genre = prompt(`Ваш любимый жанр под номером ${index}`);
    personalMuvieDB.genres[index - 1 ] = genre;
  }
}
writeYourGeneres();
