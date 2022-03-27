/** @format */
import React, { useEffect, useState } from 'react';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import { EmailBar, Footer, Header, Meta, ScrollToTop, SocialBar } from '../components';

const MyApp = ({ Component, pageProps, router }) => {
  const { pathname } = useRouter();
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleRouteChange = url => {
      window.scrollTo(0, 0);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [pathname, router.events]);

  if (!mounted) return null;
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem='true'>
      <Meta />
      <Header />
      <SocialBar />
      <EmailBar />
      <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} key={router.route} />
        {/* {loading &&
            <motion.div key='loader' id='loader'>
              <Meta />
              <Loader setLoading={setLoading} />
            </motion.div>
          */}
      </AnimatePresence>
      <ScrollToTop />
      <Footer />
    </ThemeProvider>
  );
};

export default MyApp;
