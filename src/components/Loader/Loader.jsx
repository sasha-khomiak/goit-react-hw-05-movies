// підключення спінера лоадера
import { CirclesWithBar } from 'react-loader-spinner';

// підключаємо ф-ію роботи з порталами в реакт домі
import { createPortal } from 'react-dom';

// стилізація контейнера лоадера
import { LoaderContainer } from './Loader.styled';

//створюємо новий елемент який буде порталом для модадки
const loaderRoot = document.querySelector('#loader-root');

// в createPortal передаємо нащ доадер в контейнері
//  доугим параметром передаємо імʼя елемента, який буде порталом
const Loader = () => {
  return createPortal(
    <LoaderContainer>
      <CirclesWithBar
        height="150"
        width="300"
        color="#ff6b17"
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
