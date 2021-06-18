import React from 'react';
import CTA from '../../components/CTA';
//* Local Imports
import Layout from '../../components/Layout';
import AllSpecialisms from '../../components/sections/allSpecialisms';
import ServiceHeader from '../../components/sections/servicesHeader';
import ServiceOverview from '../../components/servicesTemplates/serviceOverview';
import ServicesAbout from '../../components/servicesTemplates/servicesAbout';
import ServiceTestimonial from '../../components/servicesTemplates/serviceTestimonial';
import Illustration from '../../svgs/infrastructure.svg';
import LowerIllustration from '../../svgs/cloud-lower.svg';

const information = [
  {
    name: 'Infrastructure & Cloud Services',
    title:
      'Catalysts for business reinvention, innovation and technological growth',

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

const ERP = () => {
  const data = information[0];

  const quoteData = data.quote[0];
  return (
    <Layout>
      <ServiceHeader page={data.name} title={data.title} text={data.headerText}>
        <Illustration />
      </ServiceHeader>
      <ServiceOverview
        subtitle="Aligning talent with business processes and transforming cloud implementation strategy"
        fp="Cloud computing offers major benefits to business operations as companies look to expand operations and enable staff to work remotely, but how change is implemented is just as important as what is being implemented. To help you with your transformation to the Cloud, RPI’s global reach of highly skilled talent in this sector enables us to fulfill positions that require successful Change Management. We source highly-skilled leadership and specialists to underpin successful Cloud technology implementation."
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
        title="Our services"
        text="Finding the best leaders and sourcing highly skilled talent means finding the right partner. Take a closer look at our areas of expertise in this service."
      />
      <CTA />
    </Layout>
  );
};

export default ERP;
