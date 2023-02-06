import axios from 'axios';
const KEY = '7152fe47b59b20f9de7689c6d0de595b';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
// axios.defaults.params = {
//   api_key: KEY,
// };
axios.defaults.params['api-key'] = KEY;

export const getTrendingMovies = async () => {
  const response = await axios.get('/trending/movie/day?');

  return response.data;
};
