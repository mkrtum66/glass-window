import React, { useState } from 'react';
import Bar, {
  Hamburger,
  HeaderWrapper,
  Logo,
  MainNav,
  NavBarToggle,
  NavLi,
  StyledNavLink,
} from './header.styled';
import Container from '../../atoms/Conatianer';

const Header = () => {
  const [displayNav, setDisplayNav] = useState(false);

  const toggleNavBar = () => {
    setDisplayNav(prevState => !prevState);
  };

  return (
    <HeaderWrapper>
      <Container>
        <Bar>
          <NavBarToggle onClick={() => toggleNavBar()}>
            <Hamburger />
          </NavBarToggle>
          <Logo to="/">logo</Logo>
          <MainNav display={displayNav ? 'flex' : 'none'}>
            <NavLi>
              <StyledNavLink to="/projects">Projects</StyledNavLink>
            </NavLi>
            <NavLi>
              <StyledNavLink to="/contact-us">Contact Us</StyledNavLink>
            </NavLi>
          </MainNav>
        </Bar>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
