import { createGlobalStyle } from 'styled-components';
//* Local imports
import Animations from './Animations';
import Typography from './Typography';
import Variables from './Variables';

const GlobalStyles = createGlobalStyle`
    ${Animations}
    ${Typography}
    ${Variables}
    html {
        box-sizing: border-box;
        width: 100%;
    }
    *, *:after, *:before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    ::selection {
        background-color: var(--lightTeal);
        color: var(--lightTeal);
    }
    :focus {
        outline: 2px dashed var(--green);
        outline-offset: 3px;
    }
    a, a:visited {
        color: inherit;
        text-decoration: none;
    }
    body {
        margin: 0;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        background-color: var(--white);
         font-family: var(--main); 
        font-size: var(--base); 
        line-height: 1.3;
    }
    h1,h2,h3,h4,h5,h6 {
      font-family: var(--main);
      margin: 0;
      letter-spacing: -1px;
      font-feature-settings: "kern" 1;
      font-kerning: normal;
      text-rendering: optimizeLegibility; 
      font-smoothing: antialiased; 
    }
  
    p , a, li, input, address, label,input, textarea  {
      font-family: var(--main);
      font-feature-settings: "kern" 1;
      font-kerning: normal;
    }
    p {
        line-height: 1.5;
    }
    .sbt {
        color: var(--mainColour);
        text-transform: uppercase;
        font-size: 1.25rem;
        font-weight: 700;
    }
    .btn {
        border-radius: 5px;
        padding: .75rem;
         span {
            color: var(--white);
            font-weight: 700;
            font-size: var(--titleExtraSmall);
        } 
    }
    .btn--main {
        background: var(--mainColour);
        border: none;
       
    }
    .btn--alt {
        background: none;
        border: solid var(--mainColour) 2px;
        span {
            color: var(--mainColour);
        }

    }
    //* Overiding normalise css font-size: 100%;
    button {
        font-size: inherit;
    }
   
    a[aria-current="page"] {
        /* color: var(--favColour); */
    }
    .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
    }
`;

export default GlobalStyles;
