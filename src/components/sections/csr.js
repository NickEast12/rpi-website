import React from 'react';
import styled from 'styled-components';
//* Local imports
import Illustration from '../../svgs/template-1.svg';

const CSRStyles = styled.section`
  width: 100%;
  padding: 3rem 0;
  @media only screen and (min-width: 768px) {
    padding: 0.5rem 0 3rem 0;
  }
  .CSR {
    width: 90%;
    margin: var(--auto);
    max-width: var(--maxWidth);
    &__left {
      width: 90%;
      margin: var(--auto);
    }
    &__right {
      margin-top: 2.5rem;
      h4 {
        font-size: 2.35rem;
        margin: 0.25rem 0 0.5rem 0;
      }
    }
    @media only screen and (min-width: 768px) {
      &__left,
      &__right {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      &__left {
        background-color: var(--background);
        grid-area: b;
        background-color: var(--darkTeal);
        width: 100%;
        padding: 2rem;
        svg {
          width: 100%;
          height: 12rem;
        }
      }
      &__right {
        grid-area: a;
        background-color: var(--background);
        padding: 3rem;
        text-align: left;
        margin-top: 0;
        h6 {
          color: rgb(206, 211, 214);
        }
        h4,
        p {
          color: var(--offWhite);
        }
      }
    }
    @media only screen and (min-width: 1024px) {
      display: grid;
      grid-template-columns: 60% 1fr;
      /* grid-gap: 1rem; */
      grid-template-areas: 'a b';
      &__left {
        width: 100%;
        margin: var(--auto);
      }
    }
    @media only screen and (min-width: 1280px) {
      padding-bottom: 2rem;
    }
  }
`;
const CSR = () => {
  const i = true;
  return (
    <CSRStyles>
      <div className="CSR">
        <div className="CSR__left">
          <Illustration />
        </div>
        <div className="CSR__right">
          <h6 className="sbt">CSR</h6>
          <h4>CSR title</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            eum deserunt perferendis quibusdam distinctio accusantium illo,
            voluptatem, molestiae obcaecati nihil repellendus magnam voluptas
            nobis ipsam.
          </p>
        </div>
      </div>
    </CSRStyles>
  );
};

export default CSR;