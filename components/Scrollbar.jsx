/** @format */

import React, { useEffect } from 'react';
import { sections } from '../data';

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
  useEffect(() => {
    handleClick();
    return () => {
      handleClick();
    };
  }, []);

  useEffect(() => {
    const scrollSpy = () => {
      const scrollTop = window.scrollY;
      console.log('scrollTop', scrollTop);

      const sections = document.querySelectorAll('section');
      const navigation = document.querySelector('.navigation');
      const reset = () => {
        for (let i = 0; i < navigation.children.length; i++) {
          navigation.children[i].classList.remove('selected');
        }
      };
      const windowHeight = window.innerHeight;

      sections.forEach((section, index) => {
        console.log('section', section.offsetTop);
        if (
          section.offsetTop < scrollTop + windowHeight / 2 &&
          scrollTop < section.offsetTop + windowHeight / 2
        ) {
          reset();
          navigation.children[index].classList.add('selected');
        }
      });
    };

    const scroll = () => {
      const scrollT = window.scrollY;
      console.log('page', window);

      window.scrollTo({ top: scrollT, behavior: 'smooth' });
    };

    window.addEventListener('scroll', scrollSpy);
    // window.addEventListener('scroll', scroll);
    window.addEventListener('click', handleClick);
    return () => {
      // window.removeEventListener('scroll', scroll);
      window.removeEventListener('scroll', scrollSpy);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <ul className='scrollbar-container navigation '>
      <li className='scrollbar-item selected'></li>
      {sections.map(index => (
        <li key={index} className='scrollbar-item '></li>
      ))}
    </ul>
  );
};

export default Scrollbar;
