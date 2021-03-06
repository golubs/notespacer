import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

import MainNavigation from '../../shared/components/Navigation/MainNavigation';
import NoteList from '../components/NoteList';
import Main from '../../shared/components/Layout/Main';
import AddNewNoteButton from '../components/Buttons/AddNewNoteButton';

const FloatingAddButton = styled(AddNewNoteButton)`
  position: fixed;
  bottom: 37px;
  right: 30px;
`;

const Notes = () => {
  const [notes, setNotes] = React.useState(null);
  const location = useLocation();

  const handleDelete = id => {
    fetch(`/api/notes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    fetchNotes();
  };

  const fetchNotes = () => {
    fetch(`/api/notes${location.search}`)
      .then(response => response.json())
      .then(notes => setNotes(notes));
  };

  React.useEffect(() => {
    fetchNotes();
  }, [location.search]);

  return (
    <div>
      <MainNavigation />
      <Main>
        {notes && <NoteList notes={notes} onDelete={handleDelete} />}
        <NavLink to="/notes/new">
          <FloatingAddButton />
        </NavLink>
      </Main>
    </div>
  );
};

export default Notes;
