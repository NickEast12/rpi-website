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

const information = [
  {
    name: 'Architecture',
    title: 'Enabling digital business propelled by corporate strategy ',
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
      <ServiceHeader page={data.name} title={data.title} text={data.headerText}>
        <Illustration />
      </ServiceHeader>
      <ServiceOverview
        subtitle="Overcoming big picture challenges in business architecture with the right skill sets"
        fp="Businesses must pay attention to how they are structured to fulfil individual needs and ensure long term success. When it comes to business architecture, companies need to build better. RPI’s track record expounds the sourcing of the right talent, with the right skills, experience and credentials to do the job."
        sp="Ensuring Technology is “enabling” and not “suffocating, stifling and overpowering” the business is a complex challenge; legacy dependencies, tech debt and business processes disparity require sophisticated Architecture roadmaps with your unique business at the heart of them. "
      >
        <LowerIllustration />
      </ServiceOverview>
      <ServicesAbout />
      <ServiceTestimonial
        quote={quoteData.quote}
        name={quoteData.name}
        company={quoteData.company}
      />
      <AllSpecialisms
        title="Our specialisms"
        text="Finding the best leaders and sourcing highly skilled talent means finding the right partner. Take a closer look at our areas of expertise in this service."
      />
      <CTA />
    </Layout>
  );
};

export default Architecture;
