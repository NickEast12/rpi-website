import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import SingleTeam from './singleTeam';

const TheTeamStyles = styled.section`
  width: 100%;
  .team {
    padding-bottom: 3rem;
    width: 90%;
    margin: var(--auto);
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    max-width: var(--maxWidth);
    @media only screen and (min-width: 375px) {
    }
    @media only screen and (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1.5rem;
    }
    @media only screen and (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
const TheTeam = () => {
  const i = true;
  return (
    <TheTeamStyles>
      <div className="team">
        <SingleTeam />
        <SingleTeam />
        <SingleTeam />
        <SingleTeam />
      </div>
    </TheTeamStyles>
  );
};

export default TheTeam;
