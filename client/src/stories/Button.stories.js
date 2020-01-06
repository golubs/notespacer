import React from 'react';
import AddNewNoteButton from '../components/Buttons/AddNewNoteButton';
import StartRepetitionButton from '../components/Buttons/StartRepetitionButton';

export default {
  title: 'Buttons'
};

export function AddNewNote() {
  return <AddNewNoteButton />;
}

export function StartRepetition() {
  return <StartRepetitionButton />;
}
