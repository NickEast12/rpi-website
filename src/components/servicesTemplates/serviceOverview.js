import React from 'react';
import styled from 'styled-components';
//* Local imports

const ServicesOverviewStyles = styled.section`
  width: 100%;
  padding: 3rem 0;
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
    &__boxes {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2rem;
      padding: 1.5rem 0;
      svg {
        width: 30px;
        height: 30px;
        fill: rgba(102, 194, 171, 1);
      }
      h5 {
        margin: 0.5rem 0;
      }
    }
    @media only screen and (min-width: 1024px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 4rem;
      &__boxes {
        padding: 0;
      }
    }
  }
`;
const ServicesOverview = ({ subtitle, fp, sp, overviewData }) => (
  <ServicesOverviewStyles>
    <div className="stats">
      <div className="stats__text">
        <h3>{subtitle}</h3>
        <p>{fp}</p>
        <p>{sp}</p>
      </div>
      <div className="stats__boxes">
        {overviewData.map((x) => (
          <section key={x.title}>
            {x.icon}
            <h5>{x.title}</h5>
            <p>{x.text}</p>
          </section>
        ))}
      </div>
    </div>
  </ServicesOverviewStyles>
);

export default ServicesOverview;
