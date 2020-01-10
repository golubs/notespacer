import React from 'react';
import StoryBackground from '../components/Layout/StoryBackground';
import TextAllCapsPrimary from '../components/Text/TextAllCapsPrimary';
import TextAllCapsSecondary from '../components/Text/TextAllCapsSecondary';
import TextIntroSecondary from '../components/Text/TextIntroSecondary';

export default {
  title: 'Text'
};

export function AllCapsPrimary() {
  return <TextAllCapsPrimary>TEXT</TextAllCapsPrimary>;
}

export function AllCapsSecondary() {
  return (
    <StoryBackground>
      <TextAllCapsSecondary>TEXT</TextAllCapsSecondary>
    </StoryBackground>
  );
}

export function IntroTextSecondary() {
  return (
    <StoryBackground>
      <TextIntroSecondary>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        tempora, similique quos explicabo doloremque aut deleniti aliquid
        blanditiis voluptate quia excepturi laborum assumenda expedita quae eius
        libero hic vitae sit.
      </TextIntroSecondary>
    </StoryBackground>
  );
}
