import React from 'react';
import styled from '@emotion/styled';

const Svg = styled.svg`
  fill: ${props => props.theme.colors.primary};
  width: 33px;
  height: 43px;
`;

const FontresizePrimary = () => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="33" height="43">
      <g fontFamily="Athelas-Regular,Athelas" letterSpacing=".012em">
        <text transform="translate(0 34)" fontSize="28">
          <tspan x="0" y="0">
            A
          </tspan>
        </text>
        <text transform="translate(6 34)" fontSize="39">
          <tspan x="0" y="0">
            A
          </tspan>
        </text>
      </g>
    </Svg>
  );
};

export default FontresizePrimary;
