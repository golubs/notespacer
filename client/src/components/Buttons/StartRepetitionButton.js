import React from 'react';
import styled from '@emotion/styled';
import LogoIcon from '../Logo/LogoIcon';

const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  height: 70px;
  width: 134px;

  color: ${props => props.theme.colors.whitefont};
  font-size: 2.1rem;
  font-family: 'Tamil MN';
  font-weight: normal;
  font-size: 35px;
  text-align: center;
  border: none;
  border-radius: 35px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.16);
`;

const StartRepetitionButton = () => (
  <Button>
    GO <LogoIcon />
  </Button>
);

export default StartRepetitionButton;
