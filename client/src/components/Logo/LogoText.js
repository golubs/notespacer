import React from 'react';
import styled from '@emotion/styled';

const AppName = styled.h1`
  color: ${props => props.theme.colors.fontsecondary};
  font-family: 'Tamil MN';
  font-weight: normal;
  font-size: 35px;
  margin: 0;
  padding: 0;
`;

const LogoText = () => {
  return <AppName>NOTESPACER</AppName>;
};

export default LogoText;
