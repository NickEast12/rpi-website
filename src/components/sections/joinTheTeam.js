import React from 'react';
import styled from 'styled-components';
//* Local imports
import Illustration from '../../svgs/template-1.svg';
import LearnMore from './learnMore';

const JoinOurTeamStyles = styled.section`
  width: 100%;
  padding-bottom: 3rem;
  .join {
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
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
      &__left {
        display: flex;
        justify-content: center;
      }
    }
    @media only screen and (min-width: 768px) {
      padding: 3rem 0 4rem 0;
    }
  }
`;
const JoinOurTeam = () => {
  const i = true;
  return (
    <JoinOurTeamStyles>
      <div className="join">
        <div className="join__left">
          <Illustration />
        </div>
        <div className="join__right">
          <h6 className="sbt">Join our team</h6>
          <h4>Join the team title</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            eum deserunt perferendis quibusdam distinctio accusantium illo,
            voluptatem, molestiae obcaecati nihil repellendus magnam voluptas
            nobis ipsam.
          </p>
          <LearnMore alt link="/careers" />
        </div>
      </div>
    </JoinOurTeamStyles>
  );
};

export default JoinOurTeam;
