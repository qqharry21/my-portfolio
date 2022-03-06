/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ExperiencePanel = ({ children, activeTab }) => {
  console.log('children', children);

  return (
    <motion.div
      className='experience-wrapper'
      transition={{ tension: 190, friction: 70, mass: 0.4 }}
      initial={false}
      animate={{ x: activeTab * -100 + '%' }}>
      {React.Children.map(children, (child, i) => {
        console.log('child', child);

        return (
          <motion.div
            className={`experience-panel ${activeTab !== i && 'hidden'}`}
            key={i}
            aria-hidden={activeTab !== i}
            tabIndex={activeTab === i ? 0 : -1}>
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ExperiencePanel;
