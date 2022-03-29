/** @format */

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { about } from '../data';
import { motion, useAnimation } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Hero = () => {
  const { ref, inView } = useInView();
  const router = useRouter();
  const [showScrollDownIcon, setShowScrollDownIcon] = useState(true);
  const animation = useAnimation();
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

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 2,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <motion.section className='hero-container' id='home' key='hero' animate={animation}>
      <div>
        <h4 className='hero-head'>Hi, my name is</h4>
      </div>
      <div>
        <h1 className='hero-title'>Harry Chen</h1>
      </div>
      <div ref={ref}>
        <h2 className='hero-subtitle'>
          Or you can just call me&nbsp;
          <a className='dark:text-main/90 tracking-normal text-primary-blue/90'>Hao</a>.
        </h2>
      </div>
      <div>
        <h4 className='hero-description'>{about.description1}</h4>
      </div>
      <div>
        <Link scroll={false} href='/resume.pdf'>
          <a rel='noopener noreferrer' target='_blank'>
            <span
              typeof='button'
              className='btn btn--outline hero-resume px-10 rounded-sm'
              // onClick={() => router.push('/test')}
            >
              View my resume
            </span>
          </a>
        </Link>
      </div>
    </motion.section>
  );
};

export default Hero;
