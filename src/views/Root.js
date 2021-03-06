import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import About from 'views/About/About';
import Works from 'views/Works/Works';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';

export default function Root() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Switch>
            <Route path="/works">
              <Works />
            </Route>
            <Route path="/" exact>
              <About />
            </Route>
          </Switch>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
}
