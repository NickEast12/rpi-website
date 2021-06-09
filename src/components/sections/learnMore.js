import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Icon from '../../svgs/right-arrow-alt.svg';

const LearnMoreStyles = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  text-align: center;

  .l-m {
    cursor: pointer;

    &:hover {
      svg {
        transform: translate(7px);
      }
      .l-m--text {
        border-bottom: rgba(255, 255, 255, 1) 2px solid;
      }
    }
    width: 200px;
    margin: 0 auto;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.85rem;
    @media only screen and (min-width: 768px) {
      margin: 0 auto 0 0;
      justify-content: flex-start;
    }
    &--text {
      color: var(--white);
      display: block;
      padding-bottom: 2.5px;
      border-bottom: rgba(255, 255, 255, 0.25) 2px solid;
      transition: all 0.35s ease;
    }

    svg {
      fill: var(--white);
      width: 18px;
      height: 18px;
      transition: all 0.35s ease;
    }
  }
`;
const LearnMore = ({ link }) => (
  <LearnMoreStyles>
    <Link className="l-m" to={link}>
      <Icon />
      <span className="l-m--text">Learn more</span>
    </Link>
  </LearnMoreStyles>
);

export default LearnMore;
