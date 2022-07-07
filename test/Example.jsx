/** @format */

import * as React from 'react';
import { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from '../../utils/hooks/useDimensions';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Example = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
      className='absolute top-0 left-0 bottom-0 z-50'>
      <motion.div
        className='absolute top-0 left-0 bottom-0 bg-primary-gray w-[300px] z-40
      '
        variants={sidebar}
      />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
