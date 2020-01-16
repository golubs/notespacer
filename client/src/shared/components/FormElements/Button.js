import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ButtonStyled = styled.button`
  padding: 0.3rem 1rem;
  border: 1px solid transparent;
  border-radius: 2px;
  background: transparent;
  margin-right: 0.5rem;
  font-size: 0.8rem;
  color: ${props => props.theme.colors.fontsecondary};
  display: inline-block;
  outline: none;
  &:hover {
    border: 1px solid ${props => props.theme.colors.fonttertiary};
    background: ${props => props.theme.colors.secondary};
  }
  &:active {
    border: 1px solid ${props => props.theme.colors.fonttertiary};
    background: ${props => props.theme.colors.fonttertiary};
  }
`;

const Button = props => <ButtonStyled>{props.children}</ButtonStyled>;

Button.propTypes = {
  children: PropTypes.node.isRequired
};

export default Button;
