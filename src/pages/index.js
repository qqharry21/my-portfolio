/** @format */
import React from 'react';
import { About, Contact, Experience, Hero, Project } from 'src/components';
import { Layout } from '../main';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18nextConfig from 'next-i18next.config';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ['common', 'hero', 'about', 'project', 'experience', 'contact'],
        nextI18nextConfig
      )),
      // Will be passed to the page component as props
    },
  };
}

export default Home;
