import React from 'react';
import CTA from '../../components/CTA';
//* Local Imports
import Layout from '../../components/Layout';
import AllSpecialisms from '../../components/sections/allSpecialisms';
import ServiceHeader from '../../components/sections/servicesHeader';
import ServiceOverview from '../../components/servicesTemplates/serviceOverview';
import ServicesAbout from '../../components/servicesTemplates/servicesAbout';
import ServiceTestimonial from '../../components/servicesTemplates/serviceTestimonial';
import Illustration from '../../svgs/architecture.svg';
import LowerIllustration from '../../svgs/architecture-lower.svg';
import SEO from '../../components/functional/SEO';

const information = [
  {
    name: 'Architecture',
    title: 'Designing digital businesses underpinned by innovation ',
    quote: [
      {
        quote:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus placeat ullam saepe, doloribus perspiciatis adipisci architecto? Consequatur quibusdam a ut!',
        name: 'Joe Blogs',
        company: 'Company name',
      },
    ],
  },
];

const Architecture = () => {
  const data = information[0];
  const quoteData = data.quote[0];
  return (
    <Layout>
      <SEO
        title="Business Architecture Recruitment Agency | RPI"
        description="RPI are experts in recruiting solutions for business architecture internationally. Find the talent that will help you build better. "
      />
      <ServiceHeader page={data.name} title={data.title} text={data.headerText}>
        <Illustration />
      </ServiceHeader>
      <ServiceOverview
        subtitle="Delivering roadmaps and solutions leading to business success"
        sp="Ensuring Technology is “enabling” and not “suffocating, stifling and overpowering” the business is a complex challenge."
        tp=" Legacy dependencies, tech debt and business process disparity require sophisticated Architecture roadmaps with your unique business at the heart of them. "
      >
        <LowerIllustration />
      </ServiceOverview>
      <ServicesAbout />
      {/* <ServiceTestimonial
        quote={quoteData.quote}
        name={quoteData.name}
        company={quoteData.company}
      /> */}
      <AllSpecialisms
        title="Our services"
        text="Finding the best leaders and sourcing highly skilled tech talent means finding the right partner. Take a closer look at how we deliver talent."
      />
      <CTA />
    </Layout>
  );
};

export default Architecture;
