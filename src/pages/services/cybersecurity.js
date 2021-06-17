import React from 'react';
import CTA from '../../components/CTA';
//* Local Imports
import Layout from '../../components/Layout';
import AllSpecialisms from '../../components/sections/allSpecialisms';
import ServiceHeader from '../../components/sections/servicesHeader';
import ServiceOverview from '../../components/servicesTemplates/serviceOverview';
import ServicesAbout from '../../components/servicesTemplates/servicesAbout';
import ServiceTestimonial from '../../components/servicesTemplates/serviceTestimonial';
import Illustration from '../../svgs/cybersecurity.svg';
import LowerIllustration from '../../svgs/cybersecurity-lower.svg';

const information = [
  {
    name: 'Cybersecurity',
    title: 'Taking the risk out of cybersecurity recruitment',
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

const Cybersecurity = () => {
  const data = information[0];
  const quoteData = data.quote[0];
  return (
    <Layout>
      <ServiceHeader page={data.name} title={data.title} text={data.headerText}>
        <Illustration />
      </ServiceHeader>
      <ServiceOverview
        subtitle="Talent solutions that will fortify your cybersecurity frontlines"
        fp="Cybersecurity is no longer a nice to have component of your IT strategy, it must be woven into the fabric of organisations and enterprises operating in the digital age. With the threat landscape continually reshaping, it is vital that businesses have the right talent in play to mitigate their risk. But while demand is high, candidate volumes are comparably low. We equip your business with the experts you need on the cyber frontlines and plug the global talent gap in cybersecurity."
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

export default Cybersecurity;
