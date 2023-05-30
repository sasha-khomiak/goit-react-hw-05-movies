// підключаємо Link, щоб огорнути наш логотип
import { Link } from 'react-router-dom';

// підключаємо картинку нашого логотипа
import Logo from '../../images/logo.png';

//стиліховані компоненти секції <header>
// ньюанс в HeaderContainer - його підключаємо в стилізованих компонентах і потім імпортуємо сюди
import {
  StyledHeader,
  HeaderContainer,
  LogoImg,
  Nav,
  StyledNavLink,
} from './Header.styled';

// наш стилізований хедер
// блок секція-контейнер, а всередині доготип і навігація
const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Link to="/">
          <LogoImg src={Logo} alt="logo" />
        </Link>

        <Nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </Nav>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
