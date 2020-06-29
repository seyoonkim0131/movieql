import { getMovies, getMovie, getSuggestions } from './db';

const resolvers = {
    Query: {
        movies: (_, { rating, limit }) => getMovies(limit, rating),
        movie: (_, { id }) => getMovie(id),
        suggestions: (_, { id }) => getSuggestions(id)
    },
    // Mutation: {
    //     addMovie: (_, { name, score }) => addMovie(name, score),
    //     deleteMovie: (_, { id }) => deleteMovie(id)
    // }
};

export default resolvers;