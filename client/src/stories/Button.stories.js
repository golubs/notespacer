import React from 'react';
import SquareButton from '../components/Buttons/SquareButton';
import SquareButtonInverted from '../components/Buttons/SquareButtonInverted';
import AddNewNoteButton from '../components/Buttons/AddNewNoteButton';
import StartRepetitionButton from '../components/Buttons/StartRepetitionButton';

export default {
  title: 'Buttons'
};

export function SquareButtonBase() {
  return <SquareButton>Button</SquareButton>;
}

export function InvertedSquareButton() {
  return <SquareButtonInverted>Button</SquareButtonInverted>;
}

export function AddNewNote() {
  return <AddNewNoteButton />;
}

export function StartRepetition() {
  return <StartRepetitionButton />;
}
