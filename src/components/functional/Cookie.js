import { Link } from 'gatsby';
import React from 'react';
import CookieConsent from 'react-cookie-consent';

const Cookie = () => (
  <CookieConsent
    location="bottom"
    buttonText="Accept all cookies"
    cookieName="gatsby-gdpr-google-analytics"
    expires={200}
    containerClasses="cookie__wrapper"
    contentClasses="cookie__wrapper__content"
    buttonClasses="btn btn--main cookie--btn"
    disableStyles
  >
    <p>
      We use cookies to provide you with the best possible website user
      experience. For full details read our{' '}
      <Link to="/cookie-policy">
        <span>Cookie Policy</span>
      </Link>
    </p>
  </CookieConsent>
);

export default Cookie;
