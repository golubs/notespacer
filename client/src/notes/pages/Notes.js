import React from 'react';
import { useLocation } from 'react-router-dom';

import MainNavigation from '../../shared/components/Navigation/MainNavigation';
import NoteList from '../components/NoteList';
import Main from '../../shared/components/Layout/Main';

const Notes = () => {
  const [notes, setNotes] = React.useState(null);
  const location = useLocation();

  React.useEffect(() => {
    fetch(`/api/notes${location.search}`)
      .then(response => response.json())
      .then(notes => setNotes(notes));
  }, [location.search]);

  return (
    <div>
      <MainNavigation />
      <Main>{notes && <NoteList notes={notes} />}</Main>
    </div>
  );
};

export default Notes;
