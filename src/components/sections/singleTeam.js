import React, { useState } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

//* Local imports
import Image from '../functional/Image';
import LinkedinIcon from '../../svgs/linkedin.svg';

const SingleTeamStyles = styled.section`
  position: relative;
  border-radius: 1.5px;
  width: 100%;
  height: auto;
  transition: all 0.35s ease;
  margin-bottom: 1.5rem;
  @media only screen and (min-width: 600px) {
    margin-bottom: 0;
  }
  .gatsby-image-wrapper {
    width: 100%;
    height: 20rem;
    border-radius: 5px;
  }
  .info {
    position: absolute;
    transition: max-height 0.35s ease;
    bottom: 0.5rem;
    width: 90%;
    left: calc(100% - 95%);
    header {
      padding: 0.5rem 0.75rem;
      background-color: var(--background);
      z-index: 50;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 5px;
      h5,
      h6 {
        color: var(--offWhite);
      }
      h5 {
        font-size: 1.1rem;
        font-weight: 600;
      }
      h6 {
        font-size: 1rem;

        font-weight: 200;
      }
      svg {
        fill: white;
        background-color: #0072b1;
        padding: 0.45rem;
        width: 35px;
        height: 80%;
        margin-top: calc(0% + 20%);
        border-radius: 5px;
      }
    }
    .body {
      max-height: ${({ open }) => (open ? '22rem' : '0')};
      height: ${({ open }) => (open ? '13.5rem' : '0')};
      /* visibility: ${({ open }) => (open ? 'visable' : 'hidden')}; */
      background-color: white;
      /* padding: 0.5rem 0.85rem; */
      overflow-y: auto;
      transition: all 0.5s;
      @media only screen and (min-width: 375px) {
        height: ${({ open }) => (open ? '15.5rem' : '0')};
      }

      @media only screen and (min-width: 600px) {
        height: ${({ open }) => (open ? '15.5rem' : '0')};
      }

      @media only screen and (min-width: 1024px) {
        height: ${({ open }) => (open ? '15rem' : '0')};
      }
      @media only screen and (min-width: 1280px) {
        height: ${({ open }) => (open ? '15rem' : '0')};
      }
      &__inner {
        width: 90%;
        margin: var(--auto);
        padding: 1rem 0;
        p {
          opacity: 1;
        }
      }
    }
  }
`;
const SingleTeam = ({ data }) => {
  const [open, setOpen] = useState(false);
  return (
    <SingleTeamStyles onClick={() => setOpen(!open)} open={open}>
      <Img fluid={data.image.asset.fluid} alt={data.image.alt} />
      <div className="info">
        <header>
          <section>
            <h5>{data.name}</h5>
            <h6>{data.position}</h6>
          </section>
          <section>
            <LinkedinIcon />
          </section>
        </header>
        <div className="body">
          <div className="body__inner">
            <p>{data.bio}</p>
          </div>
        </div>
      </div>
    </SingleTeamStyles>
  );
};

export default SingleTeam;
