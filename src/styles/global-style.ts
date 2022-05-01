import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body{
    background-color: #ffffff;
    /* font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif; */
    font-family: 'Noto Sans KR', sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  /* h1, h2, h3, h4, h5, h6{
    font-family:'Maven Pro', sans-serif;
  } */
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
  }
  @media only screen and (max-width: 1366px) and (min-width: 768px) {
    html{
      font-size: 12px;
    }
  }
  @media only screen and (min-width: 1366px){
    html{
      font-size: 16px;
    }
  }
  @-ms-viewport {
  width: device-width;
  }
  @-o-viewport {
  width: device-width;
  }
  @viewport {
  width: device-width;
  }
`;

export default GlobalStyle;
