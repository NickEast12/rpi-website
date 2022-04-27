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
import SEO from '../../components/functional/SEO';
import { EmailSignUp } from '../../components/EmailSignUp';

const information = [
  {
    name: 'Infrastructure & Cloud Services',
    title:
      'Catalysts for business reinvention, innovation and technological growth',

    quote: [
      {
        quote:
          '"Leveraging RP Internationals extensive 20 + year network across Europe, MEA and APAC has enabled us to secure exceptional talent which has fuelled our growth and ensured effective and timely delivery of our digital solutions. The whole team at RPI are specialists within the cloud transformation world and their detailed understanding of the specific cultural and contractual demands of working cross border in  multiple contracts and continents has been extremely appreciated."',
        name: 'VP Global Professional Services, Software Vendor',
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
        title="Infrastructure &amp; Cloud Services Recruitment  | RPI "
        description="Tailored Cloud &amp; Infrastructure recruitment. RPI source and secure the best talent in a talent short market. Find out how we do it and the specialist areas we support."
      />
      <ServiceHeader page={data.name} title={data.title} text={data.headerText}>
        <Illustration />
      </ServiceHeader>
      <ServiceOverview
        subtitle="Aligning talent with business processes and transforming cloud implementation strategy"
        fp="Cloud computing offers major benefits to businesses looking to expand operations and enable staff to work remotely, but how change is implemented is just as important as what is being implemented. To help you with your transformation to the Cloud, RPI’s global reach of highly skilled talent in this sector enables us to fulfill positions that require successful Change Management. "
      >
        <LowerIllustration />
      </ServiceOverview>
      <CTA />
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

      <EmailSignUp />
    </Layout>
  );
};

export default ERP;
