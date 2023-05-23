import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';

export const App = () => {
  return (
    <div>
      <div>
        <span>Home</span>
        <span>Movies</span>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
