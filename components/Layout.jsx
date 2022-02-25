/** @format */

import React from 'react';
import { Header, EmailBar, Footer, ScrollToTop, SocialBar } from './';

const Layout = ({ children }) => {
  return (
    <div className='app' id='top'>
      <Header />
      <SocialBar />
      <EmailBar />
      <main className={`main`}>{children}</main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Layout;
