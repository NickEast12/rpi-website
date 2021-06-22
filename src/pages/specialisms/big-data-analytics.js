import React from 'react';
import CTA from '../../components/CTA';
//* Local Imports
import Layout from '../../components/Layout';
import AllSpecialisms from '../../components/sections/allSpecialisms';
import ServiceHeader from '../../components/sections/servicesHeader';
import ServiceOverview from '../../components/servicesTemplates/serviceOverview';
import ServicesAbout from '../../components/servicesTemplates/servicesAbout';
import ServiceTestimonial from '../../components/servicesTemplates/serviceTestimonial';
import Illustration from '../../svgs/big-data-analytics.svg';
import LowerIllustration from '../../svgs/big-data-analytics-lower.svg';
import SEO from '../../components/functional/SEO';

const information = [
  {
    name: 'big data analytics',
    title: 'Delivering maximum value via a data-driven approach',
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

const BigDataAnalytics = () => {
  const data = information[0];

  const quoteData = data.quote[0];
  return (
    <Layout>
      <SEO
        title="Big Data &amp; Analytics Recruitment Agency | RPI"
        description="RPIs team of trusted consultants are expertly placed to help your business find the talent that will deliver a competitive advantage through BI, Data &amp; Analytics. Get in touch today."
      />
      <ServiceHeader page={data.name} title={data.title} text={data.headerText}>
        <Illustration />
      </ServiceHeader>
      <ServiceOverview
        subtitle="Ensuring data and analytics deliver competitive advantage"
        fp="The rise of big data has made business intelligence solutions a vital tool but finding the right technical professionals in this ever-growing sector is a challenge. To gain a competitive advantage through BI, Data & Analytics, businesses require a trusted talent acquisition advisor. Our team of consultants stay on top of the latest trends and have a network of highly skilled data professionals to place across projects of any scale, at any time. "
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

export default BigDataAnalytics;
