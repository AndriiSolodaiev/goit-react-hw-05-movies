import axios from 'axios';
const API_KEY = '064f7e3d0569e2adbfaa0d0f4ed21f86';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchMovieCast(movieId) {
  const { data } = await axios(`movie/${movieId}/credits?api_key=${API_KEY}`);
  return data.cast;
}
