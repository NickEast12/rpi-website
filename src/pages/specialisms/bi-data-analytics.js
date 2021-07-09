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
    name: 'BI, Data and Analytics ',
    title: 'Extracting maximum value via a data driven approach',
    quote: [
      {
        quote:
          'RP International provided professional engagement from the very first conversation regarding recruitment support in scaling our AI Lab. They showed excellent technical knowledge and provided extensively qualified candidates who had been technically tested before submitting. We successfully onboarded four Data Scientists with niche skill sets – we had struggled to hire even one Data Scientist before engaging with RPI.',
        name: 'SVP Data Analytics, Major Bank, Asia',
        company: '',
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
        title="BI, Data &amp; Analytics Recruitment Agency | RPI"
        description="RPIs team of trusted consultants are expertly placed to help your business find the talent that will deliver a competitive advantage through BI, Data &amp; Analytics. Get in touch today."
      />
      <ServiceHeader page={data.name} title={data.title} text={data.headerText}>
        <Illustration />
      </ServiceHeader>
      <ServiceOverview
        subtitle="Ensuring data and analytics deliver competitive advantage"
        fp="To gain a competitive advantage through BI, Data &amp; Analytics, businesses require a trusted talent acquisition advisor. Our team of consultants stay on top of the latest trends and have a network of highly skilled data professionals. "
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

export default BigDataAnalytics;
