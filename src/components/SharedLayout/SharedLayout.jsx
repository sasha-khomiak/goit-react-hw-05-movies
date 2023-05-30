// імпортуємо компонент Outlet
import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';
//iмпорт компонента Header
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
