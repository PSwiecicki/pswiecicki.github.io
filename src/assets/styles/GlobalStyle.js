import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Montserrat', cursive;
    background-color: ${({ theme }) => theme.colors.grey};
    color: '#000000';
  }

  h1, h2, h3 {
    font-family: 'IM Fell DW Pica', cursive;
  }

  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`;
