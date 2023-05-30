import PageNotFoundImage from '../../images/404-error.gif';

import { Img, StyledNavLink } from './PageNotFound.styled';

const PageNotFound = () => {
  return (
    <div>
      <Img src={PageNotFoundImage} alt="searching" />
      <StyledNavLink to="/">Перейти на головну</StyledNavLink>
    </div>
  );
};

export default PageNotFound;
