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
import NewNote from './notes/pages/NewNote';
import Notes from './notes/pages/Notes';
import Intro from './user/pages/Intro';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/notes" exact>
            <Notes />
          </Route>
          <Route path="/notes/new" exact>
            <NewNote />
          </Route>
          <Route exact path="/">
            <Intro />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
