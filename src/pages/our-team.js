import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
//* Local imports
import Layout from '../components/Layout';
import CTA from '../components/CTA';
import JoinTheTeam from '../components/sections/joinTheTeam';
import TheTeam from '../components/sections/theTeam';
import Illustration from '../svgs/architecture.svg';
import PageBlogs from '../components/sections/pageBlogs';

const OurTeam = ({ data }) => {
  const blogs = data.BlogQuery.nodes;
  return (
    <Layout>
      <TeamHeader />
      <TheTeam />
      <JoinTheTeam />
      <PageBlogs Blogs={blogs} />
      <CTA />
    </Layout>
  );
};

export default OurTeam;

const TeamHeaderStyles = styled.header`
  width: 100%;
  padding: 6rem 0 3rem 0;
  background-color: var(--white);
  .thead {
    max-width: var(--maxWidth);
    width: 90%;
    margin: var(--auto);
    text-align: center;
    h1 {
      font-size: 2.35rem;
      @media only screen and (min-width: 375px) {
        font-size: 3rem;
      }
    }
    p {
      margin: 1rem auto;
      max-width: 550px;
    }
    svg {
      width: 90%;
      margin: var(--auto);
      padding: 1rem 0;
      @media only screen and (min-width: 414px) {
        width: 100%;
      }
      @media only screen and (min-width: 768px) {
        width: 60%;
        padding-top: 1.5rem;
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    padding: 6rem 0 3rem 0;
  }
  @media only screen and (min-width: 1280px) {
    padding: 7rem 0 4rem 0;
  }
`;
const TeamHeader = () => {
  const i = true;
  return (
    <TeamHeaderStyles>
      <div className="thead">
        <h1>Meet RPI's leaders</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          ipsum? Pariatur, magni maxime! Consectetur, expedita.
        </p>
        <Illustration />
      </div>
    </TeamHeaderStyles>
  );
};

export const teamQuery = graphql`
  query TeamQuery {
    BlogQuery: allSanityPost(
      limit: 3
      sort: { fields: publishedAt, order: DESC }
    ) {
      nodes {
        publishedAt
        mainImage {
          alt
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
        title
        slug {
          current
        }
        readingTimeInMinutes
        id
        authors {
          author {
            name
          }
        }
        excerpt
        categories {
          title
          slug {
            current
          }
        }
      }
    }
  }
`;
