import React from 'react';
import CTA from '../../components/CTA';
//* Local Imports
import Layout from '../../components/Layout';
import AllSpecialisms from '../../components/sections/allSpecialisms';
import ServiceHeader from '../../components/sections/servicesHeader';
import ServiceOverview from '../../components/servicesTemplates/serviceOverview';
import ServicesAbout from '../../components/servicesTemplates/servicesAbout';
import ServiceTestimonial from '../../components/servicesTemplates/serviceTestimonial';
import Illustration from '../../svgs/software.svg';
import LowerIllustration from '../../svgs/software-lower.svg';

const information = [
  {
    name: 'Software Engineering & DevOps',
    title: 'Sourcing the best talent in a talent short market',
    headerText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolor expedita amet quos eligendi repellat.',

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
        subtitle="Empowering an engineering culture to attract top talent"
        fp="We know the challenges that companies face when recruiting for a wide range of DevOps focused positions which means we’re able to shortlist candidates for recruitment much faster than our competitors. At RPI, we ensure that we place highly-skilled talent with the right clients to ensure a cultural fit, as much as a technological one."
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

export default ERP;
