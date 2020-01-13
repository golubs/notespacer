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
import Main from './shared/components/Layout/Main';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Router>
        <Main>
          <Switch>
            <Route path="/" exact>
              <Notes />
            </Route>
            <Route path="/notes/new" exact>
              <NewNote />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
