import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';

export const App = () => {
  return (
    <div>
      <div>
        <span>Home</span>
        <span>Movies</span>
      </div>
      {/* посторінкова маршрутизація  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};
