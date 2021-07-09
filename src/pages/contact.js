import React from 'react';
import { graphql } from 'gatsby';
//* Local imports
import Layout from '../components/Layout';
import CMain from '../components/sections/cMain';
import ContactLocations from '../components/sections/contactLocations';
import CTA from '../components/CTA';
import DarkHeader from '../components/sections/darkHeader';
import SEO from '../components/functional/SEO';

const Contact = ({ data }) => {
  const regions = data.RegionsQuery.nodes;
  const pacific = data.PacificQuery;
  const europe = data.EuropeQuery;
  const middleEast = data.MiddleEastQuery;
  const asia = data.AsiaQuery;
  const america = data.AmericaQuery;
  const offices = [europe, middleEast, asia, pacific, america];
  return (
    <Layout>
      <SEO
        title="Contact Us | Specialist Recruitment Partner | RPI"
        description="Looking for a specialist recruitment partner that will connect business strategy, talent and technology to drive transformation? Let's talk. Visit our contact page to get in touch."
      />
      <DarkHeader title="Are you ready to talk about talent that transforms your business? " />
      <CMain />
      <ContactLocations offices={offices} regions={regions} />
    </Layout>
  );
};

export default Contact;

export const query = graphql`
  query ContactQuery {
    RegionsQuery: allSanityRegion {
      nodes {
        slug {
          current
        }
        title
        id
      }
    }
    PacificQuery: allSanityLocations(
      filter: {
        regions: { elemMatch: { slug: { current: { eq: "anz-and-pacific" } } } }
      }
    ) {
      nodes {
        regions {
          title
          slug {
            current
          }
        }
        name
        addressone
        addresstwo
        addressthree
        addressfour
        whatthreewords
        ealicence
        email
        id
        postcode
        number
      }
    }
    EuropeQuery: allSanityLocations(
      filter: {
        regions: { elemMatch: { slug: { current: { eq: "uk-and-europe" } } } }
      }
    ) {
      nodes {
        regions {
          title
          slug {
            current
          }
        }
        name
        addressone
        addresstwo
        addressthree
        addressfour
        whatthreewords
        ealicence
        email
        id
        postcode
        number
      }
    }
    MiddleEastQuery: allSanityLocations(
      filter: {
        regions: {
          elemMatch: { slug: { current: { eq: "middle-east-and-africa" } } }
        }
      }
    ) {
      nodes {
        regions {
          title
          slug {
            current
          }
        }
        name
        addressone
        addresstwo
        addressthree
        addressfour
        whatthreewords
        ealicence
        email
        id
        postcode
        number
      }
    }
    AsiaQuery: allSanityLocations(
      filter: { regions: { elemMatch: { slug: { current: { eq: "asia" } } } } }
    ) {
      nodes {
        regions {
          title
          slug {
            current
          }
        }
        name
        addressone
        addresstwo
        addressthree
        addressfour
        whatthreewords
        ealicence
        email
        id
        postcode
        number
      }
    }
    AmericaQuery: allSanityLocations(
      filter: {
        regions: { elemMatch: { slug: { current: { eq: "americas" } } } }
      }
    ) {
      nodes {
        regions {
          title
          slug {
            current
          }
        }
        name
        addressone
        addresstwo
        addressthree
        addressfour
        whatthreewords
        ealicence
        email
        id
        postcode
        number
      }
    }
  }
`;
