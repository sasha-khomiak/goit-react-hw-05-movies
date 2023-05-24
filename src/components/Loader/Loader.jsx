import { CirclesWithBar } from 'react-loader-spinner';

// підключаємо ф-ію роботи з порталами в реакт домі
import { createPortal } from 'react-dom';

// стидізація лоадера
import { LoaderContainer } from './Loader.styled';

//створюємо новий елемент який буде порталом для модадки
const loaderRoot = document.querySelector('#loader-root');

const Loader = () => {
  return createPortal(
    <LoaderContainer>
      <CirclesWithBar
        height="300"
        width="300"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    </LoaderContainer>,
    loaderRoot
  );
};

export default Loader;
