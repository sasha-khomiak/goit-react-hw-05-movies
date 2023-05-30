// картинка, для сторінки 404
import PageNotFoundImage from '../../images/404-error.gif';

// стилізовані компоненти для сторінки
import { Img, StyledNavLink } from './PageNotFound.styled';

// компонент коли нічого не знайдено - 404 помилка
const PageNotFound = () => {
  return (
    <div>
      <Img src={PageNotFoundImage} alt="searching" />
      <StyledNavLink to="/">Перейти на головну</StyledNavLink>
    </div>
  );
};

export default PageNotFound;
