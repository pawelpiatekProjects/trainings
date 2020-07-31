import { createGlobalStyle } from 'styled-components';

// global style component which contains global styles for this app
const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%; //1rem = 10px
    

  }

  *,
  *::before,
  *::after {
        box-sizing: inherit;
  }

  body {
    width: 100%;
    margin: 0;
    //padding: 8rem 6.5rem;
    font-family: 'Montserrat';
    

  }

  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat';
  }
  
  p {
    font-size: 16px;
  }

  ul {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
