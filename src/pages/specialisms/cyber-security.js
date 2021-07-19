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
import SEO from '../../components/functional/SEO';

const information = [
  {
    name: 'Cyber security',
    title: 'Securing the business from known and unknown threats',
    quote: [
      {
        quote:
          '"I have worked with RP International for a number of years now as they stand out above the crowd. Their professionalism and knowledge of the Cyber Security market is unparalleled, and have assisted us in developing entire regions from scratch with superb quality and speed."',
        name: 'SVP IT, Security Company',
        company: '',
      },
    ],
  },
];

const Cybersecurity = () => {
  const data = information[0];
  const quoteData = data.quote[0];
  return (
    <Layout>
      <SEO
        title="Cybersecurity Recruitment Agency | RPI"
        description="Embedding solutions to mitigate risk and protect the busines"
      />
      <ServiceHeader page={data.name} title={data.title} text={data.headerText}>
        <Illustration />
      </ServiceHeader>
      <ServiceOverview
        subtitle="Embedding solutions to mitigate risk and protect the business"
        fp="Cyber Security is no longer a nice to have component of your IT strategy. It must be woven into the fabric of organisations and enterprises operating in the digital age. With the threat landscape continually changing, it is vital that businesses have the right talent in play to mitigate their risk. We equip you with the experts that bring strong technical competence alongside pragmatic delivery to keep you on the front foot with cyber resilience. "
      >
        <LowerIllustration />
      </ServiceOverview>
      <ServicesAbout />
      <ServiceTestimonial
        quotef={quoteData.quote}
        name="SVP IT, Cyber Security Company"
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

export default Cybersecurity;
