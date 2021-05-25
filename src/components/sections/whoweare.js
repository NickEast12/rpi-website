import React from 'react';
import styled from 'styled-components';
//* Local imports
import Illustration from '../../svgs/template-1.svg';

const WhoweareStyles = styled.section`
  width: 100%;
  padding: 6rem 0;
  /* background-color: var(--darkBlue); */
  background-color: var(--background);
  .wwa {
    color: var(--offWhite);
    width: 90%;
    margin: var(--auto);
    &__text {
      h6 {
        color: var(--offWhite);
      }
      h3 {
        margin: 0.25rem 0;
        font-size: 2.35rem;
      }
      p {
        margin: 0.5rem 0;
      }
    }
    &__img {
      width: 90%;
      margin: 3rem auto 0 auto;
      svg {
        width: 100%;
        height: auto;
      }
    }
  }
`;
const Whoweare = () => {
  const i = true;
  return (
    <WhoweareStyles>
      <div className="wwa">
        <div className="wwa__text">
          <h6 className="sbt">Intro into section</h6>
          <h3>Who we are title</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            voluptate possimus pariatur perferendis dolore ab porro itaque
            incidunt consequuntur eaque? Magni exercitationem unde iste et.
          </p>
        </div>
        <div className="wwa__img">
          <Illustration />
        </div>
      </div>
    </WhoweareStyles>
  );
};

export default Whoweare;
