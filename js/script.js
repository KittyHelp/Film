const numberOfFilms = +prompt('Скільки фільмів ви переглянули?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false ,
};

const   a = prompt('Один з останніх переглянутих фільмів?',''),
        b = prompt('Яку б оцінку ви йому дали?','');

personalMovieDB.movies[a] = b;

console.log(personalMovieDB);