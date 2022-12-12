import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const CareersFormStyles = styled.main`
  width: 90%;
  margin: var(--auto);
  max-width: var(--maxWidth);
  padding-bottom: 2rem;
  form {
    max-width: 650px;
    margin: var(--auto);
    text-align: center;
    section {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1rem;
    }
    input {
      width: 100%;
      padding: 0.65rem 0.65rem;
      background-color: var(--offWhite);
      border: 1px solid #eee;
      margin-bottom: 0.75rem;
      &:focus {
        outline: 2px solid var(--newBlue);
        outline-offset: -1px;
      }
    }
    .recaptcha {
      text-align: center;
      margin: 0 auto;
    }
    textarea {
      width: 100%;
      padding: 0.85rem 0.65rem;
      background-color: var(--offWhite);
      border: 1px solid #eee;
      margin-bottom: 0.75rem;
      height: 9rem;
      resize: vertical;
      &:focus {
        outline: 2px solid var(--newBlue);
        outline-offset: -1px;
      }
    }
    input::placeholder,
    textarea::placeholder {
      color: #000;
    }

    .btn-wrapper {
      margin: var(--auto);
      text-align: center;
      width: 100%;
      button {
        width: 250px;
        max-width: 350px;
      }
    }
    .policy {
      margin-top: 1rem;
      text-align: center;
      font-size: 0.95rem;
      span {
        font-size: 0.95rem;
        color: var(--newCyan);
        text-decoration: underline;
      }
    }
  }
`;
const CareersForm = () => (
  <CareersFormStyles>
    <form
      name="careers_form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
      action="/success"
    >
      <input type="hidden" name="form-name" value="careers_form" />
      <p className="hidden">
        <label htmlFor="bot-field">
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
      <section>
        <input
          type="text"
          name="first"
          id="first"
          placeholder="First name"
          required
        />
        <input
          type="text"
          name="last"
          id="last"
          placeholder="Last name"
          required
        />
      </section>
      <section>
        <input type="tel" name="number" id="number" placeholder="Your number" />
        <input
          type="email"
          name="email-address"
          id="emailaddress"
          placeholder="Your email"
          required
        />
      </section>
      <textarea name="message" id="message" placeholder="Your message" />
      {/* <div className="recaptcha">
        <ReCAPTCHA sitekey={process.env.GATSBY_SITE_RECAPTCHA_KEY} />
      </div> */}
      <div className="btn-wrapper">
        <button type="submit" className="btn btn--main">
          <span>Submit</span>
        </button>
      </div>
      <p className="policy">
        By contacting us your are agreeing to our{' '}
        <span>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </span>
      </p>
    </form>
  </CareersFormStyles>
);

export default CareersForm;
