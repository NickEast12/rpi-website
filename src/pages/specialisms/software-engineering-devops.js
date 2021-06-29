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
import SEO from '../../components/functional/SEO';

const information = [
  {
    name: 'Software Engineering & DevOps',
    title: 'Building platforms to accelerate business outcomes',

    quote: [
      {
        quote:
          'RP International has a long history of recruiting senior and specialist talent for our company. I was pleased to be able to rely on their expertise and professionalism to hire a number of my direct reports over the past few months. From our first interaction RPI accurately understood my needs, not just from an IT perspective, but also regarding culture, personality and ‘fit’. The fact that RPI personally knew almost every candidate and was able to describe them so accurately was testament to their 20+ years’ experience and great reputation in the market. I have no doubt he was able to attract the interest of candidates not openly on the market and others we ourselves wouldn’t have been able to identify. Diversity and inclusion are a key theme for us and I was very impressed with RPI’s ability to provide balanced short-lists which resulted in securing key senior female talent for the organisation.',
        name: 'Anonymous',
        company: '',
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
        title="Software Engineering Recruitment Agency | RPI"
        description="RPI have access to a global talent pool of mid to senior level Architects, Engineering and Software Development professionals that will transform your business."
      />
      <ServiceHeader page={data.name} title={data.title} text={data.headerText}>
        <Illustration />
      </ServiceHeader>
      <ServiceOverview
        subtitle="Creating platforms and applications for a digital age"
        fp="Building, scaling, and supporting Software Engineering teams to develop platforms, applications, and systems to enhance the customer experience. An incredibly competitive discipline, our Consultants work to embed themselves in the community to ensure we match technical expertise with great cultural fit for our clients. "
      >
        <LowerIllustration />
      </ServiceOverview>
      <ServicesAbout />
      <ServiceTestimonial
        quotef="Working in high-growth markets where the demand for the best talent is extremely high we have been pleased to work with RP International securing numerous Senior and Specialist hires across our European business."
        quotes="Throughout our dealings with RP International they have shown in-depth industry knowledge, a very professional approach and the patience and versatility to deliver excellent candidates in a consistently timely manner. They have not been afraid to push-back on occasions, acting as true business partners with open communications and regular, informed feedback."
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
