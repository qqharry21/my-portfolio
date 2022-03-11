/** @format */
import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

import { Meta, Loader } from '../components';

function MyApp({ Component, pageProps, router }) {
  const routers = useRouter();
  const [loading, setLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState(routers.pathname);

  useEffect(() => {
    const handleRouteChange = url => {
      window.scrollTo(0, 0);
      setCurrentPath(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem='true'>
      <AnimateSharedLayout type='crossfade'>
        <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)}>
          {loading ? (
            <motion.div key='loader' id='loader'>
              <Meta />
              <Loader setLoading={setLoading} />
            </motion.div>
          ) : (
            <Layout currentPath={currentPath}>
              <Component {...pageProps} key={router.route} />
            </Layout>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </ThemeProvider>
  );
}

export default MyApp;
