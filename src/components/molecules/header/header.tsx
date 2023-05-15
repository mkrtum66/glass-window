import React, { useState } from 'react';
import Bar, { Hamburger, Logo, MainNav, NavBarToggle, NavLi, NavLink } from './header.styled';

const Header = () => {
  const [displayNav, setDisplayNav] = useState(false);

  const toggleNavBar = () => {
    setDisplayNav(prevState => !prevState);
  };

  return (
    <Bar>
      <NavBarToggle onClick={() => toggleNavBar()}>
        <Hamburger />
      </NavBarToggle>
      <Logo href="#">logo</Logo>
      <MainNav display={displayNav ? 'flex' : 'none'}>
        <NavLi>
          <NavLink href="#">Projects</NavLink>
        </NavLi>
        <NavLi>
          <NavLink href="#">Contact Us</NavLink>
        </NavLi>
      </MainNav>
    </Bar>
  );
};

export default Header;
