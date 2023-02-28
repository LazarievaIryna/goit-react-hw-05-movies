import axios from 'axios';
const API_KEY = '7152fe47b59b20f9de7689c6d0de595b';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return await data.results;
};
export const GetMovieById = async id => {
  const { data } = await axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`);
  return data;
};
export const getMovieCredits=async id=>{
  const { data } = await axios.get(`movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
  return data.cast;
}
export const getMovieReviews=async id=>{
  const { data } = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
  return data.results;
  // console.log(data.results)
}
export const getMovieByQuery=async query=>{
  const response = await axios.get(`search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`);
  return response.data.results;
  // console.log(response.data.results)
}
