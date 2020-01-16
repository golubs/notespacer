import React from 'react';
import styled from '@emotion/styled';
import { NavLink, useHistory } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import ArrowLeftPrimary from '../../shared/components/Icons/ArrowLeftPrimary';
import PlusPrimary from '../../shared/components/Icons/PlusPrimary';
import Nav from '../../shared/components/Layout/Nav';

const FormInputContainer = styled.div`
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

const SubmitButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

const NewNote = () => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const history = useHistory();

  const handleSubmit = async event => {
    event.preventDefault();
    await fetch('/api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        description: description,
        duedate: 1579084111033,
        creatorId: 2,
        timestamp: Date.now()
      })
    });
    history.push('/notes');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Nav>
          <NavLink to="/notes">
            <ArrowLeftPrimary />
          </NavLink>
          <SubmitButton type="submit">
            <PlusPrimary />
          </SubmitButton>
        </Nav>
        <FormInputContainer>
          <Input
            element="input"
            type="text"
            label="Title"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
          <Input
            element="textarea"
            type="text"
            label="Note"
            onChange={event => setDescription(event.target.value)}
          />
        </FormInputContainer>
      </form>
    </>
  );
};

export default NewNote;
