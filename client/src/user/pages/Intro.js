import React from 'react';
import styled from '@emotion/styled';

import BackgroundPrimary from '../../shared/components/Layout/BackgroundPrimary';
import MainContainer from '../../shared/components/Layout/MainContainer';
import ArrowLeftSecondary from '../../shared/components/Icons/ArrowLeftSecondary';
import TextAllCapsSecondary from '../../shared/components/Text/TextAllCapsSecondary';
import Placeholder from '../../shared/components/Layout/Placeholder';
import Logo from '../../shared/components/Logo/Logo';
import TextIntroSecondary from '../../shared/components/Text/TextIntroSecondary';
import SpaceBetweenContainer from '../../shared/components/Layout/SpaceBetweenContainer';

const Justifier = styled.div`
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;
`;

const AlignerLogo = styled.div`
  padding-top: 110px;
`;

const AlignerText = styled.div`
  padding-top: 160px;
`;

const Intro = () => {
  return (
    <BackgroundPrimary>
      <MainContainer>
        <SpaceBetweenContainer>
          <ArrowLeftSecondary />
          <TextAllCapsSecondary>INTRO</TextAllCapsSecondary>
          {/* The following component is an invisible placeholder for the flexbox layout. I'm using it until I find a better solution that works the same way */}
          <Placeholder />
        </SpaceBetweenContainer>
        <AlignerLogo>
          <Logo />
        </AlignerLogo>
        <AlignerText>
          <TextIntroSecondary>
            Notespacer is a minimalistic spaced repetition app that allows you
            to make your own notes and choose your own repetition frequency.
          </TextIntroSecondary>
        </AlignerText>
        <Justifier>
          <SpaceBetweenContainer>
            <TextAllCapsSecondary>SKIP</TextAllCapsSecondary>
            <TextAllCapsSecondary>NEXT</TextAllCapsSecondary>
          </SpaceBetweenContainer>
        </Justifier>
      </MainContainer>
    </BackgroundPrimary>
  );
};

export default Intro;
