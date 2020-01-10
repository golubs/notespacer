import React from 'react';
import StoryBackground from '../components/Layout/StoryBackground';
import LogoIcon from '../components/Logo/LogoIcon';
import LogoText from '../components/Logo/LogoText';
import Logo from '../components/Logo/Logo';

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
