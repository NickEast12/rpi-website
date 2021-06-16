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

const information = [
  {
    name: 'Communications',
    title: 'Driving digital dexterity and elevating your digital workplace',

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

const Communication = () => {
  const data = information[0];
  const quoteData = data.quote[0];
  return (
    <Layout>
      <ServiceHeader page={data.name} title={data.title} text={data.headerText}>
        <Illustration />
      </ServiceHeader>
      <ServiceOverview
        subtitle="With a heritage in telecoms, RPI are at the cutting edge of talent acquisition in the communications sector"
        fp="New communications technologies involve not only traditional telecommunications experience and skills but also a mix of technology-based knowledge. "
        sp="We have transformed our processes and methods of recruitment in this field, equipping our consultants with the right training to exceed the expectations of our partners. RPI embeds the right talent within your organisation to lead, drive and monetize change that involves a wide range of digital , cloud and platform agnostic technologies spanning 5G, wireless networking and IoT."
      >
        <Illustration />
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

export default Communication;
