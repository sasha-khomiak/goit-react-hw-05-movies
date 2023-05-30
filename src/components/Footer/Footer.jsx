import {
  StyledFooter,
  FooterContainer,
  FooterText,
  FooterTextLink,
} from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterText>
          &#169; Copyright&nbsp;
          <FooterTextLink
            href="https://www.linkedin.com/in/oleksandr-khomiak/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Oleksandr Khomiak
          </FooterTextLink>
        </FooterText>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
