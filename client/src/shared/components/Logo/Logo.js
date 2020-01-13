import React from 'react';
import styled from '@emotion/styled';
import LogoIcon from './LogoIcon';
import LogoText from './LogoText';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  margin-bottom: 9px;
  margin-right: 10px;
`;

const Logo = () => {
  return (
    <Container>
      <IconContainer>
        <LogoIcon />
      </IconContainer>
      <LogoText />
    </Container>
  );
};

export default Logo;
