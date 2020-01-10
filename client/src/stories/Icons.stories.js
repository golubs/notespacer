import React from 'react';
import StoryBackground from '../components/Layout/StoryBackground';
import ArrowLeftSecondary from '../components/Icons/ArrowLeftSecondary';
import ArrowRightSecondary from '../components/Icons/ArrowRightSecondary';
import PlusPrimary from '../components/Icons/PlusPrimary';
import CheckmarkPrimary from '../components/Icons/CheckmarkPrimary';
import FontresizePrimary from '../components/Icons/FontresizePrimary';
import MagnifyingGlassPrimary from '../components/Icons/MagnifyingGlassPrimary';

export default {
  title: 'Icons'
};

export function ArrowSecondaryIcon() {
  return (
    <StoryBackground>
      <ArrowLeftSecondary />
      <br />
      <ArrowRightSecondary />
    </StoryBackground>
  );
}

export function PlusPrimaryIcon() {
  return (
    <StoryBackground>
      <PlusPrimary />
    </StoryBackground>
  );
}

export function CheckmarkPrimaryIcon() {
  return <CheckmarkPrimary />;
}

export function FontresizePrimaryIcon() {
  return <FontresizePrimary />;
}

export function MagnifyingGlassPrimaryIcon() {
  return <MagnifyingGlassPrimary />;
}
