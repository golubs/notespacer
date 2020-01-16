import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import ArrowLeftPrimary from '../../shared/components/Icons/ArrowLeftPrimary';
import PlusPrimary from '../../shared/components/Icons/PlusPrimary';
import Nav from '../../shared/components/Layout/Nav';

const Form = styled.form`
  position: relative;
  list-style: none;
  width: 90%;
  max-width: 40rem;
  margin: 0 auto;
  border: 2px solid #c1c1c1;
  box-shadow: 0 2px 8px rgb(0, 0, 0, 0, 26);
  border-radius: 1px;
  padding: 1rem;
  overflow: hidden;
  background: ${props => props.theme.colors.background};
`;

const NewNote = () => {
  return (
    <>
      <Nav>
        <NavLink to="/notes">
          <ArrowLeftPrimary />
        </NavLink>
        <PlusPrimary />
      </Nav>
      <Form>
        <Input id="title" element="input" type="text" label="Title" />
        <Input id="note" element="textarea" type="text" label="Note" />
      </Form>
    </>
  );
};

export default NewNote;
