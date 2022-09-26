/** @format */

import React, { useState, useEffect } from 'react';
import { EXPERIENCES } from 'data';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import Link from 'next/link';
import useAnimate from 'src/hooks/useAnimate';
import { useTranslation } from 'next-i18next';

const Experience = () => {
  const { t } = useTranslation('experience');
  const [activeTab, setActiveTab] = useState(0);
  const [activeExperience, setActiveExperience] = useState(EXPERIENCES[0]);
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

  const toggleTab = index => {
    const tabs = document.querySelectorAll('.experience-tab');
    tabs[activeTab].classList.remove('active-tab');
    tabs[index].classList.add('active-tab');

    setActiveTab(index);
  };

  useEffect(() => {
    const tabs = document.querySelectorAll('.experience-tab');
    tabs[activeTab].classList.add('active-tab');
  }, []);

  useEffect(() => {
    setActiveExperience(EXPERIENCES[activeTab]);
  }, [activeTab]);

  return (
    <motion.section
      className='px-32 section-container laptop:px-4'
      id='experience'
      ref={ref}
      animate={animation}>
      <h2 className='section-heading'>{t('Experience_heading')}</h2>
      <div className='experience-content'>
        <AnimateSharedLayout>
          <motion.div className='tab-list'>
            {EXPERIENCES.map((item, index) => (
              <motion.button
                className='experience-tab'
                id={`tab-${index}`}
                key={index}
                tabIndex={index}
                onClick={() => {
                  toggleTab(index);
                }}>
                {index === activeTab ? (
                  <AnimatePresence>
                    <motion.div
                      className='slider-tab'
                      key='slider-tab'
                      layoutId='slider-tab'
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                  </AnimatePresence>
                ) : null}
                <span>{t(item.company)}</span>
              </motion.button>
            ))}
          </motion.div>
        </AnimateSharedLayout>
        <motion.div className='experience-wrapper'>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              className='experience-panel'
              id={`${activeExperience.company}`}
              variants={panelVariants}
              initial='hidden'
              animate='show'
              exit='exit'
              key={activeExperience.company}>
              <h3 className='experience-panel-heading'>
                <span>{t(activeExperience.position)}</span>
                <motion.span className='mx-2 text-primary-blue/50 dark:text-main/50'>
                  ➤
                </motion.span>
                <Link href={activeExperience.link}>
                  <a
                    className='leading-8 company-name'
                    rel='noopener noreferrer'
                    target='_blank'>
                    {t(activeExperience.company)}
                  </a>
                </Link>
              </h3>
              <p className='company-work-time'>{t(activeExperience.during)}</p>

              <motion.ul>
                {activeExperience.descriptions.map((description, index) => (
                  <motion.li className='experience-description' key={index}>
                    {t(description)}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};

const panelVariants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

export default Experience;
