import React from 'react';
import styled from '@emotion/styled';

const Svg = styled.svg`
  fill: ${props => props.theme.colors.secondary_font};
  width: 32.73px;
  height: 32.73px;
`;

const LogoIcon = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="32.725"
      height="32.725"
      viewBox="0 0 32.725 32.725"
    >
      <g>
        <rect
          width="7.126"
          height="7.126"
          rx="2"
          transform="translate(0 5.506)"
        ></rect>
        <path
          d="M2,0H5.126a2,2,0,0,1,2,2V5.126a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z"
          transform="matrix(0.883, 0.469, -0.469, 0.883, 15.636, 1.917)"
        ></path>
        <rect
          width="7.126"
          height="7.126"
          rx="2"
          transform="matrix(1, 0.017, -0.017, 1, 25.6, 0)"
        ></rect>
        <rect
          width="7.126"
          height="7.126"
          rx="2"
          transform="translate(0 15.552)"
        ></rect>
        <rect
          width="7.126"
          height="7.126"
          rx="2"
          transform="translate(10.047 15.552)"
        ></rect>
        <rect
          width="7.126"
          height="7.126"
          rx="2"
          transform="matrix(0.438, 0.899, -0.899, 0.438, 28.797, 11.24)"
        ></rect>
        <rect
          width="7.126"
          height="7.126"
          rx="2"
          transform="translate(0 25.599)"
        ></rect>
        <rect
          width="7.126"
          height="7.126"
          rx="2"
          transform="translate(10.047 25.599)"
        ></rect>
        <rect
          width="7.126"
          height="7.126"
          rx="2"
          transform="translate(20.094 25.599)"
        ></rect>
      </g>
    </Svg>
  );
};

export default LogoIcon;
