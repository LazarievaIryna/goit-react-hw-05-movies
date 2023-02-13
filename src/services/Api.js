import axios from 'axios';
const API_KEY = '7152fe47b59b20f9de7689c6d0de595b';
// const BASE_URL = 'https://api.themoviedb.org/3';

// export async function getTrendingMovies() {
//   try {
//     const response = await axios.get(
//       `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
//     );
//     return response.data;
//     // console.log(response.data);
//   } catch (error) {
//     console.error(error.message);
//   }
// }
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
};
export const getTrendingMovies = async () => {
  const response = await axios.get('/trending/movie/day');
  return response.data;
};
export const getMovieById = async id => {
  const response = await axios.get(`/movie/${id}`);
  return response.data;
  // console.log(response.data);
};
