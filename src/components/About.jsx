/** @format */

import React from 'react';
import { ABOUT } from 'data';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import useAnimate from 'src/hooks/useAnimate';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

const About = () => {
  const { t } = useTranslation('about');
  const isMobile = useMediaQuery({ query: '(max-width: 425px)' });
  const { ref, animation } = useAnimate(
    {
      opacity: 1,
      translateX: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
    { opacity: 0 }
  );

  return (
    <motion.section
      className='px-12 section-container laptop:px-4 '
      id='about'
      key='about'
      animate={animation}>
      <motion.h2 className='section-heading'>{t('About_heading')}</motion.h2>
      <div ref={ref}>
        <motion.div className='about-left'>
          <motion.div className='float-right laptop:float-none about-right'>
            <motion.div
              className={`about-wrapper m-4 group after:shadow-xl`}
              animate={{ rotate: [2, -2] }}
              transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}>
              <Image
                className='rounded-md'
                src='/me.jpg'
                alt='Me'
                width={isMobile ? 200 : 400}
                height={isMobile ? 200 : 400}
              />
            </motion.div>
          </motion.div>
          <p className='mb-4 whitespace-pre-line transition-all'>
            {t('About_description')}
          </p>
          <h3 className='laptop:text-center text-primary-blue dark:text-main'>
            {t('About_skills')}
          </h3>
          <ul className='skill-list'>
            {ABOUT.skills.map((skill, index) => (
              <li key={`skill-${index}`} className='skill-item'>
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
