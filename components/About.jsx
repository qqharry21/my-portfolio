/** @format */

import Image from 'next/image';
import React, { useEffect } from 'react';
import { about } from '../data';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';

const About = () => {
  const { ref, inView } = useInView();
  const isMobile = useMediaQuery({ query: '(max-width: 550px)' });
  const animation = useAnimation();

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
    <motion.section
      className='section-container px-20 laptop:px-4 '
      id='about'
      ref={ref}
      animate={animation}>
      <motion.h2 className='section-heading' animate={animation}>
        About me
      </motion.h2>
      <div className='about-content'>
        <div className='about-left'>
          <p className='mb-4'>{about.description2}</p>

          <ul className='skill-list'>
            {about.skills.map((skill, index) => (
              <li key={index} className='skill-item'>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <motion.div className='about-right' animate={animation}>
          <div className='about-wrapper group'>
            <Image
              src='/hero.png'
              width={isMobile ? 210 : 280}
              height={isMobile ? 270 : 360}
              alt='Photo'
              className=' dark:bg-main bg-primary-blue dark:group-hover:bg-primary-white group-hover:bg-gray-500 transition-colors duration-200 ease-in-out'
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
