import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import LegalBody from '../components/sections/legalBody';
import LegalHeader from '../components/sections/legalHeader';
import SEO from '../components/functional/SEO';

const Terms = () => {
  const i = true;
  return (
    <Layout>
      <SEO
        title="Cookie Policy | Specialist Recruitment Partner | RPI"
        description="RPI is a global search and strategic recruitment firm, specialising
        in the provision of leadership and technology professionals across
        multiple specialisms and sectors, offering three core recruitment
        services: Executive, Permanent and Interim &amp; Contract."
      />
      <LegalHeader title="Cookie Policy" date="1 July 2021" />
      <LegalBody>
        <section>
          <p>
            <span>RPI consists of the following operating companies: </span>
          </p>
          <p>
            RP International Ltd registered in England, RP International
            Resources (Europe) Ltd registered in England, RPI Consulting GmbH
            registered in Germany, RP International FZ-LLC registered in the
            UAE, RP International Labors Supply LLC registered in the UAE, RP
            International Resources Pte Ltd registered in Singapore, RP
            International Resources Ltd registered in Hong Kong, RP
            International Resources Malaysia Sdn.Bhd registered in Malaysia, RP
            International Resources Pty Ltd registered in Australia, RP
            International Inc. registered in the USA and RP International New
            Zealand Ltd registered in New Zealand. This group is described as
            RPI in the rest of this document.
          </p>
          <p>
            RPI is a global search and strategic recruitment firm, specialising
            in the provision of leadership and technology professionals across
            multiple specialisms and sectors, offering three core recruitment
            services: Executive, Permanent and Interim &amp; Contract.
          </p>
          <p>
            This is the Cookie Policy for RPI, accessible from{' '}
            <Link to="/">https://www.rpint.com</Link>
          </p>
          <h4>What are cookies?</h4>
          <p>
            As is common practice with almost all professional websites this
            site uses cookies, which are tiny files that are downloaded to your
            computer, to improve your experience. This page describes what
            information they gather, how we use it and why we sometimes need to
            store these cookies. We will also share how you can prevent these
            cookies from being stored however this may downgrade or 'break'
            certain elements of the sites functionality.
          </p>
          <section>
            <h4>How we use cookies</h4>
            <p>
              RPI use cookies for a variety of reasons detailed below.
              Unfortunately in most cases there are no industry standard options
              for disabling cookies without completely disabling the
              functionality and features they add to this site. It is
              recommended that you leave on all cookies if you are not sure
              whether you need them or not in case they are used to provide a
              service that you use.
            </p>
          </section>
          <section>
            <h4>Disabling cookies</h4>
            <p>
              You can prevent the setting of cookies by adjusting the settings
              on your browser (see your browser Help for how to do this). Be
              aware that disabling cookies will affect the functionality of this
              and many other websites that you visit. Disabling cookies will
              usually result in also disabling certain functionality and
              features of the this site. Therefore it is recommended that you do
              not disable cookies.
            </p>
          </section>
          <section>
            <h4>The cookie we set</h4>
            <h6>Email newsletters related cookies</h6>
            <ul>
              <li>
                This site offers newsletter or email subscription services and
                cookies may be used to remember if you are already registered
                and whether to show certain notifications which might only be
                valid to subscribed/unsubscribed users.
              </li>
            </ul>
            <h6>Forms related cookies</h6>
            <ul>
              <li>
                When you submit data to through a form such as those found on
                contact pages or comment forms cookies may be set to remember
                your user details for future correspondence.
              </li>
            </ul>
          </section>
          <section>
            <h4>Third party cookie</h4>
            <p>
              In some special cases we also use cookies provided by trusted
              third parties. The following section details which third party
              cookies you might encounter through this site.
            </p>
            <ul>
              <li>
                This site uses Google Analytics which is one of the most
                widespread and trusted analytics solution on the web for helping
                us to understand how you use the site and ways that we can
                improve your experience. These cookies may track things such as
                how long you spend on the site and the pages that you visit so
                we can continue to produce engaging content.
              </li>
            </ul>
            <p>
              For more information on Google Analytics cookies, please see the
              official Google Analytics page.
            </p>
          </section>
          <section>
            <h4>More information</h4>
            <p>
              If there is something that you aren't sure whether you need or
              not, it's usually safer to leave cookies enabled in case it does
              interact with one of the features you use on our site.
            </p>
            <p>
              Please feel free to contact us on{' '}
              <a href="mailto:people@rpint.com">people@rpint.com</a> if you have
              any further questions.
            </p>
          </section>
        </section>
      </LegalBody>
    </Layout>
  );
};

export default Terms;
