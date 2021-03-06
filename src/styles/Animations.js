import { css } from 'styled-components';

const Animations = css`
  @keyframes slide-in-top {
    0% {
      transform: translateY(-5px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  .nav__wrapper {
    transition: all 0.35s linear;
    z-index: 99999;
  }
  .active {
    border-bottom: 1px solid #dee4ec;
    transition: all 0.35s ease;
    z-index: 99999;
    background-color: var(--white) !important;

    .nav {
      padding: 0.75rem 0 !important;
    }
  }
`;

export default Animations;
