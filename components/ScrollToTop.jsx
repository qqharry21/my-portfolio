/** @format */

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiChevronUp, HiChevronDoubleUp } from 'react-icons/hi';
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
    isVisible && (
      <div className='scroll-to-top'>
        <Link href='/' passHref>
          <a>
            <HiChevronUp size={40} />
          </a>
        </Link>
      </div>
    )
  );
};

export default ScrollToTop;
