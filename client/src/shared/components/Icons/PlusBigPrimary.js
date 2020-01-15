import React from 'react';
import styled from '@emotion/styled';

const Svg = styled.svg`
  fill: ${props => props.theme.colors.fontsecondary};
  width: 28px;
  height: 28px;
`;

const PlusBigPrimary = () => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path d="M7,16V9H0V7H7V0H9V7h7V9H9v7Z" />
    </Svg>
  );
};

export default PlusBigPrimary;
