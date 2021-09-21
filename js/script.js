'use strict';

let numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

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

if (personalMuvieDB.count >= 1 && personalMuvieDB.count < 10) {
  alert('Просмотренно довольно мало фильмов');
} else if (personalMuvieDB.count >= 10 && personalMuvieDB.count <= 30) {
  alert('Вы класиический зритель');
} else if (personalMuvieDB.count > 30) {
  alert('Вы киноман');
} else {
  alert('Произошла ошибка');
}
