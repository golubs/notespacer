import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Card from '../../shared/components/UIElements/Card';
import NoteItem from './NoteItem';

const List = styled.div`
  list-style: none;
  margin: 1rem auto;
  padding: 0;
  width: 90%;
  max-width: 40rem;
`;

const NoteList = props => {
  if (props.notes.length === 0) {
    return (
      <List>
        <Card>
          <h2>No notes found. Go ahead and create one.</h2>
        </Card>
      </List>
    );
  }

  return (
    <List>
      {props.notes.map(note => (
        <NoteItem
          key={note.id}
          id={note.id}
          title={note.title}
          description={note.description}
          duedate={note.duedate}
          creatorId={note.creator}
          timestamp={note.timestamp}
          onDelete={props.onDelete}
        />
      ))}
    </List>
  );
};

NoteList.propTypes = {
  notes: PropTypes.array,
  onDelete: PropTypes.func
};

export default NoteList;
