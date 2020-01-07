import React from 'react';
import SquareButton from '../components/Buttons/SquareButton';
import SquareButtonInverted from '../components/Buttons/SquareButtonInverted';

export default {
  title: 'Buttons'
};

export function SquareButtonBase() {
  return <SquareButton>Button</SquareButton>;
}

export function InvertedSquareButton() {
  return <SquareButtonInverted>Button</SquareButtonInverted>;
}
