import React from 'react';
import SquareButton from '../user/components/Buttons/SquareButton';
import SquareButtonInverted from '../user/components/Buttons/SquareButtonInverted';
import AddNewNoteButton from '../notes/components/Buttons/AddNewNoteButton';
import StartRepetitionButton from '../notes/components/Buttons/StartRepetitionButton';

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
