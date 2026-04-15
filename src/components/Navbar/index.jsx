import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom';
import {DiCssdeck} from "react-icons/di";
import {useState} from "react";
import {FaBars} from "react-icons/fa";
import {useTheme} from "@mui/material";
import {Bio} from "../../data/constants";

const Nav = styled.nav`
  background-color: ${({theme}) => (theme.card_light)};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
  @media screen and (max-width: 960px) {
    padding: 0 16px;
  }
  @media screen and (max-width: 850px) {
    padding: 0 10px;
  }
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

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({theme}) => (theme.text_primary)};
  }
`;

const NavItems = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  list-style: none;
  
  @media screen and (max-width: 1100px) {
    gap: 16px;
  }
  
  @media screen and (max-width: 850px) {
    gap: 12px;
  }
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({theme}) => (theme.text_primary)};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;

  @media screen and (max-width: 1100px) {
    font-size: 16px;
  }
  
  @media screen and (max-width: 850px) {
    font-size: 14px;
  }

  &:hover {
    color: ${({theme}) => (theme.primary)};
  }
`

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: end;
  align-items: center;
  width: auto;
  height: 100%;
  padding: 0 50px;
  @media screen and (max-width: 1032px) {
    padding: 0 10px;
  }
  @media screen and (max-width: 960px) {
    padding: 0 24px;
  }
  @media screen and (max-width: 850px) {
    padding: 0 10px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GitHubButton = styled.a`
  background-color: transparent;
  color: ${({theme}) => (theme.primary)};
  border: 1.8px solid ${({theme}) => (theme.primary)};
  border-radius: 20px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  height: 70%;
  white-space: nowrap;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({theme}) => (theme.primary)};
    color: ${({theme}) => (theme.white)};
  }

  @media screen and (max-width: 640px) {
    font-size: 0.8rem;
  }
`

const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

const MobileMenu = styled.div.withConfig({
  shouldForwardProp: (prop) => !['$open'].includes(prop),
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background-color: ${({theme}) => (theme.card_light + 99)};
  transition: all 0.3s ease-in-out;
  transform: ${({$open}) => ($open ? 'translateX(0)' : 'translateX(100%)')};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  opacity: ${({$open}) => ($open ? '1' : '0')};
  z-index: ${({$open}) => ($open ? '1' : '-1')};
  list-style: none;
`;

const MobileMenuLinks = styled.a`
  color: ${({theme}) => (theme.text_primary)};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({theme}) => (theme.primary)};
  }
`

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavContainer>
        <NavLogo to='/'>
          <NavLogoContent>
            <Bracket>{"<"}</Bracket>
            Нечуй-Вітер
            <Slash>/</Slash>
            Євгеній
            <BracketRight>{">"}</BracketRight>
          </NavLogoContent>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setOpen(!open)} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">Про себе</NavLink>
          <NavLink href="#skills">Навички</NavLink>
          <NavLink href="#experience">Досвід</NavLink>
          <NavLink href="#projects">Проекти</NavLink>
          <NavLink href="#education">Освіта</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton
            href={Bio.github}
            target="_blank"
            rel="noreferrer"
          >
            Github Profile
          </GitHubButton>
        </ButtonContainer>
      </NavContainer>
      {open && (
        <MobileMenu $open={open}>
          <MobileMenuLinks
            href="#about"
            onClick={() => {
              setOpen(!open)
            }}
          >Про себе</MobileMenuLinks>
          <MobileMenuLinks
            href="#skills"
            onClick={() => {
              setOpen(!open)
            }}
          >Навички</MobileMenuLinks>
          <MobileMenuLinks
            href="#experience"
            onClick={() => {
              setOpen(!open)
            }}
          >Досвід</MobileMenuLinks>
          <MobileMenuLinks
            href="#projects"
            onClick={() => {
              setOpen(!open)
            }}
          >Проекти</MobileMenuLinks>
          <MobileMenuLinks
            href="#education"
            onClick={() => {
              setOpen(!open)
            }}
          >Освіта</MobileMenuLinks>
          <GitHubButton
            style={{
              padding: '10px 16px',
              background: `${theme.primary}`,
              color: 'white',
              width: 'max-content'
            }}
            href={Bio.github}
            target="_blank"
            rel="noreferrer"
          >Github Profile</GitHubButton>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;