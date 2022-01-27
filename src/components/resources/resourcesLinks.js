import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import DownloadIcon from '../../svgs/download.svg';

const ResourcesLinksStyles = styled.section`
  width: 100%;
  section {
    padding: 1.5rem 0;
    width: 90%;
    margin: var(--auto);
    max-width: var(--maxWidth);
    h2 {
      text-align: center;
    }
  }
`;

const SingleResourceStyles = styled.section`
  &:hover .b-meta svg {
    animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  &:hover {
    .b-meta {
      text-decoration: underline;
    }
  }
  .gatsby-image-wrapper {
    max-width: 200px;
    margin: 0 auto;
  }
  .b-meta {
    margin: 0.5rem 0 0 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    svg {
      width: 20px;
      height: 20px;
      fill: var(--lightTeal);
    }
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      text-transform: uppercase;
      font-size: var(--textMedium);
      color: var(--lightTeal);
      padding-left: 7.5px;
      @media only screen and (min-width: 768px) {
        font-size: 18px;
      }
    }
    .author {
      color: var(--background);
    }
  }
  .author {
    text-align: center;
    margin-top: 0.25rem;
  }
`;

const ResourcesLinks = ({ data }) => {
  console.log(data);
  return (
    <ResourcesLinksStyles>
      <section>
        <h2>Downloads</h2>
        <div className="wrapper">
          {data.map((data, i) => (
            <SingleResource data={data} key={i} />
          ))}
        </div>
      </section>
    </ResourcesLinksStyles>
  );
};

export default ResourcesLinks;

const SingleResource = ({ data }) => (
  <SingleResourceStyles>
    <a href={`${data.file.asset.url}?dl=`} target="_blank" rel="noreferrer">
      <Img fluid={data.mainImage.asset.fluid} alt={data.mainImage.alt} />
      <span className="b-meta">
        <DownloadIcon />
        <p>Download</p>
      </span>
      <p className="author">{data.title}</p>
    </a>
  </SingleResourceStyles>
);
