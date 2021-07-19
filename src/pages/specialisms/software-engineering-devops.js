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
          'RPI have been helping us build out our software engineering teams with specific iOS, DevOps and Agile Delivery management skills. They always deliver candidates with the right experience and the perfect fit for our team.”',
        name: 'CTO, MEA',
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

export default ERP;
