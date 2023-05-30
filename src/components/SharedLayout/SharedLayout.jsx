// імпортуємо компонент Outlet
import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';
//iмпорт компонента Header
import Header from '../Header/Header';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      {/* <footer>
        <Container>
          <p>cppy</p>
        </Container>
      </footer> */}
    </>
  );
};

export default SharedLayout;
