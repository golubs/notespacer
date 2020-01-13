import React from 'react';
import StoryBackground from '../shared/components/Layout/StoryBackground';
import LogoIcon from '../shared/components/Logo/LogoIcon';
import LogoText from '../shared/components/Logo/LogoText';
import Logo from '../shared/components/Logo/Logo';

export default {
  title: 'Logo'
};

export function IconLogo() {
  return (
    <StoryBackground>
      <LogoIcon />
    </StoryBackground>
  );
}

export function TextLogo() {
  return (
    <StoryBackground>
      <LogoText />
    </StoryBackground>
  );
}

export function FullLogo() {
  return (
    <StoryBackground>
      <Logo />
    </StoryBackground>
  );
}
