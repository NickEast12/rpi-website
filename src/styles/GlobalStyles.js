import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        //*Colours
        --mainColour: #2BA5A2;
        --accentColour: #8E1C55;
        --backgroundColour: #4C4C4C;
        --yellow: #FAE101;
        //*Font
        --slab: museo-slab, -apple-system, system-ui, Helvetica,Arial,sans-serif;
        --serif: museo-sans, -apple-system, system-ui, "Helvetica Neue",Helvetica,Arial,sans-serif;
        //*Font-size
        --titleLarge: 2.6rem;
        --titleSemiLarge: 2.441rem;
        --titleMedium: 1.953rem;
        --titleSmall: 1.563rem;
        --titleExtraSmall: 1.25rem;
        --text: 1rem;
        --textMedium: .95rem;
        
    }
    *, *:after, *:before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
    }
    a, a:visited {
        color: inherit;
        text-decoration: none;
   }
  
    body {
        width: 100%;
        height: 100%;
        overflow: scroll;
        -webkit-font-smoothing: subpixel-antialiased !important; 
        text-rendering:optimizeLegibility !important;
        background-color: var(--backgroundColour);
    }
    h1,h2,h3,h4,h5,h6 {
      font-family: var(--slab);
      margin: 0;
      letter-spacing: -.5px;
      font-feature-settings: "kern" 1;
      font-kerning: normal;
      text-rendering: optimizeLegibility; 
      font-smoothing: antialiased; 
      font-weight: 100;
    }
    .title--bold {
        font-weight: 700;
    }
    .btn {
        width: 100%;
        padding: .65rem 0; 
        border-radius: 35px;
        span {
            vertical-align: center;
            font-size: var(--text);
            font-family: var(--serif);
            letter-spacing: -.5px;
            color: #fff;
        }
    }
    .btn--main {
        background: var(--mainColour);
        border: none;
    }
    .btn--alt {
        background: none;
        border: solid 2px var(--mainColour);
    }
    p , li, input, address, label,input, textarea  {
      font-family: var(--serif);
      font-feature-settings: "kern" 1;
      font-kerning: normal;
    }
    a {
        font-family: var(--slab);
        color: #fff!important;
        fill: #fff;
    }
   
    
    //* Overiding normalise css font-size: 100%;
    button {
        font-size: inherit;
    }
   
    a[aria-current="page"] {
        color: var(--favColour);
    }
    .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
    }
`;

export default GlobalStyles;
