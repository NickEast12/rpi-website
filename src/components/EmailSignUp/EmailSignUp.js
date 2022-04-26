import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

const EmailSignUpStyles = styled.section`
  width: 100%;
`;
const EmailSignUp = () => {
  const { countries } = useStaticQuery(graphql`
    query CountryQuery {
      countries: allCountriesJson {
        nodes {
          name
          code
        }
      }
    }
  `);
  const list = countries.nodes;
  return (
    <EmailSignUpStyles>
      <section className="wrapper">
        <h4>Subscribe for our latest news</h4>
        <form
          name="email_signup"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/thank-you"
        >
          <input type="hidden" name="form-name" value="email_signup" />
          <p className="hidden">
            <label htmlFor="bot-field">
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          <div className="input-group">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name*"
              required
            />
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              placeholder="Job Title*"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="companyName"
              id="companyName"
              placeholder="Company Name"
            />
            <select id="country" name="country" required>
              <option value="" disabled selected>
                Country*
              </option>
              {list.map((country, i) => (
                <option key={i} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email address"
            required
          />
          <button type="submit">
            <span>Subscribe</span>
          </button>
        </form>
      </section>
    </EmailSignUpStyles>
  );
};

export default EmailSignUp;
