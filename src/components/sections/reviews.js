import React from 'react';
import styled from 'styled-components';

const data = [
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, nobis?',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, nobis?',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, nobis?',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, nobis?',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, nobis?',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, nobis?',
  },
];
const ReviewsStyles = styled.section`
  width: 100%;
  background-color: var(--offWhite);
  padding: 3rem 0;
  .reviews {
    width: 90%;
    margin: var(--auto);
    max-width: var(--maxWidth);
    h4,
    p {
      text-align: center;
    }
    p {
      margin-top: 0.5rem;
    }
    &__wrapper {
      width: 90%;
      margin: var(--auto);
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 1.5rem;
      padding: 2rem 0;
      &__box {
        background-color: var(--white);
        text-align: center;
        padding: 2.5rem 1rem;
        box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
        q {
          font-weight: 700;
          font-size: 1.15rem;
        }
        &:nth-child(1n) {
          border-top: solid var(--newCyan) 8px;
        }
        &:nth-child(2n) {
          border-top: solid var(--newBlue) 8px;
        }
      }
      @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media only screen and (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
`;
const Reviews = () => {
  const i = true;
  return (
    <ReviewsStyles>
      <div className="reviews">
        <h4>What our team have to say?</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          nobis?
        </p>
        <div className="reviews__wrapper">
          {data.map((box) => (
            <div className="reviews__wrapper__box" key={box.quote}>
              <q>{box.quote}</q>
            </div>
          ))}
        </div>
      </div>
    </ReviewsStyles>
  );
};

export default Reviews;
