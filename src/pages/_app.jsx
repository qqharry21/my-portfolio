/** @format */
import React, { useEffect, useState } from 'react';
import { appWithTranslation } from 'next-i18next';
import '../styles/globals.css';
import 'animate.css';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { ScrollToTop } from 'src/components';
import { Header, EmailBar, SocialBar } from '../components/nav';
import { Meta, Footer, Loader } from '../main';
import nextI18nextConfig from 'next-i18next.config';

const MyApp = ({ Component, pageProps, router }) => {
  const { pathname } = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem='true'>
      <Meta />
      <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
        {loading ? (
          <motion.div key='loader' className='loader'>
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Header path={pathname} />
            <SocialBar />
            <EmailBar />
            <Component {...pageProps} key={router.route} />
            <Footer />
          </>
        )}
      </AnimatePresence>
      <ScrollToTop />
    </ThemeProvider>
  );
};

export default appWithTranslation(MyApp, nextI18nextConfig);
