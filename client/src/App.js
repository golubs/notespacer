import React from 'react';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import light from './themes/light';
import Intro from './user/pages/Intro';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Intro />
    </ThemeProvider>
  );
}

export default App;
