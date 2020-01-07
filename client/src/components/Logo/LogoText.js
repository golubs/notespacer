import React from 'react';
import styled from '@emotion/styled';

const AppName = styled.h1`
  color: ${props => props.theme.colors.fontsecondary};
  font-family: 'Tamil MN';
  font-weight: normal;
  font-size: 35px;
  text-align: center;
`;

const LogoText = () => {
  return <AppName>Notespacer</AppName>;
};

export default LogoText;
