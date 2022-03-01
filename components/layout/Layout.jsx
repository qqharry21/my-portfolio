/** @format */

import React, { useEffect, useState } from 'react';
import { Header, EmailBar, Footer, ScrollToTop, SocialBar, Scrollbar } from '..';

const Layout = ({ children, currentPath }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className='app' id='top'>
      <Header />
      <SocialBar />
      <EmailBar />
      {currentPath === '/' && <Scrollbar />}
      <main className={`main`} id='main'>
        {children}
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Layout;
