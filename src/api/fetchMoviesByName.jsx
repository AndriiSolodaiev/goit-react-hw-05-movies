import axios from 'axios';
const API_KEY = '064f7e3d0569e2adbfaa0d0f4ed21f86';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchMoviesByName(query) {
  const { data } = await axios(
    `search/movie?api_key=${API_KEY}&query=${query}`
  );
  return data.results;
}
