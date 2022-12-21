import React, { useState, useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { EmailSignUp } from '../components/EmailSignUp';
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
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: 'RPI',
    description: '',
    url: 'https://www.rpint.com/',
    logo: 'https://cdn.sanity.io/images/x2j6emyv/production/83aa068956e711c6ef42999d6e6c705df29ae295-1920x1080.png',
  };
  return (
    <Layout>
      <SEO
        title="Global Technology &amp; Digital Transformation Recruitment | RPI"
        description="RPI recruits leadership and highly skilled technology talent for companies around the globe. Founded in 1998, our heritage in telecoms has evolved into providing talent solutions across multiple specialisms, services and sectors. We source the talent that ignites transformation in your business"
        schemaMarkup={schema}
      />
      <Hero />
      <UVP />
      <Services />
      <WhoWeAre />
      <CTA />
      <WhereWeWork />
      <PageBlogs Blogs={blogs} />
      <EmailSignUp />
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
              gatsbyImageData(formats: AUTO)
          }
        }
        title
        slug {
          current
        }
        readingTimeInMinutes
        id
        authors {
          name
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
    allSanityAuthor(sort: { fields: order, order: ASC }) {
      nodes {
        name
        position
        linkedin
        bio
        id
        order
        image {
          alt
          asset {
              gatsbyImageData(formats: AUTO)
          }
        }
      }
    }
  }
`;
