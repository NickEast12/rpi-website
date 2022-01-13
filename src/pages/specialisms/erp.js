import React from 'react';
import CTA from '../../components/CTA';
//* Local Imports
import Layout from '../../components/Layout';
import AllSpecialisms from '../../components/sections/allSpecialisms';
import ServiceHeader from '../../components/sections/servicesHeader';
import ServiceOverview from '../../components/servicesTemplates/serviceOverview';
import ServicesAbout from '../../components/servicesTemplates/servicesAbout';
import ServiceTestimonial from '../../components/servicesTemplates/serviceTestimonial';
import Illustration from '../../svgs/erp.svg';
import LowerIllustration from '../../svgs/erp-lower.svg';
import SEO from '../../components/functional/SEO';

const information = [
  {
    name: 'ERP',
    title: 'Delivering large-scale information management projects globally',

    quote: [
      {
        quotef:
          '"Working in high-growth markets where the demand for the best talent is extremely high we have been pleased to work with RP International securing numerous Senior and Specialist hires across our European business.',
        quotes:
          'Throughout our dealings with RP International they have shown in-depth industry knowledge, a very professional approach and the patience and versatility to deliver excellent candidates in a consistently timely manner. They have not been afraid to push-back on occasions, acting as true business partners with open communications and regular, informed feedback."',
        name: 'Director HR, Global Software company',
      },
    ],
  },
];

const ERP = () => {
  const data = information[0];
  const quoteData = data.quote[0];
  return (
    <Layout>
      <SEO
        title="ERP Recruitment  | RPI "
        description="Gain access to the best skilled talent in Enterprise Resource Planning deployments. RPI has a deep understanding of the ERP sector to fulfill business requirements."
      />
      <ServiceHeader page={data.name} title={data.title} text={data.headerText}>
        <Illustration />
      </ServiceHeader>
      <ServiceOverview
        subtitle="Filling the demand for talent and expertise in ERP deployments"
        fp="Enterprise Resource Planning deployments are complex and expensive endeavors. RPI understands the importance of ERP implementation projects and the role that highly skilled talent plays within them. Our ERP consultants have developed a community to support global ERP deployments."
      >
        <LowerIllustration />
      </ServiceOverview>
      <ServicesAbout />
      <ServiceTestimonial
        quotef={quoteData.quotef}
        quotes={quoteData.quotes}
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

export default ERP;
