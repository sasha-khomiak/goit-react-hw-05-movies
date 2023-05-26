// імпортуємо компонент Outlet
import { Outlet } from 'react-router-dom';

//iмпорт компонента Header
import Header from '../Header/Header';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
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
