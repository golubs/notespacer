import React from 'react';
import styled from '@emotion/styled';
import { Redirect } from 'react-router-dom';

import BackgroundPrimary from '../../shared/components/Layout/BackgroundPrimary';
import MainContainer from '../../shared/components/Layout/MainContainer';
import Logo from '../../shared/components/Logo/Logo';

const Aligner = styled.div`
  padding-top: 12rem;
`;

const Intro = () => {
  const [redirect, setRedirect] = React.useState(false);

  const toNotePage = () => {
    setTimeout(() => setRedirect(true), 1500);
  };

  toNotePage();

  return (
    <BackgroundPrimary>
      {redirect ? <Redirect to="/notes" /> : true}
      <MainContainer>
        <Aligner>
          <Logo />
        </Aligner>
      </MainContainer>
    </BackgroundPrimary>
  );
};

export default Intro;
