import React from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  height: 70px;
  width: 70px;
  border: none;
  border-radius: 50px;
  filter: drop-shadow(0px 6px 10px rgba(0, 0, 0, 0.16));
`;

const AddNewNoteButton = () => (
  <Button>
    <img src="/icons/plus.svg" />
  </Button>
);

export default AddNewNoteButton;
