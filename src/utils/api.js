// базовий URL і ключ для доступу до API
const API_KEY = 'f051ac50d3bfe0c3fd75f02c1ff7b688';
const BASE_URL = 'https://api.themoviedb.org/';

// отримання трендових фільмів
export const getTrendiingMovies = () => {
  //повний URL запиту
  const URL = `${BASE_URL}3/trending/all/day?api_key=${API_KEY}`;
  return fetch(URL).then(response => response.json());
};

// отримання фільму по id
export const getMovieById = movieId => {
  //повний URL запиту
  const URL = `${BASE_URL}3/movie/${movieId}?api_key=${API_KEY}`;
  return fetch(URL).then(response => response.json());
};
