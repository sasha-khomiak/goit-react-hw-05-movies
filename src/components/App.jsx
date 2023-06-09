// підключення lazy-функції для завантаження сторінок при маршрутизації
import { lazy } from 'react';

// підключення бібліотеки маршрутизації рутів
import { Routes, Route } from 'react-router-dom';

// підключення базового компонента в якому верстаємо застосунок
import SharedLayout from './SharedLayout/SharedLayout';

// підключення сторінок-компонентів - закоментив, бо нижче через лейзі підключені
// import Home from '../pages/Home';
// import Movies from 'pages/Movies';
// import MovieDetails from 'pages/MovieDetails';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';
// import PageNotFound from './PageNotFound/PageNotFound';

// підключення сторінок-компонентів з lazy
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const PageNotFound = lazy(() =>
  import('../components/PageNotFound/PageNotFound')
);

// головний компонент App з посторінковою маршрутизацією
// всі рути прописуємо всережині компонента Routes
// базовий рут (/) на компонент SharedLayout в якому верстаємо сторінку
// всі інші рути - вкладені в нього як чілдрени і вставляються в компонент
// SharedLayout - всередині Outlet в який і будуть верститсь сторінки,
// оскільки вкладені в SharedLayout, то прибираємо(/) в path
// index - задання індексної сторінки застосунку
// * - якщо не відпрацюється жодний маршрут
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="*" element={<PageNotFound />}></Route>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
