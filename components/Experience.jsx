/** @format */

import React, { useState, useEffect } from 'react';
import { experiences } from '../data';
import { AnimatePresence, AnimateSharedLayout, motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeExperience, setActiveExperience] = useState(experiences[0]);
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        translateX: 0,
        transition: {
          duration: 1,
          ease: 'easeInOut',
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0 });
    }
  }, [inView]);

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
    setActiveExperience(experiences[activeTab]);
  }, [activeTab]);

  return (
    <motion.section
      className='section-container px-32 laptop:px-4'
      id='experience'
      ref={ref}
      animate={animation}>
      <h2 className='section-heading'>My Experience</h2>
      <div className='experience-content'>
        <AnimateSharedLayout>
          <motion.div className='tab-list'>
            {experiences.map((item, index) => (
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
                <span>{item.company}</span>
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
                <span>{activeExperience.title}</span>
                <motion.span className='text-primary-blue/50 dark:text-main/50'>
                  &nbsp;➤&nbsp;
                </motion.span>
                <Link href='https://matic.com'>
                  <a className='company-name'>{activeExperience.company}</a>
                </Link>
              </h3>
              <p className='company-work-time'>{activeExperience.during}</p>

              <motion.ul>
                {activeExperience.descriptions.map((description, index) => (
                  <motion.li className='experience-description' key={index}>
                    {description}
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
