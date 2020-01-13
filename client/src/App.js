import React from 'react';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import light from './themes/light';
import Intro from './user/pages/Intro';
import NewNote from './notes/pages/NewNote';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Intro />
          </Route>
          <Route path="/notes/new" exact>
            <NewNote />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
