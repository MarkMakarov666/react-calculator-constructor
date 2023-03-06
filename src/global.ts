import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html {
    font-size: 10px;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  ul, li {
    list-style-type: none;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  #root {
    margin: 0 auto;
  }

  a {
    text-decoration: none;
  }
`;
