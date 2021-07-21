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
        title="Terms &amp; Conditions | Specialist Recruitment Partner | RPI"
        description="RPI is a global search and strategic recruitment firm, specialising
        in the provision of leadership and technology professionals across
        multiple specialisms and sectors, offering three core recruitment
        services: Executive, Permanent and Interim &amp; Contract."
      />
      <LegalHeader title="Terms &amp; Conditions" date="1st July 2021" />
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
            This website and its design, text, graphics, the selection and
            arrangement thereof and software are copyright of RPI.
          </p>
        </section>
        <section>
          <p>
            All rights are reserved except for permission granted to download
            the materials contained on this site to a single personal computer
            and to print a hard copy of such materials solely for personal,
            non-commercial use. Any other use of materials on this site,
            including reproduction, modification, distribution or republication,
            without the prior written permission of RPI, is strictly prohibited.
          </p>
          <p>
            The information provided on this site is free of charge and for
            general informational purposes only and the transmission,
            downloading or sending of any information or other material through
            or in connection with this site does not create any contractual
            relationship between you and RPI.
          </p>
          <p>
            This site may contain links to third party sites. Those third party
            sites are beyond the control of RPI and you accept that when you
            leave this site (whether knowingly or not) RPI can no longer be
            responsible in any way or accept any liability whatsoever for any
            material that you encounter on those sites nor for any transactions
            between you and those sites.
          </p>
          <p>
            RPI uses reasonable care and skill in providing the content on this
            site but does not represent or warrant the accuracy, timeliness,
            completeness or suitability of the content, or that use of the site
            is free of risk of viruses or other damage.
          </p>
          <p>
            RPI will not be liable for any claims, losses, including but not
            limited to direct, indirect, special, economic and consequential
            loss or damage (including but not limited to loss of profits, loss
            of revenue, loss of goodwill or loss of or corruption to data),
            whether in contract, tort, negligence, misrepresentation, breach of
            statutory duty or otherwise howsoever arising out of or in
            connection with the use of this site.
          </p>
          <p>
            Please feel free to contact us on{' '}
            <a href="mailto:people@rpint.com">people@rpint.com</a> if you have
            any further questions.
          </p>
        </section>
      </LegalBody>
    </Layout>
  );
};

export default Terms;
