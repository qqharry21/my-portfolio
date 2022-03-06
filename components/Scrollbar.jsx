/** @format */

import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { sections } from '../data';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 1.4,
      delay: 0.4,
    },
  },
};

const Scrollbar = () => {
  const handleClick = () => {
    const windowHeight = window.innerHeight;
    const items = document.querySelectorAll('.navigation li');
    items.forEach((item, index) => {
      item.addEventListener('click', () => {
        window.scrollTo({ top: index * windowHeight, behavior: 'smooth' });
      });
    });
  };

  const scrollSpy = () => {
    const scrollTop = window.scrollY;

    const sections = document.querySelectorAll('section');
    const navigation = document.querySelector('.navigation');
    const reset = () => {
      for (let i = 0; i < navigation.children.length; i++) {
        navigation.children[i].classList.remove('selected');
      }
    };
    const windowHeight = window.innerHeight;

    sections.forEach((section, index) => {
      if (
        section.offsetTop < scrollTop + windowHeight / 2 &&
        scrollTop < section.offsetTop + windowHeight / 2
      ) {
        reset();
        navigation.children[index].classList.add('selected');
      }
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    handleClick();
    scrollSpy();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', scrollSpy);
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('scroll', scrollSpy);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <motion.ul
      key='scroll-bar'
      className='scrollbar-container navigation'
      variants={container}
      initial='hidden'
      animate='show'>
      <li className='scrollbar-item selected'></li>
      {sections.map(index => (
        <li key={index} className='scrollbar-item '></li>
      ))}
    </motion.ul>
  );
};

export default Scrollbar;
