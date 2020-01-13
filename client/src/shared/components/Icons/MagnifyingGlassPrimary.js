import React from 'react';
import styled from '@emotion/styled';

const Svg = styled.svg`
  fill: ${props => props.theme.colors.primary};
  width: 24px;
  height: 24px;
`;

const MagnifyingGlassPrimary = () => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M23.938,21.83l-4.968-4.968a10.308,10.308,0,0,0,2.108-6.323A10.474,10.474,0,0,0,10.539,0,10.474,10.474,0,0,0,0,10.539,10.474,10.474,0,0,0,10.539,21.077a10.308,10.308,0,0,0,6.323-2.108l4.968,4.968ZM3.011,10.539a7.454,7.454,0,0,1,7.528-7.528,7.454,7.454,0,0,1,7.528,7.528,7.454,7.454,0,0,1-7.528,7.528A7.454,7.454,0,0,1,3.011,10.539Z"
        transform="translate(0)"
      />
    </Svg>
  );
};

export default MagnifyingGlassPrimary;
