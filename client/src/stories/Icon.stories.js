import React from 'react';
import StoryBackground from '../shared/components/Layout/StoryBackground';
import ArrowLeftSecondary from '../shared/components/Icons/ArrowLeftSecondary';
import ArrowRightSecondary from '../shared/components/Icons/ArrowRightSecondary';
import PlusPrimary from '../shared/components/Icons/PlusPrimary';
import CheckmarkPrimary from '../shared/components/Icons/CheckmarkPrimary';
import FontresizePrimary from '../shared/components/Icons/FontresizePrimary';
import MagnifyingGlassPrimary from '../shared/components/Icons/MagnifyingGlassPrimary';

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
