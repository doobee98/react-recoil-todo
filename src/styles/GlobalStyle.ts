import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    height: 100%;
  }

  body {
    width: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
  }

  #root {
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
