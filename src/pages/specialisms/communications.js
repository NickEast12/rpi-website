import React from 'react';
import CTA from '../../components/CTA';
//* Local Imports
import Layout from '../../components/Layout';
import AllSpecialisms from '../../components/sections/allSpecialisms';
import ServiceHeader from '../../components/sections/servicesHeader';
import ServiceOverview from '../../components/servicesTemplates/serviceOverview';
import ServicesAbout from '../../components/servicesTemplates/servicesAbout';
import ServiceTestimonial from '../../components/servicesTemplates/serviceTestimonial';
import Illustration from '../../svgs/communications.svg';
import LowerIllustration from '../../svgs/communications-lower.svg';
import SEO from '../../components/functional/SEO';

const information = [
  {
    name: 'Communications',
    title: 'Driving innovation, transformation and monetisation',

    quote: [
      {
        quote:
          '"From the beginning of our transformation RP International has supported with the identification and deployment of highly experienced individuals. RPI has also placed specialist talent into the strategic vendors who are supporting our transformation. This has had a significant impact to the delivery of our project at both a management and technical level." ',
        name: 'CTO, Mobile Operator, Europe ',
        company: '',
      },
    ],
  },
];

const Communication = () => {
  const data = information[0];
  const quoteData = data.quote[0];
  return (
    <Layout>
      <SEO
        title="Telecommunications Recruitment Agency | RPI"
        description="Partner with RPI, the leading telecommunications recruitment agency globally. Tell us about your hiring needs."
      />
      <ServiceHeader page={data.name} title={data.title} text={data.headerText}>
        <Illustration />
      </ServiceHeader>
      <ServiceOverview
        subtitle="Enabling the latest evolution of network, IT and digital services in the Telecoms industry"
        fp="With a heritage in telecoms for over two decades,  we have supported the majority of regional operators to build their leadership and technology teams. We have partnered through deregulation, new business models and digital transformation. Our talent network leads and drives change across a wide range of digital, cloud and platform agnostic technologies spanning 5G, wireless networking and IoT."
      >
        <LowerIllustration />
      </ServiceOverview>
      <ServicesAbout />
      <ServiceTestimonial
        quotef={quoteData.quote}
        name={quoteData.name}
        company={quoteData.company}
      />
      <AllSpecialisms
        title="Our services"
        text="Finding the best leaders and sourcing highly skilled tech talent means finding the right partner. Take a closer look at how we deliver talent."
      />
      <CTA />
    </Layout>
  );
};

export default Communication;
