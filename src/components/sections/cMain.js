import React from 'react';
import styled from 'styled-components';

const CMainStyles = styled.section`
  width: 100%;
  padding: 2rem 0;
  .cmain {
    width: 90%;
    margin: var(--auto);
    max-width: var(--maxWidth);
    @media only screen and (min-width: 1024px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2rem;
      padding-top: 1rem;
      &__contact {
        display: flex;
        flex-direction: column;

        justify-content: center;
        padding: 0 1rem;
      }
    }
    &__contact {
      h2 {
        font-size: 2rem;
      }
      p {
        margin: 0.85rem 0;
      }
      &__details {
        display: flex;
        flex-direction: column;
        margin: 1rem 0;
        gap: 1rem;
        a {
          font-weight: 700;
          span {
            border-bottom: solid black 2px;
            padding-bottom: 2.5px;
          }
        }
      }
    }
    &__form {
      margin-top: 3rem;
      form {
        input {
          width: 100%;
          padding: 0.85rem 0.65rem;
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
          width: 185px;
        }
      }
      @media only screen and (min-width: 1024px) {
        margin-top: 0;
        form {
          section {
            display: flex;
            gap: 1rem;
          }
          textarea {
            height: 5rem;
          }
        }
      }
    }
  }
`;
const CMain = () => {
  const i = true;
  return (
    <CMainStyles>
      <div className="cmain">
        <div className="cmain__contact">
          <h2>Let’s start a conversation</h2>
          <p>
            Curious how RPI can deliver talent to transform your business? Send
            us a message.
          </p>
          <div className="cmain__contact__details">
            <a
              href="mailto:people@rpint.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>people@rpint.com</span>
            </a>
          </div>
        </div>
        <div className="cmain__form">
          <form
            name="contact_form"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/success"
          >
            <input type="hidden" name="form-name" value="contact_form" />
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
                name="second"
                id="second"
                placeholder="Last name"
                required
              />
            </section>
            <input
              type="email"
              name="email-address"
              id="emailaddress"
              placeholder="Your email"
              required
            />
            <input
              type="tel"
              name="number"
              id="number"
              placeholder="Your number"
            />
            <textarea name="message" id="message" placeholder="Your message" />
            <button type="submit" className="btn btn--main">
              <span>Submit</span>
            </button>
          </form>
        </div>
      </div>
    </CMainStyles>
  );
};

export default CMain;
