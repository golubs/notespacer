import React from 'react';
import styled from '@emotion/styled';

const Svg = styled.svg`
  fill: ${props => props.theme.colors.fontsecondary};
  width: 21px;
  height: 21px;
`;

const BurgerMenu = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <defs></defs>
      <path
        d="M0,18V15.428H20V18Zm0-7.714V7.714H20v2.571ZM0,2.571V0H20V2.571Z"
        transform="translate(0 1)"
      />
    </Svg>
  );
};

export default BurgerMenu;
