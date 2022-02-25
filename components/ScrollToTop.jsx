/** @format */

import React, { useEffect, useState } from 'react';
import { TiArrowSortedUp } from 'react-icons/ti';
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

      window.addEventListener('scroll', toggleVisibility);
      return () => window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  return (
    isVisible && (
      <div className='scroll-to-top'>
        <a href='#top'>
          <TiArrowSortedUp size={24} />
        </a>
      </div>
    )
  );
};

export default ScrollToTop;
