/** @format */

import React, { useState, useEffect } from 'react';
import { experiences } from '../data';
import { motion, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
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
    tabs[index].classList.add('active-tab');

    tabs[activeTab].classList.remove('active-tab');
    setActiveTab(index);
  };

  useEffect(() => {
    setActiveTab(activeTab);
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
                <motion.div
                  className='slider-tab'
                  key={index}
                  layoutId='slider-tab'
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
              ) : null}
              <span>{item.company}</span>
            </motion.button>
          ))}
        </motion.div>
        <motion.div className='experience-wrapper'>
          <motion.div
            className='experience-panel'
            id={`${activeExperience.company}`}
            variants={wrapperVariants}
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
        </motion.div>
      </div>
    </motion.section>
  );
};

const wrapperVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

export default Experience;
