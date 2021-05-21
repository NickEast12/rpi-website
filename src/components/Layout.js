import React, { useState, useEffect } from 'react';
import 'normalize.css';
import styles, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './nav';
import Footer from './footer';

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
