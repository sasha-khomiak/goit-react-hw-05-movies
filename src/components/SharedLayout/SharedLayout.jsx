// імпортуємо компонент Outlet із бібліотеки маршрутизації
import { Outlet } from 'react-router-dom';

// Outlet огортаємо в Suspense для lazy показується, боки грузиться вміст Outlet
import { Suspense } from 'react';

//iмпорт компонентів Header і Footer
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// Наш компонент-обгортка статичні компоненти + динамічні сторінки із App
// Які вставляються замість Outlet, main - вказуємо для семантики
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
