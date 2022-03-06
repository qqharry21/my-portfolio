/** @format */

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiChevronUp } from 'react-icons/hi';
import { motion } from 'framer-motion';
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <motion.div
      className='scroll-to-top'
      animate={{ opacity: isVisible ? 1 : 0 }}
      initial={{ opacity: 0 }}
      transition={{ opacity: { duration: 0.2 } }}>
      <Link href='/' passHref>
        <a>
          <HiChevronUp size={40} />
        </a>
      </Link>
    </motion.div>
  );
};

export default ScrollToTop;
