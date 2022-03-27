/** @format */

import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import React from 'react';
import { page } from '../../utils/animation/framerAnimations';

const Layout = ({ children, title, description }) => {
  return (
    <div className='app' id='top' key='layout'>
      <NextSeo title={title} description={description} openGraph={{ title, description }} />
      <motion.main
        className={`main`}
        id='main'
        variants={page}
        transition={{ type: 'linear' }}
        initial='hidden'
        animate='show'
        exit='exit'>
        {children}
      </motion.main>
    </div>
  );
};

export default Layout;
