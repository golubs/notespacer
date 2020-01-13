import React from 'react';
import styled from '@emotion/styled';

const Svg = styled.svg`
  fill: ${props => props.theme.colors.fontsecondary};
  width: 16px;
  height: 16px;
`;

const ArrowRightSecondary = () => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path d="M8,0,6.545,1.455l5.506,5.506H0V9.039H12.052L6.545,14.545,8,16l8-8Z" />
    </Svg>
  );
};

export default ArrowRightSecondary;
