import axios from 'axios';
const API_KEY = '7152fe47b59b20f9de7689c6d0de595b';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getTrendingMovies() {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}
