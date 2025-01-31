import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (query, page = 1) => {
    const url = query
        ? `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}&page=${page}`
        : `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`;

    const response = await axios.get(url);
    return response.data.results;
};
