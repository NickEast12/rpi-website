import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`

  html {
        font-size: 16px;

      }
      h1 {
    font-size: var(--titleLarge);
    }
    h2 {
    font-size: var(--titleSemiLarge);
    }
    h3 {
    font-size: var(--titleMedium);
    }
    h4 {
    font-size: var(--titleSmall);
    }
    h5 {
    font-size: var(--titleSmall);
    }
    h6 {
        font-size: var(--titleSmall)
    }
    p {
        font-size: var(--text);
    }
`;

export default Typography;
