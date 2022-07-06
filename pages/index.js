/** @format */
import React from 'react';
import { About, Contact, Experience, Hero, Project } from 'components';
import Layout from '@/components/layout/Layout';
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

// export default function Home...

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

// Home.getInitialProps = async () => ({
//   namespacesRequired: ['common'],
// });

// Home.propTypes = {
//   t: PropTypes.func.isRequired,
// };

// export default withTranslation('common')(Home);
export default Home;
