import { MOVIES_URL, SHORTS_DURATION } from "./config";

function filterShortMovies(movies) {
  return movies.filter((movie) => movie.duration < SHORTS_DURATION);
}

function filterMoviesByUserQuery(movies, query) {
  return movies.filter((movie) => {
    const nameRu = movie.nameRU.toLowerCase().trim();
    const nameEn = movie.nameEN.toLowerCase().trim();
    const userQuery = query.toLowerCase().trim();

    return nameRu.indexOf(userQuery) !== -1 || nameEn.indexOf(userQuery) !== -1;
  });
}

function changeMovies(movies) {
  movies.forEach((movie) => {
    if (!movie.image) {
      movie.image =
        "https://i.pinimg.com/736x/b2/10/15/b210159540189ff528efd04c1eeadfc0.jpg";
      movie.thumbnail =
        "https://i.pinimg.com/736x/b2/10/15/b210159540189ff528efd04c1eeadfc0.jpg";
    } else {
      movie.thumbnail = MOVIES_URL + movie.image.formats.thumbnail.url;
      movie.image = MOVIES_URL + movie.image.url;
    }

    if (!movie.nameEN) {
      movie.nameEN = movie.nameRU;
    }
  });

  return movies;
}

function getSavedMovie(savedMovies, movie) {
  return savedMovies.find((m) => {
    return m.movieId === (movie.id || movie.movieId);
  });
}

function toTime(number) {
  const hours = Math.floor(number / 60);
  const minutes = Math.floor(number - hours * 60);

  return hours > 0 ? hours + "ч" + minutes + "м" : minutes + "м";
}

export {
  filterShortMovies,
  filterMoviesByUserQuery,
  changeMovies,
  getSavedMovie,
  toTime,
};
