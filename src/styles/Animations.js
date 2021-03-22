import { createGlobalStyle } from 'styled-components';

const Animations = createGlobalStyle`
    .nav {
        transition: all .35s linear;
        z-index: 99999;
        &-active {
            background: rgba(76,76,76, .85);
            backdrop-filter: saturate(180%) blur(20px);
        }
    }
    
`;

export default Animations;
