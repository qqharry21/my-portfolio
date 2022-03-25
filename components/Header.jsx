/** @format */

import React, { useEffect, useState } from 'react';
import { Navbar } from '.';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });
  const [isVisible, setIsVisible] = useState(true);
  const [lastYPos, setLastYPos] = useState(0);
  const [showMediaNavbar, setShowMediaNavbar] = useState(false);

  const toggleMediaNavbar = () => {
    setShowMediaNavbar(prev => !prev);
  };

  const toggleTheme = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos;
      setIsVisible(isScrollingUp);
      setLastYPos(yPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastYPos, showMediaNavbar]);

  // useEffect(() => {
  //   const html = document.querySelector('html');
  //   if (showMediaNavbar && isTablet) {
  //     html.style.overflowY = 'hidden';
  //   } else {
  //     html.style.overflowY = 'scroll';
  //   }
  // }, [showMediaNavbar]);

  // framer motion config
  const headerContainer = {
    hidden: { y: 0 },
    show: {
      y: isVisible ? 0 : '-50vh',
      transition: {
        ease: 'linear',
        duration: 0.3,
        delay: !isVisible && 0.1,
      },
    },
  };

  return (
    <motion.header
      className={`header center ${lastYPos > 0 && 'shadow-md'}`}
      variants={headerContainer}
      // initial='hidden'
      animate='show'>
      {isTablet ? (
        <h1>
          <Link href='/' className='link' shallow>
            Hao
          </Link>
        </h1>
      ) : (
        <Link className='mt-4 tablet:mt-12' href='/' shallow passHref>
          <a>
            {theme === 'light' ? (
              <Image src='/light_logo.svg' alt='Logo' width={100} height={100} />
            ) : (
              <Image src='/dark_logo.svg' alt='Logo' width={100} height={100} />
            )}
          </a>
        </Link>
      )}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        isTablet={isTablet}
        showMediaNavbar={showMediaNavbar}
        toggleMediaNavbar={toggleMediaNavbar}
      />
    </motion.header>
  );
};

export default Header;
