/** @format */
import React from 'react';
import { About, Contact, Experience, Hero, Project } from '../components';
import Layout from '../components/layout/Layout';
export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
    </Layout>
  );
}
