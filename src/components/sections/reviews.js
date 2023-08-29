import React from 'react';
import styled from 'styled-components';

const data = [
  {
    quote:
      'RPI engaged me for my first stint in 2016 in what was largely a "virtual" process. The discussion and eventual relocation from the UK to Singapore was smooth, encouraging and they assisted in all aspects of the relocation logistics. Three years on, I repatriated back to RPI’s London office after a profound learning curve in the developing Asia market. Since returning to London, RPI has provided the perfect platform to grow our footprint with Tier 1 Technology enterprises. My highlight so far has been an all expenses paid trip to Miami. The ultimate reward for performance.',
    name: 'Chris Secker, Europe ',
  },
  {
    quote:
      'I originally joined RPI in 2001 and it was my first real role in the work place. My decision to join the organisation was based on the style of the Directors of the business, and it has proven to be a great decision. A decision, which has opened up opportunities for me to grow my responsibilities and work in the Middle East, Africa, Asia and ANZ & Pacific. The RPI platform has given me the opportunity to enjoy a varied career over the past two decades, starting and running businesses for the organisation in new geographies, and evolving my service to clients from contract, to permanent and on to executive search.',
    name: 'Chris Baker, ANZ & Pacific',
  },
  {
    quote:
      'From my first day with RPI without any doubt, I can say that I have continued to grow and expand both personally and professionally. Having the opportunity to work, meet and have direct access to the leaders of the company has helped me to look at the bigger picture of recruitment. I have been promoted twice in this period and have been rewarded well for my efforts. Since starting at RPI, I’ve got married, had a baby, bought my first house and lastly, my sales figures have enabled me to join the annual honours club including Dubai, Miami and New Orleans.',
    name: 'Mothi Rajendran, Asia',
  }
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
        background: var(--background);
        color: var(--white);
        text-align: center;
        padding: 1.5rem 1rem;
        box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
        q {
          font-size: 0.95rem;
        }
        p {
          font-weight: 700;
          color: var(--white);
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
        grid-template-columns: repeat(2, 1fr);
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
        <div className="reviews__wrapper">
          {data.map((box) => (
            <div className="reviews__wrapper__box" key={box.quote}>
              <q>{box.quote}</q>
              <p>{box.name}</p>
            </div>
          ))}
        </div>
      </div>
    </ReviewsStyles>
  );
};

export default Reviews;
