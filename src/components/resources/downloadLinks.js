import React from 'react';
import styled from 'styled-components';
import DownloadIcon from '../../svgs/download.svg';

const DownloadLinksStyles = styled.section`
  width: 100%;
  margin: 1rem 0;
  @media only screen and (min-width: 768px) {
    margin-top: 2rem;
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
  .b-meta {
    margin: 0.5rem 0 0 0;
    display: flex;
    svg {
      width: 20px;
      height: 20px;
      fill: var(--lightTeal);
    }
    p {
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
`;

const DownloadLinks = ({ data }) => {
  const i = true;
  return (
    <DownloadLinksStyles>
      <h3>Resources</h3>
      <section>
        {data.map((i, key) => (
          <SingleResource data={i} key={key} />
        ))}
      </section>
    </DownloadLinksStyles>
  );
};

export default DownloadLinks;

const SingleResource = ({ data }) => (
  <SingleResourceStyles>
    <a href={data.url} target="_blank" rel="noreferrer">
      <span className="b-meta">
        <DownloadIcon />
        <p>Download</p>
        <p className="author">• {data.title}</p>
      </span>
    </a>
  </SingleResourceStyles>
);
