import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

const EmailSignUpStyles = styled.section`
  width: 100%;
  max-width: 1220px;
  margin: var(--auto);
  background: rgb(102, 194, 171);
  background: linear-gradient(
    344deg,
    rgba(102, 194, 171, 1) 33%,
    rgba(115, 208, 217, 1) 92%
  );
  @media only screen and (min-width: 1024px) {
    margin: 0 auto 2rem auto;
  }
  .wrapper {
    padding: 3rem 0;
    width: 90%;
    margin: var(--auto);
    h4 {
      text-align: center;
      color: var(--white);
    }
    form {
      max-width: 650px;
      margin: 2rem auto 0 auto;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .input-group {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        @media only screen and (min-width: 526px) {
          flex-direction: row;
        }
      }
      input,
      select {
        width: 100%;
        border: none;
        border-radius: 5px;
        padding: 0.75rem 0.5rem;
      }
      select {
        color: #969696;
      }
      option:not(:first-of-type) {
        color: black;
      }
      .button {
        display: flex;
        align-items: center;
        justify-content: center;
        button {
          width: 80%;
          max-width: 250px;
          border: solid 1px var(--offWhite);
          background-color: var(--offWhite);
          span {
            color: #66c2ab;
          }
        }
      }
    }
    .recaptcha {
      margin: 0 auto;
      text-align: center;
    }
  }
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
          {/* <div className="recaptcha">
            <ReCAPTCHA sitekey={process.env.GATSBY_SITE_RECAPTCHA_KEY} />
          </div> */}
          <div className="button">
            <button type="submit" className="btn">
              <span>Subscribe</span>
            </button>
          </div>
        </form>
      </section>
    </EmailSignUpStyles>
  );
};

export default EmailSignUp;
