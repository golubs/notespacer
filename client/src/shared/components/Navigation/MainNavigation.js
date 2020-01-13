import React from 'react';
import styled from '@emotion/styled';

import MainHeader from './MainHeader';
import NavButton from './NavButton';
import Logo from '../Logo/LogoIcon';
import MenuButton from './MenuButton';

const Span = styled.span`
  display: block;
  width: 3rem;
  height: 2.5px;
  background: ${props => props.theme.colors.fontsecondary};
`;

const MainNavigation = () => {
  return (
    <MainHeader>
      <Logo />
      <nav>
        <NavButton>NOTES</NavButton>
        <NavButton>DUE</NavButton>
      </nav>
      <MenuButton>
        <Span />
        <Span />
        <Span />
      </MenuButton>
    </MainHeader>
  );
};

export default MainNavigation;
