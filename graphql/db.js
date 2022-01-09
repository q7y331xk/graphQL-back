// data
export let movies = [
  {
    id: 1,
    name: "Star Wars - The new one",
    score: 1,
  },
  {
    id: 2,
    name: "Avengers - The new one",
    score: 8,
  },
  {
    id: 3,
    name: "Dune",
    score: 10000,
  },
  {
    id: 4,
    name: "The Godfather I",
    score: 2,
  },
];

// function
export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === id);
  return filteredMovies[0];
};
export const deleteMovie = (id) => {
  let ret = false;
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    ret = true;
  }
  return ret;
};
export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
