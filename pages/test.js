/** @format */

import React from 'react';
import { Example } from '../components/test/Example';
import { motion } from 'framer-motion';
import { About, Hero } from '../components';
import Layout from '../components/layout/Layout';
const Test = () => {
  return (
    <Layout title='test'>
      <Hero />
    </Layout>
  );
};

export default Test;
