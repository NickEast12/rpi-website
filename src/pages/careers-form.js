import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import ArrowRightIcon from '../svgs/right-arrow-alt.svg';
import MainImg from '../svgs/home.svg';

const CareersFormStyles = styled.main`
  width: 100%;
  padding-bottom: 1.5rem;
  overflow: hidden;
  .c-f {
    width: 90%;
    margin: var(--auto);
    padding-top: 2rem;
    max-width: 1200px;
    &__left {
      svg {
        transform: rotate(180deg);
        width: 60px;
        height: 60px;
        border: solid var(--newBlue) 3px;
        border-radius: 50%;
        padding: 0.5rem;
        fill: var(--newBlue);
      }
      h1 {
        margin-top: 1rem;
        font-size: 2.5rem;
      }
      p {
        margin-top: 0.5rem;
      }
      form {
        margin-top: 1.5rem;
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
        button {
          width: 200px;
        }
        .policy {
          margin-top: 1rem;
          font-size: 0.95rem;
          span {
            font-size: 0.95rem;
            color: var(--newCyan);
            text-decoration: underline;
          }
        }
      }
    }
    &__right {
      display: none;
    }
    @media only screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 40%;
      &__left {
        width: 100%;
      }
      &__right {
        display: block;
        position: relative;
        svg {
          position: absolute;
          top: 2rem;
          right: -22rem;
          width: 700px;
        }
      }
    }
    @media only screen and (min-width: 1024px) {
      grid-template-columns: 55% 1fr;
      &__right {
        svg {
          right: -29rem;
          width: 1000px;
          top: -2rem;
        }
      }
    }
    @media only screen and (min-width: 1280px) {
      padding-top: 3.5rem;
      grid-template-columns: 50% 1fr;
      &__right {
        svg {
          top: 1rem;
          right: -15rem;
          width: 900px;
        }
      }
    }
  }
`;
const CareersForm = ({ location }) => {
  const { email, name } = location.state || '';
  console.log(email, name);
  return (
    <CareersFormStyles>
      <GlobalStyles />
      <div className="c-f">
        <div className="c-f__left">
          <Link to="/careers">
            <ArrowRightIcon />
          </Link>
          <h1>Let's get some info</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse illum
            quas adipisci, veniam vero enim!
          </p>
          <form
            name="careers_form"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
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
                defaultValue={name}
              />
              <input
                type="text"
                name="second"
                id="second"
                placeholder="Second name"
                required
              />
            </section>
            <section>
              <input
                type="tel"
                name="number"
                id="number"
                placeholder="Your number"
              />
              <input
                type="email"
                name="email-address"
                id="emailaddress"
                placeholder="Your email"
                required
                defaultValue={email}
              />
            </section>
            <textarea name="message" id="message" placeholder="Your message" />
            <button type="submit" className="btn btn--main">
              <span>Submit</span>
            </button>
            <p className="policy">
              By contacting us your are agreeing to our{' '}
              <span>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </span>
            </p>
          </form>
        </div>
        <div className="c-f__right">
          <MainImg />
        </div>
      </div>
    </CareersFormStyles>
  );
};

export default CareersForm;
