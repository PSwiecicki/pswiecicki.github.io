import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import NavBar from 'components/molecules/NavBar/NavBar';
import About from 'components/organisms/About/About';

export default function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />
      <About />
    </ThemeProvider>
  );
}
