/** @format */

import React, { useState, useEffect } from 'react';
import { experiences } from '../data';
import { motion, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const iconVariants = {
  hidden: {
    opacity: 0.5,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 3,
      ease: 'easeInOut',
      // repeat: Infinity,
    },
  },
  exit: {
    opacity: 0.5,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const panelVariants = {
  hidden: {
    opacity: 0,
    translateX: '50vw',
  },
  show: {
    opacity: 1,
    translateX: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

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
      animation.start({ opacity: 0, translateX: '50vw' });
    }
  }, [inView]);

  const toggleTab = index => {
    const tabs = document.querySelectorAll('.experience-tab');
    tabs[activeTab].classList.remove('active-tab');
    tabs[index].classList.add('active-tab');
    setActiveTab(index);
    setActiveExperience(experiences[index]);
  };

  useEffect(() => {
    toggleTab(activeTab);
  }, []);

  return (
    <motion.section className='section-container px-32 laptop:px-4' id='experience'>
      <h2 className='section-heading'>My Experience</h2>
      <div className='experience-content'>
        <div className='tab-list'>
          {experiences.map((item, index) => (
            <button
              className='experience-tab'
              id={`tab-${index}`}
              key={index}
              tabIndex={index}
              onClick={() => {
                toggleTab(index);
              }}>
              <span>{item.company}</span>
            </button>
          ))}
        </div>
        <motion.div className='experience-wrapper' ref={ref} animate={animation}>
          <motion.div
            className='experience-panel'
            id={`experience-panel-${activeTab}`}
            variants={panelVariants}
            initial='hidden'
            animate='show'
            exit='exit'>
            <h3 className='experience-panel-heading'>
              <span>{activeExperience.title}</span>
              <motion.span
                className='text-primary-blue/50 dark:text-main/50'
                variants={iconVariants}
                initial='hidden'
                animate='show'>
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

export default Experience;
