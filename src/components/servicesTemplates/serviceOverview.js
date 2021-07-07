import React from 'react';
import styled from 'styled-components';
//* Local imports

const ServicesOverviewStyles = styled.section`
  width: 100%;
  padding: 3rem 0;
  @media only screen and (min-width: 1024px) {
    padding-top: 0;
  }
  .stats {
    width: 90%;
    margin: var(--auto);
    max-width: var(--maxWidth);
    &__text {
      h3 {
        margin: 0.25rem 0 0.5rem 0;
        font-size: 1.85rem;
      }
      p {
        margin-bottom: 0.5rem;
      }
    }
    &__img {
      width: 90%;
      margin: var(--auto);
      padding: 1.5rem 0;
      @media only screen and (min-width: 1280px) {
        width: 80%;
      }
    }
    @media only screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas: 'a b';
      grid-gap: 2.5rem;
      &__text {
        grid-area: b;
        text-align: left;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;
      }
      &__img {
        grid-area: a;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
const ServicesOverview = ({ subtitle, fp, sp, tp, children }) => (
  <ServicesOverviewStyles>
    <div className="stats">
      <div className="stats__text">
        <h3>{subtitle}</h3>
        <p>{fp}</p>
        <p>{sp}</p>
        {tp}
      </div>
      <div className="stats__img">{children}</div>
    </div>
  </ServicesOverviewStyles>
);

export default ServicesOverview;
