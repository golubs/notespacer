import React from 'react';
import styled from '@emotion/styled';
import PlusBigPrimary from '../../../shared/components/Icons/PlusBigPrimary';

const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  height: 70px;
  width: 70px;
  border: none;
  border-radius: 50px;
  outline: none;
  filter: drop-shadow(0px 6px 10px rgba(0, 0, 0, 0.16));
  &:hover {
    background: ${props => props.theme.colors.fonttertiary};
  }
  &:active {
    background: ${props => props.theme.colors.fonttertiary};
  }
`;

const AddNewNoteButton = props => (
  <Button {...props}>
    <PlusBigPrimary />
  </Button>
);

export default AddNewNoteButton;
