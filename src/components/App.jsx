// підключення бібліотеки маршрутизації рутів
import { Routes, Route } from 'react-router-dom';

// підключення базового компонента в якому верстаємо застосунок
import SharedLayout from './SharedLayout/SharedLayout';

// підключення сторінок-компонентів
import Home from '../pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';

// головний компонент з посторінковою маршрутизацією
// всі рути прописуємо всережині компонента Routes
// базовий рут (/) на компонент SharedLayout в якому верстаємо сторінку
// всі інші рути - вкладені в нього як чілдрени і вставляються в компонент
// SharedLayout - всередині Outlet, оскільки вкдажені, то прибираємо (/)
// index - задання індексної сторінки застосунку
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            {/* <Route path="cast" element={<Cast />} /> */}
            {/* <Route path="reviews" element={<Reviews />} /> */}
          </Route>
        </Route>
      </Routes>
    </>
  );
};
