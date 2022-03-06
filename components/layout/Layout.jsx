/** @format */

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Header, EmailBar, Footer, ScrollToTop, SocialBar, Scrollbar } from '..';
import { page } from '../../utils/animation/framerAnimations';
const Layout = ({ children, currentPath }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className='app'
      id='top'
      key='layout'
      variants={page}
      initial='hidden'
      animate='show'
      exit='exit'>
      <Header />
      <SocialBar />
      <EmailBar />
      {currentPath === '/' && <Scrollbar />}
      <main className={`main`} id='main'>
        {children}
      </main>

      <ScrollToTop />
      <Footer />
    </motion.div>
  );
};

export default Layout;
