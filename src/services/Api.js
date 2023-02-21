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
  const { data } = await axios.get('/trending/movie/day');
  return await data.results;
};
export const GetMovieById = async id => {
  const { data } = await axios.get(`/movie/${id}`);
  return data;
};
export const getMovieCredits=async id=>{
  const { data } = await axios.get(`/movie/${id}/credits`);
  return data.cast;
}
export const getMovieReviews=async id=>{
  const { data } = await axios.get(`/movie/${id}/reviews`);
  return data.results;
  // console.log(data.results)
}
export const getMovieByQuery=async query=>{
  const { data } = await axios.get(`
  /search/movie`);
  // return data.results;
  console.log(data.results)
}
