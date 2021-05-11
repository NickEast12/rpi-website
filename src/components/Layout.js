import React, { useState, useEffect } from 'react';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './Nav';
import Footer from './Footer';
import Animations from '../styles/Animations';
import Typography from '../styles/Typography';

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Animations />
    <Typography />
    <Nav />
    <div>{children}</div>
    <Footer />
  </>
);

export default Layout;

// if (location.hash) {
//   const id = location.hash.substring(1); // location.hash without the '#'
//   setTimeout(() => {
//     const el = document.getElementById(id);
//     if (el) {
//       el.scrollIntoView();
//       el.focus();
//     }
//   }, 0);
// }
