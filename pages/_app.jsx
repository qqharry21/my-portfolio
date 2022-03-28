/** @format */
import React, { useEffect, useState } from 'react';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { EmailBar, Footer, Header, Loader, Meta, ScrollToTop, SocialBar } from '../components';

const MyApp = ({ Component, pageProps, router }) => {
  const { pathname } = useRouter();
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const html = document.querySelector('html');
    const handleRouteChange = () => {
      html.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      setTimeout(() => {
        html.style.scrollBehavior = 'smooth';
      }, 1000);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  if (!mounted) return null;
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
            <AnimatePresence
              exitBeforeEnter
              onExitComplete={() => window.scrollTo(0, 0)}
              initial={false}>
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
            <Footer />
          </>
        )}
      </AnimatePresence>
      <ScrollToTop />
    </ThemeProvider>
  );
};

export default MyApp;
