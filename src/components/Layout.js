import React, { useState, useEffect } from 'react';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './Nav';
import Loader from './functional/Load';
import Footer from './Footer';
import Animations from '../styles/Animations';
import Typography from '../styles/Typography';

const Layout = ({ children, location }) => {
  const isHome = location.pathname === '/';
  const hasPath = location.pathname === '/*';
  const [isLoading, setIsLoading] = useState(isHome);
  useEffect(() => {
    if (isLoading) {
    }
  }, [isLoading]);

  return (
    <>
      <GlobalStyles />
      <Animations />
      <Typography />
      {isLoading && isHome ? (
        <Loader finishLoading={() => setIsLoading(false)} />
      ) : (
        <>
          <Nav isHome={isHome} />
          <div>{children}</div>
          <Footer />
        </>
      )}
    </>
  );
};

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
