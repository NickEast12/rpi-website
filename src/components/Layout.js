import React, { useState, useEffect } from 'react';
import 'normalize.css';
import styles, { ThemeProvider } from 'styled-components';
//* Local imports
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => {
  const i = true;
  return (
    <>
      <GlobalStyles />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
