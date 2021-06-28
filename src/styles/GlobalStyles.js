import { createGlobalStyle } from 'styled-components';
//* Local imports
import Animations from './Animations';
import Typography from './Typography';
import Vars from './Vars';

const GlobalStyles = createGlobalStyle`
    ${Animations}
    ${Typography}
    ${Vars}
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
       font-display: swap;
       color: var(--background);
    }
  
    p , a, li, input, address, label,input, textarea  {
      font-family: var(--main);
      font-feature-settings: "kern" 1;
      font-kerning: normal;
        font-display: swap;
       color: var(--background);
    }
    p {
        line-height: 1.5;
    }
    .sbt {
        color:var(--newCyan);
        text-transform: uppercase;
        font-size: 1.05rem;
        font-weight: 700;
        letter-spacing: .5px;
    }
    .hidden {
        display: none;
    }
    .btn {
        border-radius: 5px;
        padding: 0.75rem 1.2rem;
        cursor: pointer;
        border: none;
        background-color: var(--mainColour);
         span {
            color: var(--white);
            font-weight: 700;
            font-size: var(--titleExtraSmall);
        } 
    }
    .btn--main {
         background: linear-gradient(
    344deg,
    rgb(102, 194, 171) 13%,
    rgb(115, 208, 217) 92%
  );
        border: none;
       
    }
    .btn--alt {
        background: var(--background);
        border: solid var(--background) 0;
        span {
            color: var(--offWhite);
        }

    }
    //* Overiding normalise css font-size: 100%;
    button {
        font-size: inherit;
    }
    .cookie__wrapper {
    bottom: 0px;
    background: var(--white);
    padding: 1rem;
    align-items: baseline;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    flex-wrap: wrap;
    justify-content: space-between;
    left: 0px;
    position: fixed;
    width: 100%;
    z-index: 1050;
    @media only screen and (min-width: 768px) {
        width: 50%;
        margin: var(--auto);
        padding: 1.5rem;
    }
    @media only screen and (min-width: 1024px) {
        width: 30%;
        margin: var(--auto);
        padding: 1.5rem;
        max-width: 400px;
    }
    div {
        text-align: center;
        button {
            width: 70%;
            margin: .5rem auto 0 auto;
            @media only screen and (min-width: 768px) {
            margin-top: 1rem;
     
    }
        }
    }
    &__content {
            text-align: center;    
            a {
                text-decoration: underline;
            } 
    }
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
