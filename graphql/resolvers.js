import { getMovies, deleteMovie, getById, addMovie } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => {
      return addMovie(name, score);
    },
    deleteMovie: (_, { id }) => {
      return deleteMovie(id);
    },
  },
};
export default resolvers;
