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
  }
`;
const TheTeam = () => {
  const i = true;
  return (
    <TheTeamStyles>
      <div className="team">
        <SingleTeam />
        <SingleTeam />
      </div>
    </TheTeamStyles>
  );
};

export default TheTeam;
