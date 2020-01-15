import React from 'react';

import MainHeader from './MainHeader';
import Logo from '../Logo/LogoIcon';
import NavLinks from './NavLinks';
import BurgerMenu from '../Icons/BurgerMenu';

const MainNavigation = () => {
  return (
    <MainHeader>
      <Logo />
      <nav>
        <NavLinks />
      </nav>
      <BurgerMenu />
    </MainHeader>
  );
};

export default MainNavigation;
