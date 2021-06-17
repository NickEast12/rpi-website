import React from 'react';
import Layout from '../components/Layout';
import LegalBody from '../components/sections/legalBody';
import LegalHeader from '../components/sections/legalHeader';

const Terms = () => {
  const i = true;
  return (
    <Layout>
      <LegalHeader title="Terms &amp; Conditions" date="June 2021" />
      <LegalBody>
        <section>
          <h5>Information for Candidates (‘You’)</h5>
          <p>
            This document contains information that RPI is legally obliged to
            inform you of and also to provide you with some general information
            about RPI’s services.
          </p>
        </section>
        <section>
          <h4>Group</h4>
          <p>
            RPI consists of the following operating companies: RP International
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
            RPI companies may act as both an Employment Business (i.e. supply
            contractors) and an Employment Agency (i.e. recruit permanent staff
            for clients)
          </p>
          <p>RPI does not charge candidates for its services.</p>
        </section>
        <section>
          <h4>Information</h4>
          <p>
            We will use the personal details that you have provided to us for
            the purpose of introducing the services you provide to clients. In
            providing this service to you we will need to transfer your personal
            details to our client companies. We may also from time to time
            transfer your details to other service providers.
          </p>
          <p>
            When requested you will be required to send proof of ID. This can be
            done by sending us a photocopy of the appropriate page from your
            passport or if this is not acceptable a copy of an ID card if you
            have one. We will need to obtain proof of identity before forwarding
            your CV.
          </p>
          <p>
            We will also require at least two references when requested and by
            providing us with details of two referees you consent that we may
            contact these people to obtain a reference for you and pass their
            response onto our Clients. Where you provide completed references to
            us you consent that we may pass these to Clients.
          </p>
          <p>
            We will process your application but we will need the above
            information prior to commencement of work at a client site. This can
            happen at short notice so please be prepared for this request.
            Clients will be kept informed of this process.
          </p>
        </section>
        <section>
          <h4>Database</h4>
          <p>
            By sending us your CV you are requesting to be registered with RPI.
            Your CV will be registered on a central database of prospective
            candidates held by RPI and will be used to find work for you. RPI
            may retain your CV and information for a commercially reasonable
            time for backup, archival, or audit purposes. Whilst you remain on
            this database we reserve the right to contact you when we have a
            suitable position to discuss with you. If you wish to unsubscribe
            from our database at any time then please email{' '}
            <a href="mailto:offdatabase@rpint.com">offdatabase@rpint.com </a>{' '}
            and we will remove your CV as soon as possible. This may take a few
            days.
          </p>
        </section>
        <section>
          <h4>CVs</h4>
          <p>
            We will always seek your permission (either verbally or by email)
            prior to sending your CV to a client. Occasionally this is not
            possible and in order not to delay an application you agree that we
            may send your CV to our clients. Where we have received your
            permission we will assume that we are acting solely on your behalf
            with that particular client. Please let the sales consultant you
            have given permission know if this should not be the case.
          </p>
        </section>
        <section>
          <h4>Employment Business</h4>
          <p>
            Where we act as an employment business we will ask you to sign a
            contract which will contain terms covering the following areas: –
          </p>
          <ul>
            <li>
              You will be asked to operate as a Limited Company Freelancer or
              within a management company. We will not normally contract you as
              a temporary employee of RP International or pay you directly.
            </li>
            <li>
              We will expect that the Limited Company or your management company
              will ensure that you are properly paying your taxes and social
              security payments in the country in which you will be living and
              working during the assignment.
            </li>
            <li>
              The Contracts are for a fixed term and you will be made aware of
              the detailed terms for a particular assignment when our Consultant
              contacts you.
            </li>
            <li>
              You will be expected to produce Time Sheets detailing the hours
              that you have worked to the clients’ satisfaction. These must be
              approved by the client. Where approval has not been obtained this
              may result in a delayed payment whilst we ascertain that the hours
              worked have been done satisfactorily.
            </li>
            <li>
              After completion of a contract, you will be restricted from
              working with that client except through RP for a period of 12
              months.
            </li>
          </ul>
        </section>
        <section>
          <h4>Opt Out</h4>
          <p>
            There is provision in the Conduct of Employment Agencies and
            Employment Businesses Regulations 2003 for companies and those
            workers whose services they supply to opt out of these Regulations.
            If you do not wish to Opt Out then please let us know immediately.
          </p>
          <p>
            Please feel free to contact us on
            <a href="mailto:contracts@rpint.com"> contracts@rpint.com </a> if
            you have any further questions.
          </p>
        </section>
      </LegalBody>
    </Layout>
  );
};

export default Terms;
