/** @format */

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { about } from '../data';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { motion, useAnimation } from 'framer-motion';

const Hero = () => {
  const { ref, inView } = useInView();
  const [showScrollDownIcon, setShowScrollDownIcon] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;
      const isScrollingUp = yPos === 0;
      setShowScrollDownIcon(isScrollingUp);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showScrollDownIcon]);

  return (
    <section className='hero-container' id='home' ref={ref}>
      <div>
        <h4 className='hero-head'>Hi, my name is</h4>
      </div>
      <div>
        <h1 className='hero-title'>Harry Chen</h1>
      </div>
      <div>
        <h2 className='hero-subtitle'>
          Or you can just call me&nbsp;
          <a className='dark:text-main/90 tracking-normal text-primary-blue/90'>Hao</a>.
        </h2>
      </div>
      <div>
        <h4 className='hero-description'>{about.description1}</h4>
      </div>
      <div>
        <a>
          <span typeof='button' className='btn btn--outline hero-resume px-10 rounded-sm'>
            View my resume
          </span>
        </a>
      </div>
      <motion.div
        className='justify-center items-center absolute flex flex-col top-[90%] dark:text-primary-white/70 text-gray-500'
        variants={scrollIconVariants}
        initial='hidden'
        animate={showScrollDownIcon ? 'show' : 'hidden'}>
        <BsChevronDoubleDown size={35} className='mx-auto mb-2 dark:text-main text-primary-blue' />
      </motion.div>
    </section>
  );
};

const scrollIconVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: [0.3, 0.5],
    y: [5, -5],
    transition: {
      repeat: Infinity,
      duration: 1,
      ease: 'easeInOut',
      repeatType: 'reverse',
    },
  },
};

export default Hero;
