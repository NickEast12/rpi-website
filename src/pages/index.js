import React, { useState, useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Hero from '../components/sections/hero';
import UVP from '../components/sections/uvp';
import Services from '../components/sections/services';
import WhoWeAre from '../components/sections/whoweare';
import WhereWeWork from '../components/sections/wherewework';
import Layout from '../components/Layout';
import PageBlogs from '../components/sections/pageBlogs';
import CTA from '../components/CTA';
import SEO from '../components/functional/SEO';

const IndexPage = ({ data }) => {
  const blogs = data.BlogQuery.nodes;
  return (
    <Layout>
      <SEO
        title="Global Technology &amp; Digital Transformation Recruitment Agency | RPI"
        description="Find the leadership and talent that your business needs to ignite transformation in your business. Choose the global recruitment leader driving technology-enabled business transformation."
      />
      <Hero />
      <UVP />
      <Services />
      <WhoWeAre />
      <WhereWeWork />
      <PageBlogs Blogs={blogs} />
      <CTA />
    </Layout>
  );
};

export default IndexPage;

export const indexQuery = graphql`
  query IndexQuery {
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
