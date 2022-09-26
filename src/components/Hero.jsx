/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import useAnimate from 'src/hooks/useAnimate';
import { useTranslation } from 'next-i18next';

const Hero = () => {
  const { t } = useTranslation('hero');
  const { ref, animation } = useAnimate(
    {
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 2,
      },
    },
    { opacity: 0 }
  );

  return (
    <motion.section
      className='hero-container'
      id='home'
      key='hero'
      animate={animation}>
      <div>
        <h4 className='hero-head'>{t('Hero_head')}</h4>
      </div>
      <div>
        <h1 className='hero-title'>{t('Hero_title')}</h1>
      </div>
      <div ref={ref}>
        <h2 className='hero-subtitle'>
          {t('Hero_subtitle')}&nbsp;
          <a className='tracking-normal dark:text-main/90 text-primary-blue/90'>
            {t('Hero_nickname')}
          </a>
        </h2>
      </div>
      <div>
        <h4 className='hero-description'>{t('Hero_description')}</h4>
      </div>
      <div>
        <Link scroll={false} href={`/Harry Chen's Resume.pdf`} locale='en'>
          <a rel='noopener noreferrer' target='_blank'>
            <span
              typeof='button'
              className='px-10 rounded-sm btn btn--outline hero-resume'>
              {t('Hero_resume')}
            </span>
          </a>
        </Link>
      </div>
    </motion.section>
  );
};

export default Hero;
