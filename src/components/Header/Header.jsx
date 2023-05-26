import { NavLink } from 'react-router-dom';
import Logo from '../../images/logo.png';

//стилі секції <header>
import { StyledHeader } from './Header.styled';

import { Container } from 'components/App.styled';

//стилі  контейнера

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <img src={Logo} alt="logo" />
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Movies</NavLink>
        </nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
