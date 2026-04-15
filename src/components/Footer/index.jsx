import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
`;


const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const NavLogo = styled(LinkR)`
  width: auto;
  padding: 0 6px;
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  color: ${({theme}) => (theme.primary)};
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const NavLogoContent = styled.div`
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  white-space: nowrap;
  
  @media screen and (max-width: 1100px) {
    font-size: 16px;
  }
  
  @media screen and (max-width: 640px) {
    font-size: 15px;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Bracket = styled.div`
  color: ${({theme}) => (theme.primary)};
  font-size: 32px;
  font-weight: 500;
  margin-right: 5px;
  
  @media screen and (max-width: 1100px) {
    font-size: 26px;
  }
  
  @media screen and (max-width: 640px) {
    font-size: 22px;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

const BracketRight = styled.div`
  color: ${({theme}) => (theme.primary)};
  font-size: 32px;
  font-weight: 500;
  margin-left: 5px;
  
  @media screen and (max-width: 1100px) {
    font-size: 26px;
  }
  
  @media screen and (max-width: 640px) {
    font-size: 22px;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

const Slash = styled.div`
  color: ${({theme}) => (theme.primary)};
  font-size: 32px;
  font-weight: 500;
  
  @media screen and (max-width: 1100px) {
    font-size: 26px;
  }
  
  @media screen and (max-width: 640px) {
    font-size: 22px;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <NavLogo to='/'>
          <NavLogoContent>
            <Bracket>{"<"}</Bracket>
            Нечуй-Вітер
            <Slash>/</Slash>
            Євгеній
            <BracketRight>{">"}</BracketRight>
          </NavLogoContent>
        </NavLogo>
        <Nav>
          <NavLink href="#about">Про себе</NavLink>
          <NavLink href="#skills">Навички</NavLink>
          <NavLink href="#experience">Досвід</NavLink>
          <NavLink href="#projects">Проекти</NavLink>
          <NavLink href="#education">Освіта</NavLink>
        </Nav>
        {/*<SocialMediaIcons>
          <SocialMediaIcon href={Bio.facebook} target="display"><FacebookIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.twitter} target="display"><TwitterIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon /></SocialMediaIcon>
        </SocialMediaIcons>*/}
        <Copyright>
          &copy; 2026 Нечуй-Вітер Євгеній . Всі права захищені.
        </Copyright>

      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;