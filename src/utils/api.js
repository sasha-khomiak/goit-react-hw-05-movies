// базовий URL і ключ для доступу до API
const API_KEY = 'f051ac50d3bfe0c3fd75f02c1ff7b688';
const BASE_URL = 'https://api.themoviedb.org/';

// 1 отримання трендових фільмів fetch-then
export const getTrendiingMovies = () => {
  //повний URL запиту
  const URL = `${BASE_URL}3/trending/all/week?api_key=${API_KEY}`;
  return fetch(URL).then(response => response.json());
};

// // 2-1 отримання фільму по id fetch-then
// export const getMovieById = movieId => {
//   //повний URL запиту
//   const URL = `${BASE_URL}3/movie/${movieId}?api_key=${API_KEY}`;
//   return fetch(URL).then(response => response.json());
// };

// 2-2 отримання фільму по id з використанням асинхронної функції async-await
export const getMovieById = async movieId => {
  try {
    const URL = `${BASE_URL}3/movie/${movieId}?api_key=${API_KEY}`;
    const response = await fetch(URL);
    const movie = await response.json();
    // console.log('movie', movie);
    return movie;
  } catch (error) {
    console.log(error.message);
  }
};

// 3 отримання фільмів fetch-then за назвою запиту і сторінкою
export const getMoviesByNameAndPage = (toFind, page) => {
  //повний URL запиту
  const URL = `${BASE_URL}3/search/movie?query=${toFind}&include_adult=false&language=en-US&page=${page}&api_key=${API_KEY}`;
  return fetch(URL).then(response => response.json());
};
