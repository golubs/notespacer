import React from 'react';
import styled from '@emotion/styled';

const Svg = styled.svg`
  fill: ${props => props.theme.colors.primary};
  width: 38px;
  height: 38px;
`;

const CheckmarkPrimary = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="37.4"
      height="33"
      viewBox="0 0 37.4 33"
    >
      <path
        d="M15.329,34,1,16.3l3.4-4.2L15.329,25.3,35,1l3.4,4.2Z"
        transform="translate(-1 -1)"
      />
    </Svg>
  );
};

export default CheckmarkPrimary;
